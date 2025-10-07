'use client'
import type React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { Calendar } from 'lucide-react'

export default function TerminbuchungPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carType: '',
    service: '',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        carType: '',
        service: '',
        date: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Termin vereinbaren
            </h1>
            <p className="text-muted-foreground text-pretty">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich
              bei Ihnen
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Terminanfrage
              </CardTitle>
              <CardDescription>
                Alle Felder mit * sind Pflichtfelder
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">
                    Ihre Terminanfrage wurde erfolgreich übermittelt. Wir melden
                    uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonnummer *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0176 123 456 78"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="carType">Fahrzeugtyp *</Label>
                      <Input
                        id="carType"
                        placeholder="z.B. BMW 3er, VW Golf"
                        value={formData.carType}
                        onChange={(e) =>
                          handleChange('carType', e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Gewünschte Leistung *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange('service', value)
                        }
                        required
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Leistung auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="innenraumreinigung">
                            Innenraumreinigung
                          </SelectItem>
                          <SelectItem value="lackaufbereitung">
                            Lackaufbereitung & Politur
                          </SelectItem>
                          <SelectItem value="keramikversiegelung">
                            Keramikversiegelung
                          </SelectItem>
                          <SelectItem value="verkaufsaufbereitung">
                            Fahrzeugaufbereitung für Verkauf
                          </SelectItem>
                          <SelectItem value="komplett">
                            Komplettaufbereitung
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Wunschtermin *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht (optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Besondere Wünsche oder Anmerkungen..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    Termin anfragen
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Sie können uns auch direkt telefonisch erreichen:{' '}
              <a
                href="tel:+4917662912411"
                className="text-primary hover:underline font-medium"
              >
                0176 629 124 11
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
