'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Phone,
  Paintbrush,
  Truck,
  Home,
  Droplets,
  Brush,
  Shield,
  Zap,
  CheckCircle,
  Car,
} from 'lucide-react'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: 'Komplettaufbereitung Innen & Außen',
      description:
        'Umfassende Rundum-Pflege für Ihr Fahrzeug - von der gründlichen Innenreinigung bis zur professionellen Außenaufbereitung. Perfekt für Generalüberholungen, Verkaufsvorbereitungen und Leasingrückgaben.',
      features: [
        'Gründliches Staubsaugen von Boden, Sitzen, Cockpit und Kofferraum',
        'Handwäsche der Karosserie mit Premium-Pflegemitteln',
        'Komplette Innenraum- und Außenreinigung',
        'Felgen- und Radkasten-Intensivreinigung',
        'Scheibenreinigung innen & außen',
      ],
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['PKW', 'SUV', 'Transporter', 'Wohnmobile'],
    },
    {
      icon: Paintbrush,
      title: 'Lackpolitur & Versiegelung',
      description:
        'Maschinelle Lackreinigung und hochwertige Politur mit Carnauba-Wachs für tiefen Glanz und langanhaltenden Schutz. Entfernt Kratzer, Hologramme und schützt vor Umwelteinflüssen.',
      features: [
        'Mehrstufige Lackpolitur gegen Kratzer und Hologramme',
        'Carnauba-Wachs Versiegelung für Tiefenglanz',
        'UV- und Umweltschutz',
        'Auffrischung und Konservierung aller Außenkunststoffe',
        'Langzeitschutz für Ihren Lack',
      ],
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['Alle Lacktypen', 'Kratzerentfernung', 'Langzeitschutz'],
    },
    {
      icon: Home,
      title: 'Innenraumaufbereitung',
      description:
        'Gründliche Reinigung und Pflege des gesamten Innenraums. Von Teppichen über Polster bis zu allen Oberflächen - für ein frisches und gepflegtes Interieur.',
      features: [
        'Tiefenreinigung von Textil- und Ledersitzen',
        'Feuchtreinigung von Kunststoffteilen, Fußmatten und Polstern',
        'Kunststoffpflege mit Farbauffrischungseffekt',
        'Armaturenbrett- und Cockpit-Reinigung',
        'Geruchsneutralisierung und -entfernung',
      ],
      image:
        'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['Textil & Leder', 'Geruchsentfernung', 'Komplettreinigung'],
    },
    {
      icon: Truck,
      title: 'Wohnmobil & Wohnwagen Komplett',
      description:
        'Spezielle Komplettaufbereitung für Reisemobile und Wohnwagen. Vom Fahrerhaus bis zum Wohnbereich - inklusive Möbelreinigung und Stoffverdeck-Pflege.',
      features: [
        'Außenwäsche großer Flächen',
        'Wohnbereich-Komplettreinigung und Desinfektion',
        'Möbel- und Polsterreinigung',
        'Küche und Sanitärbereich',
        'Stoffverdeck-Pflege bei Cabrios',
      ],
      image:
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['Alle Größen', 'Innen & Außen', 'Spezialbehandlung'],
    },
    {
      icon: Droplets,
      title: 'Motorwäsche & Unterboden',
      description:
        'Professionelle Motorraumreinigung für bessere Kühlleistung und Werterhalt. Inklusive Unterbodenpflege, Dichtungskontrolle und Korrosionsschutz.',
      features: [
        'Drucklose Motorraumreinigung',
        'Aggregatschutz und -pflege',
        'Unterbodenkontrolle und -reinigung',
        'Dichtungspflege und -konservierung',
        'Korrosionsschutz',
      ],
      image:
        'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['Schonende Reinigung', 'Werterhalt', 'Professionell'],
    },
    {
      icon: Brush,
      title: 'Felgen & Außenbereich',
      description:
        'Intensive Reinigung und Pflege von Felgen, Radkästen, Außenkunststoffen, Reifen und Türdichtungen für ein perfektes Gesamterscheinungsbild.',
      features: [
        'Intensivreinigung von Felgen und Radkästen',
        'Pflege und Konservierung von Außenkunststoffen',
        'Reifenpflege und -konservierung',
        'Reinigung und Schmierung der Türdichtungen',
        'Bremsstaub-Entfernung',
      ],
      image: '/images/bmw-02.jpg',
      details: ['Felgenreinigung', 'Kunststoffpflege', 'Dichtungen'],
    },
    {
      icon: Shield,
      title: 'Zusatzleistungen & Problemlösungen',
      description:
        'Individuelle Extras für besondere Anforderungen. Von der Haarentfernung bis zur Ozonbehandlung - wir lösen jedes Problem professionell.',
      features: [
        'Ozonbehandlung gegen Gerüche',
        'Hundehaar-Entfernung',
        'Nikotin-Entfernung',
        'Fleckentfernung auf Textil und Leder',
        'Spezialreinigung für Cabrio-Stoffverdecke',
      ],
      image:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: ['Problemlösungen', 'Individuell', 'Schnelle Hilfe'],
    },
  ]

  const additionalServices = [
    {
      icon: Truck,
      title: 'Hol- & Bringservice',
      description:
        'Bequemer Abholservice in Hamburg - wir kümmern uns um den Transport Ihres Fahrzeugs. Auf Anfrage in ganz Hamburg verfügbar.',
    },
    {
      icon: Zap,
      title: 'Express-Service',
      description:
        'Schnelle Grundreinigung für zwischendurch - perfekt für spontane Termine und kurzfristige Aufbereitungen.',
    },
    {
      icon: CheckCircle,
      title: 'Leasing-Rückgabe',
      description:
        'Professionelle Aufbereitung für die perfekte Leasingrückgabe ohne Beanstandungen. Ideal für Fahrzeugverkauf.',
    },
    {
      icon: Car,
      title: 'Cabrio-Spezial',
      description:
        'Spezialreinigung und Pflege von Stoffverdecken bei Cabriolets. Schonende Behandlung für langanhaltenden Schutz.',
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#00152a]/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Unsere <span className="text-yellow-400">Leistungen</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Professionelle Fahrzeugaufbereitung in Hamburg-Billstedt - Vom PKW
              bis zum Wohnmobil, von der Grundreinigung bis zur Premium-Politur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Termin vereinbaren
                </Button>
              </Link>
              <a href="tel:+4917662912411">
                <Button
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#00152a] font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Direkt anrufen
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {service.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {service.details.map((detail, idx) => (
                            <span
                              key={idx}
                              className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-yellow-400 font-semibold text-sm">
                        Individuelles Angebot nach Begutachtung
                      </div>
                      <Link href="/kontakt">
                        <Button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold rounded-full px-6 transition-all duration-300 hover:scale-105">
                          Angebot anfragen
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative h-[400px] rounded-2xl overflow-hidden group ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zusätzliche <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Rundum-Service für maximale Bequemlichkeit und individuelle
              Lösungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00152a] to-zinc-900 border border-yellow-400/20 rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Individuelle Beratung vor Ort
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Jedes Fahrzeug ist einzigartig. Vereinbaren Sie eine kostenlose
              Vor-Ort-Begutachtung für ein maßgeschneidertes Angebot ohne
              versteckte Kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Kostenlose Beratung
                </Button>
              </Link>
              <a href="tel:+4917662912411">
                <Button
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#00152a] font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Anrufen
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
