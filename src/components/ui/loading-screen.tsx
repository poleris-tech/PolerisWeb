"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loading Screen Component
 * Rocket ship animation with speed lines and clouds
 */

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Skip loading screen entirely for returning visitors
      setIsVisible(false);
      setIsLoading(false);
      return;
    }

    // Show loading screen for first-time visitors
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 2500); // 2.5 seconds - quick but enough to see the animation

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0a0d1a] via-[#0f1629] to-[#1d274e] overflow-hidden"
        >
          {/* Clouds */}
          <div className="clouds">
            <div className="cloud cloud1" />
            <div className="cloud cloud2" />
            <div className="cloud cloud3" />
            <div className="cloud cloud4" />
            <div className="cloud cloud5" />
          </div>

          {/* Rocket Loader */}
          <div className="loader">
            {/* Exhaust flames */}
            <span>
              <span />
              <span />
              <span />
              <span />
            </span>

            {/* Rocket body */}
            <div className="base">
              <span />
              <div className="face" />
            </div>
          </div>

          {/* Speed lines */}
          <div className="longfazers">
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-cerulean-blue-300 text-sm font-light tracking-wider"
          >
            Loading...
          </motion.div>

          {/* CSS for animations */}
          <style jsx>{`
            .loader {
              position: absolute;
              top: 50%;
              left: 50%;
              margin-left: -50px;
              animation: speeder 0.4s linear infinite;
            }

            /* Exhaust top part */
            .loader > span {
              height: 5px;
              width: 35px;
              background: #4e85e3; /* cerulean-blue-500 */
              position: absolute;
              top: -19px;
              left: 60px;
              border-radius: 2px 10px 1px 0;
            }

            /* Rocket body */
            .base span {
              position: absolute;
              width: 0;
              height: 0;
              border-top: 6px solid transparent;
              border-right: 100px solid #9ec5f2; /* cerulean-blue-300 */
              border-bottom: 6px solid transparent;
            }

            .base span:before {
              content: "";
              height: 22px;
              width: 22px;
              border-radius: 50%;
              background: #9ec5f2; /* cerulean-blue-300 */
              position: absolute;
              right: -110px;
              top: -16px;
            }

            .base span:after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-top: 0 solid transparent;
              border-right: 55px solid #9ec5f2; /* cerulean-blue-300 */
              border-bottom: 16px solid transparent;
              top: -16px;
              right: -98px;
            }

            /* Rocket window */
            .face {
              position: absolute;
              height: 12px;
              width: 20px;
              background: #9ec5f2; /* cerulean-blue-300 */
              border-radius: 20px 20px 0 0;
              transform: rotate(-40deg);
              right: -125px;
              top: -15px;
            }

            .face:after {
              content: "";
              height: 12px;
              width: 12px;
              background: #4e85e3; /* cerulean-blue-500 */
              right: 4px;
              top: 7px;
              position: absolute;
              transform: rotate(40deg);
              transform-origin: 50% 50%;
              border-radius: 0 0 2px 2px;
            }

            /* Exhaust flames */
            .loader > span > span {
              width: 30px;
              height: 1px;
              background: #70a6ea; /* cerulean-blue-400 */
              position: absolute;
            }

            .loader > span > span:nth-child(1) {
              animation: fazer1 0.2s linear infinite;
            }

            .loader > span > span:nth-child(2) {
              top: 3px;
              animation: fazer2 0.4s linear infinite;
            }

            .loader > span > span:nth-child(3) {
              top: 1px;
              animation: fazer3 0.4s linear infinite;
              animation-delay: -1s;
            }

            .loader > span > span:nth-child(4) {
              top: 4px;
              animation: fazer4 1s linear infinite;
              animation-delay: -1s;
            }

            /* Exhaust flame animations */
            @keyframes fazer1 {
              0% {
                left: 0;
              }
              100% {
                left: -80px;
                opacity: 0;
              }
            }

            @keyframes fazer2 {
              0% {
                left: 0;
              }
              100% {
                left: -100px;
                opacity: 0;
              }
            }

            @keyframes fazer3 {
              0% {
                left: 0;
              }
              100% {
                left: -50px;
                opacity: 0;
              }
            }

            @keyframes fazer4 {
              0% {
                left: 0;
              }
              100% {
                left: -150px;
                opacity: 0;
              }
            }

            /* Rocket shake animation */
            @keyframes speeder {
              0% {
                transform: translate(2px, 1px) rotate(0deg);
              }
              10% {
                transform: translate(-1px, -3px) rotate(-1deg);
              }
              20% {
                transform: translate(-2px, 0px) rotate(1deg);
              }
              30% {
                transform: translate(1px, 2px) rotate(0deg);
              }
              40% {
                transform: translate(1px, -1px) rotate(1deg);
              }
              50% {
                transform: translate(-1px, 3px) rotate(-1deg);
              }
              60% {
                transform: translate(-1px, 1px) rotate(0deg);
              }
              70% {
                transform: translate(3px, 1px) rotate(-1deg);
              }
              80% {
                transform: translate(-2px, -1px) rotate(1deg);
              }
              90% {
                transform: translate(2px, 1px) rotate(0deg);
              }
              100% {
                transform: translate(1px, -2px) rotate(-1deg);
              }
            }

            /* Speed lines */
            .longfazers {
              position: absolute;
              width: 100%;
              height: 100%;
            }

            .longfazers span {
              position: absolute;
              height: 2px;
              width: 20%;
              background: rgba(112, 166, 234, 0.3); /* cerulean-blue-400 with opacity */
            }

            .longfazers span:nth-child(1) {
              top: 20%;
              animation: lf 0.6s linear infinite;
              animation-delay: -5s;
            }

            .longfazers span:nth-child(2) {
              top: 40%;
              animation: lf2 0.8s linear infinite;
              animation-delay: -1s;
            }

            .longfazers span:nth-child(3) {
              top: 60%;
              animation: lf3 0.6s linear infinite;
            }

            .longfazers span:nth-child(4) {
              top: 80%;
              animation: lf4 0.5s linear infinite;
              animation-delay: -3s;
            }

            @keyframes lf {
              0% {
                left: 200%;
              }
              100% {
                left: -200%;
                opacity: 0;
              }
            }

            @keyframes lf2 {
              0% {
                left: 200%;
              }
              100% {
                left: -200%;
                opacity: 0;
              }
            }

            @keyframes lf3 {
              0% {
                left: 200%;
              }
              100% {
                left: -100%;
                opacity: 0;
              }
            }

            @keyframes lf4 {
              0% {
                left: 200%;
              }
              100% {
                left: -100%;
                opacity: 0;
              }
            }

            /* Clouds */
            .clouds {
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: -1;
              overflow: hidden;
            }

            .cloud {
              position: absolute;
              background: rgba(158, 197, 242, 0.15); /* cerulean-blue-300 with low opacity */
              border-radius: 50%;
              animation: moveClouds linear infinite;
            }

            .cloud::before,
            .cloud::after {
              content: "";
              position: absolute;
              background: rgba(158, 197, 242, 0.15);
              border-radius: 50%;
            }

            .cloud::before {
              width: 60%;
              height: 60%;
              top: -30%;
              left: 10%;
            }

            .cloud::after {
              width: 40%;
              height: 40%;
              top: -20%;
              left: 50%;
            }

            .cloud1 {
              width: 100px;
              height: 60px;
              top: 15%;
              left: 1400px;
              animation-duration: 8s;
            }

            .cloud2 {
              width: 150px;
              height: 80px;
              top: 35%;
              left: 1600px;
              animation-duration: 10s;
            }

            .cloud3 {
              width: 80px;
              height: 50px;
              top: 20%;
              left: 2000px;
              animation-duration: 12s;
            }

            .cloud4 {
              width: 100px;
              height: 80px;
              top: 70%;
              left: 1100px;
              animation-duration: 9s;
            }

            .cloud5 {
              width: 170px;
              height: 50px;
              top: 80%;
              left: 1500px;
              animation-duration: 7s;
            }

            @keyframes moveClouds {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-2000px);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
