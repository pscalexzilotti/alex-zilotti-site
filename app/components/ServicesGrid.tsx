"use client";

const services = [
  {
    n: "01",
    tag: "Clínica",
    title: "Psicologia Clínica",
    body: "Atendimento psicoterápico para pessoas de alta performance: executivos, advogados, influenciadores e profissionais sob pressão constante.",
    bullets: [
      "Terapia Cognitivo-Comportamental (TCC)",
      "Regulação emocional e estresse",
      "Suporte em decisões complexas",
      "Individual, casal, online/presencial",
    ],
    note: "Foco: clareza emocional sem promessas de resultado específico.",
    cta: "Agende sua sessão",
    ctaHref: "#contato",
    desktopBody: "Para executivos, advogados, influenciadores e profissionais sob pressão constante, ofereço terapia focada em regulação emocional, tomada de decisão em contextos críticos e saúde mental de alta performance. Sigilo absoluto e abordagem científica.",
  },
  {
    n: "02",
    tag: "Jurídico",
    title: "Assistente Técnico Psicológico",
    body: "Resolução CFP 08/2010. Para advogados: nomeio-me como assistente técnico do seu cliente, produzindo laudos subsidiários e pareceres psicológicos que fortalecem o contraditório.",
    bullets: [
      "Análise de capacidade volitiva e dano moral",
      "Síndrome de burnout litigioso",
      "Entrevistas estruturadas e testes validados",
      "Relatórios para provas periciais, contestação, agravo",
    ],
    note: "Distinção clara: assistente técnico (nomeado pela parte) vs. perito judicial.",
    cta: "Solicitar assistente técnico",
    ctaHref: "#contato",
    desktopBody: "Posiciono-me como assistente técnico do seu cliente (Resolução CFP nº 08/2010), produzindo laudos subsidiários e pareceres psicológicos que fundamentam o contraditório processual. Documentos entregues para provas periciais, contestação, agravo de instrumento e recurso especial.",
    highlight: true,
  },
  {
    n: "03",
    tag: "Empresas",
    title: "Psicologia Organizacional",
    body: "Consultoria para empresas de alto nível (Vale, Petrobras, XP, etc.). Desenvolvimento de liderança, gestão de conflitos e saúde mental no trabalho.",
    bullets: [
      "Desenvolvimento de liderança e equipes",
      "Gestão de conflitos e clima organizacional",
      "Prevenção de burnout e NR-1 saúde mental",
      "Palestras SIPAT e engajamento",
    ],
    note: "15+ anos em multinacionais. Projetos sob demanda ou contratos.",
    cta: "Solicitar proposta",
    ctaHref: "#contato",
    desktopBody: "Soluções corporativas personalizadas: desenvolvimento de liderança executiva, gestão de conflitos internos, prevenção de burnout e NR-1 saúde mental ocupacional. Formatos flexíveis: projetos sob demanda, contratos mensais ou workshops in-company.",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--color-bg-alt)",
        padding: "128px 64px",
      }}
      className="services-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontSize: "0.52rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          Áreas de Atuação
        </p>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "56px",
            fontFamily: "var(--font-display)",
          }}
        >
          Psicologia praticada com{" "}
          <em style={{ fontStyle: "italic" }}>rigor e profundidade</em>
        </h2>

        {/* Grid 3 colunas desktop, 1 coluna mobile */}
        <div
          className="svc-grid-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "32px",
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.n}
              className="svc-card"
              style={{
                background: svc.highlight ? "var(--color-surface)" : "var(--color-surface)",
                border: svc.highlight
                  ? "1px solid var(--color-gold)"
                  : "1px solid var(--color-border)",
                borderLeft: svc.highlight
                  ? "4px solid var(--color-gold)"
                  : "1px solid var(--color-border)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-border)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-surface)")
              }
            >
              {/* Number + Tag */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    fontWeight: 500,
                  }}
                >
                  {svc.n}
                </span>
                <span
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                    fontWeight: 400,
                  }}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  fontFamily: "var(--font-display)",
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>

              {/* Body — mobile: svc.body, desktop: svc.desktopBody */}
              <p
                className="svc-body-mobile"
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.65,
                  color: "var(--color-muted)",
                  margin: 0,
                }}
              >
                {svc.body}
              </p>
              <p
                className="svc-body-desktop"
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.65,
                  color: "var(--color-muted)",
                  margin: 0,
                  display: "none",
                }}
              >
                {svc.desktopBody}
              </p>

              {/* Bullets */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                }}
              >
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--color-text)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--color-muted)",
                  fontStyle: "italic",
                  margin: 0,
                  lineHeight: 1.5,
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: 12,
                }}
              >
                {svc.note}
              </p>

              {/* CTA */}
              <a
                href={svc.ctaHref}
                style={{
                  display: "inline-block",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: svc.highlight ? "var(--color-bg)" : "var(--color-text)",
                  background: svc.highlight ? "var(--color-gold)" : "transparent",
                  border: "1px solid var(--color-border)",
                  padding: "10px 20px",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                  alignSelf: "flex-start",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-gold)";
                  e.currentTarget.style.color = "var(--color-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = svc.highlight
                    ? "var(--color-gold)"
                    : "transparent";
                  e.currentTarget.style.color = svc.highlight
                    ? "var(--color-bg)"
                    : "var(--color-text)";
                }}
              >
                {svc.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .svc-body-desktop { display: block !important; }
          .svc-body-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .services-section { padding: 92px 32px !important; }
          .svc-grid-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .services-section { padding: 76px 24px !important; }
          .svc-card { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
