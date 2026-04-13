import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import Statement from "@/components/home/Statement"
import Services from "@/components/home/Services"
import Publico from "@/components/home/Publico"
import Sobre from "@/components/home/Sobre"
import Processo from "@/components/home/Processo"
import Contato from "@/components/home/Contato"

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicologo Juridico & Alta Performance",
  description: "Atendimento para quem opera sob responsabilidade real.",
}

export default function HomePage() {
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