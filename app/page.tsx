import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Publico from '@/components/home/Publico'
import Sobre from '@/components/home/Sobre'
import Processo from '@/components/home/Processo'
import Contato from '@/components/home/Contato'

export const metadata: Metadata = {
  title: 'Alex Zilotti | PsicÃ³logo JurÃ­dico & Alta Performance â€” CRP 08/48529',
  description: 'Atendimento para quem opera sob responsabilidade real. Psicologia JurÃ­dica, Forense e de Alta Performance. Curitiba e atendimento online.',
  openGraph: {
    title: 'Alex Zilotti | PsicÃ³logo JurÃ­dico & Alta Performance',
    description: 'Psicologia que opera onde a pressÃ£o Ã© real, as decisÃµes sÃ£o definitivas e a discriÃ§Ã£o Ã© inegociÃ¡vel.',
    images: ['/hero.jpg'],
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
