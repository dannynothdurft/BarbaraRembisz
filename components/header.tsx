'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Funktion zur Überprüfung der aktiven Seite
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  // Navigation Items
  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/vorher-nachher', label: 'Vorher/Nachher' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/ueber-uns', label: 'Über Uns' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#00152a]/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-[#00152a] backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.jpg"
              width={160}
              height={60}
              alt="Fahrzeugaufbereitung Hamburg - Logo"
              className="w-32 sm:w-40"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? 'text-yellow-400 font-semibold'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                  {/* Unterstrich für aktive Seite */}
                  {active && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Telefon CTA */}
            <a
              href="tel:+4917662912411"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors group"
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                <Phone className="w-4 h-4 text-[#00152a]" />
              </div>
              <span className="text-sm font-semibold">Jetzt anrufen</span>
            </a>

            {/* Termin Button */}
            <Link
              href="/kontakt"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-[#00152a]/98 backdrop-blur-lg border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-1 mb-6">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                      active
                        ? 'text-yellow-400 font-semibold bg-yellow-400/10 border-l-2 border-yellow-400'
                        : 'text-white hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {/* Punkt für aktive Seite im Mobile Menu */}
                    {active && (
                      <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              {/* Telefon CTA */}
              <a
                href="tel:+4917662912411"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-lg transition-colors group"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>Jetzt anrufen</span>
              </a>

              {/* Termin Button */}
              <Link
                href="/kontakt"
                onClick={handleLinkClick}
                className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Termin vereinbaren
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm text-center">
                Ihr Profi für Fahrzeugaufbereitung in Hamburg-Billstedt
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}