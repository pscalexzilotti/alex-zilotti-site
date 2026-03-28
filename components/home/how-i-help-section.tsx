import Link from "next/link";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Gavel, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Gavel size={28} />,
    title: "Psicologia Jurídica e Forense",
    subtitle: "Suporte psicológico para quem enfrenta o sistema de justiça.",
    bullets: [
      "Acompanhamento em processos de família, cíveis, trabalhistas ou penais.",
      "Preparação emocional para audiências e depoimentos.",
      "Apoio em conflitos familiares e empresariais com base em Psicologia Jurídica e Mediação de Conflitos.",
    ],
    href: "/servicos#juridica",
  },
  {
    icon: <Brain size={28} />,
    title: "Clínica Cognitiva de Alta Performance",
    subtitle: "TCC para quem vive decisões de alto impacto.",
    bullets: [
      "Ansiedade de performance, pânico, depressão e autossabotagem.",
      "Conflitos que impactam negócios, imagem e decisões.",
      "Planos individualizados, sem promessas de resultado garantido.",
    ],
    href: "/servicos#clinica",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Hipnose clínica (recurso auxiliar)",
    subtitle: "Recurso técnico, com critério, ética e seu consentimento.",
    bullets: [
      "Reconhecida pelo CFP — Resolução nº 13/2000.",
      "Apoio em ansiedade, bloqueios específicos e mudanças de hábitos.",
      "Sempre integrada ao plano terapêutico. Nunca como show.",
    ],
    href: "/servicos#hipnose",
  },
];

export default function HowIHelpSection() {
  return (
    <Section>
      <SectionHeader
        title="Como posso ajudar"
        subtitle="Três pilares para sustentar mente, decisões e resultados."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-card border border-accent/30 rounded-sm p-7 shadow-sm flex flex-col gap-4 hover:border-accent transition-colors"
          >
            <div className="text-accent">{s.icon}</div>
            <div>
              <h3 className="font-serif text-lg text-primary mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{s.subtitle}</p>
              <ul className="flex flex-col gap-2">
                {s.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-foreground flex gap-2">
                    <span className="text-accent mt-1">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={s.href}
              className="text-xs text-accent hover:underline mt-auto pt-2 font-medium"
            >
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
