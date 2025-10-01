import '@/styles/globals.css'
import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Barbara Rembisz Autoaufbereitung | Hamburg',
    template: '%s | Barbara Rembisz Autoaufbereitung',
  },
  description:
    'Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.',
  keywords: [
    'Autoaufbereitung Hamburg',
    'Fahrzeugaufbereitung Hamburg',
    'Autopflege Hamburg',
    'Innenraumreinigung Auto Hamburg',
    'Lederpflege Auto Hamburg',
    'Polsterreinigung Auto Hamburg',
    'Lackpolitur Hamburg',
    'Nanoversiegelung Auto Hamburg',
    'Autoreinigung Hamburg',
    'Professionelle Autoaufbereitung',
    'Autoaufbereitung Rembisz',
    'Barbara Rembisz Autoaufbereitung',
  ],
  authors: [
    {
      name: 'DevDanny',
      url: 'https://www.devdanny.de',
    },
  ],
  creator: 'DevDanny',
  publisher: 'DevDanny - Barbara Rembisz Autoaufbereitung',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  generator: 'Next.js',
  applicationName: 'Barbara Rembisz Autoaufbereitung',
  metadataBase: new URL('https://www.autoaufbereitung-rembisz.de'),
  alternates: {
    canonical: 'https://www.autoaufbereitung-rembisz.de',
    languages: {
      de: 'https://www.autoaufbereitung-rembisz.de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.autoaufbereitung-rembisz.de',
    siteName: 'Barbara Rembisz Autoaufbereitung | Hamburg',
    title:
      'Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.',
    description:
      'Lade dein PNG hoch und erhalte sofort alle benötigten Icon-Größen für iOS, Android, Web und mehr.',
    images: [
      {
        url: 'https://www.autoaufbereitung-rembisz.de/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IconFY - App Icon Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbara Rembisz Autoaufbereitung | Hamburg',
    description:
      'Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.',
    creator: '@devdanny',
    images: [
      'https://www.autoaufbereitung-rembisz.de/images/twitter-image.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'Zm1fu2IvoHYKcCyT0geY8183MM5QvHyfoz6jRI23vcE',
  },
  category: 'Autoaufbereitung & Fahrzeugpflege',
  icons: {
    // ✅ FAVICON (ICO + PNG)
    icon: [
      {
        url: '/icons/favicon.ico',
        sizes: '16x16 32x32 48x48 256x256',
        type: 'image/x-icon',
      },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/logo.svg', type: 'image/svg+xml' }, // Optional SVG
    ],
    // ✅ APPLE TOUCH ICON
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    // ✅ ANDROID/CHROME
    other: [
      {
        rel: 'icon',
        url: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      // Windows Metro
      {
        rel: 'icon',
        url: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Barbara Rembisz Autoaufbereitung',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen bg-black`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children} </main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
