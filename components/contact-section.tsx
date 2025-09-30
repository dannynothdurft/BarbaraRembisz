import { MapPin, Phone, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          Kontakt
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Wir freuen uns auf Ihre Anfrage
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Am Schiffbeker Berg 20
                      <br />
                      22111 Hamburg
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href="tel:+4917662912411"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      0176 629 124 11
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@autoaufbereitung-rembisz.de"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@autoaufbereitung-rembisz.de
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.915281950701!2d10.091933077308921!3d53.54142687234645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18c467f8a6d31%3A0xa535daa83554059!2sAm%20Schiffbeker%20Berg%2020%2C%2022111%20Hamburg!5e0!3m2!1sde!2sde!4v1759242433046!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbara Rembisz Autoaufbereitung Standort Hamburg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
