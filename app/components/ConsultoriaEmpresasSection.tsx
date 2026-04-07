"use client";
const pillars = [
  {
    n: "01",
    title: "Desenvolvimento de Liderança",
    body: "Programas individuais e em grupo para líderes que precisam ampliar inteligência emocional, capacidade de decisão e presença sob pressão.",
  },
  {
    n: "02",
    title: "Gestão de Conflitos Organizacionais",
    body: "Intervenção estruturada em conflitos internos, relações de equipe e crises institucionais com abordagem psicológica aplicada.",
  },
  {
    n: "03",
    title: "Saúde Psicológica no Trabalho",
    body: "Diagnóstico organizacional e programas preventivos focados em burnout, engajamento e bem-estar sem abrir mão de performance.",
  },
  {
    n: "04",
    title: "Consultoria Estratégica em RH",
    body: "Apoio técnico para áreas de pessoas em processos de seleção, desenvolvimento, retenção e cultura organizacional.",
  },
];

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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            marginBottom: 80,
            alignItems: "end",
          }}
          className="empresas-header"
        >
          <div>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 400,
                marginBottom: 20,
              }}
            >
              Consultoria Empresarial
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 300,
                lineHeight: 1.12,
                color: "var(--color-text)",
              }}
            >
              Psicologia aplicada
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>ao ambiente corporativo</em>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-muted)",
                lineHeight: 1.9,
              }}
            >
              Empresas de alta performance enfrentam desafios humanos complexos.
              Ofereço consultoria especializada para organizações que entendem
              que o capital humano é seu ativo mais estratégico.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
          className="empresas-grid"
        >
          {pillars.map((p) => (
            <div
              key={p.n}
              style={{
                background: "var(--color-bg-alt)",
                padding: "44px 40px",
                borderTop: "2px solid var(--color-border)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderTopColor = "var(--color-gold)")}
              onMouseLeave={e => (e.currentTarget.style.borderTopColor = "var(--color-border)")}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  marginBottom: 20,
                }}
              >
                {p.n}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 48,
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 32,
          }}
          className="empresas-cta"
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            Atuação sob demanda, projetos pontuais ou contratos de médio prazo.
            Cada proposta é construída a partir do diagnóstico real da organização.
          </p>
          <a
            href="#contato"
            style={{
              display: "inline-block",
              fontSize: "0.57rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-bg)",
              background: "var(--color-gold)",
              padding: "14px 36px",
              textDecoration: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
              transition: "background 0.25s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-gold)")}
          >
            Solicitar Proposta
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .empresas-section { padding: 92px 32px !important; }
          .empresas-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .empresas-grid { grid-template-columns: 1fr !important; }
          .empresas-cta { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 640px) {
          .empresas-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
