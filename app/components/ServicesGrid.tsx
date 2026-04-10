"use client";

const services = [
  {
    n: "01",
    tag: "Jurídico",
    title: "Assistente Técnico Psicológico",
    body: "Resolução CFP 08/2010. Para advogados: nomeio-me como assistente técnico do seu cliente, produzindo laudos subsidiários e pareceres psicológicos que fortalecem o contráditório.",
    bullets: [
      "Análise de capacidade volitiva e dano moral",
      "Síndrome de burnout litigioso",
      "Entrevistas estruturadas e testes validados",
      "Relatórios para provas periciais, contestação, agravo",
    ],
    note: "Distinção clara: assistente técnico (nomeado pela parte) vs. perito judicial.",
    cta: "Solicitar assistente técnico",
    ctaHref: "/psicologia-juridica",
    desktopBody: "Posiciono-me como assistente técnico do seu cliente (Resolução CFP nº 08/2010), produzindo laudos subsidiários e pareceres psicológicos que fundamentam o contráditório processual. Documentos entregues para provas periciais, contestação, agravo de instrumento e recurso especial.",
    highlight: true,
  },
  {
    n: "02",
    tag: "Clínica",
    title: "Psicoterapia para Executivos e Advogados",
    body: "Atendimento psicoterápico para pessoas de alta performance: executivos, advogados e profissionais sob pressão constante.",
    bullets: [
      "Terapia Cognitivo-Comportamental (TCC)",
      "Regulação emocional e estresse",
      "Suporte em decisões complexas",
      "Individual, casal, online/presencial",
    ],
    note: "Foco: clareza emocional sem promessas de resultado específico.",
    cta: "Agende sua sessão",
    ctaHref: "#contato",
    desktopBody: "Para executivos, advogados e profissionais sob pressão constante, ofereço terapia focada em regulação emocional, tomada de decisão em contextos críticos e saúde mental de alta performance. Sigilo absoluto e abordagem científica.",
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
      className="services-section"
      style={{
        padding: "100px 64px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          letterSpacing: "0.2em",
          marginBottom: "16px",
        }}
      >
        Áreas de Atuação
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3rem",
          fontWeight: 300,
          color: "var(--color-text)",
          marginBottom: "64px",
        }}
      >
        Psicologia praticada com{" "}
        <em>rigor e profundidade</em>
      </h2>

      {/* Grid 3 colunas desktop, 1 coluna mobile */}
      <div
        className="svc-grid-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2px",
        }}
      >
        {services.map((svc) => (
          <div
            key={svc.n}
            className="svc-card"
            style={{
              padding: "48px 40px",
              background: svc.highlight
                ? "var(--color-gold)"
                : "var(--color-surface)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              cursor: "default",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = svc.highlight
                ? "var(--color-gold)"
                : "var(--color-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = svc.highlight
                ? "var(--color-gold)"
                : "var(--color-surface)")
            }
          >
            {/* Number + Tag */}
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-gold)",
                fontWeight: 500,
              }}
            >
              {svc.n}&nbsp;&nbsp;{svc.tag}
            </p>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: svc.highlight ? "var(--color-bg)" : "var(--color-text)",
                lineHeight: 1.2,
              }}
            >
              {svc.title}
            </h3>

            {/* Body — mobile: svc.body, desktop: svc.desktopBody */}
            <p
              className="svc-body-mobile"
              style={{
                fontSize: "0.95rem",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                lineHeight: 1.6,
              }}
            >
              {svc.body}
            </p>
            <p
              className="svc-body-desktop"
              style={{
                fontSize: "0.95rem",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                lineHeight: 1.6,
                display: "none",
              }}
            >
              {svc.desktopBody}
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {svc.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: "0.88rem",
                    color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>—</span> {b}
                </li>
              ))}
            </ul>

            {/* Note */}
            <p
              style={{
                fontSize: "0.78rem",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                opacity: 0.7,
                fontStyle: "italic",
                marginTop: "auto",
                paddingTop: 8,
                borderTop: `1px solid ${svc.highlight ? "rgba(0,0,0,0.15)" : "var(--color-border)"}`,
              }}
            >
              {svc.note}
            </p>

            {/* CTA */}
            <a
              href={svc.ctaHref}
              style={{
                display: "inline-block",
                padding: "12px 24px",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
                border: `1px solid ${svc.highlight ? "var(--color-bg)" : "var(--color-text)"}`,
                color: svc.highlight ? "var(--color-bg)" : "var(--color-text)",
                background: svc.highlight ? "var(--color-gold)" : "transparent",
                textDecoration: "none",
                transition: "all 0.2s",
                alignSelf: "flex-start",
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

      <style jsx>{`
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
