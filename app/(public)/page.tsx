import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import ForWhomSection from "@/components/home/for-whom-section";
import HowIHelpSection from "@/components/home/how-i-help-section";
import ImmersionTeaser from "@/components/home/immersion-teaser";
import LegalAssistantSection from "@/components/home/legal-assistant-section";
import AboutSummary from "@/components/home/about-summary";
import SessionsHowItWorks from "@/components/home/sessions-how-it-works";

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicólogo Assistente Técnico em Psicologia Jurídica – Curitiba",
  description:
    "Assistente Técnico em Psicologia Jurídica para advogados e escritórios. Análise de laudos, parecer técnico psicológico, formulação de quesitos e acompanhamento de perícias. CRP 08/48529.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ForWhomSection />
      <HowIHelpSection />
      <ImmersionTeaser />
      <LegalAssistantSection />
      <AboutSummary />
      <SessionsHowItWorks />
    </>
  );
}
