import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kontaktieren Sie <span className="text-yellow-400">Uns</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Wir freuen uns auf Ihre Nachricht und beraten Sie gerne
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-zinc-900 p-8 md:p-12 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Senden Sie uns eine Nachricht
              </h2>
              <p className="text-gray-400 mb-8">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Vorname
                    </label>
                    <Input
                      type="text"
                      placeholder="Ihr Vorname"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nachname
                    </label>
                    <Input
                      type="text"
                      placeholder="Ihr Nachname"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    E-Mail
                  </label>
                  <Input
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    className="bg-black border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    placeholder="+49 (0) 123 456789"
                    className="bg-black border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nachricht
                  </label>
                  <Textarea
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={6}
                    className="bg-black border-white/20 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full py-6 text-lg font-semibold">
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Kontaktinformationen
                </h2>
                <p className="text-gray-400 mb-8">
                  Erreichen Sie uns über folgende Kontaktmöglichkeiten oder
                  besuchen Sie uns direkt vor Ort
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-400">
                      Am Schiffbeker Berg 20
                      <br />
                      22111 Hamburg
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-400">
                      <a
                        href="tel:+4917662912411"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        +49 (0) 176 629 124 11
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">E-Mail</h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:info@autoaufbereitung-rembisz.de"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        info@autoaufbereitung-rembisz.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-900 p-6 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Öffnungszeiten
                    </h3>
                    <p className="text-gray-400">
                      Montag - Freitag: 08:00 - 18:00
                      <br />
                      Samstag: 09:00 - 14:00
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden h-[300px] flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.915281950701!2d10.091933077308921!3d53.54142687234645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18c467f8a6d31%3A0xa535daa83554059!2sAm%20Schiffbeker%20Berg%2020%2C%2022111%20Hamburg!5e0!3m2!1sde!2sde!4v1759424484679!5m2!1sde!2sde" width="800" height="300" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
