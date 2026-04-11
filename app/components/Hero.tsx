"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden", background: "var(--color-bg)" }} className="hero-grid">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 64px 100px", paddingTop: "160px", position: "relative", zIndex: 2 }} className="hero-left">
        </p>
              <p className="animate-fade-up delay-1" style={{ fontSize: "0.50rem", textTransform: "uppercase", color: "var(--color-gold)", letterSpacing: "0.15em", marginBottom: "24px" }}>
          Psicologia Jurídica · Psicologia Organizacional · Psicologia Clínica
        </p>
        <h1 className="animate-fade-up delay-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 4.6rem)", fontWeight: 300, lineHeight: 1.12, color: "var(--color-text)", marginBottom: "clamp(20px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
          Onde pressão,<br /><span style={{ fontStyle: "italic", fontWeight: 400 }}>decisão</span> e psicologia<br />convergem.
        </h1>
        <p className="animate-fade-up delay-3" style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "var(--color-muted)", marginBottom: "clamp(32px, 4vw, 48px)", maxWidth: "520px" }}>
          <strong style={{ color: "var(--color-text)" }}>Alex Cristoffer Zilotti</strong><br />Psicólogo CRP 08/48529 | Curitiba/PR<br /><br />Suporte psicológico para advogados, executivos e empresas — com foco em psicologia jurídica e alta performance.
        </p>
        <div className="animate-fade-up delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/psicologia-juridica" className="btn-gold">Solicitar Assistente Técnico</a>
          <a href="https://wa.me/5541991767772" className="btn-ghost">Agendar Consulta</a>
        </div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }} className="hero-right">
        <Image src="/images/hero.jpg" alt="Alex Cristoffer Zilotti" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "160px", background: "linear-gradient(to right, var(--color-bg), transparent)", zIndex: 1 }}></div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding: 0 32px 76px !important; min-height: 100vh !important; }
          .hero-right { position: absolute !important; inset: 0 !important; }
        }
      `}</style>
    </section>
  );
}
