const stats = [
  { label: "Registro", value: "CRP 08/48529" },
  { label: "Formação", value: "Mestre em Psicologia Organizacional" },
  { label: "Experiência", value: "+15 anos em RH e DHO" },
  { label: "Atuação", value: "Brasil & Portugal" },
];

export default function AboutSection() {
  return (
    <div className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[var(--color-primary)] text-xs font-medium tracking-[0.14em] uppercase mb-4">
              Sobre
            </p>
            <h2
              className="font-[family-name:var(--font-display)] font-light text-[var(--color-text)]"
              style={{ fontSize: "var(--text-xl)" }}
            >
              Quem é Alex Cristoffer Zilotti
            </h2>
          </div>

          <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Psicólogo (CRP 08/48529), Mestre em Psicologia Organizacional,
              com trajetória construída entre o Brasil e Portugal.
            </p>
            <p>
              Atuei mais de uma década em Recursos Humanos na Petrobras, liderei
              programas de desenvolvimento em XP Investimentos e hoje atuo em
              consultoria e psicologia aplicada para pessoas e negócios em alta
              exigência.
            </p>
            <p>
              Integro clínica, jurídico e gestão de pessoas: isso significa que
              olho para o sofrimento psíquico, para as dinâmicas familiares e de
              trabalho e para as estratégias de longo prazo — sempre com critério
              técnico e respeito absoluto à confidencialidade.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-divider)]">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium text-[var(--color-text-faint)] tracking-[0.1em] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-[var(--color-text)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}