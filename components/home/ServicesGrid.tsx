"use client";

const services = [
  {
    n: "01",
    tag: "Jurídico",
    title: "Assistência Técnica Psicológica",
    body: "Atuação técnica voltada a advogados e escritórios que precisam analisar elementos psicológicos relevantes ao litígio com clareza, segurança e profundidade estratégica.",
    desktopBody:
      "Suporte técnico especializado para advogados e escritórios na análise de elementos psicológicos relevantes ao litígio. Com leitura criteriosa de documentos, avaliação de pontos sensíveis do caso e elaboração de pareceres, o trabalho contribui para o fortalecimento do contraditório e para decisões processuais mais seguras.",
    bullets: [
      "Análise técnica de fatos, laudos e documentos",
      "Leitura crítica para contraditório, quesitos e impugnações",
      "Pareceres com linguagem objetiva e utilidade processual",
      "Demandas cíveis, trabalhistas e familiares",
    ],
    note: "Diferencial: experiência pericial no contexto do TJPR e atuação como assistente técnico da parte.",
    cta: "Solicitar análise técnica",
    ctaHref: "/psicologia-juridica",
    highlight: true,
  },
  {
    n: "02",
    tag: "Clínica",
    title: "Psicoterapia para Executivos e Advogados",
    body: "Atendimento psicoterápico para profissionais de alta performance: executivos, advogados e lideranças sob pressão constante.",
    desktopBody:
      "Para executivos, advogados e profissionais que operam sob pressão constante, ofereço psicoterapia focada em regulação emocional, tomada de decisão em contextos críticos e saúde mental de longo prazo. Abordagem científica, sigilo absoluto e atendimento online ou presencial.",
    bullets: [
      "Regulação emocional e gestão do estresse",
      "Suporte em decisões complexas e transições",
      "Terapia Cognitivo-Comportamental (TCC)",
      "Atendimento individual, online ou presencial",
    ],
    note: "Foco em clareza emocional e desempenho sustentável.",
    cta: "Agendar sessão",
    ctaHref: "#contato",
    highlight: false,
  },
  {
    n: "03",
    tag: "Empresas",
    title: "Psicologia Organizacional",
    body: "Consultoria em desenvolvimento humano para empresas que valorizam liderança sólida, clima organizacional saudável e saúde mental no trabalho.",
    desktopBody:
      "Soluções corporativas personalizadas para desenvolvimento de liderança executiva, gestão de conflitos internos, prevenção de burnout e adequação à NR-1 em saúde mental ocupacional. Formatos flexíveis: projetos sob demanda, contratos de médio prazo ou workshops in-company.",
    bullets: [
      "Desenvolvimento de liderança e equipes",
      "Gestão de conflitos e clima organizacional",
      "Prevenção de burnout e NR-1 saúde mental",
      "Palestras, SIPAT e programas de engajamento",
    ],
    note: "15+ anos de atuação em ambientes corporativos de alta complexidade.",
    cta: "Solicitar proposta",
    ctaHref: "#contato",
    highlight: false,
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
                color: svc.highlight ? "#0a0a0a" : "#e8e8e8",                    display: "flex",
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
                color: svc.highlight ? "#0a0a0a" : "#e8e8e8",                opacity: 0.7,
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
