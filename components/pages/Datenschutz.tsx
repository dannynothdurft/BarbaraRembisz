'use client'
import React from 'react'
import { Eye, BarChart3, Search } from 'lucide-react'

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black mt-20">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Datenschutzerklärung
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
            behandeln Ihre personenbezogenen Daten vertraulich.
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Allgemeine Hinweise
            </h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mb-4">
              <strong className="text-white">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p className="mb-4">
              <strong className="text-white">
                Wie erfassen wir Ihre Daten?
              </strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
            <p className="mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mb-4">
              <strong className="text-white">Externes Hosting</strong>
              <br />
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
              IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln.
            </p>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Datenschutz
            </h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="mb-4">
              Barbara Rembisz Autoaufbereitung
              <br />
              Barbara Rembisz
              <br />
              Am Schiffbeker Berg 20
              <br />
              22111 Hamburg
              <br />
              <br />
              Telefon:{' '}
              <a
                href="tel:+4917662912411"
                className="text-yellow-400 hover:underline"
              >
                +49 (0) 176 629 124 11
              </a>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@autoaufbereitung-rembisz.de"
                className="text-yellow-400 hover:underline"
              >
                info@autoaufbereitung-rembisz.de
              </a>
            </p>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Cookies
            </h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies
              sind kleine Textdateien und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Server-Log-Dateien
            </h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Kontaktformular
            </h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Ihre Rechte
            </h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
                zu erhalten (Art. 15 DSGVO)
              </li>
              <li>
                Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)
              </li>
              <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>
                Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)
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

            <p>
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
              können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Analyse-Tools und Tools von Drittanbietern
            </h2>
            <p className="mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen. Detaillierte Informationen zu diesen
              Analyseprogrammen finden Sie in der folgenden
              Datenschutzerklärung.
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

          {/* SSL-Verschlüsselung */}
          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <h2 className="text-2xl font-bold mb-4">
              6. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von "http://" auf
              "https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>

          {/* Aktualität */}
          <section className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg p-8 md:p-12 mb-6">
            <p className="text-sm">
              <span className="font-semibold">
                Stand dieser Datenschutzerklärung:
              </span>{' '}
              02. Oktober 2025
            </p>
            <p className="text-sm mt-2">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
