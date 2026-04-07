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
          <span style={{ width: 22, height: 1, background: "var(--color-gold-dim)", display: "inline-block", flexShrink: 0 }} />
                      Psicologia Jurídica · Psicologia Organizacional · Psicologia Clínica
        </p>
        {/* H1 */}
        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 4.8vw, 4.6rem)",
            fontWeight: 300,
            lineHeight: 1.07,
            letterSpacing: "-0.015em",
            color: "var(--color-text)",
            marginBottom: 30,
          }}
        >
          Onde pressão,{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold-light)", fontWeight: 300 }}>decisão</em>
          {" "}e psicologia{" "}
          <br />convergem.
        </h1>
        {/* Subtitulo */}
        <p
          className="animate-fade-up delay-3"
          style={{
            fontSize: "0.88rem",
            color: "var(--color-muted)",
            lineHeight: 1.92,
            maxWidth: 410,
            marginBottom: 50,
          }}
        >
          Atendimento para quem opera sob responsabilidade real. Suporte técnico especializado
          para escritórios e advogados que enfrentam casos onde Direito e Psicologia se cruzam.
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
              color: "var(--color-bg)",
              background: "var(--color-gold)",
              padding: "15px 38px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.35s",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-sans)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--color-gold-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--color-gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar Avaliação
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
              color: "var(--color-muted)",
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
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
            background: "linear-gradient(to right, var(--color-bg) 0%, rgba(10,10,10,0.25) 35%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 40%)",
          }}
        />
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
