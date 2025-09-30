import { HeroSection } from '@/components/hero-section'
import { GallerySection } from '@/components/gallery-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
