const topics = [
  {
    tag: "Análise Técnica",
    title: "Capacidade Volitiva e Dano Moral",
    bodyMobile: "Análise de capacidade volitiva, dano moral psicológico e impactos emocionais (art. 1.111 CPC).",
    bodyDesktop: "Análise técnica de capacidade volitiva e discernimento (art. 1.111 CPC), dano moral psicológico e impactos emocionais documentados com rigor científico para uso processual.",
  },
  {
    tag: "Burnout Litigioso",
    title: "Síndrome de Burnout e Estresse Processual",
    bodyMobile: "Avaliação e documentação de síndrome de burnout litigioso e estresse processual crônico.",
    bodyDesktop: "Avaliação especializada da síndrome de burnout litigioso e estresse processual crônico, com entrevistas estruturadas e testes psicológicos validados (WISC, WAIS, Rorschach).",
  },
  {
    tag: "Documentação",
    title: "Relatórios para Provas Periciais",
    bodyMobile: "Laudos técnicos para provas periciais, contestação, agravo de instrumento e recurso especial.",
    bodyDesktop: "Documentos entregues: relatórios técnicos para provas periciais, contestação, agravo de instrumento e recurso especial. Distinção clara: assistente técnico (nomeado pela parte) vs. perito judicial (nomeado pelo juíz).",
  },
];

export default function LegalSection() {
  return (
    <section
      id="juridico"
      style={{ background: "var(--color-bg)", padding: "128px 64px" }}
      className="legal-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="legal-grid"
        >
          {/* Left */}
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
              Jurídico
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: 24,
                fontFamily: "var(--font-display)",
              }}
            >
              Assistente Técnico{" "}
              <em style={{ fontStyle: "italic" }}>Psicológico</em>
            </h2>

            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: "var(--color-gold)",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              Resolução CFP nº 08/2010
            </p>

            {/* Descrição mobile */}
            <p
              className="legal-body-mobile"
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: 32,
              }}
            >
              Para advogados: nomeio-me como assistente técnico do seu cliente,
              produzindo laudos subsidiários e pareceres psicológicos que fortalecem
              o contraditório.
            </p>

            {/* Descrição desktop */}
            <p
              className="legal-body-desktop"
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: 32,
                display: "none",
              }}
            >
              Para advogados de elite: posiciono-me como assistente técnico do seu
              cliente (Resolução CFP nº 08/2010), produzindo laudos subsidiários e
              pareceres psicológicos que fundamentam o contraditório processual.
              Distinção legal clara: assistente técnico (nomeado pela parte) vs.
              perito judicial (nomeado pelo juíz).
            </p>

            <a
              href="#contato"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--color-gold)",
                color: "var(--color-bg)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-gold)")
              }
            >
              Solicitar Assistente Técnico
            </a>
          </div>

          {/* Right — topics */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {topics.map((topic) => (
              <div
                key={topic.title}
                style={{
                  borderLeft: "2px solid var(--color-gold)",
                  paddingLeft: 24,
                }}
              >
                <p
                  style={{
                    fontSize: "0.52rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: 6,
                  }}
                >
                  {topic.tag}
                </p>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    fontFamily: "var(--font-display)",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  className="legal-topic-mobile"
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {topic.bodyMobile}
                </p>
                <p
                  className="legal-topic-desktop"
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.65,
                    display: "none",
                  }}
                >
                  {topic.bodyDesktop}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .legal-body-desktop { display: block !important; }
          .legal-body-mobile { display: none !important; }
          .legal-topic-desktop { display: block !important; }
          .legal-topic-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .legal-section { padding: 92px 32px !important; }
          .legal-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
        @media (max-width: 640px) {
          .legal-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
