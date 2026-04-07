const services = [
  {
    n: "01",
    tag: "Cl\u00ednica Premium",
    title: "Cl\u00ednica Cognitiva de Alta Performance",
    body: "Psicoterapia baseada em TCC para quem vive sob press\u00e3o constante, exposi\u00e7\u00e3o p\u00fablica e decis\u00f5es de alto impacto. Um processo cl\u00ednico constru\u00eddo com a mesma exig\u00eancia que voc\u00ea aplica \u00e0 sua vida.",
    bullets: [
      "Terapia Cognitivo-Comportamental especializada",
      "Regula\u00e7\u00e3o emocional sob press\u00e3o extrema",
      "Tomada de decis\u00e3o em contextos cr\u00edticos",
      "Atendimento presencial e online",
    ],
  },
  {
    n: "02",
    tag: "Jur\u00eddico / Forense",
    title: "Psicologia Jur\u00eddica e Forense",
    body: "Suporte psicol\u00f3gico especializado para pessoas envolvidas em processos judiciais, disputas familiares, avalia\u00e7\u00f5es periciais e situa\u00e7\u00f5es de exposi\u00e7\u00e3o legal de alta complexidade.",
    bullets: [
      "Processos judiciais sens\u00edveis",
      "Disputas familiares e aliena\u00e7\u00e3o parental",
      "Avalia\u00e7\u00e3o psicol\u00f3gica forense",
      "Suporte emocional em lit\u00edgios",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section
      style={{
        background: "var(--charcoal)",
        padding: "128px 64px",
      }}
      className="services-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 13,
            marginBottom: 20,
          }}
        >
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block" }} />
          <p
            style={{
              fontSize: "0.52rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 400,
            }}
          >
            \u00c1reas de Atua\u00e7\u00e3o
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
            marginBottom: 68,
          }}
        >
          Psicologia praticada com{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)" }}>rigor e profundidade</em>
        </h2>

        {/* Grid de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            background: "rgba(154,128,96,0.07)",
          }}
          className="svc-grid-inner"
        >
          {services.map((svc) => (
            <div
              key={svc.n}
              style={{
                background: "var(--charcoal)",
                padding: "58px 50px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.5s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--graphite)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--charcoal)")}
            >
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "var(--gdim)",
                  marginBottom: 26,
                  display: "block",
                }}
              >
                {svc.n}
              </span>

              {/* Tag */}
              <span
                style={{
                  position: "absolute",
                  top: 26,
                  right: 26,
                  fontSize: "0.46rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid rgba(154,128,96,0.18)",
                  padding: "6px 12px",
                  fontWeight: 400,
                }}
              >
                {svc.tag}
              </span>

              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.15rem, 1.9vw, 1.7rem)",
                  fontWeight: 300,
                  color: "var(--warm)",
                  letterSpacing: "-0.01em",
                  marginBottom: 16,
                }}
              >
                {svc.title}
              </h3>

              <p
                style={{
                  fontSize: "0.84rem",
                  color: "var(--stone)",
                  lineHeight: 1.9,
                  marginBottom: 30,
                }}
              >
                {svc.body}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: "0.69rem",
                      letterSpacing: "0.05em",
                      color: "var(--taupe)",
                      display: "flex",
                      alignItems: "center",
                      gap: 11,
                    }}
                  >
                    <span style={{ width: 13, height: 1, background: "var(--gdim)", flexShrink: 0, display: "inline-block" }} />
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
