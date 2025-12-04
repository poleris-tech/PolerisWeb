"use client";

import React from 'react';
import Link from 'next/link';

/**
 * Get Started Button Component
 * Icon expanding button with smooth hover animations
 * Uses cyan accent color (#1AE4E1)
 */

interface GetStartedButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function LearnMoreButton({
  text = "Get Started",
  onClick,
  href,
  className = ""
}: GetStartedButtonProps) {
  const containerClass = "get-started-btn relative inline-flex items-center justify-center font-medium cursor-pointer outline-none border-none overflow-hidden";

  const content = (
    <>
      <style jsx>{`
        .get-started-btn {
          background: #1AE4E1;
          color: white;
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: 17px;
          font-weight: 500;
          border-radius: 0.9em;
          display: flex;
          align-items: center;
          box-shadow: inset 0 0 1.6em -0.6em #08D9D6;
          height: 2.8em;
          padding-right: 3.3em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .get-started-btn .text {
          display: flex;
          align-items: center;
          gap: 0.5em;
          z-index: 1;
          position: relative;
        }

        .get-started-btn .icon {
          background: white;
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
          box-shadow: 0.1em 0.1em 0.6em 0.2em #08D9D6;
          right: 0.3em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .get-started-btn:hover .icon {
          width: calc(100% - 0.6em);
          background: #f0f0f0;
        }

        .get-started-btn .icon svg {
          width: 1.1em;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #1AE4E1;
        }

        .get-started-btn:hover .icon svg {
          transform: translateX(0.1em);
        }

        .get-started-btn:active .icon {
          transform: scale(0.95);
        }

        .get-started-btn:hover {
          box-shadow: inset 0 0 1.6em -0.6em #08D9D6, 0 4px 12px rgba(26, 228, 225, 0.4);
        }
      `}</style>

      <span className="text">{text}</span>
      <div className="icon">
        <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
        </svg>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${containerClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${containerClass} ${className}`}>
      {content}
    </button>
  );
}

export default LearnMoreButton;
