const bullets = [
  "Terapia Cognitivo-Comportamental especializada em alta exigência.",
  "Reconstrução de narrativa pessoal após traumas de carreira ou reputação.",
  "Manejo de ansiedade, insônia e ruminação em contextos de performance.",
  "Processos presenciais e online com sigilo e rigor técnico.",
];

export default function ServicesGrid() {
  return (
    <div className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[var(--color-primary)] text-xs font-medium tracking-[0.14em] uppercase mb-4">
          Psicoterapia
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2
              className="font-[family-name:var(--font-display)] font-light text-[var(--color-text)] mb-6"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Psicoterapia para adultos em alta exigência
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">
              Atendo pessoas que não podem &quot;parar a vida&quot; para adoecer:
              executivos, profissionais liberais, empreendedores e lideranças
              que convivem com cobrança permanente, exposição e decisões de alto
              impacto.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              A psicoterapia é conduzida com base em TCC e Psicologia
              Organizacional, sempre orientada a resultado: regulação emocional
              sob pressão, clareza de raciocínio em cenários complexos e
              fortalecimento da identidade profissional — sem perder de vista
              quem você é fora dos cargos e dos processos.
            </p>
          </div>

          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] p-8">
            <p className="text-xs font-medium text-[var(--color-text-muted)] tracking-[0.1em] uppercase mb-6">
              O que inclui
            </p>
            <ul className="space-y-4" role="list">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}