'use client'
import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Code, Shield } from 'lucide-react'

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impressum
          </h1>
          <p className="text-xl text-gray-300">
            Rechtliche Informationen und Kontaktdaten
          </p>
        </div>

        <div className="space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-semibold text-white text-lg">Autoaufbereitung Rembisz</p>
                <p>Inhaberin: Barbara Rembisz</p>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Kontakt</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Adresse:</p>
                  <p>Am Schiffbeker Berg 20</p>
                  <p>22111 Hamburg-Billstedt</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Telefon:</p>
                  <a href="tel:+4917662912411" className="hover:text-yellow-400 transition-colors">
                    +49 176 629 124 11
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">E-Mail:</p>
                  <a href="mailto:info@autoaufbereitung-rembisz.de" className="hover:text-yellow-400 transition-colors break-all">
                    info@autoaufbereitung-rembisz.de
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Umsatzsteuer */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Umsatzsteuer</h2>
            <div className="text-gray-300">
              <p className="mb-3">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-semibold text-white">Wird beantragt</p>
                <p className="text-sm text-gray-400 mt-1">(Kleinunternehmer nach § 19 UStG)</p>
              </div>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Verantwortlich für den Inhalt</h2>
            <div className="text-gray-300">
              <p className="mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-semibold text-white">Barbara Rembisz</p>
                <p>Am Schiffbeker Berg 20</p>
                <p>22111 Hamburg-Billstedt</p>
              </div>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Haftungsausschluss</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="font-semibold text-white mb-3">Haftung für Inhalte</h3>
                <p className="text-sm">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                  können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter 
                  sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Haftung für Links</h3>
                <p className="text-sm">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf 
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
                  diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Urheberrecht</h3>
                <p className="text-sm">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                  der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Streitschlichtung</h2>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <p>
                Die Europäische Kommission stellt eine Plattform zur 
                Online-Streitbeilegung (OS) bereit:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Webdesign & Entwicklung */}
          <section className="bg-gradient-to-br from-[#00152a] to-zinc-900 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-yellow-400/10 rounded-xl">
                <Code className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Webdesign & Entwicklung
                </h2>
                <p className="text-gray-300">
                  Professionelle Webentwicklung mit modernsten Technologien
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 mb-4">
                Diese Webseite wurde konzipiert, gestaltet und entwickelt von:
              </p>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <p className="text-2xl font-bold text-white mb-2">DevDanny</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Spezialisiert auf moderne Webentwicklung, responsive Design und
                  benutzerfreundliche Lösungen für Unternehmen jeder Größe.
                </p>
              </div>

              <Link 
                href="https://www.devdanny.de" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
              >
                www.DevDanny.de
              </Link>
            </div>
          </section>

          {/* Aktualität */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-yellow-400 font-semibold">Stand:</span> {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage