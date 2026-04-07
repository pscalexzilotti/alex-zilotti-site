export default function AboutSection() {
  return (
    <section
      style={{ background: "var(--deep)", padding: "128px 64px" }}
      className="sobre-section"
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          gap: 92,
          alignItems: "start",
        }}
        className="sobre-inner"
      >
        {/* Foto */}
        <div
          style={{
            position: "sticky",
            top: 116,
            width: "100%",
            aspectRatio: "2/3",
            overflow: "hidden",
          }}
          className="sobre-photo-wrap"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/sobre.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="sobre-img"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(15,14,16,0.9) 0%, transparent 50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 28px",
                zIndex: 2,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.45rem",
                  fontWeight: 300,
                  color: "var(--warm)",
                  marginBottom: 3,
                }}
              >
                Alex Cristoffer Zilotti
              </h3>
              <p
                style={{
                  fontSize: "0.52rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 400,
                }}
              >
                Psic\u00f3logo \u00b7 CRP 08/48529
              </p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 20 }}>
            <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block" }} />
            <p style={{ fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>
              Sobre
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
              marginBottom: 30,
            }}
          >
            Uma trajetória construída na{" "}
            <em style={{ fontStyle: "italic", color: "var(--glt)" }}>interse\u00e7\u00e3o rara</em>
          </h2>

          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, marginBottom: 20 }}>
            Alex Cristoffer Zilotti atua na interse\u00e7\u00e3o entre Psicologia Cl\u00ednica, Forense e Jur\u00eddica \u2014 um campo que exige simult\u00e2nea profundidade cl\u00ednica, rigor cient\u00edfico e compreens\u00e3o do sistema legal.
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, marginBottom: 20 }}>
            Psic\u00f3logo (CRP 08/48529), Mestre em Psicologia Organizacional, com trajet\u00f3ria constru\u00edda entre o Brasil e Portugal. Atuei mais de uma d\u00e9cada em Recursos Humanos na Petrobras, liderei programas de desenvolvimento em XP Investimentos.
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, marginBottom: 20 }}>
            Integro cl\u00ednica, jur\u00eddico e gest\u00e3o de pessoas: isso significa que olho para o sofrimento ps\u00edquico, para as din\u00e2micas familiares e de trabalho e para as estrat\u00e9gias de longo prazo \u2014 sempre com crit\u00e9rio t\u00e9cnico e respeito absoluto \u00e0 confidencialidade.
          </p>

          <div
            style={{
              marginTop: 48,
              paddingTop: 34,
              borderTop: "1px solid rgba(154,128,96,0.1)",
            }}
          >
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 22, fontWeight: 400 }}>
              Forma\u00e7\u00e3o e Credenciais
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                "Psic\u00f3logo graduado",
                "P\u00f3s-graduando em Psicologia Forense e Jur\u00eddica",
                "P\u00f3s-graduando em TCC de Alta Performance",
                "Mestrado em Psicologia Organizacional",
                "MBA em Gest\u00e3o de Pessoas",
              ].map((c) => (
                <li
                  key={c}
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--taupe)",
                    display: "flex",
                    gap: 13,
                    alignItems: "flex-start",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ width: 16, height: 1, background: "var(--gdim)", flexShrink: 0, marginTop: 9, display: "inline-block" }} />
                  {c}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 13,
                marginTop: 26,
                border: "1px solid rgba(154,128,96,0.17)",
                padding: "12px 20px",
              }}
            >
              <span style={{ fontSize: "0.54rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--taupe)" }}>
                Registro Profissional
              </span>
              <strong style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--glt)", fontWeight: 400, fontFamily: "var(--sans)" }}>
                CRP 08/48529
              </strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .sobre-section { padding: 92px 32px !important; }
          .sobre-inner { grid-template-columns: 1fr !important; gap: 52px !important; }
          .sobre-photo-wrap { position: relative !important; top: auto !important; aspect-ratio: 4/3 !important; }
        }
        @media (max-width: 640px) {
          .sobre-section { padding: 76px 24px !important; }
        }
        .sobre-img:hover { transform: scale(1.03); }
      `}</style>
    </section>
  );
}
