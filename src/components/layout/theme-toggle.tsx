"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Theme Toggle Component
 * Allows users to switch between light and dark modes
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-colors relative text-[#001f3f] dark:text-gray-100 hover:text-[#00bfff] dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      <Sun className={`h-[1.5rem] w-[1.5rem] md:h-[1.75rem] md:w-[1.75rem] transition-all ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-[1.5rem] w-[1.5rem] md:h-[1.75rem] md:w-[1.75rem] transition-all ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
