import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import ForWhomSection from "@/components/home/for-whom-section";
import HowIHelpSection from "@/components/home/how-i-help-section";
import ImmersionTeaser from "@/components/home/immersion-teaser";
import AboutSummary from "@/components/home/about-summary";
import SessionsHowItWorks from "@/components/home/sessions-how-it-works";

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicólogo Jurídico e Alta Performance",
  description:
    "Psicologia Jurídica, TCC de Alta Performance e Hipnose clínica como recurso auxiliar. CRP 08/48529.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ForWhomSection />
      <HowIHelpSection />
      <ImmersionTeaser />
      <AboutSummary />
      <SessionsHowItWorks />
    </>
  );
}
