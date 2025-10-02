import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/bmw-01.jpg"
              alt="Professional car detailing"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Unser Engagement für Premium-Autoaufbereitung, die das Beste aus
              Ihrem Fahrzeug herausholt und jedes Mal für Showroom-Glanz sorgt
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Wir sind bestrebt, Premium-Autoaufbereitungsservices zu liefern,
              die das Beste aus Ihrem Fahrzeug herausholen. Mit akribischer
              Aufmerksamkeit für jedes Detail stellen wir sicher, dass Ihr Auto
              gereinigt, restauriert und nach höchsten Standards gepflegt wird.
              Unser Ziel ist es nicht nur, Ihr Auto sauber aussehen zu lassen,
              sondern ihm einen Showroom-Glanz zu verleihen, der alle Blicke auf
              sich zieht.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Jeder Service wird durch professionelle Techniken und erstklassige
              Produkte unterstützt, um langanhaltende, beeindruckende Ergebnisse
              zu gewährleisten.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full">
              Mehr über uns erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
