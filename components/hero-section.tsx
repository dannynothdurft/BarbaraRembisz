'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bmw-04.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Haupt-Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance">
            Ihr Fahrzeug.
            <br className="hidden sm:block" />
            <span className="text-yellow-400"> Wie neu.</span>
            <br className="hidden sm:block" />
            Garantiert.
          </h1>

          {/* Sub-Headline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 leading-relaxed text-balance max-w-3xl mx-auto px-4">
            Professionelle Innen- und Außenaufbereitung für strahlenden Glanz
            und maximalen Werterhalt.
          </h2>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href={'/kontakt'}
              className="inline-flex items-center justify-center bg-[#00152a] text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-pulse hover:animate-none hover:bg-[#002a54] hover:shadow-2xl hover:shadow-[#00152a]/60 min-w-[200px] sm:min-w-[240px]"
            >
              Termin vereinbaren
            </Link>

            {/* Sekundärer Button für mehr Conversion */}
            <Link
              href={'/services'}
              className="inline-flex items-center justify-center bg-transparent text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 border-2 border-white/50 hover:border-white hover:bg-white/10 min-w-[200px] sm:min-w-[240px]"
            >
              Leistungen entdecken
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white/80 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircleIcon />
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircleIcon />
              <span>Abholservice</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircleIcon />
              <span>12 Monate Garantie</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
