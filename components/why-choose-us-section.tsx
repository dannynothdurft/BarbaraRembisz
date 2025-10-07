import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield } from 'lucide-react'

const strengths = [
  {
    icon: Award,
    title: 'Handwerkliche Präzision',
    description: 'Jedes Fahrzeug erhält unsere volle Aufmerksamkeit und Sorgfalt - vom Innenraum bis zur Lackversiegelung.',
  },
  {
    icon: Users,
    title: 'Persönliche Beratung',
    description: 'Individuelle Lösungen nach gründlicher Begutachtung. Transparente Kommunikation ohne versteckte Kosten.',
  },
  {
    icon: Clock,
    title: 'Moderne Techniken',
    description: 'Hochwertige Pflegeprodukte und zeitgemäße Aufbereitungsmethoden für optimale Ergebnisse.',
  },
  {
    icon: Shield,
    title: 'Zuverlässigkeit',
    description: 'Pünktliche Abwicklung und verlässliche Termine. Ihr Fahrzeug ist bei uns in besten Händen.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152a]/10 to-zinc-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-2">
              <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                WARUM UNS KUNDEN VERTRAUEN
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ihr lokaler Profi für <span className="text-yellow-400">makellose Ergebnisse</span>
              </h2>
            </div>

            {/* Einleitungstext */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Als Ihr Aufbereiter in <span className="text-yellow-400 font-semibold">Hamburg-Billstedt</span> 
                {' '}setzen wir auf handwerkliche Qualität und persönlichen Service. 
                Kein Fließbandbetrieb, sondern maßgeschneiderte Lösungen für Ihr Fahrzeug.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Ob PKW, Wohnmobil oder Leasingrückgabe - wir nehmen uns die Zeit, 
                die Ihr Fahrzeug für ein perfektes Ergebnis benötigt.
              </p>
            </div>

            {/* Stats - Ehrlich und authentisch */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">100%</div>
                <p className="text-gray-400 text-sm">Zufriedenheit</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">0</div>
                <p className="text-gray-400 text-sm">Versteckte Kosten</p>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                      <strength.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group"
          >
            <Image
              src="/images/bmw-02.jpg"
              alt="Professionelle Fahrzeugaufbereitung in Hamburg - Handwerkliche Qualität"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            
            {/* Image Badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-white text-sm font-semibold">
                Perfektion in jedem Detail
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}