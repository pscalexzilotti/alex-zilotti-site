import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import LegalSection from "@/app/components/LegalSection";
import ServicesGrid from "@/app/components/ServicesGrid";
import ConsultoriaEmpresasSection from "@/app/components/ConsultoriaEmpresasSection";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Prioridade 1: Hero / Início */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Prioridade 1 (Foco): Jurídico / Assistência Técnica */}
        <section id="juridico" style={{ padding: "100px 0", background: "var(--color-bg)" }}>
          <div style={{ textAlign: "center", marginBottom: "64px", padding: "0 64px" }}>
            <p style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--color-gold)", letterSpacing: "0.2em", marginBottom: "16px" }}>Foco Principal</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, color: "var(--color-text)" }}>Psicologia Jurídica</h2>
          </div>
          <LegalSection />
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/psicologia-juridica" className="btn-ghost">Ver Detalhes Técnicos para Advogados</a>
          </div>
        </section>

        {/* Prioridade 2: Psicoterapia / Executivos */}
        <section id="psicoterapia" style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
          <div style={{ textAlign: "center", marginBottom: "64px", padding: "0 64px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, color: "var(--color-text)" }}>Psicoterapia de Alta Performance</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-muted)", marginTop: "16px", maxWidth: "700px", margin: "16px auto 0" }}>
              Suporte clínico especializado para executivos, advogados e profissionais em ambientes de alta pressão.
            </p>
          </div>
          <ServicesGrid />
        </section>

        {/* Prioridade 3: Empresas / Consultoria */}
        <ConsultoriaEmpresasSection />

        {/* Sobre */}
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
