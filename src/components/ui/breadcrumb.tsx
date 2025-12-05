"use client";

import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Creative Breadcrumb Navigation Component
 * Animated breadcrumb with back navigation to services section
 */
export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-3 text-sm ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="ml-4 sm:ml-8 md:ml-12 lg:ml-16"
      >
        <Link
          href="/#services"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A90E2]/10 dark:bg-[#4A90E2]/20 text-[#4A90E2] dark:text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white dark:hover:bg-[#4A90E2] dark:hover:text-white transition-all group"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Services</span>
        </Link>
      </motion.div>
    </nav>
  );
}
