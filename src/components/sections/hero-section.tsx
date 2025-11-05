"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Starfield } from "@/components/ui/starfield";
import { Parallax } from "@/components/ui/parallax";

/**
 * Hero Section Component
 * Main landing section with space-themed animations and CTA
 */

export function HeroSection() {
  return (
    <section className="hero-section relative w-full bg-gradient-to-br from-[#0a0d1a] via-[#0f1629] to-[#001f3d] dark:from-[#050711] dark:via-[#0a0d1a] dark:to-[#001529] text-white overflow-hidden min-h-[100svh] sm:min-h-screen flex items-start sm:items-center pt-24 sm:pt-28">
      {/* Starfield with Parallax - Only visible in dark mode */}
      <Parallax speed={0.15} direction="down">
        <Starfield count={80} position="absolute" />
      </Parallax>

      {/* Animated Gradient Blobs with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blob 1 - Blue/Cyan - Slow parallax */}
        <Parallax speed={0.3} direction="down">
          <div
            className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-30 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%)',
              top: '10%',
              left: '10%',
              animation: 'float-blob-1 20s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 2 - Purple/Blue - Medium parallax */}
        <Parallax speed={0.5} direction="up">
          <div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
              top: '50%',
              right: '5%',
              animation: 'float-blob-2 25s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 3 - Cyan/Teal - Fast parallax */}
        <Parallax speed={0.7} direction="down">
          <div
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(20, 184, 166, 0.3) 50%, transparent 100%)',
              bottom: '20%',
              left: '30%',
              animation: 'float-blob-3 30s ease-in-out infinite',
            }}
          ></div>
        </Parallax>

        {/* Blob 4 - Blue accent - Medium parallax */}
        <Parallax speed={0.4} direction="up">
          <div
            className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full opacity-15 blur-[90px]"
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
              top: '60%',
              right: '40%',
              animation: 'float-blob-4 22s ease-in-out infinite',
            }}
          ></div>
        </Parallax>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div> 

      {/* White background layer */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white dark:bg-gray-950 z-5 border-none shadow-none"></div>

      {/* Wave SVG at bottom */}
      <svg
        className="cs-wave absolute bottom-[-3px] left-0 w-full h-auto z-10 pointer-events-none"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1920 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z"
          className="fill-white dark:fill-gray-950"
          stroke="none"
        />
      </svg>

      <div className="container relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-14 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[48%] xl:w-[45%] flex-shrink-0 lg:ml-0 xl:ml-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              {/* Topper */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] xs:text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-400 uppercase block"
              >
                Custom Designs, Custom Coded
              </motion.span>

              {/* Main heading - Mixed typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2 sm:space-y-3 md:space-y-4 w-full"
              >
                <h1 className="text-[32px] xs:text-[36px] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.15]">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-light italic text-white/95 mb-1 sm:mb-2 text-[26px] xs:text-[30px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl drop-shadow-sm"
                  >
                    Hand-Built
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-black tracking-tight uppercase bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-1 sm:mb-2"
                  >
                    Websites,
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-black tracking-tight uppercase text-white"
                  >
                    Built to <span className="relative inline-block">
                      <span className="relative z-10">Perform</span>
                      <span className="absolute bottom-1 sm:bottom-1 left-0 w-full h-2 sm:h-2 bg-blue-400/30 -rotate-1"></span>
                    </span>
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light max-w-md sm:max-w-lg mx-auto lg:mx-0 mt-3 sm:mt-4 md:mt-5 px-4 sm:px-0"
                >
                  Custom-coded websites built for performance — with <span className="text-white font-medium">dedicated SEO and Google Ads services</span> available to scale your growth.
                </motion.p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-5 sm:mt-6 md:mt-7 lg:mt-8 px-4 sm:px-0"
            >
              <CustomButton href="#contact" variant="primary" size="md" className="flex-1 sm:flex-none">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
              <CustomButton href="#process" variant="outline" size="md" className="flex-1 sm:flex-none">
                About Us
              </CustomButton>
            </motion.div>
          </div>

          {/* Laptop Image - Hidden on mobile, shown on lg+ with Parallax */}
          <Parallax speed={0.2} direction="up" className="hidden lg:block lg:w-[48%] xl:w-[50%] relative z-10 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                animation: 'float 6s ease-in-out infinite 1s',
                willChange: 'transform'
              }}
            >
              <Image
                src="/laptop.svg"
                alt="Laptop showing web design"
                width={1440}
                height={758}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}