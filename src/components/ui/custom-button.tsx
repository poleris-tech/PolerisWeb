import Link from "next/link";
import { ReactNode } from "react";

/**
 * Custom Button Component
 * Oak Harbor inspired buttons with enhanced space-themed hover effects
 */

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "comic" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
}

export function CustomButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  const baseStyles =
    "cs-button-solid relative inline-flex items-center justify-center font-semibold uppercase tracking-wider text-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cerulean-blue-400 group";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FDF4E3] to-[#FDF2DB] text-slate-900 hover:from-[#E6D9CC] hover:to-[#FDF4E3] shadow-lg shadow-[#FDF4E3]/25 hover:shadow-[#FDF4E3]/40 hover:scale-105 hover:-translate-y-1 group-hover:animate-pulse transition-all duration-300",
    secondary:
      "bg-gradient-to-r from-cerulean-blue-400 to-cerulean-blue-500 text-cerulean-blue-950 hover:from-cerulean-blue-300 hover:to-cerulean-blue-400 shadow-lg shadow-cerulean-blue-400/30 hover:shadow-cerulean-blue-400/50 hover:scale-105",
    outline:
      "!bg-transparent border-2 border-[#FDF4E3]/60 !text-white hover:border-[#FDF4E3]/80 hover:!bg-transparent hover:!text-[#252A34] backdrop-blur-xl hover:backdrop-blur-2xl hover:shadow-[0_4px_12px_rgba(253,244,227,0.15)] hover:scale-105",
    comic:
      "bg-[#4A90E2] text-white border-2 border-[#3B82F6] dark:border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] active:bg-[#2563EB] active:shadow-none active:translate-y-1 transition-all duration-300 shadow-lg shadow-[#4A90E2]/30 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5",
    orange:
      "bg-[#FDF4E3]/40 text-white border-2 border-[#FDF2DB]/35 hover:bg-[#FDF4E3]/55 hover:border-[#FDF2DB]/50 hover:shadow-[0_4px_12px_rgba(253,244,227,0.15)] transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg",
  };

  const sizeStyles = {
    sm: "px-4 sm:px-5 md:px-6 text-xs sm:text-sm leading-[2rem] sm:leading-[2.25rem] rounded-lg",
    md: "px-6 sm:px-8 md:px-10 text-sm sm:text-base leading-[2.5rem] sm:leading-[2.75rem] md:leading-[3rem] rounded-lg",
    lg: "px-6 sm:px-8 md:px-12 text-base md:text-lg leading-[2.75rem] sm:leading-[3rem] md:leading-[3.75rem] rounded-xl",
  };

  const comicShadow = variant === "comic" ? "[box-shadow:3px_3px_0px_#3B82F6] sm:[box-shadow:4px_4px_0px_#3B82F6] md:[box-shadow:5px_5px_0px_#3B82F6] hover:[box-shadow:3px_3px_0px_#2563EB] hover:sm:[box-shadow:4px_4px_0px_#2563EB] hover:md:[box-shadow:5px_5px_0px_#2563EB]" : "";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${fullWidth ? "w-full" : "min-w-[8rem] sm:min-w-[10rem] md:min-w-[12rem]"} ${comicShadow} ${className}`;

  // Define pulse animation for primary variant
  const styleTag = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.9; }
    }
    .animate-pulse {
      animation: pulse 1.5s ease-in-out infinite;
    }
  `;

  if (href) {
    return (
      <>
        <style>{styleTag}</style>
        <Link
          href={href}
          className={combinedClassName}
          onClick={onClick}
          aria-label={typeof children === "string" ? children : undefined}
        >
          <span className="flex items-center justify-center gap-2">{children}</span>
        </Link>
      </>
    );
  }

  return (
    <>
      <style>{styleTag}</style>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        aria-label={typeof children === "string" ? children : undefined}
      >
        <span className="flex items-center justify-center gap-2">
          {children}
          {icon && icon}
        </span>
      </button>
    </>
  );
}