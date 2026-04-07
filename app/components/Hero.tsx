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
          paddingTop: "160px",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-left"
      >
        {/* Label de especialidades — respirada */}
        <p
          className="animate-fade-up delay-1"
          style={{
            fontSize: "0.50rem",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 400,
            marginBottom: "clamp(28px, 3.5vw, 52px)",
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <span style={{ letterSpacing: "0.20em" }}>Psicologia Jur&#237;dica</span>
          <span style={{ color: "var(--color-border)", letterSpacing: "0.05em" }}>&#183;</span>
          <span style={{ letterSpacing: "0.20em" }}>Psicologia Organizacional</span>
          <span style={{ color: "var(--color-border)", letterSpacing: "0.05em" }}>&#183;</span>
          <span style={{ letterSpacing: "0.20em" }}>Psicologia Cl&#237;nica</span>
        </p>

        {/* H1 mobile */}
        <h1
          className="hero-h1-mobile animate-fade-up delay-2"
          style={{
            display: "block",
            fontSize: "clamp(2rem, 7vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            color: "var(--color-text)",
          }}
        >
          Onde press&#227;o,{" "}
          <em>decis&#227;o</em>{" "}e psicologia{" "}
          <br />
          convergem.
        </h1>

        {/* H1 desktop */}
        <h1
          className="hero-h1-desktop animate-fade-up delay-2"
          style={{
            display: "none",
            fontSize: "clamp(2.6rem, 3.8vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            marginBottom: "28px",
            color: "var(--color-text)",
          }}
        >
          Onde press&#227;o,
          <br />
          <em>decis&#227;o</em> e psicologia
          <br />
          convergem.
        </h1>

        {/* Subtitulo */}
        <p
          className="animate-fade-up delay-3"
          style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            maxWidth: "480px",
            marginBottom: "40px",
          }}
        >
          Alex Cristoffer Zilotti<br />
          <span style={{ fontSize: "0.82em", opacity: 0.7 }}>Psic&#243;logo CRP 08/48529 | Curitiba/PR</span>
          <br /><br />
          Psicologia para alta performance:
          cl&#237;nica, jur&#237;dica e organizacional.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-4"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <a
            href="#contato"
            style={{
              background: "var(--color-gold)",
              color: "var(--color-bg)",
              padding: "14px 28px",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 600,
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
              color: "var(--color-muted)",
              padding: "14px 28px",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            Solicitar Assistente T&#233;cnico
          </a>
        </div>
      </div>

      {/* Right — foto */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--color-bg-alt)",
        }}
        className="hero-right"
      >
        <img
          src="/hero-retrato.jpg"
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
        {/* Gradiente de fusao esquerda */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-bg) 0%, transparent 30%)",
            zIndex: 1,
          }}
        />
        {/* Fallback label */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "32px",
            zIndex: 2,
            textAlign: "right",
          }}
        >
          <span
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              opacity: 0.6,
            }}
          >
            Alex Cristoffer Zilotti
          </span>
        </div>
      </div>

      <style>{`
        @keyframes imgIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        @media (min-width: 1024px) {
          .hero-h1-desktop { display: block !important; }
          .hero-h1-mobile  { display: none  !important; }
        }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left {
            padding: 0 32px 76px !important;
            justify-content: flex-end !important;
            min-height: 100vh !important;
            padding-top: 0 !important;
          }
          .hero-right { position: absolute !important; inset: 0 !important; }
        }
        @media (max-width: 640px) {
          .hero-left { padding: 0 24px 60px !important; }
        }
      `}</style>
    </div>
  );
}
