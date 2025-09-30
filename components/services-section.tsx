import { Sparkles, Droplets, Shield, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Sparkles,
    title: 'Innenraumreinigung',
    description:
      'Gründliche Reinigung und Pflege des gesamten Innenraums für ein frisches Fahrgefühl.',
  },
  {
    icon: Droplets,
    title: 'Lackaufbereitung & Politur',
    description:
      'Professionelle Lackpflege für dauerhaften Glanz und Schutz vor Umwelteinflüssen.',
  },
  {
    icon: Shield,
    title: 'Keramikversiegelung',
    description:
      'Langanhaltender Schutz und brillanter Glanz durch hochwertige Keramikversiegelung.',
  },
  {
    icon: TrendingUp,
    title: 'Fahrzeugaufbereitung für Verkauf',
    description:
      'Optimale Präsentation Ihres Fahrzeugs für einen erfolgreichen Verkauf.',
  },
]

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          Unsere Leistungen
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Professionelle Autoaufbereitung für jeden Anspruch
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-balance">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
