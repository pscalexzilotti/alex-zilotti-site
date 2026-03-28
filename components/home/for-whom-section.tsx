import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Briefcase, Star, Scale, Shield } from "lucide-react";

const items = [
  {
    icon: <Briefcase size={28} />,
    title: "Empresários e executivos",
    text: "Quem responde por equipes, resultados e grandes decisões de alto impacto financeiro e humano.",
  },
  {
    icon: <Star size={28} />,
    title: "Influenciadores e artistas",
    text: "Quem vive sob exposição constante, contratos, haters, cancelamentos e cobrança por relevância.",
  },
  {
    icon: <Scale size={28} />,
    title: "Pessoas em processos judiciais",
    text: "Quem enfrenta disputas familiares, empresariais ou criminais e sente o peso emocional do litígio.",
  },
  {
    icon: <Shield size={28} />,
    title: "Líderes sob alta responsabilidade",
    text: "Quem sabe que um erro não impacta apenas a própria vida, mas equipes, contratos e reputações.",
  },
];

export default function ForWhomSection() {
  return (
    <Section muted>
      <SectionHeader
        title="Para quem é o meu trabalho"
        subtitle="Para quem não pode simplesmente parar tudo."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-sm p-6 shadow-sm hover:border-accent transition-colors"
          >
            <div className="text-accent mb-4">{item.icon}</div>
            <h3 className="font-serif text-base text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
