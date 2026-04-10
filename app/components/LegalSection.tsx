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
    bodyDesktop: "Documentos entregues: relatórios técnicos para provas periciais, contestação, agravo de instrumento e recurso especial.",
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
                fontSize: "0.7rem",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                letterSpacing: "0.2em",
                marginBottom: "24px",
                fontWeight: 500,
              }}
            >
              Jurídico
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginBottom: "16px",
                lineHeight: 1.15,
              }}
            >
              Assistente Técnico{" "}
              <em>Psicológico</em>
            </h2>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--color-gold)",
                letterSpacing: "0.1em",
                marginBottom: "32px",
                textTransform: "uppercase",
              }}
            >
              Resolução CFP nº 08/2010
            </p>

            {/* Descrição mobile */}
            <p
              className="legal-body-mobile"
              style={{
                fontSize: "1rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Para advogados: nomeio-me como assistente técnico do seu cliente, produzindo laudos subsidiários e pareceres psicológicos que fortalecem o contráditório.
            </p>

            {/* Descrição desktop */}
            <p
              className="legal-body-desktop"
              style={{
                fontSize: "1rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "40px",
                display: "none",
              }}
            >
              Para advogados de elite: posiciono-me como assistente técnico do seu cliente (Resolução CFP nº 08/2010), produzindo laudos subsidiários e pareceres psicológicos que fundamentam o contráditório processual.
            </p>

            {/* Box comparativo: Assistente Técnico x Perito Judicial */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
                marginBottom: "40px",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Coluna: Assistente Técnico */}
              <div
                style={{
                  background: "var(--color-gold)",
                  padding: "24px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-bg)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Assistente Técnico
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "Nomeado pela parte (advogado)",
                    "Defende os interesses do cliente",
                    "Produz laudo subsidiário",
                    "Atua no contraditório",
                    "Pode questionar o perito judicial",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-bg)",
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ opacity: 0.7, flexShrink: 0 }}>✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna: Perito Judicial */}
              <div
                style={{
                  background: "var(--color-surface)",
                  padding: "24px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-muted)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Perito Judicial
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "Nomeado pelo juíz",
                    "Postura neutra e imparcial",
                    "Produz laudo oficial",
                    "Auxiliar do juízo",
                    "Não defende nenhuma das partes",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-muted)",
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        lineHeight: 1.4,
                        opacity: 0.75,
                      }}
                    >
                      <span style={{ flexShrink: 0 }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#contato"
              className="btn-gold"
              style={{ display: "inline-block" }}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {topics.map((topic) => (
              <div
                key={topic.tag}
                style={{
                  paddingBottom: "40px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-gold)",
                    fontWeight: 500,
                    marginBottom: "12px",
                  }}
                >
                  {topic.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 300,
                    color: "var(--color-text)",
                    marginBottom: "12px",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  className="legal-body-mobile"
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {topic.bodyMobile}
                </p>
                <p
                  className="legal-body-desktop"
                  style={{
                    fontSize: "0.92rem",
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

      <style jsx>{`
        @media (min-width: 1024px) {
          .legal-body-desktop { display: block !important; }
          .legal-body-mobile { display: none !important; }
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
