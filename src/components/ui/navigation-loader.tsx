'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navigation Loader Component
 * Shows a professional loading overlay during navigation
 */

export function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for clicks on links with query parameters
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href.includes('?subject=')) {
        setIsLoading(true);

        // Hide loader after navigation completes
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-gradient-to-br from-[#0a0d1a]/98 via-[#0f1629]/98 to-[#1d274e]/98 backdrop-blur-sm z-[9999] flex items-center justify-center"
        >
          {/* Subtle background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 bg-cerulean-blue-500/10 rounded-full blur-3xl"
              style={{ top: '30%', left: '20%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Loader content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Spinner container */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cerulean-blue-400/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Main spinner */}
              <motion.div
                className="relative w-16 h-16 rounded-full border-3 border-transparent border-t-cerulean-blue-400 border-r-cerulean-blue-400"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner glow circle */}
              <motion.div
                className="absolute inset-3 rounded-full bg-cerulean-blue-500/20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Loading text */}
            <div className="text-center">
              <p className="text-cerulean-blue-200 text-sm font-medium tracking-wide">
                Loading
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
