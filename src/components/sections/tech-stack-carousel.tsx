"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Starfield } from "@/components/ui/starfield";
import { Pause } from "lucide-react";

/**
 * Tech Stack Carousel Component
 * Modern infinite scrolling carousel with actual technology logos
 */

const technologies = [
  // Frontend
  {
    name: "React",
    gradient: "from-cyan-400 to-blue-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    gradient: "from-black to-gray-800",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    isDark: true
  },
  {
    name: "Tailwind CSS",
    gradient: "from-sky-400 to-cyan-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },

  // Backend
  {
    name: "Laravel",
    gradient: "from-red-500 to-orange-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
  },
  {
    name: "Node.js",
    gradient: "from-green-500 to-green-700",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },

  // Cloud/Infrastructure
  {
    name: "Vercel",
    gradient: "from-black to-gray-900",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    isDark: true
  },
  {
    name: "AWS",
    gradient: "from-orange-400 to-yellow-600",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },

  // Tools
  {
    name: "GitHub",
    gradient: "from-gray-700 to-gray-900",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    isDark: true
  },
  {
    name: "Docker",
    gradient: "from-blue-500 to-blue-700",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
];

export function TechStackCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="w-full py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden relative">
      {/* Starfield - Only visible in dark mode */}
      <Starfield count={30} position="absolute" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center gap-4 sm:gap-5">
          <ScrollReveal direction="down" delay={0.1}>
            <span className="inline-block text-sm sm:text-base font-semibold tracking-wider text-blue-600 dark:text-cyan-400 uppercase">
              Powered By
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Technology</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Industry-leading tools that deliver blazing-fast performance and exceptional user experiences
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel wrapper */}
        <ScrollReveal direction="zoom-in" delay={0.4}>
          <div className="relative py-4" style={{ marginTop: '2rem' }}>
            {/* Enhanced gradient overlays - smaller on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-r from-white dark:from-gray-950 via-white dark:via-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-l from-white dark:from-gray-950 via-white dark:via-gray-950 to-transparent z-10 pointer-events-none" />

            {/* Pause indicator */}
            {isPaused && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="bg-black/60 dark:bg-white/60 backdrop-blur-md rounded-full p-3 flex items-center gap-2 animate-fade-in">
                  <Pause className="w-5 h-5 text-white dark:text-black" fill="currentColor" />
                  <span className="text-white dark:text-black text-sm font-semibold pr-2">Paused</span>
                </div>
              </div>
            )}

            {/* Scrolling container */}
            <div
              className="overflow-hidden py-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 ${isPaused ? '' : 'animate-scroll-left'}`}>
                {duplicatedTechs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer relative"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
                    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-xl">
                      {tech.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                    {/* Card */}
                    <div className="relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Logo */}
                      <div className="relative z-10 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-all duration-500">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          fill
                          loading="lazy"
                          className={`object-contain p-1.5 sm:p-2 transition-all duration-500 ${
                            tech.isDark ? 'group-hover:brightness-0 group-hover:invert' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom decorative line */}
        <ScrollReveal direction="zoom-in" delay={0.5}>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}