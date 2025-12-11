"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Back to Top Button Component
 * Clean, minimal floating button with smooth animations
 */

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-4 sm:right-6 md:right-8 z-[9998] group"
          aria-label="Back to top"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Main button */}
          <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 text-[#4A90E2] border-2 border-[#4A90E2]/30 dark:border-[#4A90E2]/40 hover:border-[#4A90E2] dark:hover:border-[#4A90E2] shadow-lg [box-shadow:2px_2px_0px_rgba(74,144,226,0.2)] hover:[box-shadow:4px_4px_0px_#4A90E2] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">

            {/* Scroll progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
              <circle
                cx="50%"
                cy="50%"
                r="44%"
                fill="none"
                stroke="rgba(74, 144, 226, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="44%"
                fill="none"
                stroke="rgba(74, 144, 226, 0.9)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  strokeDasharray: "1 1",
                  willChange: 'stroke-dashoffset',
                }}
              />
            </svg>

            {/* Arrow icon */}
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
            Back to top
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-800"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
