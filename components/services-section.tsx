import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Car, Home, Brush, Droplets } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Komplettaufbereitung Innen & Außen',
    description:
      'Umfassende Reinigung und Pflege von Innenraum und Außenbereich für ein rundum strahlendes Ergebnis.',
    features: [
      'Handwäsche',
      'Innenreinigung',
      'Felgenpflege',
      'Scheibenreinigung',
    ],
  },
  {
    icon: Shield,
    title: 'Lackschutz & Versiegelung',
    description:
      'Professionelle Politur und Carnauba-Wachs-Versiegelung für langanhaltenden Glanz und Schutz.',
    features: [
      'Lackpolitur',
      'Carnauba-Wachs',
      'Kratzerentfernung',
      'Langzeitschutz',
    ],
  },
  {
    icon: Home,
    title: 'Innenraum & Polster',
    description:
      'Gründliche Reinigung und Pflege von Sitzen, Teppichen und allen Oberflächen im Innenraum.',
    features: [
      'Teppichreinigung',
      'Lederpflege',
      'Kunststoffaufbereitung',
      'Geruchsentfernung',
    ],
  },
  {
    icon: Car,
    title: 'Wohnmobil & Wohnwagen',
    description:
      'Spezielle Komplettpflege für Wohnmobile - vom Fahrerhaus bis zum Wohnbereich.',
    features: [
      'Außenwäsche',
      'Innenbereich',
      'Stoffverdeck-Reinigung',
      'Küchenbereich',
    ],
  },
  {
    icon: Brush,
    title: 'Zusatzleistungen',
    description:
      'Individuelle Extras für besondere Anforderungen und Problemfälle.',
    features: [
      'Ozonbehandlung',
      'Hundehaarentfernung',
      'Nikotinentfernung',
      'Motorwäsche',
    ],
  },
  {
    icon: Droplets,
    title: 'Hol- & Bringservice',
    description:
      'Bequemer Abholservice in Hamburg - wir kümmern uns um den Transport Ihres Fahrzeugs.',
    features: [
      'Kostenlose Beratung',
      'Terminvereinbarung',
      'Persönliche Übergabe',
      'Hamburg-weit',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00152a]/10 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            UNSERE LEISTUNGEN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Professionelle Aufbereitung{' '}
            <span className="text-yellow-400">in Hamburg-Billstedt</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vom gründlichen Innenraum-Service bis zur hochwertigen
            Lackversiegelung - wir bieten maßgeschneiderte Lösungen für PKW,
            Wohnmobile und gewerbliche Fahrzeuge.
          </p>
        </motion.div>

        {/* Services Grid - Jetzt 6 Karten für bessere Abdeckung */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                <CardContent className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                      <service.icon className="w-7 h-7 text-yellow-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors group/btn"
                  >
                    Details ansehen
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-zinc-900/50 border border-yellow-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">
              Individuelle Beratung vor Ort
            </h3>
            <p className="text-gray-300 mb-6">
              Jedes Fahrzeug ist einzigartig. Vereinbaren Sie einen kostenlosen
              Beratungstermin für eine persönliche Einschätzung und ein
              maßgeschneidertes Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Kostenlose Beratung
              </Link>
              <Link
                href="/leistungen"
                className="bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white/20 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
