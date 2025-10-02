import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Car, Paintbrush, Truck } from 'lucide-react'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: 'Premium Innen- & Außenaufbereitung',
      description:
        'Komplette professionelle Aufbereitung von Innen- und Außenbereich für PKW, SUV, Transporter und Wohnmobile. Wir sorgen für ein perfektes Gesamtergebnis.',
      features: [
        'Handwäsche mit Premium-Produkten',
        'Tiefenreinigung von Polstern und Teppichen',
        'Armaturenbrett und Verkleidungen',
        'Felgenreinigung und -versiegelung',
      ],
      image: '/images/team-01.jpg',
    },
    {
      icon: Paintbrush,
      title: 'Lackpolitur & Versiegelung mit Carnauba-Wachs',
      description:
        'Hochwertige Lackpolitur und Versiegelung mit echtem Carnauba-Wachs für langanhaltenden Schutz und brillanten Glanz. Ihr Lack wird optimal geschützt.',
      features: [
        'Mehrstufige Politur',
        'Carnauba-Wachs Versiegelung',
        'Kratzerentfernung',
        'Langanhaltender Schutz',
      ],
      image: '/images/bmw-03.jpg',
    },
    {
      icon: Car,
      title: 'Leder- & Polsterpflege',
      description:
        'Professionelle und schonende Pflege von Leder und Polstern. Wir verwenden spezielle Pflegeprodukte für ein gepflegtes und frisches Interieur.',
      features: [
        'Lederreinigung und -pflege',
        'Polsterreinigung',
        'Fleckenentfernung',
        'Geruchsneutralisierung',
      ],
      image: '/images/bmw-04.jpg',
    },
    {
      icon: Truck,
      title: 'Spezielle Komplettaufbereitung für Wohnmobile',
      description:
        'Spezialisierte Aufbereitung für Wohnmobile und Wohnwagen. Von der Fahrerkabine bis zum Wohnbereich - wir kümmern uns um alles.',
      features: [
        'Komplette Innen- und Außenreinigung',
        'Wohnbereich-Aufbereitung',
        'Polstermöbel-Reinigung',
        'Spezielle Behandlung großer Flächen',
      ],
      image: '/images/bmw-05.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Unsere <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Professionelle Autoaufbereitung für PKW, SUV, Transporter,
              Wohnmobile und Wohnwagen - von der Grundreinigung bis zur
              Premium-Versiegelung
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-400"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8">
                      Mehr erfahren
                    </Button>
                  </div>
                  <div
                    className={`relative h-[400px] rounded-2xl overflow-hidden ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <Image
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Bereit für eine professionelle Aufbereitung?
            </h2>
            <p className="text-black/80 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein individuelles Angebot oder
              vereinbaren Sie direkt einen Termin. Wir bedienen PKW, SUV,
              Transporter, Wohnmobile und Wohnwagen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 py-6 text-lg"
              >
                Jetzt Termin vereinbaren
              </Link>
              <Link
                href="/kontakt"
                className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-lg"
              >
                Angebot anfordern
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
