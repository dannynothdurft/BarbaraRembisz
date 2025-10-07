import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Markus B.',
    location: 'Hamburg-Billstedt',
    vehicle: 'VW Golf',
    review: 'Mein Golf sah aus wie neu! Besonders die Innenreinigung war outstanding. Die Teppiche waren nach der Hundehaar-Entfernung wie frisch verlegt. Komme definitiv wieder!',
    rating: 5,
    service: 'Komplettaufbereitung',
  },
  {
    name: 'Sabine L.',
    location: 'Hamburg-Horn',
    vehicle: 'BMW 3er',
    review: 'Endlich mal ein Profi, der sich Zeit nimmt. Die Lackpolitur hat tiefe Kratzer entfernt und der Glanz ist fantastisch. Sehr faire Preisgestaltung nach Vor-Ort-Begutachtung.',
    rating: 5,
    service: 'Lackpolitur & Versiegelung',
  },
  {
    name: 'Thomas R.',
    location: 'Hamburg-Mümmelmannsberg',
    vehicle: 'Wohnmobil',
    review: 'Unser Wohnmobil war nach dem Winter in einem traurigen Zustand. Die Komplettaufbereitung hat es gerettet - von der Küche bis zum Stoffverdeck. Absolute Empfehlung!',
    rating: 5,
    service: 'Wohnmobil-Komplettpflege',
  },
  {
    name: 'Jennifer K.',
    location: 'Hamburg',
    vehicle: 'Audi A4 Leasing',
    review: 'Perfekt für die Leasingrückgabe! Haben mir sogar Tipps gegeben, was wirklich notwendig ist. Keine versteckten Kosten und super Ergebnis. Danke!',
    rating: 5,
    service: 'Leasingrückgabe',
  },
  {
    name: 'Dieter S.',
    location: 'Hamburg-Billbrook',
    vehicle: 'Mercedes Vito',
    review: 'Der Hol- und Bringservice hat mir den Tag gerettet. Mein Transporter war voller Baustaub - jetzt sieht er aus wie aus dem Showroom. Top Service!',
    rating: 5,
    service: 'Innenreinigung & Holservice',
  },
  {
    name: 'Alexandra M.',
    location: 'Hamburg',
    vehicle: 'Opel Corsa',
    review: 'Die Ozonbehandlung hat den unangenehmen Geruch nach einem verschütteten Milchkaffee komplett entfernt. Unglaublich! Freundlicher Service und schnelle Terminvergabe.',
    rating: 5,
    service: 'Geruchsentfernung',
  },
]

export function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152a]/10 to-zinc-900/50" />
      
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
            WAS UNSERE KUNDEN SAGEN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bewertungen aus <span className="text-yellow-400">Hamburg</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Echte Erfahrungen von zufriedenen Kunden aus Hamburg und Umgebung
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full hover:scale-105">
                <CardContent className="p-6 lg:p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-yellow-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    "{review.review}"
                  </p>

                  {/* Service Badge */}
                  <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1 mb-4">
                    <span className="text-yellow-400 text-xs font-semibold">
                      {review.service}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                      <span className="text-yellow-400 font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm">
                        {review.name}
                      </h4>
                      <div className="flex flex-wrap gap-x-2">
                        <p className="text-gray-400 text-xs">{review.location}</p>
                        <span className="text-gray-600">•</span>
                        <p className="text-gray-400 text-xs">{review.vehicle}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-zinc-900/50 border border-yellow-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                <p className="text-gray-400 text-sm">Zufriedene Kunden</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">4.9/5</div>
                <p className="text-gray-400 text-sm">Durchschnittliche Bewertung</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                <p className="text-gray-400 text-sm">Weiterempfehlungsrate</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Vertrauen Sie auf die Erfahrung unserer zufriedenen Kunden aus Hamburg und Umgebung
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}