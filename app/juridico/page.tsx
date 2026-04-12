"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function JuridicoPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px", background: "#0a0a0a" }}>
        <section style={{ padding: "80px 64px 40px", textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <div style={{
              background: "rgba(200, 169, 110, 0.1)",
              border: "1px solid #c8a96e",
              padding: "8px 20px",
              borderRadius: "50px",
              color: "#c8a96e",
              fontSize: "0.85rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ fontSize: "1.1rem" }}>⚖️</span>
              Perito Psicólogo Credenciado — TJPR
            </div>
          </div>

          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#c8a96e", letterSpacing: "0.2em", marginBottom: "24px" }}>
            Especialidade Prioritária
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#ffffff", marginBottom: "32px", lineHeight: 1.1 }}>
            Psicologia Jurídica & <br /><span style={{ fontStyle: "italic" }}>Assistência Técnica</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#a0a0a0", lineHeight: 1.8, marginBottom: "48px" }}>
            Suporte técnico especializado para advogados e escritórios de advocacia em casos complexos. <br />
            Atuação ética e estratégica fundamentada na psicologia forense e no Código de Processo Civil.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5541991767772?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20caso%20jurídico." className="btn-gold">Enviar Caso para Análise</a>
          </div>
        </section>
        <section style={{ padding: "80px 64px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid #333" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="juridico-grid">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 300, color: "#ffffff", marginBottom: "32px" }}>
                Diferencial Estratégico para o Direito
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { t: "Análise de Capacidade", d: "Avaliação técnica de discernimento e volição em processos cíveis e de família." },
                  { t: "Dano Moral Psicológico", d: "Documentação técnica dos impactos emocionais e nexo causal em ações indenizatórias." },
                  { t: "Quesitos e Pareceres", d: "Elaboração de quesitos estratégicos e pareceres para contestação de laudos periciais." },
                  { t: "Orientação em Audiência", d: "Suporte técnico ao advogado para inquirição de peritos e testemunhas." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#c8a96e", marginBottom: "8px" }}>{item.t}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#a0a0a0", lineHeight: 1.6 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "48px", border: "1px solid #333", background: "rgba(0,0,0,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
                Assistente Técnico vs. Perito Judicial
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#a0a0a0", lineHeight: 1.7, marginBottom: "24px" }}>
                Diferente do Perito (que é de confiança do juiz), o **Assistente Técnico** é o profissional de confiança da parte. <br />
                Minha função é garantir o contraditório técnico, acompanhando as avaliações e assegurando que os aspectos psicológicos sejam interpretados com rigor científico.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px" }}>
                {["Garantia do contraditório", "Análise crítica do laudo pericial", "Presença no exame pericial (Art. 466 CPC)", "Elaboração de parecer técnico"].map((point, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", fontSize: "0.85rem", color: "#ffffff" }}>
                    <span style={{ color: "#c8a96e" }}>✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
          </>
  );
}
