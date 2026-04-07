"use client";
const credentials = [
  "CRP 08/48529 (ativa e regularizada)",
  "Mestrando em Psicologia Organizacional",
  "Especializando em Psicologia Jurídica e Forense",
  "Especializando em TCC de Alta Performance",
  "MBA em Gestão de Pessoas e Desenvolvimento Gerencial",
  "Formação em Hipnose Clínica",
  "Atendimento presencial em Curitiba/PR e online nacional",
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
            <img
              src="/images/sobre.jpg"
              alt="Alex Cristoffer Zilotti"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            {/* Gold accent */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 4,
                height: "40%",
                background: "var(--color-gold)",
                zIndex: 1,
              }}
            />
          </div>
          {/* Right — texto */}
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
              Sobre
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.12,
                marginBottom: 28,
                fontFamily: "var(--font-display)",
              }}
            >
              Alex Cristoffer
              <br />
              <em style={{ fontStyle: "italic" }}>Zilotti</em>
            </h2>
            {/* Descrição mobile */}
            <p
              className="about-body-mobile"
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: 32,
              }}
            >
              Psicólogo com 15 anos em organizações como Vale, Petrobras, XP
              Investimentos e Portugal. Especializado em psicologia jurídica/forense,
              clínica (TCC) e organizacional.
            </p>
            {/* Descrição desktop */}
            <p
              className="about-body-desktop"
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: 32,
                display: "none",
              }}
            >
              Psicólogo com 15 anos de experiência em organizações de elite como Vale,
              Petrobras, XP Investimentos e Portugal. Especializado em psicologia
              jurídica/forense, clínica (TCC) e organizacional. Integro rigor científico,
              experiência corporativa e precisão jurídica para atender contextos de
              máxima exigência.
            </p>
            {/* Credentials */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: "0.78rem",
                    color: "var(--color-text)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-gold)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            {/* CTA */}
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
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .about-body-desktop { display: block !important; }
          .about-body-mobile { display: none !important; }
        }
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
