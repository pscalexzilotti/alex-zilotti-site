"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const services = [
  {
    num: "01",
    title: "NR-1 Saúde Mental no Trabalho",
    description: "Implementação e adequação à NR-1 com foco em gerenciamento de riscos psicossociais, programas de prevenção a burnout e sofrimento ocupacional.",
    bullets: [
      "Diagnóstico de riscos psicossociais (NR-1)",
      "Plano de ação para prevenção de burnout",
      "Treinamentos obrigatórios para lideranças",
      "Monitoramento contínuo de saúde mental"
    ]
  },
  {
    num: "02",
    title: "Recrutamento & Seleção Estratégica",
    description: "Processo seletivo com foco em fit cultural e avaliação psicológica, garantindo contratações assertivas para posições críticas.",
    bullets: [
      "Mapeamento de perfil comportamental",
      "Entrevistas por competências",
      "Testes psicométricos validados (MAPA, etc.)",
      "Relatórios técnicos para tomada de decisão"
    ]
  },
  {
    num: "03",
    title: "Palestras SIPAT & Engajamento",
    description: "Conteúdo customizado para SIPAT com foco em saúde mental, ergonomia cognitiva e bem-estar no ambiente corporativo.",
    bullets: [
      "Burnout e equilíbrio vida-trabalho",
      "Gestão de estresse em alta performance",
      "Comunicação assertiva e clima organizacional",
      "Workshops interativos e dinâmicos"
    ]
  },
  {
    num: "04",
    title: "Desenvolvimento de Lideranças",
    description: "Capacitação executiva focada em liderança humanizada, gestão de conflitos e alta performance de equipes.",
    bullets: [
      "Coaching executivo individual",
      "Programas de desenvolvimento de gestores",
      "Feedback e cultura de alta performance",
      "Gestão de conflitos e mediação"
    ]
  },
  {
    num: "05",
    title: "Consultoria em Psicologia Organizacional",
    description: "Diagnóstico organizacional, pesquisa de clima, gestão de mudanças e estruturação de áreas de Pessoas.",
    bullets: [
      "Pesquisa de clima e cultura organizacional",
      "Planos de sucessão e retenção de talentos",
      "Estruturação de políticas de RH",
      "Consultoria para fusões e reestruturações"
    ]
  }
];

const clients = ["Vale", "Petrobras", "XP Investimentos", "Empresas de Tecnologia"];

export default function EmpresasPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px", background: "#0a0a0a" }}>
        <section style={{ padding: "80px 64px 60px", textAlign: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#c8a96e", letterSpacing: "0.2em", marginBottom: "24px", fontWeight: 600 }}>
            Consultoria Empresarial
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#ffffff", marginBottom: "32px", lineHeight: 1.1 }}>
            Psicologia Organizacional para <em style={{ fontStyle: "italic", color: "#c8a96e" }}>Multinacionais</em>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#7a7067", lineHeight: 1.8, marginBottom: "48px", maxWidth: "800px", margin: "0 auto" }}>
            15+ anos de experiência em Vale, Petrobras, XP e empresas de tecnologia. Consultoria focada em NR-1, R&S estratégico, desenvolvimento de lideranças e saúde mental corporativa.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: "48px" }}>
            <a href="#servicos" className="btn-gold">Ver Serviços</a>
            <a href="https://wa.me/5541991767772?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta%20de%20consultoria%20empresarial." className="btn-ghost">Solicitar Proposta</a>
          </div>
        </section>

        <section style={{ padding: "80px 64px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid #242424" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#c8a96e", letterSpacing: "0.2em", marginBottom: "20px", fontWeight: 600 }}>
              Experiência Executiva
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 300, color: "#e8e0d4", marginBottom: "32px", lineHeight: 1.2 }}>
              Histórico em Multinacionais de <em style={{ fontStyle: "italic" }}>Grande Porte</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", marginTop: "48px" }}>
              {clients.map((client, i) => (
                <div key={i} style={{ padding: "32px 24px", border: "1px solid #242424", background: "#161616", textAlign: "center" }}>
                  <p style={{ fontSize: "1.1rem", color: "#c8a96e", fontWeight: 600 }}>{client}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.95rem", color: "#7a7067", lineHeight: 1.7, marginTop: "48px", textAlign: "center", maxWidth: "700px", margin: "48px auto 0" }}>
              Mais de 15 anos atuando em recrutamento executivo, desenvolvimento de lideranças, gestão de clima organizacional e implementação de programas de saúde mental em ambientes corporativos de alta complexidade.
            </p>
          </div>
        </section>

        <section id="servicos" style={{ padding: "80px 64px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#c8a96e", letterSpacing: "0.2em", marginBottom: "20px", fontWeight: 600, textAlign: "center" }}>
              Serviços Especializados
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 300, color: "#e8e0d4", marginBottom: "64px", lineHeight: 1.2, textAlign: "center" }}>
              Consultoria Focada em <em style={{ fontStyle: "italic" }}>Resultados Mensuráveis</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {services.map((service) => (
                <div key={service.num} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "32px", padding: "48px 0", borderTop: "1px solid #242424" }} className="empresas-service-item">
                  <div style={{ fontSize: "3rem", fontFamily: "var(--font-cormorant)", color: "#c8a96e", opacity: 0.3, fontWeight: 300 }}>
                    {service.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-cormorant)", color: "#e8e0d4", marginBottom: "16px", fontWeight: 500 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "#7a7067", lineHeight: 1.7, marginBottom: "24px" }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "12px" }}>
                      {service.bullets.map((bullet, i) => (
                        <li key={i} style={{ display: "flex", gap: "12px", fontSize: "0.88rem", color: "#a0a0a0", alignItems: "flex-start" }}>
                          <span style={{ color: "#c8a96e", flexShrink: 0, fontWeight: 700 }}>✓</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 64px", background: "rgba(200, 169, 110, 0.05)", borderTop: "1px solid #c8a96e", borderBottom: "1px solid #c8a96e" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300, color: "#e8e0d4", marginBottom: "24px" }}>
              Pronto para Elevar a Performance da Sua Equipe?
            </h2>
            <p style={{ fontSize: "1rem", color: "#7a7067", lineHeight: 1.8, marginBottom: "40px" }}>
              Entre em contato para agendar uma reunião estratégica e receber uma proposta personalizada para as necessidades da sua empresa.
            </p>
            <a href="https://wa.me/5541991767772?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta%20de%20consultoria%20empresarial." className="btn-gold">Solicitar Proposta Comercial</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
