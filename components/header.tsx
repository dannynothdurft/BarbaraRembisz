'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">
                Barbara Rembisz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/#leistungen"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="/#kundenstimmen"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Kundenstimmen
            </Link>
            <Link
              href="/#kontakt"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
            <Link href="/terminbuchung">
              <Button className="rounded-full">Termin vereinbaren</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link
              href="#leistungen"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link
              href="#kundenstimmen"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kundenstimmen
            </Link>
            <Link
              href="#kontakt"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="/terminbuchung"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full rounded-full">
                Termin vereinbaren
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
