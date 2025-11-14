"use client";

/**
 * Falling Stars Component
 * Animated shooting stars that fall from top to bottom
 * Only visible in dark mode
 */

interface FallingStarsProps {
  count?: number;
}

export function FallingStars({ count = 12 }: FallingStarsProps) {
  // Generate stars array - same style as Starfield
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100, // Random starting Y position across entire viewport
    size: Math.random() * 2 + 1, // Random size between 1-3px (same as Starfield)
    duration: Math.random() * 3 + 4, // 4-7s for falling
    delay: Math.random() * 8, // 0-8s
  }));

  return (
    <div
      className="hidden dark:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '200vh', // Extended height to cover scrolling
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
            animation: `falling-star ${star.duration}s linear ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
