'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Code } from 'lucide-react'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Impressum
            </h1>
            <div className="h-1 w-24 bg-accent rounded-full" />
          </div>

          {/* Legal Information */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    Barbara Rembisz Autoaufbereitung
                  </p>
                  <p>Inhaberin: Barbara Rembisz</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">Kontakt</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">Adresse:</p>
                    <p>Am Schiffbeker Berg 20</p>
                    <p>22111 Hamburg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">Telefon:</p>
                    <a
                      href="tel:+4917662912411"
                      className="hover:text-accent transition-colors"
                    >
                      +49 (0) 176 629 124 11
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">E-Mail:</p>
                    <a
                      href="mailto:info@autoaufbereitung-rembisz.de"
                      className="hover:text-accent transition-colors"
                    >
                      info@autoaufbereitung-rembisz.de
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Umsatzsteuer-ID
              </h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </p>
              <p className="font-medium text-foreground mt-2">
                DE123456789 (Beispiel)
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-muted-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <p className="font-medium text-foreground mt-2">
                Barbara Rembisz
                <br />
                Am Schiffbeker Berg 20
                <br />
                22111 Hamburg
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte können wir jedoch keine Gewähr
                    übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Haftung für Links
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Urheberrecht
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Website Credits */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 text-primary-foreground">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary-foreground/10 rounded-xl">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Webdesign & Entwicklung
                </h2>
                <p className="text-primary-foreground/80 text-sm">
                  Professionelle Webentwicklung mit modernsten Technologien
                </p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/90 mb-4">
                Diese Webseite wurde konzipiert, gestaltet und entwickelt von:
              </p>
              <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-2xl font-bold mb-2">DevDanny</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Spezialisiert auf moderne Webentwicklung, responsive Design
                  und benutzerfreundliche Lösungen für Unternehmen jeder Größe.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
