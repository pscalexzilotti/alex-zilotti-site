import type { Metadata } from 'next'
import {
  HeroJuridico,
  IntroJuridico,
  CinematicStrip,
  ServicosJuridico,
  BeneficiosJuridico,
} from '@/components/juridico/JuridicoComponents'

export const metadata: Metadata = {
  title: 'Assistente Perito em Psicologia Jurídica | Alex Zilotti',
  description:
    'Suporte técnico especializado para advogados e escritórios: análise de laudos, formulação de quesitos, pareceres técnicos e acompanhamento de perícias psicológicas.',
  openGraph: {
    title: 'Assistente Perito em Psicologia Jurídica | Alex Zilotti',
    description:
      'Quando Direito e Psicologia se cruzam, a qualidade do suporte técnico psicológico determina a robustez da estratégia.',
    images: ['https://picsum.photos/seed/law/1200/630'],
  },
}

export default function JuridicoPage() {
  return (
    <>
      <HeroJuridico />
      <IntroJuridico />
      <CinematicStrip />
      <ServicosJuridico />
      <BeneficiosJuridico />
    </>
  )
}
