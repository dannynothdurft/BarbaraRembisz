'use client'
import React from 'react'
import Link from 'next/link'
import { Shield, Eye, BarChart3, Search } from 'lucide-react'

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Datenschutzerklärung
            </h1>
          </div>
          <p className="text-primary-foreground/80 text-lg max-w-3xl">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
            behandeln Ihre personenbezogenen Daten vertraulich.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Allgemeine Hinweise */}
          <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Allgemeine Hinweise
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          {/* Verantwortliche Stelle */}
          <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Verantwortliche Stelle
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-foreground">
                  Barbara Rembisz Autoaufbereitung
                </p>
                <p>Am Schiffbeker Berg 20</p>
                <p>22111 Hamburg</p>
                <p className="mt-2">
                  <span className="font-medium text-foreground">Telefon:</span>{' '}
                  <a
                    href="tel:+4917662912411"
                    className="hover:text-accent transition-colors"
                  >
                    +49 (0) 176 629 124 11
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">E-Mail:</span>{' '}
                  <a
                    href="mailto:info@autoaufbereitung-rembisz.de"
                    className="hover:text-accent transition-colors"
                  >
                    info@autoaufbereitung-rembisz.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Datenerfassung */}
          <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              Server-Log-Dateien
            </h3>
            <p className="text-muted-foreground mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              Kontaktformular
            </h3>
            <p className="text-muted-foreground">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* Analyse-Tools */}
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 shadow-sm border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                4. Analyse-Tools und Tracking
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Diese Website nutzt folgende Dienste zur Analyse des
              Nutzerverhaltens und zur Verbesserung unseres Angebots:
            </p>

            {/* Vercel Analytics */}
            <div className="bg-card rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Vercel Analytics
                </h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Wir verwenden Vercel Analytics, einen datenschutzfreundlichen
                Analysedienst der Vercel Inc. Vercel Analytics erfasst
                anonymisierte Nutzungsdaten ohne Verwendung von Cookies und ohne
                Speicherung personenbezogener Daten.
              </p>
              <p className="text-muted-foreground mb-3">
                <span className="font-medium text-foreground">
                  Erfasste Daten:
                </span>{' '}
                Seitenaufrufe, Verweildauer, geografische Region (Land),
                Gerätetyp, Browser
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Rechtsgrundlage:
                </span>{' '}
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Analyse des Nutzerverhaltens)
              </p>
            </div>

            {/* Google Analytics */}
            <div className="bg-card rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Google Analytics
                </h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Diese Website nutzt Google Analytics, einen Webanalysedienst der
                Google Ireland Limited ("Google"). Google Analytics verwendet
                Cookies, die eine Analyse der Benutzung der Website durch Sie
                ermöglichen.
              </p>
              <p className="text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Zweck:</span>{' '}
                Auswertung der Nutzung der Website, Zusammenstellung von Reports
                über Websiteaktivitäten und Erbringung weiterer mit der
                Websitenutzung verbundener Dienstleistungen.
              </p>
              <p className="text-muted-foreground mb-3">
                <span className="font-medium text-foreground">
                  IP-Anonymisierung:
                </span>{' '}
                Wir haben die IP-Anonymisierung aktiviert. Ihre IP-Adresse wird
                von Google innerhalb von Mitgliedstaaten der EU oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum gekürzt.
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Rechtsgrundlage:
                </span>{' '}
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Cookie-Banner)
              </p>
            </div>

            {/* Google Search Console */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Search className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Google Search Console
                </h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Wir nutzen die Google Search Console, ein Tool von Google zur
                Überwachung und Optimierung der Präsenz unserer Website in den
                Google-Suchergebnissen.
              </p>
              <p className="text-muted-foreground mb-3">
                <span className="font-medium text-foreground">
                  Erfasste Daten:
                </span>{' '}
                Suchanfragen, Klicks, Impressionen, durchschnittliche Position
                in Suchergebnissen, technische Website-Daten
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Rechtsgrundlage:
                </span>{' '}
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Optimierung unserer Website)
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-6">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                <span className="font-semibold">Hinweis:</span> Sie können die
                Erfassung durch Google Analytics verhindern, indem Sie auf
                folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der
                die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
                Website verhindert.
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Ihre Rechte
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Auskunft über Ihre bei uns gespeicherten personenbezogenen
                  Daten zu erhalten (Art. 15 DSGVO)
                </li>
                <li>
                  Die Berichtigung unrichtiger Daten zu verlangen (Art. 16
                  DSGVO)
                </li>
                <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>
                  Die Einschränkung der Verarbeitung zu verlangen (Art. 18
                  DSGVO)
                </li>
                <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>
                  Ihre Daten in einem strukturierten Format zu erhalten (Art. 20
                  DSGVO)
                </li>
                <li>
                  Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)
                </li>
              </ul>
              <p className="mt-4">
                Wenn Sie eines dieser Rechte ausüben möchten, wenden Sie sich
                bitte an die oben genannte Kontaktadresse.
              </p>
            </div>
          </section>

          {/* SSL-Verschlüsselung */}
          <section className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="text-muted-foreground">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von "http://" auf
              "https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>

          {/* Aktualität */}
          <section className="bg-muted/30 rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Stand dieser Datenschutzerklärung:
              </span>{' '}
              01. August 2025
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </section>

          {/* Back Link */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
