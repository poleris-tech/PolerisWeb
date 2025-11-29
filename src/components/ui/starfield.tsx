"use client";

import { useEffect, useState, useMemo, memo, HTMLAttributes } from "react";

/**
 * Starfield Component
 * Animated stars visible only in dark mode
 * Fully supports className, style, and all native div props
 */

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

// Extend HTMLAttributes<HTMLDivElement> to inherit className, style, etc.
interface StarfieldProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  position?: "fixed" | "absolute";
}

// Memoized single star
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
      willChange: "opacity",
    }}
  />
));
StarRenderer.displayName = "StarRenderer";

// Main component
export const Starfield = memo(function Starfield({
  count = 100,
  position = "fixed",
  className = "",
  ...rest // captures style, onClick, etc.
}: StarfieldProps) {
  const [stars, setStars] = useState<Star[]>([]);

  const generatedStars = useMemo(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1–3px
        duration: Math.random() * 3 + 2, // 2–5s
        delay: Math.random() * 5,
      });
    }
    return newStars;
  }, [count]);

  useEffect(() => {
    setStars(generatedStars);
  }, [generatedStars]);

  const positionClass = position === "fixed" ? "fixed" : "absolute";

  return (
    <div
      className={`
        ${positionClass} inset-0 pointer-events-none
        hidden dark:block
        ${className}
      `.trim()}
      style={{ zIndex: 5 }}
      {...rest}
    >
      {stars.map((star) => (
        <StarRenderer key={star.id} star={star} />
      ))}
    </div>
  );
});

Starfield.displayName = "Starfield";