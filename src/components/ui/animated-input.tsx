"use client";

import { useState, InputHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface AnimatedTextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  rows?: number;
}

/**
 * Animated Input Component
 * Enhanced input with smooth label animation and focus effects
 */

export function AnimatedInput({ label, error, className = "", ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
    props.onBlur?.(e);
  };

  const isActive = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.input
        {...props}
        onFocus={(e) => {
          handleFocus();
          props.onFocus?.(e);
        }}
        onBlur={handleBlur}
        className={`w-full px-4 pt-6 pb-2 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-transparent focus:outline-none transition-all duration-300 peer ${
          error ? "border-red-500" : isFocused ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"
        } ${className}`}
        placeholder={label}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      />

      <motion.label
        animate={{
          y: isActive ? 0 : 8,
          scale: isActive ? 0.85 : 1,
          color: error ? "#ef4444" : isFocused ? "#3b82f6" : "#6b7280",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-4 top-2 origin-left pointer-events-none font-medium"
      >
        {label}
      </motion.label>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function AnimatedTextarea({ label, error, rows = 5, className = "", ...props }: AnimatedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
    props.onBlur?.(e);
  };

  const isActive = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.textarea
        {...props}
        rows={rows}
        onFocus={(e) => {
          handleFocus();
          props.onFocus?.(e);
        }}
        onBlur={handleBlur}
        className={`w-full px-4 pt-6 pb-2 bg-gray-50 border-2 rounded-lg text-[#001f3d] placeholder-transparent focus:outline-none transition-all duration-300 resize-none ${
          error ? "border-red-500" : isFocused ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"
        } ${className}`}
        placeholder={label}
      />

      <motion.label
        animate={{
          y: isActive ? 0 : 8,
          scale: isActive ? 0.85 : 1,
          color: error ? "#ef4444" : isFocused ? "#3b82f6" : "#6b7280",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-4 top-2 origin-left pointer-events-none font-medium"
      >
        {label}
      </motion.label>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
