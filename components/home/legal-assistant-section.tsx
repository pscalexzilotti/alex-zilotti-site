import { Section } from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LegalAssistantSection() {
  return (
    <Section muted id="assistente-perito">
      <SectionHeader
        title="Assistente Técnico em Psicologia Jurídica para Advogados"
        subtitle="Atuação técnica voltada à análise crítica de elementos psicológicos relevantes ao processo, com rigor metodológico, clareza interpretativa e responsabilidade ética."
      />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-base leading-8 text-quiet">
            Na interface entre Psicologia e Direito, a leitura de laudos,
            avaliações e fenômenos psicolegais exige precisão técnica. A
            atuação como Assistente Técnico em Psicologia Jurídica oferece
            suporte especializado a advogados e escritórios em demandas que
            envolvem prova psicológica, controvérsias metodológicas e elevada
            sensibilidade humana. O trabalho é conduzido com base científica,
            critério técnico e responsabilidade ética, contribuindo para uma
            compreensão mais qualificada dos elementos psicológicos relevantes
            ao caso.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                Frentes de atuação
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Análise crítica de laudos e pareceres psicológicos.</li>
                <li>
                  • Identificação de fragilidades técnicas, metodológicas ou
                  éticas em documentos psicológicos.
                </li>
                <li>• Apoio na formulação de quesitos em perícias psicológicas.</li>
                <li>• Elaboração de parecer técnico psicológico, quando cabível.</li>
                <li>• Acompanhamento técnico de perícias e entrevistas.</li>
                <li>
                  • Esclarecimentos sobre conceitos e fenômenos psicolegais.
                </li>
                <li>
                  • Apoio técnico em processos com alta complexidade emocional.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                Benefícios ao advogado
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>
                  • Maior clareza interpretativa sobre material psicológico
                  constante dos autos.
                </li>
                <li>
                  • Apoio técnico à leitura da prova psicológica apresentada no
                  processo.
                </li>
                <li>
                  • Qualificação do diálogo entre Psicologia e estratégia
                  jurídica.
                </li>
                <li>
                  • Redução de leituras superficiais ou equivocadas de elementos
                  técnicos.
                </li>
                <li>
                  • Maior consistência na argumentação quando há questões
                  psicolegais em discussão.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="surface-panel flex h-full flex-col justify-between rounded-2xl p-6 md:p-8">
          <div className="space-y-4">
            <h3 className="text-lg text-ivory">
              Escopo e limites éticos da atuação
            </h3>
            <p className="text-sm leading-7 text-quiet">
              A atuação como Assistente Técnico em Psicologia Jurídica é
              estritamente técnica e ética. Não substitui o perito nomeado pelo
              juízo, não se confunde com defesa processual e não implica
              promessa de desfecho favorável. O compromisso é com método,
              ciência psicológica e responsabilidade profissional.
            </p>
            <p className="text-sm leading-7 text-quiet">
              O objetivo é qualificar a compreensão dos elementos psicológicos
              envolvidos no caso, oferecendo subsídios técnicos para que a
              estratégia jurídica seja construída com maior lucidez quanto aos
              limites e possibilidades da prova psicológica.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline" size="lg">
              <Link href="/contato#advogados">
                Solicitar contato confidencial
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </Section>
  );
}
