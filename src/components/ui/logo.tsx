"use client";

import Image from "next/image";

/**
 * Poleris Digital Logo Component
 * Modern star/compass logo with glowing effect
 */

interface LogoProps {
  variant?: 'default' | 'white' | 'icon-only';
  className?: string;
  priority?: boolean;
}

export function Logo({ variant = 'default', className = '', priority = false }: LogoProps) {
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
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* Star Icon */}
      <div className="relative w-12 h-12">
        {/* Light mode star (blue) */}
        <Image
          src="/star-logo-dark.svg"
          alt="Poleris Star"
          width={48}
          height={48}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="transition-transform duration-300 hover:scale-110 dark:hidden absolute inset-0"
        />
        {/* Dark mode star (white) */}
        <Image
          src="/star-logo.svg"
          alt="Poleris Star"
          width={48}
          height={48}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="transition-transform duration-300 hover:scale-110 hidden dark:block absolute inset-0"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter text-[#001f3f] dark:text-white transition-colors duration-300"
          style={{ letterSpacing: '-0.02em' }}
        >
          POLERIS
        </span>
        <span
          className="font-semibold text-[0.65rem] md:text-xs uppercase tracking-[0.2em] mt-0.5 text-[#001f3f]/60 dark:text-white/70 transition-colors duration-300"
        >
          DIGITAL
        </span>
      </div>
    </div>
  );
}
