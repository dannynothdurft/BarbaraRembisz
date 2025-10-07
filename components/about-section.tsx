import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Sparkles, Users } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152a]/20 to-zinc-900/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image mit Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden group"
          >
            <Image
              src="/images/bmw-01.jpg"
              alt="Professionelle Fahrzeugaufbereitung in Hamburg-Billstedt"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Overlay mit Branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00152a]/80 via-transparent to-transparent" />

            {/* Echter Badge - ohne falsche Jahresangabe */}
            <div className="absolute top-6 left-6 bg-yellow-400 text-[#00152a] px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Ihr lokaler Profi
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Leidenschaft für{' '}
                <span className="text-yellow-400">perfekte Details</span> in
                Hamburg
              </h2>
              <div className="w-20 h-1 bg-yellow-400 rounded-full" />
            </div>

            {/* Haupttext - Ehrlich und authentisch */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Als Ihr zuverlässiger Partner für Fahrzeugaufbereitung in{' '}
              <span className="text-yellow-400 font-semibold">
                Hamburg-Billstedt
              </span>{' '}
              setzen wir auf handwerkliche Präzision und moderne
              Pflegetechniken. Jedes Fahrzeug erhält unsere volle
              Aufmerksamkeit.
            </p>

            {/* Was uns auszeichnet - Echte Werte */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Persönliche Beratung und faire Preise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Hochwertige Pflegeprodukte für optimale Ergebnisse
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Spezialisiert auf PKW, Wohnmobile und Verkaufsvorbereitung
                </span>
              </div>
            </div>

            {/* Unsere Stärken - Echt und transparent */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">Individuelle Lösungen</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">Zufriedene Kunden</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25 text-center"
              >
                Unverbindlich beraten lassen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-105 text-center"
              >
                Alle Leistungen
              </Link>
            </div>

            {/* Authentischer Hinweis */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-400 text-sm">
                Transparente Preise nach individueller Begutachtung
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
