import { Metadata } from 'next'
import ImpressumPage from '@/components/pages/Impressum'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum von Barbara Rembisz Autoaufbereitung - Angaben gemäß § 5 TMG',
}

const Impressum = () => {
  return <ImpressumPage />
}

export default Impressum
