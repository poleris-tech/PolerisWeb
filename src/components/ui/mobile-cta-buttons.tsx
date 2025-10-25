"use client";

import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/site-data";

/**
 * Mobile CTA Buttons
 * Tap-to-call and tap-to-email buttons for mobile devices
 */

export function MobileCTAButtons() {
  const phoneNumber = CONTACT_INFO.phone.replace(/\D/g, ""); // Remove non-digits

  return (
    <div className="lg:hidden fixed bottom-20 right-4 z-40 flex flex-col gap-3">
      {/* Tap to Call */}
      <motion.a
        href={`tel:+1${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Call us"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

        {/* Icon with pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Phone className="w-6 h-6" strokeWidth={2.5} />
        </motion.div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Tap to call
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.a>

      {/* Tap to Email */}
      <motion.a
        href={`mailto:${CONTACT_INFO.email}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Email us"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

        {/* Icon */}
        <div className="relative">
          <Mail className="w-6 h-6" strokeWidth={2.5} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Send email
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.a>
    </div>
  );
}
