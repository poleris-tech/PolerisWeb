"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Added missing import
import { PROCESS_STEPS } from "@/constants/site-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { SwipeableCards } from "@/components/ui/swipeable-cards";

// Process Step Illustrations - Custom SVG for each step
function ProcessIllustration({ stepId }: { stepId: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    plan: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Plan process step icon">
        <motion.circle cx="60" cy="35" r="8" fill="currentColor" />
        <motion.path d="M 60 45 L 60 75" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <motion.circle cx="40" cy="85" r="6" fill="currentColor" />
        <motion.circle cx="60" cy="90" r="6" fill="currentColor" />
        <motion.circle cx="80" cy="85" r="6" fill="currentColor" />
        <motion.path d="M 60 45 L 40 85" stroke="currentColor" strokeWidth="2" fill="none" />
        <motion.path d="M 60 45 L 80 85" stroke="currentColor" strokeWidth="2" fill="none" />
        <motion.circle
          cx="60"
          cy="60"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
          animate={{ r: [20, 28, 20] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Design process step icon">
        <motion.rect x="25" y="25" width="70" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.rect
          x="35"
          y="35"
          width="25"
          height="25"
          rx="2"
          fill="currentColor"
          opacity="0.2"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect x="65" y="35" width="25" height="15" rx="2" fill="currentColor" opacity="0.15" />
        <motion.line x1="35" y1="65" x2="90" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <motion.line x1="35" y1="75" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <motion.circle cx="30" cy="30" r="3" fill="currentColor" />
        <motion.circle cx="90" cy="30" r="3" fill="currentColor" />
        <motion.circle cx="30" cy="90" r="3" fill="currentColor" />
        <motion.circle cx="90" cy="90" r="3" fill="currentColor" />
      </svg>
    ),
    develop: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Develop process step icon">
        <motion.path d="M 35 50 L 50 65 L 35 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <motion.path d="M 85 50 L 70 65 L 85 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <motion.line x1="50" y1="35" x2="70" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <motion.rect x="40" y="25" width="40" height="70" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <motion.circle cx="45" cy="40" r="2.5" fill="currentColor" animate={{ fill: ["currentColor", "transparent", "currentColor"] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="60" cy="40" r="2.5" fill="currentColor" animate={{ fill: ["currentColor", "currentColor", "transparent"] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="75" cy="40" r="2.5" fill="currentColor" animate={{ fill: ["transparent", "currentColor", "currentColor"] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>
    ),
    launch: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Launch process step icon">
        <motion.path
          d="M 60 90 L 45 50 L 60 25 L 75 50 Z"
          fill="currentColor"
          opacity="0.2"
          animate={{ y: [-5, 10, -5], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path d="M 60 90 L 45 50 L 60 25 L 75 50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <motion.circle cx="50" cy="70" r="3" fill="currentColor" opacity="0.6" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
        <motion.circle cx="70" cy="65" r="3" fill="currentColor" opacity="0.6" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.2, delay: 0.3, repeat: Infinity }} />
        <motion.circle cx="60" cy="95" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  };

  return illustrations[stepId] || null;
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <div className="absolute inset-0 pointer-events-none">
  <Starfield count={30} />
</div>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Process
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500 dark:to-cyan-400"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              A Proven Approach to{" "}
              <span className="text-cyan-500 dark:text-cyan-400">Success</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-[#001f3f]/70 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a streamlined process designed to deliver exceptional websites on time and on budget.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps - Swipeable on Mobile, Grid on Desktop */}
        <div className="flex justify-center w-full mb-8">
          {/* Mobile Swipeable Cards - Hidden on MD and above */}
          <div className="md:hidden w-full max-w-md mx-auto">
            <SwipeableCards showControls={false}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="group relative h-full">
                  <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:-translate-y-2 hover:translate-x-[-8px] hover:shadow-[8px_8px_0px_rgb(99,102,241)] dark:hover:shadow-[8px_8px_0px_rgb(34,211,238)] overflow-hidden">

                    {/* Icon with Number Badge */}
                    <div className="relative inline-flex self-center mb-6">
                      <div className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-20 w-20 sm:h-24 sm:w-24 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 dark:group-hover:shadow-cyan-500/40 text-white p-4">
                        <ProcessIllustration stepId={step.id} />
                      </div>
                      <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-cyan-500 shadow-md transition-transform group-hover:scale-110">
                        <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-[18px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-base text-[#001f3f]/70 dark:text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </SwipeableCards>
          </div>

          {/* Desktop Grid - Hidden on mobile, visible from MD and above */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative w-full">
            {/* Connecting line for large screens */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/50 dark:via-cyan-400/50 to-transparent pointer-events-none"></div>

            {PROCESS_STEPS.map((step, index) => (
              <ScrollReveal key={step.id} direction="up" delay={0.1 * (index + 1)} duration={0.7}>
                <div className="group relative h-full">
                  <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500 dark:hover:border-cyan-400 hover:-translate-y-2 hover:translate-x-[-8px] hover:shadow-[8px_8px_0px_rgb(99,102,241)] dark:hover:shadow-[8px_8px_0px_rgb(34,211,238)] overflow-hidden">

                    {/* Icon with Number Badge */}
                    <div className="relative inline-flex self-center mb-6">
                      <div className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-cyan-500 dark:to-cyan-600 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 dark:group-hover:shadow-cyan-500/40 text-white p-4">
                        <ProcessIllustration stepId={step.id} />
                      </div>
                      <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-cyan-500 shadow-md transition-transform group-hover:scale-110">
                        <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400">{step.number}</span>
                      </div>
                    </div>

                    {/* Arrow between steps (desktop only) */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-20 z-20">
                        <ArrowRight className="h-6 w-6 text-indigo-500 dark:text-cyan-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors" strokeWidth={2} />
                      </div>
                    )}

                    <h3 className="text-[18px] md:text-[24px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-base md:text-lg text-[#001f3f]/70 dark:text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <ScrollReveal direction="zoom-in" delay={0.5}>
          <div className="mt-12 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}