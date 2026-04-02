import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Briefcase, Star, Scale, Shield } from "lucide-react";

const items = [
  {
    icon: <Briefcase size={20} strokeWidth={1.6} />,
    title: "Empresários e executivos",
    text: "Quem responde por equipes, resultados e grandes decisões de alto impacto financeiro e humano.",
  },
  {
    icon: <Star size={20} strokeWidth={1.6} />,
    title: "Influenciadores e artistas",
    text: "Quem vive sob exposição constante, contratos, haters, cancelamentos e cobrança por relevância.",
  },
  {
    icon: <Scale size={20} strokeWidth={1.6} />,
    title: "Pessoas em processos judiciais",
    text: "Quem enfrenta disputas familiares, empresariais ou criminais e sente o peso emocional do litígio.",
  },
  {
    icon: <Shield size={20} strokeWidth={1.6} />,
    title: "Líderes sob alta responsabilidade",
    text: "Quem sabe que um erro não impacta apenas a própria vida, mas equipes, contratos e reputações.",
  },
];

export default function ForWhomSection() {
  return (
    <Section muted>
      <SectionHeader
        title="Para quem é o meu trabalho"
        subtitle="Para quem não pode simplesmente parar tudo, mas precisa sustentar clareza, estabilidade e critério sob pressão."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="surface-panel rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.05]"
          >
            <div className="mb-5 text-accent">{item.icon}</div>
            <h3 className="mb-3 text-[1.15rem] text-ivory">{item.title}</h3>
            <p className="text-sm leading-7 text-quiet">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
