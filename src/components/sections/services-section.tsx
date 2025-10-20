import { Code, Search, Target, Server } from "lucide-react";
import { SERVICES } from "@/constants/site-data";
import { CustomButton } from "@/components/ui/custom-button";

/**
 * Services Section Component
 * Displays available services with space-themed hover effects on a clean white background
 * Optimized vertical spacing for better text alignment and readability
 */

const ICON_MAP = {
  "web-design": Code,
  "seo": Search,
  "ppc": Target,
  "hosting": Server,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 bg-white overflow-hidden"
      //style={{ paddingTop: '1px', paddingBottom: '96px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center w-full">
          <div className="inline-flex items-center gap-2 mb-8 sm:mb-10">
            <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-blue-600"></span>
            <span className="text-xs sm:text-sm font-medium tracking-widest text-blue-600 uppercase">
              What We Do
            </span>
            <span className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-blue-600"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3f] mb-10 sm:mb-12 leading-tight max-w-4xl">
            Never Worry About Your Website{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Ever Again
              </span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 bg-blue-500/20 rounded-sm"></span>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto w-full" style={{ marginTop: '32px' }}>
            <p className="text-sm sm:text-base md:text-lg leading-8 sm:leading-9 md:leading-10 font-light text-[#001f3f]/70" style={{ marginBottom: '24px' }}>
              At Poleris Digital, we specialize in small business web design and development for clients across the US and Canada.
            </p>
            <p className="text-sm sm:text-base leading-8 sm:leading-9 font-light text-[#001f3f]/70">
              Every line of code is handcrafted for optimal performance, ensuring Google loves your site, driving more traffic and revenue to your business.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center w-full mb-12 sm:mb-16" style={{ marginTop: '40px' }}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.id as keyof typeof ICON_MAP];

            return (
              <li key={service.id} className="group relative">
                <div className="relative flex flex-col h-full rounded-3xl bg-white border-2 border-gray-100 px-6 py-8 sm:px-8 sm:py-10 transition-all duration-700 hover:border-blue-500/50 hover:shadow-[0_20px_70px_-15px_rgba(0,31,63,0.3)] hover:-translate-y-3 overflow-hidden">

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-100/0 group-hover:from-blue-50/80 group-hover:via-cyan-50/40 group-hover:to-blue-100/80 transition-all duration-700 rounded-3xl -z-10"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-700"></div>

                  {/* Icon Container */}
                  <div className="relative inline-flex self-center" style={{ marginTop: '8px', marginBottom: '24px' }}>
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150"></div>

                    {/* Icon */}
                    <div className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-[#001f3f] via-[#002855] to-[#003d6b] h-20 w-20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-blue-600 shadow-xl group-hover:shadow-2xl">
                      {IconComponent && (
                        <IconComponent className="h-10 w-10 text-white relative z-10" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#001f3f] text-center transition-colors duration-500 group-hover:text-blue-700" style={{ marginBottom: '20px', lineHeight: '1.4', paddingLeft: '12px', paddingRight: '12px' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#001f3f]/70 text-center transition-colors duration-500 group-hover:text-[#001f3f]/80" style={{ marginBottom: '24px', lineHeight: '1.7', paddingLeft: '12px', paddingRight: '12px' }}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-auto" style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px', paddingRight: '12px' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#001f3f]/80 transition-all duration-500 group-hover:text-[#001f3f]" style={{ gap: '12px' }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-500" style={{ marginTop: '2px' }}>
                          <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span style={{ lineHeight: '1.7' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent corner */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700 blur-2xl"></div>

                  {/* Corner dot accent */}
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-all duration-500"></div>
                </div>
              </li>
            );
          })}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center" style={{ marginTop: '48px' }}>
          <div className="relative group/cta">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover/cta:opacity-40 transition-all duration-500"></div>
            <CustomButton href="#contact" variant="primary" size="lg">
              Get Started Today
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}