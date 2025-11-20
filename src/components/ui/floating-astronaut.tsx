"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Floating Astronaut Component
 * A playful astronaut that floats around the page, following scroll
 * and hiding behind/peeking out from cards and sections
 */

export function FloatingAstronaut() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Transform scroll to astronaut position with smooth spring physics
  const yRaw = useTransform(scrollY, [0, 3000], [100, 1200]);
  const xRaw = useTransform(scrollY, [0, 1500, 3000], [0, 60, -40]);

  // Apply spring physics for smoother motion
  const y = useSpring(yRaw, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const x = useSpring(xRaw, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    // Hide astronaut on mobile for better performance
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-40 pointer-events-none"
      style={{
        y,
        x,
        right: "5%",
      }}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, 3, -3, 0],
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 1, ease: "easeOut" },
        scale: { duration: 0.8, delay: 1, ease: [0.34, 1.56, 0.64, 1] },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Astronaut SVG */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Helmet */}
        <circle cx="100" cy="80" r="45" fill="#E8F4F8" opacity="0.9" />
        <circle cx="100" cy="80" r="42" fill="#D0E8F0" opacity="0.6" />

        {/* Helmet shine */}
        <ellipse cx="85" cy="65" rx="15" ry="20" fill="white" opacity="0.4" />

        {/* Face visor */}
        <ellipse cx="100" cy="80" rx="30" ry="25" fill="#6366F1" opacity="0.3" />

        {/* Face */}
        <circle cx="95" cy="78" r="3" fill="#1F2937" />
        <circle cx="105" cy="78" r="3" fill="#1F2937" />
        <path d="M 95 88 Q 100 92 105 88" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Body */}
        <ellipse cx="100" cy="130" rx="35" ry="45" fill="white" />

        {/* Space suit details */}
        <rect x="85" y="110" width="30" height="8" rx="4" fill="#6366F1" />
        <circle cx="100" cy="140" r="8" fill="#6366F1" opacity="0.6" />
        <circle cx="100" cy="140" r="5" fill="#818CF8" />

        {/* Arms */}
        <ellipse cx="65" cy="130" rx="12" ry="30" fill="white" transform="rotate(-20 65 130)" />
        <ellipse cx="135" cy="130" rx="12" ry="30" fill="white" transform="rotate(20 135 130)" />

        {/* Gloves */}
        <circle cx="60" cy="150" r="10" fill="#6366F1" opacity="0.8" />
        <circle cx="140" cy="150" r="10" fill="#6366F1" opacity="0.8" />

        {/* Legs */}
        <rect x="85" y="165" width="12" height="25" rx="6" fill="white" />
        <rect x="103" y="165" width="12" height="25" rx="6" fill="white" />

        {/* Boots */}
        <ellipse cx="91" cy="190" rx="10" ry="8" fill="#6366F1" />
        <ellipse cx="109" cy="190" rx="10" ry="8" fill="#6366F1" />

        {/* Backpack */}
        <rect x="110" y="115" width="18" height="30" rx="4" fill="#818CF8" />
        <rect x="113" y="120" width="4" height="20" rx="2" fill="#6366F1" />
        <rect x="119" y="120" width="4" height="20" rx="2" fill="#6366F1" />
      </svg>

      {/* Floating sparkles */}
      <motion.div
        className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-8 -left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-4 right-2 w-1 h-1 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
}
