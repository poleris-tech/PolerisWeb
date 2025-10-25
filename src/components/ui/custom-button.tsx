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
  variant?: "primary" | "secondary" | "outline";
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
    "cs-button-solid relative inline-flex items-center justify-center font-semibold uppercase tracking-wider text-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 group";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group-hover:animate-pulse",
    secondary:
      "bg-gradient-to-r from-cyan-400 to-blue-400 text-[#001f3f] hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 hover:scale-105",
    outline:
      "bg-transparent border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-md hover:backdrop-blur-lg hover:shadow-white/30 hover:scale-105",
  };

  const sizeStyles = {
    sm: "px-6 text-sm leading-[2.25rem] rounded-lg",
    md: "px-8 md:px-10 text-base leading-[2.75rem] md:leading-[3rem] rounded-lg",
    lg: "px-8 md:px-12 text-base md:text-lg leading-[3rem] md:leading-[3.75rem] rounded-xl",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${fullWidth ? "w-full" : "min-w-[12rem]"} ${className}`;

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