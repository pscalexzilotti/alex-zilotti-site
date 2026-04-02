import Link from "next/link";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Gavel, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Gavel size={20} strokeWidth={1.6} />,
    title: "Assistente Técnico em Psicologia Jurídica",
    subtitle:
      "Suporte técnico para advogados em processos com prova psicológica.",
    bullets: [
      "Análise crítica de laudos e pareceres psicológicos juntados aos autos.",
      "Identificação de falhas metodológicas, técnicas ou éticas em perícias.",
      "Formulação de quesitos para perícia psicológica.",
      "Elaboração de parecer técnico psicológico, quando cabível.",
      "Esclarecimentos sobre fenômenos psicolegais relevantes ao caso.",
    ],
    href: "/servicos#assistente-perito",
  },
  {
    icon: <Brain size={20} strokeWidth={1.6} />,
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
    icon: <Sparkles size={20} strokeWidth={1.6} />,
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
    <Section className="bg-transparent">
      <SectionHeader
        title="Como posso ajudar"
        subtitle="Três frentes de atuação integradas por método, reserva técnica e leitura precisa do contexto humano."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="surface-panel flex h-full flex-col gap-5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"
          >
            <div className="text-accent">{service.icon}</div>

            <div>
              <h3 className="mb-2 text-[1.25rem] text-ivory">
                {service.title}
              </h3>

              <p className="mb-4 text-sm uppercase tracking-[0.12em] text-taupe">
                {service.subtitle}
              </p>

              <ul className="flex flex-col gap-3">
                {service.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-sm leading-relaxed text-taupe"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={service.href}
              className="mt-auto inline-flex items-center text-sm font-medium tracking-[0.04em] text-accent transition-colors hover:text-[#a79372]"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
