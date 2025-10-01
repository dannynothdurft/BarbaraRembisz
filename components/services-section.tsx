import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Home, Paintbrush, Truck } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Premium Innen- & Außenaufbereitung',
    description:
      'Komplette professionelle Aufbereitung von Innen- und Außenbereich für ein perfektes Gesamtergebnis.',
  },
  {
    icon: Paintbrush,
    title: 'Lackpolitur & Versiegelung',
    description:
      'Hochwertige Lackpolitur und Versiegelung mit Carnauba-Wachs für langanhaltenden Schutz und brillanten Glanz.',
  },
  {
    icon: Home,
    title: 'Leder- & Polsterpflege',
    description:
      'Professionelle Pflege und Aufbereitung von Leder und Polstern für ein gepflegtes Interieur.',
  },
  {
    icon: Truck,
    title: 'Wohnmobil-Komplettaufbereitung',
    description:
      'Spezielle Komplettaufbereitung für Wohnmobile und Wohnwagen - von der Kabine bis zum Wohnbereich.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            UNSERE TOP-LÖSUNGEN
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Umfassende Autoaufbereitungslösungen für
            <br />
            ein makelloses Finish
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie umfassende Autoaufbereitungslösungen, die darauf
            ausgelegt sind, das Aussehen Ihres Fahrzeugs zu restaurieren, zu
            schützen und zu verbessern. Unser Expertenteam stellt sicher, dass
            jede Oberfläche mit Präzision behandelt wird und ein makelloses
            Finish liefert, das wie neu aussieht und sich anfühlt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 hover:border-yellow-400 transition-colors"
            >
              <CardContent className="p-6">
                <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="text-yellow-400 hover:text-yellow-300 p-0"
                >
                  Mehr erfahren →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
