import React from 'react'
import { Metadata } from 'next'
import DatenschutzPage from '@/components/pages/Datenschutz'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutz von Barbara Rembisz Autoaufbereitung',
}

const DSGVOPage = () => {
  return <DatenschutzPage />
}

export default DSGVOPage
