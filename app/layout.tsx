import type React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Barbara Rembisz Autoaufbereitung | Hamburg',
    template: '%s | Barbara Rembisz Autoaufbereitung',
  },
  description:
    'Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans ${montserrat.variable} min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <Header />
          <main>{children} </main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
