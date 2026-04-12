import type { Metadata } from 'next'
import { cormorant, jost } from './fonts'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo
        </a>
        <Cursor />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
