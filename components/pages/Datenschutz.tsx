'use client'
import React from 'react'
import { Shield, Lock, Mail, Phone } from 'lucide-react'

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln 
            Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Vorschriften.
          </p>
        </div>

        <div className="space-y-8">
          {/* Allgemeine Hinweise */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">1. Allgemeine Hinweise</h2>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
              </div>
            </div>
          </section>

          {/* Verantwortliche Stelle */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">2. Verantwortliche Stelle</h2>
            
            <div className="bg-white/5 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-4">Kontaktdaten</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="font-semibold text-white">Autoaufbereitung Rembisz</p>
                    <p>Barbara Rembisz</p>
                    <p>Am Schiffbeker Berg 20</p>
                    <p>22111 Hamburg-Billstedt</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Kontaktmöglichkeiten</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-yellow-400" />
                      <a href="tel:+4917662912411" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        +49 176 629 124 11
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-yellow-400" />
                      <a href="mailto:info@autoaufbereitung-rembisz.de" className="text-gray-300 hover:text-yellow-400 transition-colors break-all">
                        info@autoaufbereitung-rembisz.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Datenerfassung */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. Datenerfassung auf dieser Website</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-white font-semibold mb-3">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                  so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Ihre Rechte</h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
                Datenverarbeitung.
              </p>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Ihre Rechte im Einzelnen:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
                  <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                </ul>
              </div>

              <p>
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie 
                sich jederzeit an die oben genannte verantwortliche Stelle wenden.
              </p>
            </div>
          </section>

          {/* SSL Verschlüsselung */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">5. SSL-Verschlüsselung</h2>
            </div>
            
            <div className="text-gray-300 leading-relaxed">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte 
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mt-3">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, 
                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          {/* Analyse Tools */}
          <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">6. Analyse-Tools</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Vercel Analytics</h3>
                <p>
                  Wir verwenden Vercel Analytics, einen datenschutzfreundlichen Analysedienst. 
                  Vercel Analytics erfasst anonymisierte Nutzungsdaten ohne Verwendung von Cookies 
                  und ohne Speicherung personenbezogener Daten.
                </p>
                <div className="mt-3 text-sm">
                  <p><span className="text-white font-medium">Erfasste Daten:</span> Seitenaufrufe, Verweildauer, geografische Region (Land), Gerätetyp, Browser</p>
                  <p><span className="text-white font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Aktualität */}
          <section className="bg-gradient-to-br from-[#00152a] to-zinc-900 border border-yellow-400/20 rounded-2xl p-8">
            <div className="text-center">
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">Stand dieser Datenschutzerklärung:</span>{' '}
                {new Date().getFullYear()}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets 
                den aktuellen rechtlichen Anforderungen entspricht.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}