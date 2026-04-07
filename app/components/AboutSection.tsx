"use client";
const credentials = [
  "CRP 08/48529 (ativa e regularizada)",
  "Mestrando em Psicologia Organizacional",
  "Especializando em Psicologia Jur\u00eddica e Forense",
  "Especializando em TCC de Alta Performance",
  "MBA em Gest\u00e3o de Pessoas e Desenvolvimento Gerencial",
  "Forma\u00e7\u00e3o em Hipnose Cl\u00ednica",
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
              src="/sobre.jpg"
              alt="Alex Cristoffer Zilotti"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
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
                zIndex: 2,
              }}
            />
            {/* Fallback placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--color-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1,
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  opacity: 0.4,
                }}
              >
                foto institucional
              </span>
            </div>
          </div>

          {/* Right — texto */}
          <div>
            <p
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "16px",
              }}
            >
              Sobre
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "28px",
                color: "var(--color-text)",
              }}
            >
              Alex Cristoffer
              <br />
              <em>Zilotti</em>
            </h2>

            {/* Descri\u00e7\u00e3o mobile */}
            <p
              className="about-body-mobile"
              style={{
                display: "block",
                color: "var(--color-muted)",
                lineHeight: 1.75,
                marginBottom: "32px",
                fontSize: "0.95rem",
              }}
            >
              Psic\u00f3logo com 15 anos em organiza\u00e7\u00f5es como Vale, Petrobras, XP Investimentos e Portugal. Especializado em psicologia jur\u00eddica/forense, cl\u00ednica (TCC) e organizacional.
            </p>

            {/* Descri\u00e7\u00e3o desktop */}
            <p
              className="about-body-desktop"
              style={{
                display: "none",
                color: "var(--color-muted)",
                lineHeight: 1.75,
                marginBottom: "32px",
                fontSize: "0.95rem",
              }}
            >
              Psic\u00f3logo com 15 anos de experi\u00eancia em organiza\u00e7\u00f5es de elite como Vale, Petrobras, XP Investimentos e Portugal. Especializado em psicologia jur\u00eddica/forense, cl\u00ednica (TCC) e organizacional. Integro rigor cient\u00edfico, experi\u00eancia corporativa e precis\u00e3o jur\u00eddica para atender contextos de m\u00e1xima exig\u00eancia.
            </p>

            {/* Credentials */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-muted)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "var(--color-gold)", marginTop: "2px" }}>&#8212;</span>
                  {c}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contato"
              style={{
                background: "var(--color-gold)",
                color: "var(--color-bg)",
                padding: "13px 26px",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-gold)")}
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-body-desktop { display: block !important; }
          .about-body-mobile  { display: none  !important; }
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
