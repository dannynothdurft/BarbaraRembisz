import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Barbara Rembisz</h3>
            <p className="text-primary-foreground/80 text-sm">
              Professionelle Autoaufbereitung in Hamburg – Ihr Partner für Glanz
              und Werterhalt.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Startseite
              </Link>
              <Link
                href="/#leistungen"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Leistungen
              </Link>
              <Link
                href="/#kundenstimmen"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Kundenstimmen
              </Link>
              <Link
                href="/#kontakt"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Kontakt
              </Link>
              <Link
                href="/terminbuchung"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Terminbuchung
              </Link>
            </nav>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="/impressum"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Barbara Rembisz Autoaufbereitung. Alle
            Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
