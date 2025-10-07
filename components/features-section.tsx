'use client'
import React from 'react'
import Link from 'next/link'
import { Sparkles, Shield, Car, Home } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Komplettaufbereitung Innen & Außen',
    description:
      'Gründliche Handwäsche, Lackpolitur, Innenreinigung mit Teppich- und Polsterpflege für ein rundum strahlendes Ergebnis.',
    gradient: 'from-blue-500 to-yellow-400',
  },
  {
    icon: Shield,
    title: 'Lackschutz & Versiegelung',
    description:
      'Hochwertige Carnauba-Wachs-Versiegelung für tiefen Glanz und langanhaltenden Schutz vor Umwelteinflüssen.',
    gradient: 'from-green-400 to-emerald-400',
  },
  {
    icon: Car,
    title: 'Spezialbehandlungen',
    description:
      'Ozonbehandlung gegen Gerüche, Hundehaarentfernung, Nikotinentfernung und Cabrio-Verdeck-Reinigung.',
    gradient: 'from-orange-400 to-red-400',
  },
  {
    icon: Home,
    title: 'Wohnmobil & Wohnwagen',
    description:
      'Umfassende Komplettpflege für Wohnmobile und Wohnwagen - innen und außen.',
    gradient: 'from-purple-400 to-pink-400',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Unsere <span className="text-yellow-400">Leistungen</span> in
            Hamburg-Billstedt
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Professionelle Fahrzeugaufbereitung für PKW, Wohnmobile und Cabrios
            - individuell abgestimmt auf Ihr Fahrzeug
          </p>
        </div>

        {/* Features Grid - Jetzt 4 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with Gradient */}
              <div className="relative mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-7 sm:h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-xs sm:text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3 leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preis-Hinweis */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-zinc-900/50 border border-yellow-400/20 rounded-lg p-6 mb-8">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Individuelle Preisgestaltung
            </h3>
            <p className="text-gray-300 text-sm">
              Jedes Fahrzeug wird bei uns persönlich begutachtet. So erhalten
              Sie genau die Behandlung, die es benötigt - zu einem fairen Preis.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Kostenlose Beratung vor Ort - Hol- und Bringservice verfügbar
          </p>
          <Link
            href="/kontakt"
            className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25 inline-block"
          >
            Unverbindliche Beratung anfragen
          </Link>
        </div>
      </div>
    </section>
  )
}
