import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-car-detailing-shiny-clean-luxury-car.jpg"
          alt="Professionell gereinigtes Auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Ihre Autoaufbereitung in Hamburg
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Glanz, Sauberkeit und Werterhalt – mit Leidenschaft und Präzision.
        </p>
        <Link href="/terminbuchung">
          <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6">
            Jetzt Termin vereinbaren
          </Button>
        </Link>
      </div>
    </section>
  )
}
