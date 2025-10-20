"use client";

import Image from "next/image";

/**
 * Poleris Digital Logo Component
 * Modern star/compass logo with glowing effect
 */

interface LogoProps {
  variant?: 'default' | 'white' | 'icon-only';
  className?: string;
}

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  // Use dark version (blue star) for light backgrounds, white version for dark backgrounds
  const starSrc = isWhite ? '/star-logo.svg' : '/star-logo-dark.svg';

  if (variant === 'icon-only') {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={starSrc}
          alt="Poleris Star"
          width={48}
          height={48}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* Star Icon */}
      <div className="relative">
        <Image
          src={starSrc}
          alt="Poleris Star"
          width={48}
          height={48}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter bg-gradient-to-r bg-clip-text"
          style={{
            color: isWhite ? '#fff' : '#001f3f',
            letterSpacing: '-0.02em'
          }}
        >
          POLERIS
        </span>
        <span
          className="font-semibold text-[0.65rem] md:text-xs uppercase tracking-[0.2em] mt-0.5"
          style={{ color: isWhite ? 'rgba(255,255,255,0.7)' : 'rgba(0,31,63,0.6)' }}
        >
          DIGITAL
        </span>
      </div>
    </div>
  );
}
