"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Theme Toggle Component
 * Simple button to toggle between light and dark mode
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
      <button
        className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"
        aria-label="Loading theme toggle"
      />
    );
  }

  // Resolve the actual current theme (accounts for "system" preference)
  const getResolvedTheme = () => {
    if (theme === "dark") return "dark";
    if (theme === "light") return "light";
    // For "system" or undefined, check system preference
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const isDark = getResolvedTheme() === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-center justify-center group"
    >
      {/* Sun icon for light mode */}
      <Sun
        className={`w-6 h-6 text-amber-500 absolute transition-all duration-300 ${
          isDark
            ? 'opacity-0 rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />

      {/* Moon icon for dark mode */}
      <Moon
        className={`w-6 h-6 text-blue-400 absolute transition-all duration-300 ${
          isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  );
}
