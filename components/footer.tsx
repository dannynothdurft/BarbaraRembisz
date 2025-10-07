import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#00152a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="block">
              <Image
                src="/images/Logo.jpg"
                width={160}
                height={60}
                alt="Autoaufbereitung Rembisz - Professionelle Fahrzeugpflege in Hamburg"
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Ihr Profi für professionelle Fahrzeugaufbereitung in Hamburg-Billstedt. 
              Von der Grundreinigung bis zur Premium-Politur - für makellose Ergebnisse.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+4917662912411"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-yellow-400/10"
                title="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/4917662912411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-yellow-400/10"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@autoaufbereitung-rembisz.de"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-yellow-400/10"
                title="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com/?q=Am+Schiffbeker+Berg+20+22111+Hamburg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 bg-white/5 rounded-lg hover:bg-yellow-400/10"
                title="Standort"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/vorher-nachher"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Vorher/Nachher
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Kontakt & Termin
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Leistungen</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Komplettaufbereitung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Lackpolitur & Versiegelung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Innenraumaufbereitung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Wohnmobil & Wohnwagen
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Motorwäsche & Zusatzleistungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Am Schiffbeker Berg 20</p>
                  <p>22111 Hamburg-Billstedt</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a 
                  href="tel:+4917662912411" 
                  className="hover:text-yellow-400 transition-colors"
                >
                  +49 176 629 124 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a 
                  href="mailto:info@autoaufbereitung-rembisz.de" 
                  className="hover:text-yellow-400 transition-colors break-all"
                >
                  info@autoaufbereitung-rembisz.de
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <MessageCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/4917662912411" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Autoaufbereitung Rembisz. Professionelle Fahrzeugaufbereitung in Hamburg-Billstedt.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/impressum"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}