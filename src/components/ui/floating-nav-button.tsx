"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid3x3, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating Navigation Button
 * Shows "Back to Services" and "Scroll to Top" buttons when scrolling
 */
export function FloatingNavButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* Back to Services Button */}
          <Link
            href="/#services"
            className="group flex items-center gap-2 px-4 py-3 bg-[#4A90E2] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#3B82F6] transition-all duration-300 hover:scale-105"
          >
            <Grid3x3 className="h-5 w-5" />
            <span className="font-semibold hidden sm:inline">All Services</span>
          </Link>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center h-12 w-12 bg-white dark:bg-gray-900 text-[#4A90E2] rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
