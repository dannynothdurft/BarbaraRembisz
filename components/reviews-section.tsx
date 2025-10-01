import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Michael Schmidt',
    role: 'Autohändler',
    review:
      'Absolut unglaublicher Service! Mein Auto sieht innen und außen wie neu aus. Die Liebe zum Detail war phänomenal. Ich könnte nicht zufriedener sein mit den Ergebnissen. Sehr empfehlenswert!',
    rating: 5,
  },
  {
    name: 'Sarah Müller',
    role: 'Autobesitzerin',
    review:
      'Ich habe schon viele Autoaufbereitungsservices genutzt, aber dieser hat meine Erwartungen übertroffen. Das Team war professionell, freundlich und hat eine erstaunliche Arbeit an meinem Fahrzeug geleistet. Es sieht makellos aus!',
    rating: 5,
  },
  {
    name: 'Thomas Weber',
    role: 'Auto-Enthusiast',
    review:
      'Ich war begeistert von der Transformation! Von der Tiefenreinigung des Innenraums bis zum glänzenden, geschützten Außenbereich hat mein Auto noch nie besser ausgesehen. Jeden Cent wert!',
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            KUNDENBEWERTUNGEN
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Kundenerfahrungen, die für sich sprechen
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {review.review}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
