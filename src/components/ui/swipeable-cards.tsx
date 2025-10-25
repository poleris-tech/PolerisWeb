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
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const SWIPE_CONFIDENCE_THRESHOLD = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    setIsDragging(false);
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD && currentIndex < children.length - 1) {
      // Swipe left - next card
      setCurrentIndex(currentIndex + 1);
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD && currentIndex > 0) {
      // Swipe right - previous card
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Cards container */}
      <div className="relative h-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{
            x: `-${currentIndex * 100}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="flex touch-pan-y"
          style={{ x }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="min-w-full px-2"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-blue-600"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to card ${index + 1}`}
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
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
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
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </>
      )}

      {/* Swipe hint (shows on first load) */}
      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: 3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-gray-500 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Swipe to explore</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      )}
    </div>
  );
}
