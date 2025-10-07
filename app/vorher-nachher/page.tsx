'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MoveHorizontal,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Car,
  Home,
  Sparkles,
} from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title?: string
  description?: string
  service?: string
  vehicle?: string
}

export default function VorherNachherPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('alle')

  const projects = [
    {
      before: '/images/before-after/IMG_2704.jpg',
      after: '/images/before-after/IMG_2801.jpg',
      title: 'Motorwäsche BMW E46',
      description:
        'Gründliche Motorraumreinigung und -pflege für optimale Kühlleistung und Werterhalt',
      service: 'Motorwäsche',
      vehicle: 'BMW E46 3er',
      category: 'motor',
    },
    {
      before: '/images/before-after/IMG_2712.jpg',
      after: '/images/before-after/IMG_2773.jpg',
      title: 'Außenaufbereitung mit Politur',
      description:
        'Komplette Außenwäsche, Lackpolitur und Carnauba-Wachs Versiegelung',
      service: 'Außenpolitur & Versiegelung',
      vehicle: 'BMW E46 3er',
      category: 'lack',
    },
    {
      before: '/images/before-after/IMG_2719.jpg',
      after: '/images/before-after/IMG_2777.jpg',
      title: 'Felgen & Radkästen Intensiv',
      description:
        'Tiefenreinigung der Felgen, Bremsstaubentfernung und Radkastenpflege',
      service: 'Felgenreinigung',
      vehicle: 'BMW E46 3er',
      category: 'felgen',
    },
    {
      before: '/images/before-after/IMG_2721.jpg',
      after: '/images/before-after/IMG_2792.jpg',
      title: 'Innenraum Komplettaufbereitung',
      description:
        'Gründliche Reinigung aller Oberflächen, Lederpflege und Teppichsanierung',
      service: 'Innenraumaufbereitung',
      vehicle: 'BMW E46 3er',
      category: 'innen',
    },
    {
      before: '/images/before-after/IMG_2734.jpg',
      after: '/images/before-after/IMG_2780.jpg',
      title: 'Lederpflege & Kunststoffaufbereitung',
      description:
        'Intensive Lederpflege der Sitze und Aufbereitung aller Kunststoffteile',
      service: 'Leder- & Kunststoffpflege',
      vehicle: 'BMW E46 3er',
      category: 'innen',
    },
    {
      before: '/images/before-after/IMG_2748.jpg',
      after: '/images/before-after/IMG_2790.jpg',
      title: 'Teppich & Polster Tiefenreinigung',
      description:
        'Professionelle Teppichreinigung und Textilpolster-Sanierung',
      service: 'Teppich- & Polsterreinigung',
      vehicle: 'BMW E46 3er',
      category: 'innen',
    },
  ]

  const categories = [
    {
      key: 'alle',
      label: 'Alle Projekte',
      icon: Sparkles,
      count: projects.length,
    },
    {
      key: 'komplett',
      label: 'Komplett',
      icon: Car,
      count: projects.filter((p) => p.category === 'komplett').length,
    },
    {
      key: 'innen',
      label: 'Innenraum',
      icon: Home,
      count: projects.filter((p) => p.category === 'innen').length,
    },
    {
      key: 'lack',
      label: 'Lack',
      icon: Sparkles,
      count: projects.filter((p) => p.category === 'lack').length,
    },
    {
      key: 'aussen',
      label: 'Außen',
      icon: Car,
      count: projects.filter((p) => p.category === 'aussen').length,
    },
    {
      key: 'wohnmobil',
      label: 'Wohnmobile',
      icon: Home,
      count: projects.filter((p) => p.category === 'wohnmobil').length,
    },
    {
      key: 'felgen',
      label: 'Felgen',
      icon: Car,
      count: projects.filter((p) => p.category === 'felgen').length,
    },
    {
      key: 'motor',
      label: 'Motorwäsche',
      icon: Car,
      count: projects.filter((p) => p.category === 'motor').length,
    },
  ]

  const filteredProjects =
    filter === 'alle'
      ? projects
      : projects.filter((project) => project.category === filter)

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return

    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % filteredProjects.length)
    } else {
      setSelectedImage(
        (selectedImage - 1 + filteredProjects.length) % filteredProjects.length,
      )
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'ArrowLeft') navigateImage('prev')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="pt-28 pb-20">
        {/* Header Section */}
        <section className="max-w-6xl mx-auto px-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Vorher</span> / Nachher
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Sehen Sie selbst, welchen Unterschied professionelle Aufbereitung
              macht. Von der Grundreinigung bis zur Premium-Politur - jedes
              Projekt ein Unikat.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                {projects.length}+
              </div>
              <div className="text-gray-400 text-sm">Projekte</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                100%
              </div>
              <div className="text-gray-400 text-sm">Zufriedenheit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                50+
              </div>
              <div className="text-gray-400 text-sm">Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                5/5
              </div>
              <div className="text-gray-400 text-sm">Bewertung</div>
            </div>
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                    filter === category.key
                      ? 'bg-yellow-400 text-[#00152a] border-yellow-400 font-semibold'
                      : 'bg-white/5 text-white border-white/20 hover:border-yellow-400 hover:text-yellow-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    filteredProjects.findIndex((p) => p === project),
                  )
                }
              >
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 hover:scale-105">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    title={project.title}
                    description={project.description}
                    service={project.service}
                    vehicle={project.vehicle}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-yellow-400 text-[#00152a] p-3 rounded-full shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <h3 className="text-white font-bold text-sm mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {project.vehicle} • {project.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 text-white hover:text-[#00152a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 text-white hover:text-[#00152a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Display */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <BeforeAfterSlider
                    beforeImage={filteredProjects[selectedImage].before}
                    afterImage={filteredProjects[selectedImage].after}
                    title={filteredProjects[selectedImage].title}
                    description={filteredProjects[selectedImage].description}
                    service={filteredProjects[selectedImage].service}
                    vehicle={filteredProjects[selectedImage].vehicle}
                  />
                </div>

                {/* Project Info */}
                <div className="text-center mt-4">
                  <h3 className="text-white text-xl font-bold">
                    {filteredProjects[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {filteredProjects[selectedImage].vehicle} •{' '}
                    {filteredProjects[selectedImage].service}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {filteredProjects[selectedImage].description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

// BeforeAfterSlider Component bleibt gleich wie vorher, nur mit erweiterten Props
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
  service,
  vehicle,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none bg-black"
      onMouseDown={(e) => {
        handleMove(e.clientX)
        handleMouseDown()
      }}
      onTouchStart={(e) => {
        handleMove(e.touches[0].clientX)
        handleMouseDown()
      }}
    >
      <img
        src={afterImage}
        alt={`${title} - Nachher`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Vorher`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-2xl"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
          <MoveHorizontal className="w-5 h-5 text-[#00152a]" />
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20">
        👈 Vorher
      </div>

      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20">
        Nachher 👉
      </div>
    </div>
  )
}
