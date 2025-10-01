import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Sparkles, Car } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Termin vereinbaren',
    description:
      'Wählen Sie den Aufbereitungsservice, der am besten zu Ihren Bedürfnissen passt, und vereinbaren Sie einen Termin zu Ihrer Bequemlichkeit. Sie können online buchen, uns anrufen oder unseren Standort besuchen. Wir bestätigen Ihre Buchung und geben Ihnen alle notwendigen Vorbereitungsdetails.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Wir bereiten Ihr Auto auf',
    description:
      'Unsere professionellen Aufbereiter reinigen, restaurieren und schützen Ihr Fahrzeug sorgfältig mit hochwertigen Produkten und fortschrittlichen Techniken. Von der Tiefenreinigung des Innenraums bis zur Außenpolitur und Lackschutz stellen wir sicher, dass jeder Zentimeter Ihres Autos makellos aussieht.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Genießen Sie den Glanz',
    description:
      'Sobald die Aufbereitung abgeschlossen ist, wird Ihr Auto makellos, erfrischt und geschützt sein. Holen Sie Ihr Fahrzeug ab oder nutzen Sie unseren Lieferservice (falls verfügbar) und fahren Sie mit Vertrauen davon, in dem Wissen, dass Ihr Auto wie neu aussieht.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            SO FUNKTIONIERT ES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ihr Fahrzeug in nur drei einfachen Schritten aufbereiten lassen
          </h2>
          <Link
            href="/kontakt"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>

        {/* Steps */}
        <div className="space-y-12 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-yellow-400">
                    {step.number}
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl text-gray-300 italic leading-relaxed">
            "Ihr Auto verdient mehr als nur eine schnelle Wäsche. Unsere
            Aufbereitungsservices sind darauf ausgelegt, die Extrameile zu
            gehen, seine Schönheit wiederherzustellen und es vor den Elementen
            zu schützen, damit es weiterhin überall Blicke auf sich zieht."
          </p>
        </div>
      </div>
    </section>
  )
}
