import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CheckCircle2, Award, Users, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Über <span className="text-yellow-400">Uns</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Professionelle Autoaufbereitung mit Leidenschaft und Präzision
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Barbara Rembisz Autoaufbereitung
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Willkommen bei Barbara Rembisz Autoaufbereitung - Ihrem Experten
                für professionelle Fahrzeugpflege in Hamburg. Mit jahrelanger
                Erfahrung und Leidenschaft für Details sorgen wir dafür, dass
                Ihr Fahrzeug in neuem Glanz erstrahlt.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Unser Engagement für Qualität und Kundenzufriedenheit macht uns
                zu Ihrem vertrauenswürdigen Partner für alle Aspekte der
                Autoaufbereitung. Wir verwenden nur hochwertige,
                umweltfreundliche Produkte und modernste Techniken.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Professionelle Expertise
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Jahrelange Erfahrung in der Fahrzeugaufbereitung
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Umweltfreundlich
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Verwendung ökologischer Produkte
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Kundenzufriedenheit
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Ihre Zufriedenheit ist unser oberstes Ziel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/professional-car-detailing-service-luxury-vehicle-.jpg"
                alt="Professionelle Autoaufbereitung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Qualität</h3>
              <p className="text-gray-400">
                Höchste Standards bei jedem Service für perfekte Ergebnisse
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vertrauen</h3>
              <p className="text-gray-400">
                Zuverlässiger Service und transparente Kommunikation
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Präzision</h3>
              <p className="text-gray-400">
                Liebe zum Detail bei jedem Arbeitsschritt
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Bereit für eine professionelle Aufbereitung?
            </h2>
            <p className="text-black/80 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute und erleben Sie den Unterschied
            </p>
            <Link
              href="/kontakt"
              className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 py-6 text-lg"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
