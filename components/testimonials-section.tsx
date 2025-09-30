import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Schmidt',
    rating: 5,
    text: 'Absolut professionelle Arbeit! Mein Auto sieht aus wie neu. Die Innenraumreinigung war perfekt und der Service war erstklassig.',
  },
  {
    name: 'Sarah Weber',
    rating: 5,
    text: 'Ich bin begeistert von der Lackaufbereitung. Der Glanz ist unglaublich und hält schon seit Monaten an. Sehr empfehlenswert!',
  },
  {
    name: 'Thomas Müller',
    rating: 5,
    text: 'Die Keramikversiegelung war jeden Cent wert. Mein Auto lässt sich jetzt viel leichter reinigen und sieht immer gepflegt aus.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="kundenstimmen" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          Kundenstimmen
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Das sagen unsere zufriedenen Kunden
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-pretty leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
