"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "@/components/ui/logo";
import { CustomButton } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";

/**
 * Navigation Component
 * Sleek navigation bar inspired by modern web design
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
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
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300"
      style={{
        top: scrolled ? '0' : '16px',
        width: scrolled ? '100%' : '94%',
        maxWidth: scrolled ? '100%' : '90rem'
      }}
    >
      <nav
        className="bg-white shadow-lg transition-all duration-300 relative"
        style={{
          borderRadius: scrolled ? '0' : '24px'
        }}
      >
        <div className="h-20 md:h-24 flex items-center w-full px-6 md:px-8">
          <div className="flex items-center justify-between w-full gap-6">
              {/* Logo - Left */}
              <Link href="/" className="hover:opacity-80 transition-opacity z-[100] relative">
                <Logo variant="default" />
              </Link>

              {/* Desktop Navigation - Absolutely Centered to container */}
              <div className="hidden lg:flex items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <nav className="flex items-center gap-10">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-bold uppercase tracking-wide text-[#001f3f] hover:text-[#00bfff] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-6 z-[100] relative">
                <div className="hidden md:block">
                  <CustomButton href="#contact" variant="primary" size="md">
                    Get Started
                  </CustomButton>
                </div>
                <ThemeToggle />

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden p-3 rounded-lg bg-[#001f3f] text-white hover:bg-[#00bfff] transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold uppercase text-[#001f3f] hover:text-[#00bfff] transition-colors text-center py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <CustomButton
                  href="#contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </CustomButton>
              </div>
            </div>
          )}
        </nav>
    </header>
  );
}
