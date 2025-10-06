'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#00152a] backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.jpg"
              width={150}
              height={50}
              alt="Barbara Rembisz - Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/vorher-nachher"
              className="text-white text-sm font-medium hover:text-yellow-300 transition-colors"
            >
              V/H
            </Link>
            <Link
              href="/about"
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
            >
              Über Uns
            </Link>
            <Link
              href="/services"
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/kontakt"
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <Link
            href="/kontakt"
            className="hidden md:inline-flex bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-full px-6"
          >
            Termin vereinbaren
          </Link>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/98 border-t border-white/10"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-yellow-400 text-base font-medium hover:text-yellow-300 transition-colors py-2"
            >
              Startseite
            </Link>
            <Link
              href="/vorher-nachher"
              onClick={handleLinkClick}
              className="text-white text-base font-medium hover:text-yellow-300 transition-colors py-2"
            >
              V/H
            </Link>
            <Link
              href="/about"
              onClick={handleLinkClick}
              className="text-white text-base font-medium hover:text-yellow-400 transition-colors py-2"
            >
              Über Uns
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className="text-white text-base font-medium hover:text-yellow-400 transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="/kontakt"
              onClick={handleLinkClick}
              className="text-white text-base font-medium hover:text-yellow-400 transition-colors py-2"
            >
              Kontakt
            </Link>
            <Link
              href="/kontakt"
              onClick={handleLinkClick}
              className="bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-full px-6 mt-2"
            >
              Termin vereinbaren
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
