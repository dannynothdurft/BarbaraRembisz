import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, phone, email, vehicleType, services } =
      await request.json()

    // Validation
    if (!firstName || !lastName || !phone || !vehicleType || !services) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 },
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT || '465'),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS,
      },
    })

    // Email content for website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `📧 Neue Kontaktanfrage von ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #00152a, #000); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #fbbf24; }
              .field-label { font-weight: bold; color: #00152a; display: block; margin-bottom: 5px; }
              .field-value { color: #666; }
              .highlight { background: #fff7ed; padding: 20px; border-radius: 8px; border: 2px solid #fbbf24; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚗 Neue Kontaktanfrage</h1>
                <p>Autoaufbereitung Rembisz</p>
              </div>
              <div class="content">
                <div class="highlight">
                  <h2 style="color: #00152a; margin: 0;">Kontaktanfrage erhalten</h2>
                  <p style="margin: 10px 0 0 0; color: #666;">Jemand hat über das Kontaktformular eine Anfrage gestellt.</p>
                </div>
                
                <div class="field">
                  <span class="field-label">👤 Name</span>
                  <span class="field-value">${firstName} ${lastName}</span>
                </div>
                
                <div class="field">
                  <span class="field-label">📞 Telefon</span>
                  <span class="field-value">
                    <a href="tel:${phone}" style="color: #00152a; text-decoration: none;">${phone}</a>
                  </span>
                </div>
                
                ${
                  email
                    ? `
                <div class="field">
                  <span class="field-label">✉️ E-Mail</span>
                  <span class="field-value">
                    <a href="mailto:${email}" style="color: #00152a; text-decoration: none;">${email}</a>
                  </span>
                </div>
                `
                    : ''
                }
                
                <div class="field">
                  <span class="field-label">🚙 Fahrzeugtyp</span>
                  <span class="field-value">${vehicleType}</span>
                </div>
                
                <div class="field">
                  <span class="field-label">🔧 Gewünschte Leistungen</span>
                  <span class="field-value" style="white-space: pre-wrap;">${services}</span>
                </div>
                
                <div style="margin-top: 30px; padding: 15px; background: #00152a; color: white; border-radius: 8px; text-align: center;">
                  <p style="margin: 0;">⏰ Bitte innerhalb von 24 Stunden kontaktieren</p>
                </div>
                
                <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                  <p>Gesendet von ${process.env.WEBSITE_NAME} • ${new Date().toLocaleString('de-DE')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send confirmation email to customer (optional)
    const customerMailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: email,
      subject: '📋 Wir haben Ihre Anfrage erhalten - Autoaufbereitung Rembisz',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #00152a, #000); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .thank-you { text-align: center; margin-bottom: 30px; }
              .next-steps { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #fbbf24; margin: 20px 0; }
              .contact-info { background: #fff7ed; padding: 20px; border-radius: 8px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚗 Autoaufbereitung Rembisz</h1>
                <p>Ihr Profi in Hamburg-Billstedt</p>
              </div>
              <div class="content">
                <div class="thank-you">
                  <h2 style="color: #00152a;">Vielen Dank für Ihre Anfrage, ${firstName}!</h2>
                  <p>Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
                </div>
                
                <div class="next-steps">
                  <h3 style="color: #00152a; margin-top: 0;">📋 Was passiert jetzt?</h3>
                  <ul style="text-align: left;">
                    <li>Wir prüfen Ihre Anfrage</li>
                    <li>Melden uns telefonisch bei Ihnen für eine persönliche Beratung</li>
                    <li>Vereinbaren einen Termin für die Vor-Ort-Begutachtung</li>
                    <li>Erstellen ein individuelles Angebot</li>
                  </ul>
                </div>
                
                <div class="contact-info">
                  <h3 style="color: #00152a; margin-top: 0;">📞 Direkter Kontakt</h3>
                  <p>
                    <strong>Telefon:</strong> 
                    <a href="tel:+4917662912411" style="color: #00152a; text-decoration: none;">+49 176 629 124 11</a>
                  </p>
                  <p>
                    <strong>Standort:</strong> Am Schiffbeker Berg 20, 22111 Hamburg-Billstedt
                  </p>
                  <p>
                    <strong>Öffnungszeiten:</strong> Mo-Fr 8:00-18:00 • Sa 9:00-14:00
                  </p>
                </div>
                
                <div style="margin-top: 30px; text-align: center; color: #666; font-size: 12px;">
                  <p>Autoaufbereitung Rembisz • Am Schiffbeker Berg 20 • 22111 Hamburg</p>
                  <p>Telefon: <a href="tel:+4917662912411" style="color: #666;">+49 176 629 124 11</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send emails
    await transporter.sendMail(ownerMailOptions)

    // Only send confirmation email if customer provided an email address
    if (email) {
      await transporter.sendMail(customerMailOptions)
    }

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Fehler beim Senden der Email:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler. Bitte versuchen Sie es später erneut.' },
      { status: 500 },
    )
  }
}
