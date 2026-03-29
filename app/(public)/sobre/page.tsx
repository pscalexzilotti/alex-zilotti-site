import type { Metadata } from "next";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre | Alex Zilotti Psicólogo",
  description:
    "História, formação e atuação de Alex Cristoffer Zilotti, Psicólogo CRP 08/48529. Especializado em Psicologia Jurídica e Forense e TCC de Alta Performance.",
};

export default function SobrePage() {
  return (
    <>
      <Section>
        <SectionHeader
          title="Sobre mim"
          subtitle="Psicólogo jurídico, clínico e de alta performance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="rounded-sm overflow-hidden bg-muted h-96">
            <img
              src="/images/alex-portrait-1.jpg"
              alt="Alex Zilotti – Psicólogo CRP 08/48529"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p className="text-lg">
              Sou Alex Cristoffer Zilotti, psicólogo CRP 08/48529, especializado em
              Psicologia Jurídica e Forense e Terapia Cognitivo-Comportamental (TCC).
            </p>
            <p>
              Atuo com pessoas que vivem sob alta pressão: empresários, influenciadores,
              artistas, executivos e pessoas em processos judiciais.
            </p>
            <p>
              Meu trabalho é baseado em ética, sigilo e efetividade. Sem promessas de cura
              ou resultados em tempo determinado.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-6">Formação</h2>
        <ul className="space-y-2">
          {[
            "Psicólogo – CRP 08/48529",
            "Pós-graduando em Psicologia Forense e Jurídica",
            "Pós-graduando em TCC de Alta Performance",
            "MBA em Gestão de Pessoas",
            "Hipnose clínica como recurso auxiliar (Res. CFP nº 13/2000)",
            "Curitiba – PR, Brasil",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-primary">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Pronto para dar o primeiro passo?</h2>
        <p className="text-muted-foreground mb-6">
          Agende uma sessão inicial e entendemos juntos como posso ajudar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contato">Agendar sessão inicial</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={WHATSAPP_URL} target="_blank">Falar com a equipe</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
