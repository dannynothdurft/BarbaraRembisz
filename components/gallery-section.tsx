'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    before: '/dirty-car-interior.png',
    after: '/clean-car-interior.png',
    title: 'Innenraumreinigung',
  },
  {
    before: '/scratched-car-paint.png',
    after: '/shiny-polished-car-paint-after-detailing.jpg',
    title: 'Lackaufbereitung',
  },
  {
    before: '/dull-car-exterior-before-ceramic-coating.jpg',
    after: '/glossy-car-with-ceramic-coating-shine.jpg',
    title: 'Keramikversiegelung',
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    )
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          Vorher-Nachher
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Sehen Sie selbst die beeindruckenden Ergebnisse unserer
          professionellen Autoaufbereitung
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold z-10">
                Vorher
              </div>
              <img
                src={galleryImages[currentIndex].before || '/placeholder.svg'}
                alt={`${galleryImages[currentIndex].title} - Vorher`}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* After Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold z-10">
                Nachher
              </div>
              <img
                src={galleryImages[currentIndex].after || '/placeholder.svg'}
                alt={`${galleryImages[currentIndex].title} - Nachher`}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold">
              {galleryImages[currentIndex].title}
            </h3>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                  aria-label={`Gehe zu Bild ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
