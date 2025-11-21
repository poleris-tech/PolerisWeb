"use client";

import { useEffect, useState, useMemo, memo } from "react";

/**
 * Starfield Component
 * Animated stars that appear only in dark mode
 * Can be used as fixed (full page) or absolute (within sections)
 * Optimized with memoization to prevent unnecessary re-renders
 */

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface StarfieldProps {
  count?: number;
  position?: 'fixed' | 'absolute';
}

// Memoized star renderer to prevent re-renders of individual stars
const StarRenderer = memo(({ star }: { star: Star }) => (
  <div
    className="absolute rounded-full bg-white animate-twinkle"
    style={{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      animationDuration: `${star.duration}s`,
      animationDelay: `${star.delay}s`,
      boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
      willChange: 'opacity',
    }}
  />
));

StarRenderer.displayName = 'StarRenderer';

export const Starfield = memo(function Starfield({ count = 100, position = 'fixed' }: StarfieldProps) {
  const [stars, setStars] = useState<Star[]>([]);

  // Memoize star generation to prevent recreation on every render
  const generatedStars = useMemo(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      });
    }
    return newStars;
  }, [count]);

  useEffect(() => {
    setStars(generatedStars);
  }, [generatedStars]);

  const positionClass = position === 'fixed' ? 'fixed' : 'absolute';

  return (
    <div className={`${positionClass} inset-0 pointer-events-none hidden dark:block`} style={{ zIndex: 5 }}>
      {stars.map((star) => (
        <StarRenderer key={star.id} star={star} />
      ))}
    </div>
  );
});
