import { Metadata } from 'next'
import DatenschutzPage from '@/components/pages/Datenschutz'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Datenschutzerklärung von IconFY - Schutz Ihrer persönlichen Daten',
}

export default function Datenschutz() {
  return <DatenschutzPage />
}
