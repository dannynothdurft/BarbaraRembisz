"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
              <BeforeAfter before={img.before} after={img.after} />
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    if (x < 0) x = 0;
    if (x > 100) x = 100;
    setPosition(x);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Vorher-Bild */}
      <Image
        src={before}
        alt="Vorher"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />

      {/* Nachher-Bild */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={after}
          alt="Nachher"
          width={600}
          height={400}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black"></div>
      </div>
    </div>
  );
}


