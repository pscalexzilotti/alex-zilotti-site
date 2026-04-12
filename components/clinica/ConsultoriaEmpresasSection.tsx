"use client";

const pillars = [
  {
    n: "01",
    title: "Desenvolvimento de Liderança",
    bodyMobile: "Desenvolvimento de liderança executiva e alta performance para equipes e gestores.",
    bodyDesktop: "Programas individuais e em grupo para líderes que precisam ampliar inteligência emocional, capacidade de decisão e presça sob pressão. Foco em performance sustentável.",
  },
  {
    n: "02",
    title: "Gestão de Conflitos e Clima",
    bodyMobile: "Intervenção estruturada em conflitos internos e clima organizacional.",
    bodyDesktop: "Intervenção estruturada em conflitos internos, relações de equipe e crises institucionais com abordagem psicológica aplicada. Diagnóstico e plano de ação.",
  },
  {
    n: "03",
    title: "Prevenção de Burnout e NR-1",
    bodyMobile: "Programas preventivos de burnout, NR-1 saúde mental e engajamento no trabalho.",
    bodyDesktop: "Diagnóstico organizacional e programas preventivos focados em burnout, NR-1 saúde mental ocupacional e engajamento sem abrir mão de performance. Palestras SIPAT incluídas.",
  },
  {
    n: "04",
    title: "Consultoria Estratégica em RH",
    bodyMobile: "Apoio técnico a áreas de pessoas: seleção, desenvolvimento e cultura organizacional.",
    bodyDesktop: "Apoio técnico para áreas de pessoas em processos de seleção, desenvolvimento, retenção e cultura organizacional. Projetos sob demanda ou contratos mensais.",
  },
];

const clients = ["Vale", "Petrobras", "XP Investimentos", "Portugal"];

export default function ConsultoriaEmpresasSection() {
  return (
    <section
      id="empresas"
      style={{ background: "var(--color-surface)", padding: "128px 64px" }}
      className="empresas-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 32,
          }}
          className="empresas-header"
        >
          <div>
            <p
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 400,
                marginBottom: 20,
              }}
            >
              Empresas
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                fontFamily: "var(--font-display)",
                marginBottom: 16,
              }}
            >
              Psicologia{" "}
              <em style={{ fontStyle: "italic" }}>Organizacional</em>
            </h2>

            {/* Clientes mobile */}
            <p
              className="empresas-clients-mobile"
              style={{
                fontSize: "0.76rem",
                color: "var(--color-muted)",
                lineHeight: 1.6,
              }}
            >
              Consultoria para empresas de alto nível (Vale, Petrobras, XP, etc.).
              15+ anos em multinacionais.
            </p>

            {/* Clientes desktop */}
            <div
              className="empresas-clients-desktop"
              style={{ display: "none" }}
            >
              <p
                style={{
                  fontSize: "0.76rem",
                  color: "var(--color-muted)",
                  marginBottom: 12,
                }}
              >
                Consultoria estratégica para empresas de alto nível:
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                {clients.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                      border: "1px solid var(--color-border)",
                      padding: "4px 12px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#contato"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "transparent",
              color: "var(--color-text)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-gold)";
              e.currentTarget.style.color = "var(--color-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-text)";
            }}
          >
            Solicitar Proposta
          </a>
        </div>

        {/* Pillars grid */}
        <div
          className="empresas-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px 56px",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.n}
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: 24,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  marginBottom: 10,
                }}
              >
                {p.n}
              </span>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  fontFamily: "var(--font-display)",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                className="empresas-pillar-mobile"
                style={{
                  fontSize: "0.76rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.6,
                }}
              >
                {p.bodyMobile}
              </p>
              <p
                className="empresas-pillar-desktop"
                style={{
                  fontSize: "0.76rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.6,
                  display: "none",
                }}
              >
                {p.bodyDesktop}
              </p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p
          style={{
            marginTop: 48,
            fontSize: "0.72rem",
            color: "var(--color-muted)",
            fontStyle: "italic",
            borderTop: "1px solid var(--color-border)",
            paddingTop: 20,
          }}
        >
          15+ anos em multinacionais. Projetos sob demanda, contratos mensais ou
          workshops in-company. Retorno sobre investimento comprovado.
        </p>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .empresas-clients-desktop { display: block !important; }
          .empresas-clients-mobile { display: none !important; }
          .empresas-pillar-desktop { display: block !important; }
          .empresas-pillar-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .empresas-section { padding: 92px 32px !important; }
          .empresas-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 640px) {
          .empresas-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
