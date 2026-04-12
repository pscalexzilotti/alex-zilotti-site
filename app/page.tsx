import type { Metadata } from 'next'

import Hero from '@/components/home/Hero'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Publico from '@/components/home/Publico'
import Sobre from '@/components/home/Sobre'
import Processo from '@/components/home/Processo'
import Contato from '@/components/home/Contato'

export const metadata: Metadata = {
  title: 'Alex Zilotti | Psicólogo Jurídico & Alta Performance — CRP 08/48529',
  description:
    'Alex Zilotti — Psicólogo Jurídico, Forense e de Alta Performance. Atendimento especializado para empresários, executivos, artistas e suporte técnico pericial para advogados.',
  keywords:
    'psicólogo jurídico, psicólogo forense, psicólogo alta performance, assistente perito psicólogo, análise laudo psicológico, TCC alta performance, hipnose clínica, psicologia forense Curitiba',
  robots: 'index, follow',
  openGraph: {
    title: 'Alex Zilotti | Psicólogo Jurídico & Alta Performance',
    description:
      'Psicologia que opera onde a pressão é real, as decisões são definitivas e a discrição é inegociável.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Publico />
      <Sobre />
      <Processo />
      <Contato />
    </>
  )
}
