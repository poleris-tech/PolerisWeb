"use client";

import { useState, useEffect } from "react";
import { Home, Briefcase, DollarSign, Mail, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Mobile Bottom Navigation
 * Sticky bottom navigation for mobile devices
 */

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Pricing", href: "#pricing", icon: DollarSign },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ["services", "pricing", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg border-t-2 border-gray-100 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center justify-around px-2 py-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleClick(item.href);
                    }
                  }}
                  className="flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-lg transition-all duration-300 active:scale-95"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      y: isActive ? -2 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-gray-600"
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </motion.div>
                  <span
                    className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Safe area for devices with bottom notch */}
          <div className="h-safe-area-inset-bottom bg-white" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
