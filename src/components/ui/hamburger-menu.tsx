"use client";

import { motion } from "framer-motion";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Animated Hamburger Menu Icon
 * Transforms between hamburger and X with smooth animation
 */

export function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#001f3f] dark:bg-gray-800 hover:bg-[#00bfff] dark:hover:bg-cyan-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        {/* Top line */}
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-0.5 bg-white origin-center"
        />

        {/* Middle line */}
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-0.5 bg-white"
        />

        {/* Bottom line */}
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-0.5 bg-white origin-center"
        />
      </div>
    </button>
  );
}
