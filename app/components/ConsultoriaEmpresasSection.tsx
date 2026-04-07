const cards = [
  {
    n: "01",
    title: "Diagn\u00f3stico de Clima, Cultura e Risco Psicol\u00f3gico",
    body: "Entrevistas, an\u00e1lise de indicadores e leitura de contexto para mapear desgaste, conflitos e rupturas silenciosas. Entrega em formato executivo, com prioridades claras e plano de a\u00e7\u00e3o poss\u00edvel de implementar.",
  },
  {
    n: "02",
    title: "Programas de Lideran\u00e7a & Mentoria para Gestores",
    body: "Desenvolvimento de l\u00edderes em ambientes de alta press\u00e3o (operacional, financeiro, comercial). Foco em tomada de decis\u00e3o, comunica\u00e7\u00e3o com times, feedbacks dif\u00edceis e gest\u00e3o de conflitos.",
  },
  {
    n: "03",
    title: "Alta Performance Comercial (Imobili\u00e1rio, Financeiro e Servi\u00e7os)",
    body: "Programas de T&D, PNL e coaching de performance para times de vendas e assessores de investimentos. Acelera\u00e7\u00e3o de ramp-up, redu\u00e7\u00e3o de turnover e aumento de produtividade com preserva\u00e7\u00e3o de sa\u00fade mental.",
  },
  {
    n: "04",
    title: "RH/DHO sob Medida (HRBP Externo)",
    body: "Estrutura\u00e7\u00e3o ou reposicionamento de RH/DHO, com pol\u00edticas, rituais e indicadores alinhados \u00e0 estrat\u00e9gia do neg\u00f3cio. Atua\u00e7\u00e3o como parceiro estrat\u00e9gico da dire\u00e7\u00e3o, sem burocracia excessiva e com foco em resultado.",
  },
];

export default function ConsultoriaEmpresasSection() {
  return (
    <section
      style={{ background: "var(--charcoal)", padding: "128px 64px" }}
      className="empresas-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 20 }}>
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block" }} />
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>
            Para Empresas
          </p>
        </div>

        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
            fontWeight: 300,
            lineHeight: 1.14,
            color: "var(--warm)",
            letterSpacing: "-0.01em",
            marginBottom: 20,
            maxWidth: 700,
          }}
        >
          Consultoria e Desenvolvimento{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)" }}>Humano para Empresas</em>
        </h2>

        <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, maxWidth: 600, marginBottom: 16 }}>
          Trago mais de 15 anos em Recursos Humanos e Desenvolvimento Humano, atuando em ambientes de alta complexidade como Petrobras, XP Investimentos e grupos imobili\u00e1rios em Portugal.
        </p>
        <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, maxWidth: 600, marginBottom: 68 }}>
          Meu trabalho \u00e9 ajudar empresas, l\u00edderes e times comerciais a sustentarem performance alta sem adoecer \u2014 com cultura clara, crit\u00e9rios de gest\u00e3o de pessoas e desenvolvimento real de lideran\u00e7a.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            background: "rgba(154,128,96,0.07)",
            marginBottom: 64,
          }}
          className="empresas-grid"
        >
          {cards.map((card) => (
            <div
              key={card.n}
              style={{
                background: "var(--graphite)",
                padding: "34px 30px",
                border: "1px solid rgba(154,128,96,0.07)",
                transition: "border-color 0.4s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(154,128,96,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(154,128,96,0.07)")}
            >
              <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, color: "rgba(154,128,96,0.22)", lineHeight: 1, marginBottom: 12 }}>
                {card.n}
              </p>
              <h5 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 400, color: "var(--ivory)", marginBottom: 9 }}>
                {card.title}
              </h5>
              <p style={{ fontSize: "0.78rem", color: "var(--stone)", lineHeight: 1.75 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div
          style={{
            borderTop: "1px solid rgba(154,128,96,0.13)",
            paddingTop: 48,
            maxWidth: 640,
          }}
        >
          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, marginBottom: 10 }}>
            Atendo empresas que entendem que gente n\u00e3o \u00e9 \u201ccusto\u201d, mas tamb\u00e9m n\u00e3o \u00e9 discurso vazio de \u201crecursos humanos\u201d.
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, marginBottom: 40 }}>
            Se voc\u00ea \u00e9 gestor ou s\u00f3cio e precisa discutir pessoas, cultura e performance com algu\u00e9m que transita bem entre cl\u00ednica, jur\u00eddico e neg\u00f3cios, podemos agendar uma conversa estrat\u00e9gica.
          </p>
          <a
            href="https://wa.me/554199176772"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontSize: "0.57rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "var(--glt)",
              padding: "15px 38px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.35s",
              fontFamily: "var(--sans)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--ivory)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--glt)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Agendar Conversa Estrat\u00e9gica
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .empresas-section { padding: 92px 32px !important; }
          .empresas-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .empresas-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
