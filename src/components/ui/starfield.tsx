"use client";

import { useEffect, useState } from "react";

/**
 * Starfield Component
 * Animated stars that appear only in dark mode
 * Can be used as fixed (full page) or absolute (within sections)
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

export function Starfield({ count = 100, position = 'fixed' }: StarfieldProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = [];

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Random x position (%)
          y: Math.random() * 100, // Random y position (%)
          size: Math.random() * 2 + 1, // Random size between 1-3px
          duration: Math.random() * 3 + 2, // Random duration between 2-5s
          delay: Math.random() * 5, // Random delay between 0-5s
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, [count]);

  const positionClass = position === 'fixed' ? 'fixed' : 'absolute';

  return (
    <div className={`${positionClass} inset-0 pointer-events-none hidden dark:block`} style={{ zIndex: 5 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}
