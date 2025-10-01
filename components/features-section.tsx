'use client'
import React from 'react'
import { Sparkles, Leaf, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Premium Innen- & Außenaufbereitung',
    description:
      'Professionelle Komplettaufbereitung für Innen- und Außenbereich mit höchsten Qualitätsstandards.',
  },
  {
    icon: Leaf,
    title: 'Lackpolitur & Versiegelung',
    description:
      'Hochwertige Lackpolitur und Versiegelung mit Carnauba-Wachs für langanhaltenden Schutz und Glanz.',
  },
  {
    icon: Shield,
    title: 'Leder- & Polsterpflege',
    description:
      'Schonende und gründliche Pflege von Leder und Polstern für ein gepflegtes Interieur.',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4">
            ÜBER UNS
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-yellow-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
