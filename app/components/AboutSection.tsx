"use client";
const credentials = [
  "Psicólogo CRP 08/48529",
  "Mestre em Psicologia Organizacional",
  "Especialista em Psicologia Jurídica e Forense",
  "Formação em TCC — Terapia Cognitivo-Comportamental",
    "+ 15 anos em contexto organizacional — Vale, Petrobras, XP Investimentos e Portugal",
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      style={{ background: "var(--color-bg-alt)", padding: "128px 64px" }}
      className="about-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left — foto */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}
            className="about-img-wrap"
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/sobre.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            />
            {/* Gold accent */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "var(--color-gold)",
              }}
            />
          </div>

          {/* Right — texto */}
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
              Sobre
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
              Alex Cristoffer
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Zilotti</em>
            </h2>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-muted)",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
                          Psicólogo com formação sólida e 15 anos de experiência em contexto
                          organizacional de multinacionais como Vale, Petrobras, XP Investimentos
                          e Portugal. Trabalho com quem enfrenta decisões de alto impacto:
                          executivos, profissionais do direito, empresas e pessoas em processos judiciais.
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-muted)",
                lineHeight: 1.9,
                marginBottom: 40,
              }}
            >
              Minha abordagem une rigor científico, profundidade clínica e sensibilidade
              para a realidade de quem vive sob pressão constante. Não ofereço fórmulas.
              Ofereço estrutura, clareza e presença qualificada.
            </p>

            {/* Credentials */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontSize: "0.8rem",
                    color: "var(--color-text)",
                    opacity: 0.85,
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 1,
                      background: "var(--color-gold)",
                      flexShrink: 0,
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div style={{ marginTop: 48 }}>
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
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-gold-light)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-gold)")}
              >
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .about-section { padding: 92px 32px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
          .about-img-wrap { aspect-ratio: 4/3 !important; }
        }
        @media (max-width: 640px) {
          .about-section { padding: 76px 24px !important; }
        }
      `}</style>
    </section>
  );
}
