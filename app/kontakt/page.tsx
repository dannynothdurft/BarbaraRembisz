"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicleType: '',
    services: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await axios.post('/api/contact', formData)
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        vehicleType: '',
        services: ''
      })
    } catch (error) {
      console.error('Fehler beim Senden des Formulars:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#00152a]/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kontakt & <span className="text-yellow-400">Termin</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Vereinbaren Sie eine kostenlose Vor-Ort-Begutachtung in Hamburg-Billstedt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+4917662912411">
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Direkt anrufen
                </Button>
              </a>
              <a href="https://wa.me/4917662912411" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#00152a] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-12 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Termin anfragen
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Kostenlose Vor-Ort-Begutachtung
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8">
                Beschreiben Sie Ihr Fahrzeug und gewünschte Leistungen. 
                Wir melden uns innerhalb von 24 Stunden für eine persönliche Beratung.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg mb-6">
                  ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                  ❌ Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Vorname *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Ihr Vorname"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nachname *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Ihr Nachname"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Telefon *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+49 176 62912411"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      E-Mail
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="ihre.email@beispiel.de"
                      className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Fahrzeugtyp *
                  </label>
                  <Input
                    type="text"
                    name="vehicleType"
                    placeholder="z.B. BMW 3er, VW Golf, Wohnmobil..."
                    className="bg-black border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                    required
                    value={formData.vehicleType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Gewünschte Leistungen *
                  </label>
                  <Textarea
                    name="services"
                    placeholder="z.B. Komplettaufbereitung, Lackpolitur, Innenreinigung, Motorwäsche, Geruchsentfernung..."
                    rows={4}
                    className="bg-black border-white/20 text-white placeholder:text-gray-500 resize-none focus:border-yellow-400"
                    required
                    value={formData.services}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-[#00152a] font-semibold rounded-full py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#00152a] border-t-transparent rounded-full animate-spin mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    'Kostenlose Beratung anfragen'
                  )}
                </Button>
                
                <p className="text-gray-400 text-sm text-center">
                  * Pflichtfelder. Wir behandeln Ihre Daten vertraulich.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ihr Ansprechpartner in Hamburg
                </h2>
                <p className="text-gray-400 text-lg">
                  Persönliche Beratung und transparente Preise nach Vor-Ort-Begutachtung
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Standort</h3>
                    <p className="text-gray-400">
                      Am Schiffbeker Berg 20<br />
                      22111 Hamburg-Billstedt
                    </p>
                    <p className="text-yellow-400 text-sm mt-2">
                      🚗 Kostenlose Parkplätze verfügbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefon & WhatsApp</h3>
                    <div className="space-y-2">
                      <p className="text-gray-400">
                        <a
                          href="tel:+4917662912411"
                          className="hover:text-yellow-400 transition-colors text-lg font-semibold"
                        >
                          +49 176 629 124 11
                        </a>
                      </p>
                      <p className="text-gray-400 text-sm">
                        Mo-Fr: 8:00-18:00 • Sa: 9:00-14:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">E-Mail</h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:info@autoaufbereitung-rembisz.de"
                        className="hover:text-yellow-400 transition-colors break-all"
                      >
                        info@autoaufbereitung-rembisz.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Öffnungszeiten</h3>
                    <div className="text-gray-400 space-y-1">
                      <p className="flex justify-between">
                        <span>Montag - Freitag:</span>
                        <span>08:00 - 18:00 Uhr</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Samstag:</span>
                        <span>09:00 - 14:00 Uhr</span>
                      </p>
                      <p className="flex justify-between text-gray-500">
                        <span>Sonntag:</span>
                        <span>Geschlossen</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-gradient-to-br from-[#00152a] to-zinc-900 border border-yellow-400/20 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">
                  💡 Unser Service
                </h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    Kostenlose Vor-Ort-Begutachtung
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    Transparente Preise nach Bewertung
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    Hol- & Bringservice in Hamburg
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    Individuelle Terminvereinbarung
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-white/10 overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.915281950701!2d10.091933077308921!3d53.54142687234645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18c467f8a6d31%3A0xa535daa83554059!2sAm%20Schiffbeker%20Berg%2020%2C%2022111%20Hamburg!5e0!3m2!1sde!2sde!4v1759424484679!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Autoaufbereitung Rembisz Hamburg-Billstedt"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}