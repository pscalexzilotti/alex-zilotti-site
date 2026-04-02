import { Section } from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LegalAssistantSection() {
  return (
    <Section muted id="assistente-perito">
      <SectionHeader
        title="Assistente Técnico em Psicologia Jurídica"
        subtitle="Suporte técnico especializado para advogados e escritórios em processos que envolvem prova psicológica, laudo pericial e questões psicolegais."
      />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
              O que é essa atuação
            </h3>
            <p className="text-sm leading-7 text-quiet">
              O assistente técnico em Psicologia atua ao lado do advogado na
              análise de elementos psicológicos relevantes ao processo. Sua
              função é técnica: examinar laudos, apontar fragilidades
              metodológicas, formular quesitos e, quando cabível, elaborar
              parecer técnico psicológico. Atua com base científica, critério
              profissional e responsabilidade ética.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                Atuação técnica possível
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>• Análise crítica de laudo psicológico pericial.</li>
                <li>
                  • Identificação de falhas técnicas, metodológicas ou éticas.
                </li>
                <li>• Formulação de quesitos para perícia psicológica.</li>
                <li>• Elaboração de parecer técnico psicológico.</li>
                <li>• Acompanhamento técnico de perícia judicial.</li>
                <li>
                  • Esclarecimentos sobre conceitos psicolegais nos autos.
                </li>
                <li>
                  • Apoio em processos de família, guarda, interdição e
                  criminal.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-taupe">
                O que isso oferece ao advogado
              </h3>
              <ul className="space-y-2.5 text-sm leading-7 text-quiet">
                <li>
                  • Leitura técnica qualificada da prova psicológica nos autos.
                </li>
                <li>
                  • Subsídios para contestar ou complementar laudo do perito
                  oficial.
                </li>
                <li>
                  • Quesitos mais precisos e tecnicamente fundamentados.
                </li>
                <li>
                  • Melhor compreensão de fenômenos psicolegais na instrução.
                </li>
                <li>
                  • Argumentação mais consistente em questões de natureza
                  psicológica.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="surface-panel flex h-full flex-col justify-between rounded-2xl p-6 md:p-8">
          <div className="space-y-4">
            <h3 className="text-lg text-ivory">Limites e posicionamento ético</h3>
            <p className="text-sm leading-7 text-quiet">
              O assistente técnico não substitui o perito nomeado pelo juízo.
              Não atua como defensor cego da parte, não promete desfecho
              processual e não emite diagnóstico à distância. O trabalho é
              pautado em método, ciência e ética profissional — em conformidade
              com o Código de Ética do Psicólogo e as Resoluções do CFP.
            </p>
            <p className="text-sm leading-7 text-quiet">
              O objetivo é qualificar a leitura do material psicológico
              disponível nos autos, oferecendo ao advogado maior clareza técnica
              para conduzir a estratégia processual com segurança.
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
