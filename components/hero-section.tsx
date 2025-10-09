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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-[30px] pt-[100px] sm:pt-0 sm:pb-0">
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
          className="max-w-6xl mx-auto"
        >
          {/* Grid Layout - 2 Spalten */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Linke Spalte - Hauptcontent */}
            <div className="text-center lg:text-left">
              {/* Haupt-Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ihr Fahrzeug.
                <br />
                <span className="text-yellow-400">Wie neu.</span>
                <br />
                Garantiert.
              </h1>

              {/* Sub-Headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
                Professionelle Fahrzeugaufbereitung in{' '}
                <span className="text-yellow-400">Hamburg-Billstedt</span> für
                strahlenden Glanz und maximalen Werterhalt.
              </h2>

              {/* CTA Buttons - Jetzt vertikal auf Mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={'/kontakt'}
                  className="inline-flex items-center justify-center bg-[#00152a] text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-pulse hover:animate-none hover:bg-[#002a54] hover:shadow-2xl hover:shadow-[#00152a]/60 min-w-[200px] sm:min-w-[220px]"
                >
                  Termin vereinbaren
                </Link>

                <Link
                  href={'/leistungen'}
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 border-2 border-white/50 hover:border-white hover:bg-white/10 min-w-[200px] sm:min-w-[220px]"
                >
                  Leistungen entdecken
                </Link>
              </div>
            </div>

            {/* Rechte Spalte - Trust Elements */}
            <div className="space-y-8">
              {/* Trust Indicators */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-6 text-center lg:text-left">
                  Warum Kunden uns vertrauen:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80">
                    <CheckCircleIcon />
                    <span className="text-sm sm:text-base">
                      Kostenlose Beratung vor Ort
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <CheckCircleIcon />
                    <span className="text-sm sm:text-base">
                      Hol- & Bringservice in Hamburg
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <CheckCircleIcon />
                    <span className="text-sm sm:text-base">
                      Individuelle Preisgestaltung
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <CheckCircleIcon />
                    <span className="text-sm sm:text-base">
                      Spezialisiert auf PKW & Wohnmobile
                    </span>
                  </div>
                </div>
              </div>

              {/* Wohnmobile Hinweis */}
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚐</span>
                  <h4 className="text-white font-semibold text-lg">
                    Wohnmobil-Spezialist
                  </h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Umfassende Komplettaufbereitung für Wohnmobile und Wohnwagen -
                  perfekt für Reisevorbereitung oder Verkauf.
                </p>
              </div>

              {/* Leasing & Verkauf */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-semibold text-lg mb-3">
                  💰 Mehr Werterhalt
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Ideal für Leasingrückgaben und Verkaufsvorbereitung - steigern
                  Sie den Wiederverkaufswert Ihres Fahrzeugs.
                </p>
              </div>
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
