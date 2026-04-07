const cards = [
  {
    number: "01",
    title: "Diagnóstico de Clima, Cultura e Risco Psicológico",
    body: "Entrevistas, análise de indicadores e leitura de contexto para mapear desgaste, conflitos e rupturas silenciosas. Entrega em formato executivo, com prioridades claras e plano de ação possível de implementar.",
  },
  {
    number: "02",
    title: "Programas de Liderança & Mentoria para Gestores",
    body: "Desenvolvimento de líderes em ambientes de alta pressão (operacional, financeiro, comercial). Foco em tomada de decisão, comunicação com times, feedbacks difíceis e gestão de conflitos.",
  },
  {
    number: "03",
    title: "Alta Performance Comercial",
    body: "Programas de T&D, PNL e coaching de performance para times de vendas e assessores de investimentos. Aceleração de ramp‑up, redução de turnover e aumento de produtividade com preservação de saúde mental.",
  },
  {
    number: "04",
    title: "RH/DHO sob Medida (HRBP Externo)",
    body: "Estruturação ou reposicionamento de RH/DHO, com políticas, rituais e indicadores alinhados à estratégia do negócio. Atuação como parceiro estratégico da direção, sem burocracia excessiva e com foco em resultado.",
  },
];

export default function ConsultoriaEmpresasSection() {
  return (
    <div className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-[var(--color-primary)] text-xs font-medium tracking-[0.14em] uppercase mb-4">
            Para Empresas
          </p>
          <h2
            className="font-[family-name:var(--font-display)] font-light text-[var(--color-text)] mb-6"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Consultoria e Desenvolvimento Humano para Empresas
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Trago mais de 15 anos em Recursos Humanos e Desenvolvimento Humano,
            atuando em ambientes de alta complexidade como Petrobras, XP
            Investimentos e grupos imobiliários em Portugal.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Meu trabalho é ajudar empresas, líderes e times comerciais a
            sustentarem performance alta sem adoecer — com cultura clara,
            critérios de gestão de pessoas e desenvolvimento real de liderança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] p-8 hover:shadow-[var(--shadow-md)] transition-shadow"
            >
              <span className="text-[var(--color-primary)] text-xs font-medium tracking-[0.1em] mb-4 block">
                {card.number}
              </span>
              <h3
                className="font-[family-name:var(--font-display)] font-medium text-[var(--color-text)] mb-3"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {card.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-divider)] pt-12 max-w-2xl">
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-2">
            Atendo empresas que entendem que gente não é &quot;custo&quot;, mas também
            não é discurso vazio de &quot;recursos humanos&quot;.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            Se você é gestor ou sócio e precisa discutir pessoas, cultura e
            performance com alguém que transita bem entre clínica, jurídico e
            negócios, podemos agendar uma conversa estratégica.
          </p>
          <a
            href="#contato"
            className="inline-block bg-[var(--color-primary)] text-[var(--color-text-inverse)] px-7 py-3 rounded-[var(--radius-md)] font-medium text-sm hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Agendar conversa
          </a>
        </div>
      </div>
    </div>
  );
}