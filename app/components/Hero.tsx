"use client";
export default function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
      className="hero-grid"
    >
      {/* Left — conteudo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 64px 100px",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-left"
      >
        {/* Label */}
        <p
          className="animate-fade-up delay-1"
          style={{
            fontSize: "0.52rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 400,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          Psicologia Jurídica · Psicologia Organizacional · Psicologia Clínica
        </p>

        {/* H1 mobile */}
        <h1
          className="animate-fade-up delay-2 hero-h1-mobile"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            fontFamily: "var(--font-display)",
          }}
        >
          Onde pressão,{" "}
          <em style={{ fontStyle: "italic" }}>decisão</em>{" "}e psicologia{" "}
          <br />
          convergem.
        </h1>

        {/* H1 desktop */}
        <h1
          className="animate-fade-up delay-2 hero-h1-desktop"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            fontFamily: "var(--font-display)",
            display: "none",
          }}
        >
          Alex Cristoffer Zilotti
          <br />
          <span
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
              fontWeight: 300,
              color: "var(--color-muted)",
              letterSpacing: "0.02em",
              display: "block",
              marginTop: 12,
            }}
          >
            Psicólogo CRP 08/48529 | Curitiba/PR
          </span>
          <span
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontStyle: "italic",
              fontWeight: 300,
              display: "block",
              marginTop: 16,
              color: "var(--color-text)",
            }}
          >
            Psicologia para alta performance:
            <br />
            clínica, jurídica e organizacional.
          </span>
        </h1>

        {/* Subtitulo */}
        <p
          className="animate-fade-up delay-3"
          style={{
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
            lineHeight: 1.7,
            color: "var(--color-muted)",
            maxWidth: 480,
            marginBottom: 44,
          }}
        >
          Atendimento online e presencial para executivos, advogados e empresas de elite.
          Suporte técnico especializado para escritórios em casos onde Direito e Psicologia se cruzam.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-4"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
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
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-gold-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Agendar Consulta
          </a>
          <a
            href="#juridico"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "transparent",
              color: "var(--color-muted)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-muted)")
            }
          >
            Solicitar Assistente Técnico
          </a>
        </div>
      </div>

      {/* Right — foto */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--color-surface)",
        }}
        className="hero-right"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-bg) 0%, transparent 30%)",
            zIndex: 1,
          }}
        />
      </div>

      <style>{`
        @keyframes imgIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        @media (min-width: 1024px) {
          .hero-h1-desktop { display: block !important; }
          .hero-h1-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding: 0 32px 76px !important; justify-content: flex-end !important; min-height: 100vh !important; }
          .hero-right { position: absolute !important; inset: 0 !important; }
        }
        @media (max-width: 640px) {
          .hero-left { padding: 0 24px 60px !important; }
        }
      `}</style>
    </div>
  );
}
