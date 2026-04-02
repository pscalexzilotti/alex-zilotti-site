import type { Metadata } from "next";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/utils";
import { Gavel, Brain, Sparkles, Compass, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços | Assistente Técnico em Psicologia Jurídica – Alex Zilotti",
  description:
    "Assistente Técnico em Psicologia Jurídica para advogados: análise de laudo psicológico, parecer técnico, formulação de quesitos e acompanhamento de perícia. TCC de Alta Performance e Hipnose clínica. CRP 08/48529.",
};

const services = [
  {
    id: "juridica",
    icon: <Gavel size={32} />,
    title: "Psicologia Jurídica e Forense",
    subtitle: "Suporte psicológico para quem enfrenta o sistema de justiça.",
    text: "Atendimento especializado para pessoas envolvidas em processos judiciais e conflitos intensos. O foco é cuidar da saúde mental, organizar pensamentos e atravessar o processo com estabilidade emocional.",
    bullets: [
      "Acompanhamento em processos de família, cíveis, trabalhistas ou penais.",
      "Preparação emocional para audiências, depoimentos e negociações.",
      "Apoio em conflitos familiares e empresariais com base em Psicologia Jurídica e Mediação de Conflitos.",
      "Atuação sem promessas de ganho de causa, em conformidade com o Código de Ética do Psicólogo.",
    ],
  },
  {
    id: "clinica",
    icon: <Brain size={32} />,
    title: "Clínica Cognitiva de Alta Performance",
    subtitle: "TCC para quem vive decisões de alto impacto.",
    text: "Terapia Cognitivo-Comportamental para empresários, transtornos alimentares, personalidade, casal, família, crianças e adolescentes.",
      "Planos individualizados, sem promessas de cura em tempo determinado.",
    ],
  },
  {
    id: "hipnose",
    icon: <Sparkles size={32} />,
    title: "Hipnose clínica como recurso auxiliar",
    subtitle: "Um recurso técnico usado com critério, ética e consentimento.",
    text: "A hipnose clínica é utilizada como recurso auxiliar dentro do processo psicológico, conforme Resolução CFP nº 13/2000. Nunca como espetáculo, serviço isolado ou promessa de transformação rápida.",
    bullets: [
      "Recurso reconhecido pelo CFP para psicólogos com formação adequada — Resolução nº 13/2000.",
      "Pode apoiar em ansiedade, bloqueios específicos e mudanças de hábitos, quando indicada.",
      "Sempre integrada ao plano terapêutico, com o seu consentimento.",
      "Sem hipnose de palco, regressões sensacionalistas ou exposição de pacientes para fins de marketing.",
    ],
  },
  {
    id: "imersao",
    icon: <Compass size={32} />,
    title: "Imersão Rotas de Alta Performance Emocional",
    subtitle: "3 dias para pausar e redesenhar sua rota.",
    text: "Experiências intensivas em hotéis de alto padrão, em grupos pequenos, para refletir com profundidade sobre vida, carreira, decisões e responsabilidades. Não substitui psicoterapia individual, mas pode complementar o processo.",
    bullets: [
      "3 dias de trabalho psicológico intensivo com método e ética.",
      "Base em TCC, Psicologia Jurídica e Gestão de Pessoas.",
      "Foco em autoconhecimento, performance emocional e clareza de próximos passos.",
      "Acesso mediante triagem prévia — não via compra direta.",
    ],
  },
  {
    id: "lideranca",
    icon: <Users size={32} />,
    title: "Desenvolvimento para líderes e pessoas em alta exposição",
    subtitle: "Carreira, poder e decisões com suporte psicológico.",
    text: "Processos de desenvolvimento voltados a empresários, influenciadores, artistas e executivos que desejam alinhar performance, saúde emocional e decisões de carreira. Integra Psicologia, TCC e gestão de pessoas dentro dos limites éticos da profissão.",
    bullets: [
      "Decisões de carreira, reposicionamento e clareza de propósito.",
      "Liderança, conflitos internos, limites e responsabilidade com equipes.",
      "Impacto da exposição pública na forma como você se vê e se conduz.",
      "Diferenciação clara entre psicoterapia e processos de desenvolvimento explicada no início.",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <Section>
        <SectionHeader
          title="Serviços"
          subtitle="Formas de atuação para quem vive sob alta pressão."
        />
        <div className="flex flex-col gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-card border border-accent/20 rounded-sm p-8 shadow-sm grid grid-cols-1 md:grid-cols-[48px_1fr] gap-6 hover:border-accent transition-colors"
            >
              <div className="text-accent">{s.icon}</div>
              <div>
                <h2 className="font-serif text-2xl text-primary mb-1">{s.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{s.subtitle}</p>
                <p className="text-foreground leading-relaxed mb-5">{s.text}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span className="text-accent">•</span> {b}
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" variant="outline">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Agendar sessão
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-12 border-t border-border pt-6">
          Todos os serviços seguem o Código de Ética Profissional do Psicólogo e as Resoluções do
          Conselho Federal de Psicologia. Este site tem caráter informativo e não realiza
          diagnósticos à distância ou promessas de resultado.
        </p>
      </Section>

      <section
        id="assistente-perito"
        className="section-shell w-full px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl md:text-4xl text-ivory">
            Assistente Técnico em Psicologia Jurídica
          </h2>
          <p className="mb-8 text-base leading-8 text-quiet">
            Atuação focada em suporte técnico a advogados e escritórios em casos que
            envolvem prova psicológica, laudos, pareceres e controvérsias
            metodológicas, preservando rigor científico e responsabilidade ética.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                O que faço como assistente técnico
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Analisar criticamente laudos e documentos psicológicos.</li>
                <li>• Indicar eventuais fragilidades técnicas, metodológicas ou éticas.</li>
                <li>• Auxiliar na elaboração de quesitos direcionados.</li>
                <li>• Produzir parecer técnico psicológico, quando aplicável.</li>
                <li>• Acompanhar tecnicamente perícias e entrevistas.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                O que não é essa atuação
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Não substitui o perito nomeado pelo juízo.</li>
                <li>• Não configura promessa de êxito ou de desfecho específico.</li>
                <li>• Não se confunde com atendimento psicoterapêutico.</li>
                <li>• Não é defesa cega, mas análise técnica pautada em critérios científicos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section muted>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-primary mb-4">
            Qual serviço faz sentido para você agora?
          </h2>
          <p className="text-muted-foreground mb-8">
            O primeiro passo é uma sessão inicial para entendermos sua história, sua demanda e
            o formato mais adequado para o seu momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/contato">Agendar sessão inicial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
