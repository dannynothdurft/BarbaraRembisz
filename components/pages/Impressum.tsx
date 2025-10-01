'use client'
import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Code } from 'lucide-react'

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-black mt-20">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Impressum
        </h1>

        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
          {/* Legal Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">
                  Barbara Rembisz Autoaufbereitung
                </p>
                <p>Inhaberin: Barbara Rembisz</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="">
                  <p className="font-medium">Adresse:</p>
                  <p>Am Schiffbeker Berg 20</p>
                  <p>22111 Hamburg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="">
                  <p className="font-medium">Telefon:</p>
                  <a href="tel:+4917662912411">+49 (0) 176 629 124 11</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="">
                  <p className="font-medium">E-Mail:</p>
                  <a href="mailto:info@autoaufbereitung-rembisz.de">
                    info@autoaufbereitung-rembisz.de
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
            </p>
            <p className="font-medium mt-2">DE123456789 (Beispiel)</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">
              Verantwortlich für den Inhalt
            </h2>
            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p className="font-medium mt-2">
              Barbara Rembisz
              <br />
              Am Schiffbeker Berg 20
              <br />
              22111 Hamburg
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                <p className="text-sm leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Haftung für Links</h3>
                <p className="text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Urheberrecht</h3>
                <p className="text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Website Credits */}
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary-foreground/10 rounded-xl">
              <Code className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Webdesign & Entwicklung
              </h2>
              <p className="text-sm">
                Professionelle Webentwicklung mit modernsten Technologien
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="mb-4">
              Diese Webseite wurde konzipiert, gestaltet und entwickelt von:
            </p>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm mb-6">
              <p className="text-2xl font-bold mb-2">DevDanny</p>
              <p className="text-sm leading-relaxed">
                Spezialisiert auf moderne Webentwicklung, responsive Design und
                benutzerfreundliche Lösungen für Unternehmen jeder Größe.
              </p>
            </div>

            <Link href={'https://www.devdanny.de'}>
              https://www.DevDanny.de
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage
