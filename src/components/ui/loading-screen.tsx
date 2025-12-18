"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loading Screen Component
 * Professional skeleton loader design
 */

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Skip loading screen entirely for returning visitors
      setIsVisible(false);
      setIsLoading(false);
      return;
    }

    // Show loading screen for first-time visitors
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 1500); // 1.5 seconds - quick and professional

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0a0d1a] via-[#0f1629] to-[#1d274e] overflow-hidden"
        >
          {/* Skeleton Loader */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex w-80 gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-cerulean-blue-400/20"
          >
            {/* Avatar skeleton */}
            <motion.div
              className="h-14 w-14 rounded-full bg-cerulean-blue-400/30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Content skeleton */}
            <div className="flex-1 space-y-3">
              {/* Title bar */}
              <motion.div
                className="h-5 w-3/5 rounded-lg bg-cerulean-blue-400/30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
              {/* Description bar */}
              <motion.div
                className="h-5 w-[90%] rounded-lg bg-cerulean-blue-400/30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
            </div>

            {/* Status indicator */}
            <motion.div
              className="absolute bottom-6 right-6 h-4 w-4 rounded-full bg-cerulean-blue-400/40"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
