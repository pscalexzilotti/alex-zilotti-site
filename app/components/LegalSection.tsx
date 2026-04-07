const juridicoBullets = [
  "Acompanhamento psicológico em disputas familiares, guarda e alienação parental.",
  "Preparação emocional para perícias, audiências e exposição em juízo.",
  "Trabalho articulado com advogados, quando o cliente autoriza, para alinhamento de expectativas e linguagem.",
];

const suporteBullets = [
  "Análise crítica de laudos e pareceres psicológicos.",
  "Identificação de falhas metodológicas, éticas e lacunas argumentativas.",
  "Formulação de quesitos técnicos preliminares e complementares.",
  "Elaboração de pareceres psicológicos especializados para subsidiar peças processuais.",
];

interface CardProps {
  label: string;
  title: string;
  body: React.ReactNode;
  bullets: string[];
}

function LegalCard({ label, title, body, bullets }: CardProps) {
  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-xl)] p-8 md:p-10 bg-[var(--color-surface-2)]">
      <p className="text-[var(--color-primary)] text-xs font-medium tracking-[0.14em] uppercase mb-4">
        {label}
      </p>
      <h3
        className="font-[family-name:var(--font-display)] font-light text-[var(--color-text)] mb-5"
        style={{ fontSize: "var(--text-xl)" }}
      >
        {title}
      </h3>
      <div className="text-[var(--color-text-muted)] text-sm leading-relaxed space-y-3 mb-8">
        {body}
      </div>
      <div className="h-px bg-[var(--color-divider)] mb-6" aria-hidden="true" />
      <ul className="space-y-3" role="list">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LegalSection() {
  return (
    <div className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <LegalCard
            label="Psicologia Jurídica"
            title="Psicologia Jurídica & Suporte em Processos de Alta Complexidade"
            body={
              <>
                <p>
                  Atendo pessoas e famílias envolvidas em disputas judiciais,
                  avaliações periciais e conflitos que expõem intimidade,
                  reputação e vínculos afetivos.
                </p>
                <p>
                  O foco não é apenas &quot;aguentar o processo&quot;, mas atravessá‑lo
                  com o máximo de proteção psíquica possível, clareza de cenário
                  e preparo emocional para decisões difíceis.
                </p>
              </>
            }
            bullets={juridicoBullets}
          />
          <LegalCard
            label="Para Advogados e Escritórios"
            title="Suporte Psicológico Técnico para Advogados e Escritórios"
            body={
              <>
                <p>
                  Atendo casos em que a estratégia jurídica depende de uma
                  compreensão fina de dinâmica familiar, dano psíquico,
                  credibilidade de relatos e avaliação de risco.
                </p>
                <p>
                  O objetivo é oferecer suporte técnico robusto — sem improviso,
                  sem achismos — para fortalecer o contraditório, qualificar
                  quesitos e embasar manifestações com rigor metodológico.
                </p>
              </>
            }
            bullets={suporteBullets}
          />
        </div>
      </div>
    </div>
  );
}