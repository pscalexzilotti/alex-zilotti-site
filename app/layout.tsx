import type { Metadata } from 'next'
import { cormorant, jost } from './fonts'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
 
export const metadata: Metadata = {
  title: 'Alex Zilotti | Psicologo Juridico & Alta Performance',
  description: 'Alex Zilotti — Psicologo Juridico, Forense e de Alta Performance. Atendimento especializado para empresarios, executivos, artistas e suporte tecnico pericial para advogados.',
  metadataBase: new URL('https://www.alexzilotti.psc.br'),
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Ir para o conteudo</a>
        <Cursor />
        <Nav />
        <main id="main-content" style={{ paddingTop: 0 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}