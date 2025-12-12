"use client";

import { useState, ReactNode, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeableCardsProps {
  children: ReactNode[];
  showControls?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;           // ← Add this
  autoPlayInterval?: number;
  loop?: boolean;
  className?: string;
}

/**
 * Swipeable Cards Component
 * Mobile-first carousel using native CSS scroll-snap for butter-smooth performance
 * No complex animations - just native browser scrolling
 */

export function SwipeableCards({ children, showControls = true, showDots = true }: SwipeableCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update current index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const goToNext = () => {
    const nextIndex = Math.min(currentIndex + 1, children.length - 1);
    scrollToCard(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(prevIndex);
  };

  return (
    <div className="relative w-full pb-2">
      {/* Native scroll container with scroll-snap */}
      <div
        ref={scrollContainerRef}
        className="relative mb-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-4 px-4 sm:px-0">
          {children.map((child, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex-shrink-0 w-full snap-center snap-always"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Swipe hint (shows on first load) - only if dots are hidden */}
      {!showDots && currentIndex === 0 && (
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
      {showDots && (
        <div className="flex justify-center gap-3 mt-4" role="tablist">
          {children.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToCard(index)}
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
      )}

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
