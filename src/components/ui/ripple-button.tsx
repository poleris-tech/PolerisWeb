"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleProps {
  x: number;
  y: number;
  id: number;
}

/**
 * Button Ripple Effect Component
 * Adds Material Design-style ripple effect to any element
 */

export function useRipple() {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  const addRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const RippleContainer = () => (
    <span className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </AnimatePresence>
    </span>
  );

  return { addRipple, RippleContainer };
}
