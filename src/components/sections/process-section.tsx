"use client";

import { PROCESS_STEPS } from "@/constants/site-data";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

/**
 * Process Section Component
 * Displays the 4-step process for web development with clean design matching the site theme
 */

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header Content */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 flex flex-col items-center w-full">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-10">
              <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-blue-600"></span>
              <span className="text-xs sm:text-sm font-medium tracking-widest text-blue-600 uppercase">
                Our Process
              </span>
              <span className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-blue-600"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 sm:mb-8 leading-[1.1] max-w-4xl px-4 sm:px-0">
              A Proven Approach to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Success
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 bg-blue-500/20 rounded-sm"></span>
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-[#001f3f]/70 max-w-3xl mx-auto px-4 sm:px-6">
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
              <div className="relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 px-6 py-8 md:px-8 md:py-10 transition-all duration-700 hover:border-blue-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,31,63,0.3)] hover:-translate-y-3 overflow-hidden">

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-100/0 group-hover:from-blue-50/80 group-hover:via-cyan-50/40 group-hover:to-blue-100/80 transition-all duration-700 rounded-3xl -z-10"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700"></div>

                {/* Number Badge */}
                <div className="relative inline-flex self-center mb-6">
                  {/* Glow effect behind number */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150"></div>

                  {/* Number circle */}
                  <div className="relative flex justify-center items-center rounded-full bg-gradient-to-br from-[#001f3f] via-[#002855] to-[#003d6b] h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 transition-all duration-700 group-hover:scale-110 group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-blue-600 shadow-xl group-hover:shadow-2xl">
                    <span className="text-2xl md:text-3xl font-bold text-white relative z-10">{step.number}</span>
                  </div>
                </div>

                {/* Arrow between steps - desktop only */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-20 z-20">
                    <ArrowRight className="h-6 w-6 text-blue-400 group-hover:text-blue-600 transition-colors duration-500" strokeWidth={2} />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#001f3f] text-center transition-colors duration-500 group-hover:text-blue-700 mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#001f3f]/70 text-center transition-colors duration-500 group-hover:text-[#001f3f]/80 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent corner */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700 blur-2xl"></div>

                {/* Corner dot accent */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-all duration-500"></div>
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
