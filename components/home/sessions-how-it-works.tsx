import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import StepTimeline from "@/components/shared/step-timeline";

const steps = [
  { number: "01", title: "Contato inicial", text: "Voce entra em contato pelo WhatsApp. Respondemos com agilidade e sem julgamentos." },
  { number: "02", title: "Sessao de avaliacao", text: "Na primeira sessao nos conhecemos. Voce traz sua historia e eu proponho um plano adequado." },
  { number: "03", title: "Processo terapeutico", text: "Com frequencia e objetivos definidos, trabalhamos juntos com transparencia, etica e sigilo absoluto." },
];

export default function SessionsHowItWorks() {
  return (
    <Section>
      <SectionHeader title="Como funciona o atendimento" subtitle="Tres etapas simples para comecar." />
      <div className="max-w-xl">
        <StepTimeline steps={steps} />
      </div>
    </Section>
  );
}
