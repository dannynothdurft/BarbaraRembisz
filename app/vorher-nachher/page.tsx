"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"
import { MoveHorizontal } from 'lucide-react'
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export default function VorherNachherPage() {
  const images = [
    { before: "/images/before-after/IMG_2704.jpg", after: "/images/before-after/IMG_2801.jpg" },
    { before: "/images/before-after/IMG_2712.jpg", after: "/images/before-after/IMG_2773.jpg" },
    { before: "/images/before-after/IMG_2719.jpg", after: "/images/before-after/IMG_2777.jpg" },
    { before: "/images/before-after/IMG_2721.jpg", after: "/images/before-after/IMG_2792.jpg" },
    { before: "/images/before-after/IMG_2734.jpg", after: "/images/before-after/IMG_2780.jpg" },
    { before: "/images/before-after/IMG_2748.jpg", after: "/images/before-after/IMG_2790.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="pt-28 pb-20">
        <section className="max-w-6xl mx-auto px-4 text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Vorher / Nachher Galerie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Erleben Sie den Unterschied – professionelle Autoaufbereitung mit Liebe zum Detail.
          </motion.p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <BeforeAfterSlider beforeImage={img.before} afterImage={img.after} alt="Pups" />
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before and After comparison' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
      onMouseDown={(e) => {
        handleMove(e.clientX);
        handleMouseDown();
      }}
      onTouchStart={(e) => {
        handleMove(e.touches[0].clientX);
        handleMouseDown();
      }}
    >
      <img
        src={afterImage}
        alt={`${alt} - After`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-yellow-200 shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-yellow-200 rounded-full shadow-xl flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
        Vorher
      </div>

      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
        Nachher
      </div>
    </div>
  );
}