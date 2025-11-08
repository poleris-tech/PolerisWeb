"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "@/components/ui/logo";
import { CustomButton } from "@/components/ui/custom-button";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import { motion, AnimatePresence } from "framer-motion";

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

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      >
        <div className="h-20 md:h-24 flex items-center w-full px-6 md:px-8">
          <div className="flex items-center justify-between w-full gap-6">
              {/* Logo - Left */}
              <Link href="/" className="hover:opacity-80 transition-opacity z-[100] relative">
                <Logo variant="default" priority />
              </Link>

              {/* Desktop Navigation - Absolutely Centered to container */}
              <div className="hidden lg:flex items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <nav className="flex items-center gap-10">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="text-base font-bold uppercase tracking-wide text-[#001f3f] dark:text-gray-100 hover:text-[#00bfff] dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap relative group"
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00bfff] dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
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
                    {NAV_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base font-bold uppercase text-[#001f3f] dark:text-gray-100 hover:text-[#00bfff] dark:hover:text-cyan-400 transition-all duration-300 text-center py-2 block hover:scale-105"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
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
