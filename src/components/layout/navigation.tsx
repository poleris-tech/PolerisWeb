"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "@/components/ui/logo";
import { CustomButton } from "@/components/ui/custom-button";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/constants/site-data";

/**
 * Navigation Component
 * Sleek navigation bar inspired by modern web design
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("/");
  const pathname = usePathname();

  // Check if current page is a service page
  const isServicePage = React.useMemo(() => {
    if (!pathname) return false;
    const pathSegments = pathname.split('/').filter(Boolean);
    return pathSegments.length === 1 && SERVICES.some(s => s.id === pathSegments[0]);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using scroll position
  React.useEffect(() => {
    const handleSectionTracking = () => {
      // If on a service page, always mark services as active
      if (isServicePage) {
        setActiveSection("#services");
        return;
      }

      const scrollPos = window.scrollY + 150; // Offset for navbar height

      // If at top, show home as active
      if (window.scrollY < 150) {
        setActiveSection("/");
        return;
      }

      // Find which section is currently in view
      const sections = ["services", "pricing", "about", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;

        // Check if scroll position is within section bounds
        if (scrollPos >= elementTop && scrollPos < elementBottom) {
          setActiveSection(`#${sectionId}`);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleSectionTracking);
    // Call once on mount to set initial state
    handleSectionTracking();

    return () => window.removeEventListener("scroll", handleSectionTracking);
  }, [isServicePage]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300"
      style={{
        top: scrolled ? '0' : '16px',
        width: scrolled ? '100%' : '94%',
        maxWidth: scrolled ? '100%' : '90rem'
      }}
    >
      <nav
        className="bg-white/95 dark:bg-gray-900/95 shadow-lg dark:shadow-gray-800/50 transition-all duration-500 relative backdrop-blur-md"
        style={{
          borderRadius: scrolled ? '0' : '24px'
        }}
        aria-label="Primary navigation"
      >
        <div className="h-20 md:h-24 flex items-center w-full px-6 md:px-8">
          <div className="flex items-center justify-between w-full gap-6">
              {/* Logo - Left */}
              <Link href="/" className="hover:opacity-80 transition-opacity z-[100] relative">
                <Logo variant="default" priority />
              </Link>

              {/* Desktop Navigation - Absolutely Centered to container */}
              <div className="hidden lg:flex items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <nav className="flex items-center gap-10" aria-label="Main navigation links">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          className={`text-base font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap relative px-4 py-2 rounded-lg ${
                            isActive
                              ? 'text-[#4A90E2] dark:text-cyan-400'
                              : 'text-[#001f3f] dark:text-gray-100 hover:text-white dark:hover:text-white hover:bg-[#4A90E2] dark:hover:bg-cyan-500'
                          }`}
                        >
                          {item.label}
                          {isActive && (
                            <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#3B82F6] dark:from-cyan-400 dark:to-cyan-300 rounded-full"></span>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-6 z-[100] relative">
                <div className="hidden md:block">
                  <CustomButton href="#contact" variant="comic" size="md">
                    Get Started
                  </CustomButton>
                </div>
                <ThemeToggle />

                {/* Mobile Menu Button - Animated Hamburger */}
                <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden overflow-hidden"
              >
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-4">
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = activeSection === item.href;
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base font-bold uppercase transition-all duration-300 text-center py-2 block hover:scale-105 rounded-lg ${
                              isActive
                                ? 'text-[#4A90E2] dark:text-cyan-400 bg-blue-50 dark:bg-cyan-500/10'
                                : 'text-[#001f3f] dark:text-gray-100 hover:text-[#4A90E2] dark:hover:text-cyan-400 hover:bg-blue-50/50 dark:hover:bg-cyan-500/5'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: NAV_ITEMS.length * 0.05 }}
                    >
                      <CustomButton
                        href="#contact"
                        variant="comic"
                        size="md"
                        fullWidth
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started
                      </CustomButton>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
    </motion.header>
  );
}
