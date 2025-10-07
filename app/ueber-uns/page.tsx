"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Users, Target, MapPin, Phone, Clock } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
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
              Über <span className="text-yellow-400">Uns</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ihr lokaler Profi für Fahrzeugaufbereitung in Hamburg-Billstedt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Termin vereinbaren
                </button>
              </Link>
              <a href="tel:+4917662912411">
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  Direkt anrufen
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ihr Partner in <span className="text-yellow-400">Hamburg-Billstedt</span>
                </h2>
                <div className="w-20 h-1 bg-yellow-400 rounded-full mb-6" />
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Als Ihr zuverlässiger Aufbereiter in <span className="text-yellow-400 font-semibold">Hamburg-Billstedt</span> 
                {' '}setzen wir auf handwerkliche Qualität und persönlichen Service. 
                Kein Fließbandbetrieb, sondern maßgeschneiderte Lösungen für Ihr Fahrzeug.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Ob PKW, Wohnmobil oder Leasingrückgabe - wir nehmen uns die Zeit, 
                die Ihr Fahrzeug für ein perfektes Ergebnis benötigt. 
                Mit modernen Techniken und hochwertigen Pflegeprodukten.
              </p>

              {/* Location & Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Standort</h3>
                    <p className="text-gray-400 text-sm">Hamburg-Billstedt</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Telefon</h3>
                    <p className="text-gray-400 text-sm">0176 629 124 11</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Individuelle Beratung
                    </h3>
                    <p className="text-gray-400">
                      Persönliche Vor-Ort-Begutachtung für maßgeschneiderte Lösungen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Transparente Preise
                    </h3>
                    <p className="text-gray-400">
                      Faire Preisgestaltung nach individueller Bewertung
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Hol- & Bringservice
                    </h3>
                    <p className="text-gray-400">
                      Bequemer Abholservice in ganz Hamburg verfügbar
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden group"
            >
              <Image
                src="/images/roman-01.jpg"
                alt="Professionelle Fahrzeugaufbereitung in Hamburg-Billstedt"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <p className="text-white text-sm font-semibold">
                  🚗 Ihr Fahrzeug in besten Händen
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 p-8 rounded-2xl text-center hover:border-yellow-400/30 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Handwerkliche Qualität</h3>
              <p className="text-gray-400">
                Präzise Arbeit mit modernsten Techniken und hochwertigen Produkten
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 p-8 rounded-2xl text-center hover:border-yellow-400/30 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Persönlicher Service</h3>
              <p className="text-gray-400">
                Individuelle Beratung und transparente Kommunikation
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 p-8 rounded-2xl text-center hover:border-yellow-400/30 transition-all duration-500">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Maßgeschneidert</h3>
              <p className="text-gray-400">
                Individuelle Lösungen für PKW, Wohnmobile und gewerbliche Fahrzeuge
              </p>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Unsere <span className="text-yellow-400">Spezialisierungen</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Vom Komplettservice bis zur Spezialbehandlung - wir haben für jedes Anliegen die passende Lösung
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🚗', title: 'PKW & SUV', desc: 'Komplettaufbereitung' },
                { icon: '🏠', title: 'Wohnmobile', desc: 'Spezialbehandlung' },
                { icon: '📋', title: 'Leasingrückgabe', desc: 'Vorbereitung' },
                { icon: '✨', title: 'Verkaufsvorbereitung', desc: 'Werterhalt' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-500">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00152a] to-zinc-900 border border-yellow-400/20 rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kostenlose Vor-Ort-Begutachtung
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie einen unverbindlichen Beratungstermin für eine persönliche Einschätzung 
              und ein maßgeschneidertes Angebot - transparent und fair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Beratungstermin vereinbaren
                </button>
              </Link>
              <a href="tel:+4917662912411">
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Anrufen
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}