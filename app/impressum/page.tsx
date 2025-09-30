import { Metadata } from 'next'
import ImpressumPage from '@/components/pages/Impressum'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von IconFY - Angaben gemäß § 5 TMG',
}

export default function Impressum() {
  return <ImpressumPage />
}
