"use client";

import { PROCESS_STEPS } from "@/constants/site-data";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";

/**
 * Process Section Component
 * Displays the 4-step process for web development with clean design matching the site theme
 */

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header Content - Typography Standards */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            {/* Caption Text: 14px mobile, 16px desktop */}
            <div className="inline-flex items-center gap-2.5 mb-4 md:mb-5">
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-cyan-500"></span>
              <span className="text-sm md:text-base font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 uppercase">
                Our Process
              </span>
              <span className="h-px w-10 md:w-12 bg-gradient-to-l from-transparent to-cyan-500"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            {/* H2 Heading: 22-24px mobile, 32-36px desktop */}
            <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-black text-[#001f3f] dark:text-white mb-4 md:mb-6 leading-[1.3] md:leading-[1.25] max-w-4xl">
              A Proven Approach to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            {/* Body Text: 16px mobile, 18-20px desktop */}
            <p className="text-base md:text-lg leading-[1.5] md:leading-[1.6] font-normal text-[#001f3f]/70 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a streamlined process designed to deliver exceptional websites on time and on budget.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative px-4 sm:px-0">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" style={{ top: '80px' }}></div>

          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.id} direction="up" delay={0.1 * index} duration={0.7}>
              <div className="group relative h-full">
              <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-[#5c94ff] dark:hover:border-[#5c94ff] hover:translate-x-[-6px] hover:translate-y-[-6px] [box-shadow:0px_0px_0px_transparent] hover:[box-shadow:6px_6px_0px_#5c94ff] dark:hover:[box-shadow:6px_6px_0px_#5c94ff] overflow-hidden">

                {/* Number Badge */}
                <div className="relative inline-flex self-center mb-6">
                  {/* Number circle */}
                  <div className="relative flex justify-center items-center rounded-full bg-gradient-to-br from-cerulean-blue-500 to-cyan-500 h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 transition-all duration-500 group-hover:scale-105">
                    <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Arrow between steps - desktop only */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-20 z-20">
                    <ArrowRight className="h-6 w-6 text-cyan-500 group-hover:text-[#5c94ff] transition-colors duration-500" strokeWidth={2} />
                  </div>
                )}

                {/* Title - H3 Section: 18-20px mobile, 24-28px desktop */}
                <h3 className="text-[18px] md:text-[24px] font-bold text-[#001f3f] dark:text-white text-center transition-colors duration-500 group-hover:text-cerulean-blue-600 dark:group-hover:text-cyan-400 mb-4 leading-[1.4] md:leading-[1.3]">
                  {step.title}
                </h3>

                {/* Description - Body Text: 16px mobile, 18px desktop */}
                <p className="text-base md:text-lg text-[#001f3f]/70 dark:text-gray-300 text-center transition-colors duration-500 leading-[1.5] md:leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decorative line */}
        <ScrollReveal direction="zoom-in" delay={0.5}>
          <div className="mt-12 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
