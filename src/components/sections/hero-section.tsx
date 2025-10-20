import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * Hero Section Component
 * Main landing section with space-themed animations and CTA
 */

export function HeroSection() {
  return (
    <section className="hero-section relative w-full bg-[#001f3d] text-white overflow-hidden min-h-screen flex items-center" style={{ paddingTop: '8rem' }}>
      {/* Animated star background */}
      <div className="universe universe1" aria-hidden="true">
        <span className="shooting-star"></span>
        <span className="shooting-star shooting-star2"></span>
        <span className="star star1"></span>
        <span className="star star2"></span>
        <span className="star star3"></span>
        <span className="star star4"></span>
        <span className="star star5"></span>
        <span className="star star6"></span>
        <span className="star star7"></span>
        <span className="star star8"></span>
        <span className="star star9"></span>
        <span className="star star10"></span>
        <span className="star star11"></span>
        <span className="star star12"></span>
        <span className="star star13"></span>
      </div>

      <div className="universe universe2" aria-hidden="true">
        <span className="star star1"></span>
        <span className="star star2"></span>
        <span className="star star3"></span>
        <span className="star star4"></span>
        <span className="star star5"></span>
        <span className="star star6"></span>
        <span className="star star7"></span>
        <span className="star star8"></span>
        <span className="star star9"></span>
        <span className="star star10"></span>
        <span className="star star11"></span>
        <span className="star star12"></span>
        <span className="star star13"></span>
      </div>

      <div className="universe universe3" aria-hidden="true">
        <span className="star star1"></span>
        <span className="star star2"></span>
        <span className="star star3"></span>
        <span className="star star4"></span>
        <span className="star star5"></span>
        <span className="star star6"></span>
        <span className="star star7"></span>
        <span className="star star8"></span>
        <span className="star star9"></span>
        <span className="star star10"></span>
        <span className="star star11"></span>
        <span className="star star12"></span>
        <span className="star star13"></span>
      </div>

      {/* Additional twinkling stars to fill empty spaces */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large prominent stars */}
        <span className="star-xlarge" style={{ top: '10%', left: '20%', animationDelay: '0.5s' }}></span>
        <span className="star-xlarge" style={{ top: '18%', left: '60%', animationDelay: '1.2s' }}></span>
        <span className="star-xlarge" style={{ top: '35%', left: '10%', animationDelay: '0.8s' }}></span>
        <span className="star-xlarge" style={{ top: '40%', left: '75%', animationDelay: '1.5s' }}></span>
        <span className="star-xlarge" style={{ top: '55%', left: '35%', animationDelay: '0.3s' }}></span>
        <span className="star-xlarge" style={{ top: '65%', left: '85%', animationDelay: '1.8s' }}></span>

        {/* Medium visible stars */}
        <span className="star-large" style={{ top: '8%', left: '40%', animationDelay: '0.7s' }}></span>
        <span className="star-large" style={{ top: '15%', left: '80%', animationDelay: '1.0s' }}></span>
        <span className="star-large" style={{ top: '25%', left: '30%', animationDelay: '0.4s' }}></span>
        <span className="star-large" style={{ top: '32%', left: '65%', animationDelay: '1.3s' }}></span>
        <span className="star-large" style={{ top: '45%', left: '50%', animationDelay: '0.6s' }}></span>
        <span className="star-large" style={{ top: '50%', left: '15%', animationDelay: '1.6s' }}></span>
        <span className="star-large" style={{ top: '60%', left: '55%', animationDelay: '0.9s' }}></span>
        <span className="star-large" style={{ top: '70%', left: '25%', animationDelay: '1.1s' }}></span>

        {/* Smaller fill stars */}
        <span className="star" style={{ top: '5%', left: '15%', animationDelay: '0.3s' }}></span>
        <span className="star" style={{ top: '8%', left: '50%', animationDelay: '0.7s' }}></span>
        <span className="star" style={{ top: '12%', left: '70%', animationDelay: '1.2s' }}></span>
        <span className="star" style={{ top: '20%', left: '45%', animationDelay: '0.5s' }}></span>
        <span className="star" style={{ top: '28%', left: '85%', animationDelay: '1.5s' }}></span>
        <span className="star" style={{ top: '35%', left: '55%', animationDelay: '0.8s' }}></span>
        <span className="star" style={{ top: '42%', left: '22%', animationDelay: '1.1s' }}></span>
        <span className="star" style={{ top: '48%', left: '90%', animationDelay: '0.4s' }}></span>
        <span className="star" style={{ top: '55%', left: '68%', animationDelay: '1.3s' }}></span>
        <span className="star" style={{ top: '62%', left: '42%', animationDelay: '0.6s' }}></span>
        <span className="star" style={{ top: '68%', left: '8%', animationDelay: '1.6s' }}></span>
        <span className="star" style={{ top: '75%', left: '60%', animationDelay: '0.9s' }}></span>
        <span className="star" style={{ top: '80%', left: '78%', animationDelay: '1.4s' }}></span>

        {/* Extra scattered small stars 
        <span className="star" style={{ top: '14%', left: '35%', animationDelay: '1.9s' }}></span>
        <span className="star" style={{ top: '22%', left: '12%', animationDelay: '0.2s' }}></span>
        <span className="star" style={{ top: '38%', left: '48%', animationDelay: '1.7s' }}></span>
        <span className="star" style={{ top: '52%', left: '82%', animationDelay: '0.5s' }}></span>
        <span className="star" style={{ top: '58%', left: '28%', animationDelay: '1.0s' }}></span>
        <span className="star" style={{ top: '72%', left: '92%', animationDelay: '0.8s' }}></span>*/}
      </div> 

      {/* White background layer */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white z-5 border-none shadow-none"></div>

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
          fill="#fff"
          stroke="none"
        />
      </svg>

      <div className="container relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-6 xl:gap-10">

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[45%] flex-shrink-0" style={{ marginLeft: '3rem' }}>
            <div className="space-y-8 lg:space-y-10">
              {/* Topper */}
              <span className="text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 animate-fade-in uppercase">
                Custom Designs, Custom Coded
              </span>

              {/* Main heading - Mixed typography */}
              <div className="space-y-6 sm:space-y-7 lg:space-y-8 w-full animate-fade-in-up">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15]">
                  <span className="block font-light italic text-white/90 mb-2">Hand-Built</span>
                  <span className="block font-black tracking-tight uppercase bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">
                    Websites,
                  </span>
                  <span className="block font-black tracking-tight uppercase text-white">
                    Built to <span className="relative inline-block">
                      <span className="relative z-10">Perform</span>
                      <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-blue-400/30 -rotate-1"></span>
                    </span>
                  </span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-light max-w-lg mx-auto lg:mx-0" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                  No templates. No shortcuts. <span className="text-white font-medium">Just custom-coded designs</span> that represent your brand with speed, security, and style.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in animate-delay-200 w-full sm:w-auto" style={{ marginTop: '0.2rem', marginBottom: '3rem', marginLeft: '0' }}>
              <CustomButton href="#contact" variant="primary" size="md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
              <CustomButton href="#about" variant="outline" size="md">
                About Us
              </CustomButton>
            </div>
          </div>

          {/* Laptop Image */}
          <div
            className="w-full max-w-5xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl lg:w-[48%] relative z-10 flex-shrink-0 mt-12 sm:mt-16 lg:mt-20"
            style={{
              animation: 'float 6s ease-in-out infinite',
              willChange: 'transform'
            }}
          >
            <Image
              src="/laptop.svg"
              alt="Laptop showing web design"
              width={1440}
              height={758}
              className="w-full h-auto drop-shadow-2xl mt-12 md:mt-16"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}