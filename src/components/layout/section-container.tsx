import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Section Container Component
 * Wrapper for consistent section spacing and layout
 */

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 w-full", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
