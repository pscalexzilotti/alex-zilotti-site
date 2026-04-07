const topics = [
  {
    tag: "Suporte Técnico",
    title: "Laudos e Avaliações Periciais",
    body: "Elaboração de laudos psicológicos com rigor científico e linguagem jurídica adequada para atuar como prova técnica em processos civis, criminais e de família.",
  },
  {
    tag: "Assessoria",
    title: "Suporte a Advogados e Escritórios",
    body: "Apoio técnico psicológico para escritórios em casos de alta complexidade: avaliação de testemunhas, análise de comportamento e orientação em situações de crise.",
  },
  {
    tag: "Especialidade",
    title: "Psicologia Forense e Criminal",
    body: "Atuação em casos que envolvem trauma, alienação parental, imputação de crimes e outros contextos onde a psicologia é determinante para a justiça.",
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
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontWeight: 400,
                marginBottom: 20,
              }}
            >
              Psicologia Jurídica
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                fontWeight: 300,
                lineHeight: 1.12,
                color: "var(--color-text)",
                marginBottom: 32,
              }}
            >
              Onde o Direito
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>precisa de psicologia</em>
            </h2>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-muted)",
                lineHeight: 1.9,
                marginBottom: 40,
                maxWidth: 400,
              }}
            >
                                      Formado e com 15 anos de experiência em contexto organizacional de grandes multinacionais.
                          Atendimento especializado a pessoas envolvidas em processos judiciais,
                          e suporte técnico especializado para profissionais do Direito.
            </p>

            {/* Quote */}
            <blockquote
              style={{
                borderLeft: "2px solid var(--color-gold)",
                paddingLeft: 28,
                margin: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--color-text)",
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                “A psicologia não suaviza o processo. Ela torna possível entendê-lo.”
              </p>
              <cite
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  fontStyle: "normal",
                }}
              >
                Alex Cristoffer Zilotti
              </cite>
            </blockquote>
          </div>

          {/* Right: tópicos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {topics.map((t, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--color-border)",
                  padding: "32px 0",
                }}
              >
                <p
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: 10,
                  }}
                >
                  {t.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    marginBottom: 12,
                  }}
                >
                  {t.title}
                </h3>
                <p style={{ fontSize: "0.83rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
                  {t.body}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </div>

      <style>{`
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
