const services = [
  {
    n: "01",
    tag: "Clínica Premium",
    title: "Clínica Cognitiva de Alta Performance",
    body: "Psicoterapia baseada em TCC para quem vive sob pressão constante, exposição pública e decisões de alto impacto. Um processo clínico construído com a mesma exigência que você aplica à sua vida.",
    bullets: [
      "Terapia Cognitivo-Comportamental especializada",
      "Regulação emocional sob pressão extrema",
      "Tomada de decisão em contextos críticos",
      "Atendimento presencial e online",
    ],
  },
  {
    n: "02",
    tag: "Jurídico / Forense",
    title: "Psicologia Jurídica e Forense",
    body: "Suporte psicológico especializado para pessoas envolvidas em processos judiciais, disputas familiares, avaliações periciais e situações de exposição legal de alta complexidade.",
    bullets: [
      "Processos judiciais sensíveis",
      "Disputas familiares e alienação parental",
      "Avaliação psicológica forense",
      "Suporte emocional em litígios",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section
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
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 400,
            marginBottom: 20,
          }}
        >
          Áreas de Atuação
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "var(--color-text)",
            marginBottom: 72,
            maxWidth: 520,
          }}
        >
          Psicologia praticada com{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>rigor e profundidade</em>
        </h2>

        {/* Grid de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
          className="svc-grid-inner"
        >
          {services.map((svc) => (
            <div
              key={svc.n}
              style={{
                background: "var(--color-surface)",
                padding: "52px 48px",
                cursor: "default",
                transition: "background 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-border)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--color-surface)")}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: "var(--color-gold)",
                  marginBottom: 32,
                }}
              >
                {svc.n}
              </span>
              {/* Tag */}
              <p
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: 16,
                }}
              >
                {svc.tag}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.45rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  marginBottom: 20,
                  lineHeight: 1.25,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.82,
                  marginBottom: 28,
                }}
              >
                {svc.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-muted)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <span style={{ width: 16, height: 1, background: "var(--color-gold)", marginTop: 10, flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-section { padding: 92px 32px !important; }
          .svc-grid-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .services-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
