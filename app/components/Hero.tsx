export default function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
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
            color: "var(--gold)",
            fontWeight: 400,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block", flexShrink: 0 }} />
          Psicologia Jur\u00eddica \u00b7 Alta Performance \u00b7 Psicologia Forense
        </p>

        {/* H1 */}
        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.5rem, 4.8vw, 4.6rem)",
            fontWeight: 300,
            lineHeight: 1.07,
            letterSpacing: "-0.015em",
            color: "var(--warm)",
            marginBottom: 30,
          }}
        >
          Onde press\u00e3o,{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)", fontWeight: 300 }}>decis\u00e3o</em>
          {" "}e psicologia{" "}
          <br />convergem.
        </h1>

        {/* Subtitulo */}
        <p
          className="animate-fade-up delay-3"
          style={{
            fontSize: "0.88rem",
            color: "var(--stone)",
            lineHeight: 1.92,
            maxWidth: 410,
            marginBottom: 50,
          }}
        >
          Atendimento para quem opera sob responsabilidade real. Suporte t\u00e9cnico especializado
          para escrit\u00f3rios e advogados que enfrentam casos onde Direito e Psicologia se cruzam.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-4"
          style={{ display: "flex", alignItems: "center", gap: 34 }}
        >
          <a
            href="#contato"
            style={{
              display: "inline-block",
              fontSize: "0.57rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "var(--glt)",
              padding: "15px 38px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.35s",
              whiteSpace: "nowrap",
              fontFamily: "var(--sans)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--ivory)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--glt)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar Avalia\u00e7\u00e3o
          </a>
          <a
            href="#juridico"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 13,
              fontSize: "0.57rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--taupe)",
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ivory)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--taupe)")}
          >
            Para Advogados
            <span style={{ display: "block", width: 26, height: 1, background: "currentColor" }} />
          </a>
        </div>
      </div>

      {/* Right — foto */}
      <div style={{ position: "relative", overflow: "hidden" }} className="hero-right">
        <div
          className="animate-img"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "55% top",
            animation: "imgIn 1.4s 0.15s cubic-bezier(0.16,1,0.3,1) forwards",
            opacity: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, var(--ink) 0%, rgba(9,8,10,0.25) 35%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(9,8,10,0.55) 0%, transparent 40%)",
          }}
        />
      </div>

      <style>{`
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
