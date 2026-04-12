"use client";

const services = [
  {
    n: "01",
    tag: "JurÃ­dico",
    title: "AssistÃªncia TÃ©cnica PsicolÃ³gica",
    body: "AtuaÃ§Ã£o tÃ©cnica voltada a advogados e escritÃ³rios que precisam analisar elementos psicolÃ³gicos relevantes ao litÃ­gio com clareza, seguranÃ§a e profundidade estratÃ©gica.",
    desktopBody:
      "Suporte tÃ©cnico especializado para advogados e escritÃ³rios na anÃ¡lise de elementos psicolÃ³gicos relevantes ao litÃ­gio. Com leitura criteriosa de documentos, avaliaÃ§Ã£o de pontos sensÃ­veis do caso e elaboraÃ§Ã£o de pareceres, o trabalho contribui para o fortalecimento do contraditÃ³rio e para decisÃµes processuais mais seguras.",
    bullets: [
      "AnÃ¡lise tÃ©cnica de fatos, laudos e documentos",
      "Leitura crÃ­tica para contraditÃ³rio, quesitos e impugnaÃ§Ãµes",
      "Pareceres com linguagem objetiva e utilidade processual",
      "Demandas cÃ­veis, trabalhistas e familiares",
    ],
    note: "Diferencial: experiÃªncia pericial no contexto do TJPR e atuaÃ§Ã£o como assistente tÃ©cnico da parte.",
    cta: "Solicitar anÃ¡lise tÃ©cnica",
    ctaHref: "/psicologia-juridica",
    highlight: true,
  },
  {
    n: "02",
    tag: "ClÃ­nica",
    title: "Psicoterapia para Executivos e Advogados",
    body: "Atendimento psicoterÃ¡pico para profissionais de alta performance: executivos, advogados e lideranÃ§as sob pressÃ£o constante.",
    desktopBody:
      "Para executivos, advogados e profissionais que operam sob pressÃ£o constante, ofereÃ§o psicoterapia focada em regulaÃ§Ã£o emocional, tomada de decisÃ£o em contextos crÃ­ticos e saÃºde mental de longo prazo. Abordagem cientÃ­fica, sigilo absoluto e atendimento online ou presencial.",
    bullets: [
      "RegulaÃ§Ã£o emocional e gestÃ£o do estresse",
      "Suporte em decisÃµes complexas e transiÃ§Ãµes",
      "Terapia Cognitivo-Comportamental (TCC)",
      "Atendimento individual, online ou presencial",
    ],
    note: "Foco em clareza emocional e desempenho sustentÃ¡vel.",
    cta: "Agendar sessÃ£o",
    ctaHref: "#contato",
    highlight: false,
  },
  {
    n: "03",
    tag: "Empresas",
    title: "Psicologia Organizacional",
    body: "Consultoria em desenvolvimento humano para empresas que valorizam lideranÃ§a sÃ³lida, clima organizacional saudÃ¡vel e saÃºde mental no trabalho.",
    desktopBody:
      "SoluÃ§Ãµes corporativas personalizadas para desenvolvimento de lideranÃ§a executiva, gestÃ£o de conflitos internos, prevenÃ§Ã£o de burnout e adequaÃ§Ã£o Ã  NR-1 em saÃºde mental ocupacional. Formatos flexÃ­veis: projetos sob demanda, contratos de mÃ©dio prazo ou workshops in-company.",
    bullets: [
      "Desenvolvimento de lideranÃ§a e equipes",
      "GestÃ£o de conflitos e clima organizacional",
      "PrevenÃ§Ã£o de burnout e NR-1 saÃºde mental",
      "Palestras, SIPAT e programas de engajamento",
    ],
    note: "15+ anos de atuaÃ§Ã£o em ambientes corporativos de alta complexidade.",
    cta: "Solicitar proposta",
    ctaHref: "#contato",
    highlight: false,
  },
];
export default function ServicesGrid() {
  return (
    <section
      className="services-section"
      style={{
        padding: "100px 64px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          letterSpacing: "0.2em",
          marginBottom: "16px",
        }}
      >
        Ãreas de AtuaÃ§Ã£o
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3rem",
          fontWeight: 300,
          color: "var(--color-text)",
          marginBottom: "64px",
        }}
      >
        Psicologia praticada com{" "}
        <em>rigor e profundidade</em>
      </h2>

      {/* Grid 3 colunas desktop, 1 coluna mobile */}
      <div
        className="svc-grid-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2px",
        }}
      >
        {services.map((svc) => (
          <div
            key={svc.n}
            className="svc-card"
            style={{
              padding: "48px 40px",
              background: svc.highlight
                ? "var(--color-gold)"
                : "var(--color-surface)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              cursor: "default",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = svc.highlight
                ? "var(--color-gold)"
                : "var(--color-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = svc.highlight
                ? "var(--color-gold)"
                : "var(--color-surface)")
            }
          >
            {/* Number + Tag */}
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-gold)",
                fontWeight: 500,
              }}
            >
              {svc.n}&nbsp;&nbsp;{svc.tag}
            </p>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: svc.highlight ? "var(--color-bg)" : "var(--color-text)",
                lineHeight: 1.2,
              }}
            >
              {svc.title}
            </h3>

            {/* Body â€” mobile: svc.body, desktop: svc.desktopBody */}
            <p
              className="svc-body-mobile"
              style={{
                fontSize: "0.95rem",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                lineHeight: 1.6,
              }}
            >
              {svc.body}
            </p>
            <p
              className="svc-body-desktop"
              style={{
                fontSize: "0.95rem",
                color: svc.highlight ? "var(--color-bg)" : "var(--color-muted)",
                lineHeight: 1.6,
                display: "none",
              }}
            >
              {svc.desktopBody}
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {svc.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: "0.88rem",
                color: svc.highlight ? "#0a0a0a" : "#e8e8e8",                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>â€”</span> {b}
                </li>
              ))}
            </ul>

            {/* Note */}
            <p
              style={{
                fontSize: "0.78rem",
                color: svc.highlight ? "#0a0a0a" : "#e8e8e8",                opacity: 0.7,
                fontStyle: "italic",
                marginTop: "auto",
                paddingTop: 8,
                borderTop: `1px solid ${svc.highlight ? "rgba(0,0,0,0.15)" : "var(--color-border)"}`,
              }}
            >
              {svc.note}
            </p>

            {/* CTA */}
            <a
              href={svc.ctaHref}
              style={{
                display: "inline-block",
                padding: "12px 24px",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
                border: `1px solid ${svc.highlight ? "var(--color-bg)" : "var(--color-text)"}`,
                color: svc.highlight ? "var(--color-bg)" : "var(--color-text)",
                background: svc.highlight ? "var(--color-gold)" : "transparent",
                textDecoration: "none",
                transition: "all 0.2s",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-gold)";
                e.currentTarget.style.color = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = svc.highlight
                  ? "var(--color-gold)"
                  : "transparent";
                e.currentTarget.style.color = svc.highlight
                  ? "var(--color-bg)"
                  : "var(--color-text)";
              }}
            >
              {svc.cta}
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .svc-body-desktop { display: block !important; }
          .svc-body-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .services-section { padding: 92px 32px !important; }
          .svc-grid-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .services-section { padding: 76px 24px !important; }
          .svc-card { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}

