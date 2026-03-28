import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bullets = [
  "Psicologo clinico com especializacao em Psicologia Juridica e Forense",
  "Especialista em Terapia Cognitivo-Comportamental (TCC)",
  "CRP 08/48529 - Conselho Federal de Psicologia",
];

export default function AboutSummary() {
  return (
    <Section muted>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-sm overflow-hidden bg-primary/10 h-80">
          <img src="/images/alex-portrait-2.jpg" alt="Alex Zilotti" className="w-full h-full object-cover object-top" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-4">Sobre mim</p>
          <h2 className="font-serif text-3xl text-primary mb-2">Alex Cristoffer Zilotti</h2>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground">
                <span className="text-accent font-bold">+</span> {b}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline">
            <Link href="/sobre">Conhecer minha historia</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
