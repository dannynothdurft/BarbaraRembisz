'use client'
import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseUsSection } from '@/components/why-choose-us-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ReviewsSection } from '@/components/reviews-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ReviewsSection />
    </>
  )
}
