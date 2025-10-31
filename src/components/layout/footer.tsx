import { CustomButton } from "@/components/ui/custom-button";
import { Logo } from "@/components/ui/logo";

/**
 * Footer Component
 * Main footer with wave design matching hero section
 */

export function Footer() {
  return (
    <>
      {/* Wave transition - place BEFORE footer */}
      <div className="w-full bg-white dark:bg-gray-950">
        <svg
          className="w-full block"
          style={{ display: 'block', marginBottom: '-1px', transform: 'scaleY(-1) scaleX(-1)' }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1920 254"
          xmlns="http://www.w3.org/2000/svg"
          height="120"
        >
          <path
            d="M1668.54 58.137c124.52 31.881 204.12 63.173 251.46 85.537V-4H0v254C356.508 169.957 717.072 91.544 986.268 43.36 1255.46-4.822 1443.9.623 1668.54 58.138Z"
            className="fill-[#001f3d] dark:fill-[#001529]"
          />
        </svg>
      </div>

      <footer className="w-full bg-[#001f3d] dark:bg-[#001529] text-white">
        {/* Main Footer Content */}
        <div className="container relative max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-12" style={{ paddingTop: '10rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 px-4 sm:px-0">

          {/* Brand Section */}
          <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
            <Logo variant="white" />
            <p className="text-white/70 leading-relaxed font-light max-w-md">
              We believe small businesses deserve better. Just because you're small, doesn't mean your site needs to be. Let us make you something amazing.
            </p>
            <div style={{ width: 'auto' }}>
              <CustomButton href="#contact" variant="outline" size="lg">
                GET STARTED TODAY
              </CustomButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold uppercase tracking-wider" style={{ marginBottom: '2rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold uppercase tracking-wider" style={{ marginBottom: '2rem' }}>Contact Information</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/70 font-light">24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:(219)576-2539" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
                  (617) 838-3859
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:polerisllc@outlook.com" className="text-white/70 hover:text-white transition-colors duration-300 font-light break-all">
                  polerisllc@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70 font-light">United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-0" style={{ marginTop: '4rem', paddingTop: '2rem', marginBottom: '2rem' }}>
          <p className="text-white/60 text-sm font-light">
            © Copyright 2025 Poleris Digital
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
