import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Sparkles, Car, Phone, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Kontakt & Beratung',
    description: 'Kontaktieren Sie uns telefonisch oder per WhatsApp für eine kostenlose Erstberatung. Wir besprechen Ihre Wünsche und vereinbaren einen Termin zur Vor-Ort-Begutachtung.',
    details: ['Telefonische Beratung', 'Terminvereinbarung', 'Kostenlose Einschätzung']
  },
  {
    icon: Car,
    title: 'Vor-Ort Begutachtung',
    description: 'Wir begutachten Ihr Fahrzeug persönlich und erstellen ein individuelles Angebot basierend auf Zustand und gewünschten Leistungen. Transparente Preise ohne Überraschungen.',
    details: ['Persönliche Einschätzung', 'Individuelles Angebot', 'Transparente Preise']
  },
  {
    icon: Sparkles,
    title: 'Professionelle Aufbereitung',
    description: 'Ihr Fahrzeug erhält unsere volle Aufmerksamkeit. Mit modernen Techniken und hochwertigen Produkten bringen wir es zurück in Top-Zustand.',
    details: ['Handwerkliche Qualität', 'Hochwertige Produkte', 'Sorgfältige Ausführung']
  },
  {
    icon: CheckCircle,
    title: 'Abholung & Übergabe',
    description: 'Bei der Übergabe zeigen wir Ihnen die Ergebnisse und sind für Rückfragen da. Optional mit Hol- und Bringservice in ganz Hamburg.',
    details: ['Persönliche Übergabe', 'Qualitätskontrolle', 'Hol- & Bringservice']
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152a]/10 to-black" />
      
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
            SO EINFACH GEHT'S
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ihr Weg zum <span className="text-yellow-400">perfekten Ergebnis</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Vom ersten Kontakt bis zur fertigen Aufbereitung - 
            transparent und unkompliziert in Hamburg-Billstedt
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-yellow-400/30 transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <step.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-zinc-900/50 border border-yellow-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">
              Starten Sie jetzt mit Ihrer Aufbereitung
            </h3>
            <p className="text-gray-300 mb-6">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein 
              unverbindliches Angebot - persönlich und transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Termin vereinbaren
              </Link>
              <a
                href="tel:+4917662912411"
                className="bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white/20 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}