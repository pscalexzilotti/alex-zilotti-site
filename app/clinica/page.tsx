import type { Metadata } from 'next'
import { HeroClinica, EspecialidadesClinica, AbordagemClinica } from '@/components/clinica/ClinicaComponents'

export const metadata: Metadata = {
  title: 'ClÃ­nica Cognitiva de Alta Performance | Alex Zilotti',
  description: 'TCC de Alta Performance e Hipnose ClÃ­nica. Atendimento especializado em ansiedade, depressÃ£o, TDAH, autismo, terapia de casal e muito mais.',
  openGraph: {
    title: 'ClÃ­nica Cognitiva de Alta Performance | Alex Zilotti',
    description: 'Psicoterapia especializada para quem nÃ£o pode se dar ao luxo de ficar paralisado.',
    images: ['/clinica.jpg'],
  },
}

export default function ClinicaPage() {
  return (
    <>
      <HeroClinica />
      <EspecialidadesClinica />
      <AbordagemClinica />
    </>
  )
}
