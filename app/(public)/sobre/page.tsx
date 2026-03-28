import type { Metadata } from "next";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "Sobre | Alex Zilotti Psicologo",
  description: "Historia, formacao e atuacao de Alex Cristoffer Zilotti, Psicologo CRP 08/48529.",
};

export default function SobrePage() {
  return (
    <Section>
      <SectionHeader title="Sobre mim" subtitle="Psicologo juridico, clinico e de alta performance." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="rounded-sm overflow-hidden bg-muted h-96">
          <img src="/images/alex-portrait-1.jpg" alt="Alex Zilotti" className="w-full h-full object-cover object-top" />
        </div>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p className="text-lg">Sou Alex Cristoffer Zilotti, psicologo CRP 08/48529, especializado em Psicologia Juridica e Forense e Terapia Cognitivo-Comportamental (TCC).</p>
          <p>Atuo com pessoas que vivem sob alta pressao: empresarios, influenciadores, artistas, executivos e pessoas em processos judiciais.</p>
          <p>Meu trabalho e baseado em etica, sigilo e efetividade. Sem promessas de cura ou resultados em tempo determinado.</p>
          <h3 className="font-serif text-xl text-primary pt-4">Formacao</h3>
          <ul className="space-y-2">
            {["Psicologo - CRP 08/48529","Especializacao em Psicologia Juridica e Forense","Especializacao em TCC","Hipnose clinica - recurso auxiliar (Res. CFP 13/2000)","Sao Jose dos Pinhais - PR, Brasil"].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-accent">+</span> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
