'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Navigation Loader Component
 * Shows a full-screen loading overlay during navigation
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
        }, 1200);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/95 via-gray-950/95 to-cyan-950/95 backdrop-blur-md z-[9999] flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ top: '20%', left: '10%' }} />
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }} />
      </div>

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-ping" />

          {/* Spinning loader */}
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" strokeWidth={2.5} />
        </div>

        {/* Loading text */}
        <div className="text-center space-y-2">
          <p className="text-white text-lg font-semibold">Preparing your request...</p>
          <p className="text-cyan-300/80 text-sm">Just a moment</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-progress" />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
