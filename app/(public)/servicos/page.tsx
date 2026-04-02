import type { Metadata } from "next";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/utils";
import { Gavel, Brain, Sparkles, Compass, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços | Assistente Técnico em Psicologia Jurídica para Advogados – Alex Zilotti",
  description:
    "Assistente Técnico em Psicologia Jurídica para advogados: análise de laudo psicológico, parecer técnico, formulação de quesitos e acompanhamento de perícia. CRP 08/48529.",
};

const services = [
  {
    id: "psicologia-forense-juridica",
    icon: <Gavel size={32} />,
    title: "Psicologia Forense e Jurídica",
    subtitle:
      "Assistente Técnico em Psicologia Jurídica para advogados e escritórios.",
    text: "Atuação técnica voltada à análise de laudos, pareceres e outros elementos psicológicos relevantes ao processo. O trabalho pode envolver leitura crítica do material constante nos autos, formulação de quesitos, apoio técnico ao advogado e elaboração de parecer psicológico, quando cabível.",
    bullets: [
      "Análise crítica de laudos psicológicos e pareceres juntados ao processo.",
      "Identificação de inconsistências metodológicas, técnicas ou éticas.",
      "Formulação de quesitos para perícia psicológica.",
      "Elaboração de parecer técnico psicológico, quando aplicável.",
      "Acompanhamento técnico de perícias e esclarecimento de aspectos psicolegais relevantes ao caso.",
    ],
  },
  {
    id: "clinica",
    icon: <Brain size={32} />,
    title: "Clínica Cognitiva de Alta Performance",
    subtitle: "TCC para quem vive decisões de alto impacto.",
    text: "Terapia Cognitivo-Comportamental para empresários, executivos, profissionais liberais e pessoas sob alta pressão. O foco é organizar pensamentos, emoções e condutas para sustentar desempenho com mais equilíbrio.",
    bullets: [
      "Ansiedade de performance, pânico, depressão e autossabotagem.",
      "Conflitos que afetam decisões, imagem e rotina profissional.",
      "Planos individualizados, sem promessa de resultado em prazo determinado.",
      "Atendimento técnico, reservado e orientado por objetivos clínicos claros.",
    ],
  },
  {
    id: "hipnose",
    icon: <Sparkles size={32} />,
    title: "Hipnose clínica como recurso auxiliar",
    subtitle: "Recurso técnico utilizado com critério, ética e consentimento.",
    text: "A hipnose clínica pode ser utilizada como recurso auxiliar dentro do processo psicológico, conforme a Resolução CFP nº 13/2000. Não é serviço isolado, nem espetáculo, nem promessa de transformação imediata.",
    bullets: [
      "Recurso reconhecido pelo CFP para psicólogos com formação adequada.",
      "Pode auxiliar em ansiedade, bloqueios específicos e mudança de hábitos, quando indicada.",
      "Uso sempre integrado ao plano terapêutico.",
      "Sem hipnose de palco, sensacionalismo ou exposição do paciente.",
    ],
  },
  {
    id: "imersao",
    icon: <Compass size={32} />,
    title: "Imersão Rotas de Alta Performance Emocional",
    subtitle: "Experiência intensiva para pausar, refletir e reposicionar a rota.",
    text: "Imersão em grupo reduzido, com profundidade psicológica e estrutura planejada, voltada a pessoas que precisam reorganizar decisões, direção de vida e performance emocional. Não substitui psicoterapia individual.",
    bullets: [
      "Trabalho intensivo com método, ética e seleção prévia.",
      "Foco em clareza, autoconhecimento e próximos passos.",
      "Base em TCC, Psicologia Jurídica e desenvolvimento humano.",
      "Participação condicionada à triagem, não por compra automática.",
    ],
  },
  {
    id: "lideranca",
    icon: <Users size={32} />,
    title: "Desenvolvimento para líderes e pessoas em alta exposição",
    subtitle: "Carreira, responsabilidade e decisões com suporte psicológico.",
    text: "Processos voltados a líderes, empresários, executivos, artistas e influenciadores que precisam alinhar desempenho, imagem pública e saúde emocional sem perder consistência interna.",
    bullets: [
      "Decisões de carreira, reposicionamento e clareza de direção.",
      "Conflitos de liderança, limites e impacto emocional da responsabilidade.",
      "Manejo da exposição pública e seus efeitos subjetivos.",
      "Distinção clara entre psicoterapia e desenvolvimento desde o início.",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <Section>
        <SectionHeader
          title="Serviços"
          subtitle="Atuação técnica e clínica com foco em clareza, método e responsabilidade profissional."
        />

        <div className="flex flex-col gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="grid grid-cols-1 gap-6 rounded-sm border border-accent/20 bg-card p-8 shadow-sm transition-colors hover:border-accent md:grid-cols-[48px_1fr]"
            >
              <div className="text-accent">{s.icon}</div>

              <div>
                <h2 className="mb-1 font-serif text-2xl text-primary">
                  {s.title}
                </h2>

                <p className="mb-4 text-sm text-muted-foreground">
                  {s.subtitle}
                </p>

                <p className="mb-5 leading-relaxed text-foreground">{s.text}</p>

                <ul className="mb-6 flex flex-col gap-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span className="text-accent">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="sm" variant="outline">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar contato
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          Todos os serviços seguem o Código de Ética Profissional do Psicólogo e
          as Resoluções do Conselho Federal de Psicologia. Este site tem caráter
          informativo e não realiza diagnósticos à distância nem promessa de
          resultado.
        </p>
      </Section>

      <section
        id="assistente-perito"
        className="section-shell w-full px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl text-ivory md:text-4xl">
            Assistente Técnico em Psicologia Jurídica para Advogados
          </h2>

          <p className="mb-8 text-base leading-8 text-quiet">
            Atuação especializada em suporte técnico a advogados e escritórios
            em processos que envolvem prova psicológica, laudo pericial,
            pareceres e controvérsias metodológicas. O objetivo é oferecer
            leitura qualificada do material psicológico constante nos autos.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                Atuação técnica possível
              </h3>

              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Análise crítica de laudo psicológico pericial.</li>
                <li>• Identificação de falhas técnicas, metodológicas ou éticas.</li>
                <li>• Formulação de quesitos para perícia psicológica.</li>
                <li>• Elaboração de parecer técnico psicológico.</li>
                <li>• Acompanhamento técnico de perícia judicial.</li>
                <li>• Esclarecimentos sobre conceitos psicolegais relevantes ao caso.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                O que isso entrega ao advogado
              </h3>

              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Leitura técnica mais qualificada da prova psicológica.</li>
                <li>• Subsídios para impugnação, complemento ou esclarecimento do laudo.</li>
                <li>• Quesitos mais precisos e tecnicamente fundamentados.</li>
                <li>• Melhor compreensão dos aspectos psicológicos relevantes ao processo.</li>
                <li>• Apoio técnico para estratégia processual com maior segurança.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-accent/15 bg-white/[0.02] p-6 md:p-8">
            <h3 className="mb-3 text-lg text-ivory">
              Limites e posicionamento ético
            </h3>

            <p className="mb-4 text-sm leading-7 text-quiet">
              O assistente técnico não substitui o perito nomeado pelo juízo,
              não atua como defensor cego da parte e não promete desfecho
              processual. A atuação é técnica, fundamentada e compatível com os
              limites éticos da profissão.
            </p>

            <p className="text-sm leading-7 text-quiet">
              O trabalho busca qualificar a leitura dos elementos psicológicos
              do processo, contribuindo com clareza técnica, consistência
              metodológica e responsabilidade profissional.
            </p>
          </div>
        </div>
      </section>

      <Section muted>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 font-serif text-3xl text-primary">
            Qual serviço faz sentido para o seu caso?
          </h2>

          <p className="mb-8 text-muted-foreground">
            O primeiro passo é entender a demanda, o contexto e o formato de
            atuação mais adequado, seja clínica, seja técnica.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/contato">Agendar sessão inicial</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a equipe
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
