import type { Metadata } from 'next'
import { Imersao } from '@/components/clinica/ClinicaComponents'

export const metadata: Metadata = {
  title: 'Workshop de 3 Dias â€” Rotas de Alta Performance Emocional | Alex Zilotti',
  description: 'ExperiÃªncia clÃ­nica exclusiva de 3 dias combinando TCC de Alta Performance e Hipnose ClÃ­nica.',
  openGraph: {
    title: 'Workshop de 3 Dias | Alex Zilotti',
    description: 'ExperiÃªncia clÃ­nica intensiva de 3 dias. TCC de Alta Performance + Hipnose ClÃ­nica.',
    images: ['/workshop.jpg'],
  },
}

export default function WorkshopPage() {
  return <Imersao />
}
