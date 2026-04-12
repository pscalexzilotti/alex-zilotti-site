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
    'Atendimento para quem opera sob responsabilidade real. Psicologia Jurídica, Forense e de Alta Performance. Curitiba e atendimento online.',
  openGraph: {
    title: 'Alex Zilotti | Psicólogo Jurídico & Alta Performance',
    description:
      'Psicologia que opera onde a pressão é real, as decisões são definitivas e a discrição é inegociável.',
    images: ['https://picsum.photos/seed/professional/1200/630'],
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
