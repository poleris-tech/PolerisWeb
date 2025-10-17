import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Section Heading Component
 * Consistent heading styles for sections
 */

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-4 mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
