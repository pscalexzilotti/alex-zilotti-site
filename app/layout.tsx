import type { Metadata } from "next"
import { cormorant, jost } from "./fonts"
import "./globals.css"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import Cursor from "@/components/layout/Cursor"
import WhatsAppButton from "@/components/layout/WhatsAppButton"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexzilotti.psc.br"),
  title: "Alex Zilotti | Psicologo Juridico & Alta Performance â€” CRP 08/48529",
  description: "Alex Zilotti â€” Psicologo Juridico, Forense e de Alta Performance. Atendimento especializado para empresarios, executivos, artistas e suporte tecnico pericial para advogados. Curitiba e online.",
  keywords: "psicologo juridico, psicologo forense, psicologo alta performance, assistente perito psicologo, analise laudo psicologico, TCC alta performance, hipnose clinica, psicologia forense Curitiba",
  openGraph: {
    title: "Alex Zilotti | Psicologo Juridico & Alta Performance",
    description: "Psicologia que opera onde a pressao e real, as decisoes sao definitivas e a discricao e inegociavel.",
    type: "website",
    images: ["/hero.jpeg"],
  },
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head><meta charSet="utf-8" /></head>
      <body>
        <a href="#main-content" className="skip-link">Ir para o conteudo</a>
        <Cursor />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}