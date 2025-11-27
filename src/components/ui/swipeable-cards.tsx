"use client";

import { useState, ReactNode } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeableCardsProps {
  children: ReactNode[];
  showControls?: boolean;
}

/**
 * Swipeable Cards Component
 * Mobile-first swipeable carousel for service cards
 */

export function SwipeableCards({ children, showControls = true }: SwipeableCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const SWIPE_CONFIDENCE_THRESHOLD = 5000;
  const SWIPE_OFFSET_THRESHOLD = 50; // Minimum swipe distance in pixels

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    setIsDragging(false);
    const swipe = swipePower(offset.x, velocity.x);

    // Check both swipe power and minimum offset for better responsiveness
    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD || offset.x < -SWIPE_OFFSET_THRESHOLD) {
      // Swipe left - next card (infinite loop)
      setCurrentIndex((currentIndex + 1) % children.length);
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD || offset.x > SWIPE_OFFSET_THRESHOLD) {
      // Swipe right - previous card (infinite loop)
      setCurrentIndex((currentIndex - 1 + children.length) % children.length);
    }
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + children.length) % children.length);
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden pb-2">
      {/* Cards container */}
      <div className="relative h-full mb-4 px-4 sm:px-0">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{
            x: `-${currentIndex * 100}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
          }}
          className="flex touch-pan-y will-change-transform"
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="min-w-full px-4 sm:px-0"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Swipe hint (shows on first load) - positioned above dots */}
      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2.5, repeat: 3 }}
          className="flex items-center justify-center gap-2 mb-3 text-sm text-cyan-500 dark:text-cyan-400 font-medium"
        >
          <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronLeft className="w-4 h-4" />
          </motion.div>
          <span>Swipe to explore</span>
          <motion.div animate={{ x: [4, -4, 4] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      )}

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-4" role="tablist">
        {children.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-10 h-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 shadow-lg shadow-cyan-500/30"
                : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
            aria-current={index === currentIndex ? "page" : undefined}
            role="tab"
            aria-selected={index === currentIndex}
          />
        ))}
      </div>

      {/* Arrow controls (optional) */}
      {showControls && (
        <>
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-700 transition-all duration-300 z-10"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {currentIndex < children.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-700 transition-all duration-300 z-10"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </>
      )}
    </div>
  );
}
