"use client";

const topics = [
  {
    tag: "Credencial TJPR",
    title: "Perito Psicólogo do TJPR",
    bodyMobile: "Cadastrado como perito no Tribunal de Justiça do Paraná (CAJU/TJPR).",
    bodyDesktop: "Cadastrado como perito no Tribunal de Justiça do Paraná, o que confere compreensão aprofundada do processo pericial oficial, maior precisão técnica na análise crítica de laudos e credibilidade estratégica como assistente da parte.",
  },
  {
    tag: "Análise Técnica",
    title: "Capacidade, discernimento e dano psíquico",
    bodyMobile:
      "Análise técnica de capacidade, discernimento e impactos emocionais relevantes ao processo.",
    bodyDesktop:
      "Análise técnica de capacidade, discernimento e dano psíquico, com fundamentação psicológica clara para subsidiar estratégia processual, quesitos e manifestações da parte.",
  },
  {
    tag: "Burnout e Trabalho",
    title: "Burnout, assédio e sofrimento ocupacional",
    bodyMobile:
      "Avaliação psicológica de burnout, assédio e sofrimento emocional relacionado ao trabalho.",
    bodyDesktop:
      "Avaliação psicológica de burnout, estresse ocupacional, assédio e sofrimento emocional vinculado ao contexto de trabalho, com documentação técnica útil para ações e defesas.",
  },
  {
    tag: "Pareceres",
    title: "Relatórios e pareceres para o contraditório",
    bodyMobile:
      "Relatórios e pareceres técnicos para fortalecer o contraditório e orientar a atuação do advogado.",
    bodyDesktop:
      "Elaboração de relatórios e pareceres psicológicos para fortalecer o contraditório, apoiar impugnações, formular quesitos e analisar tecnicamente conclusões periciais.",
  },
];

const assistantItems = [
  "Nomeado pela parte ou pelo advogado",
  "Atua em favor da estratégia técnica do cliente",
  "Produz parecer ou laudo subsidiário",
  "Fortalece o contraditório",
  "Pode analisar criticamente o laudo pericial",
];

const expertItems = [
  "Nomeado pelo juiz",
  "Deve atuar com imparcialidade",
  "Produz laudo pericial oficial",
  "Auxilia o juízo",
  "Não representa nenhuma das partes",
];

export default function LegalSection() {
  return (
    <section
      id="juridico"
      className="legal-section"
      style={{ background: "#0a0a0a", padding: "128px 64px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="legal-grid"
        >
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                color: "#c8a96e",
                letterSpacing: "0.2em",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Psicologia Jurídica
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-cormorant)",
                color: "#e8e0d4",
                lineHeight: 1.15,
                marginBottom: "28px",
                fontWeight: 400,
              }}
            >
              Assistente Técnico <em>Psicológico</em>
            </h2>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#c8a96e",
                letterSpacing: "0.1em",
                marginBottom: "28px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Psicólogo Jurídico · Perito do TJPR · Assistência Técnica
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#7a7067",
                lineHeight: 1.75,
                marginBottom: "48px",
              }}
            >
              Atuo ao lado do advogado e de seu cliente na análise técnica de
              questões psicológicas relevantes ao processo, com elaboração de
              pareceres e documentos que ajudem a sustentar o contraditório com
              clareza, método e rigor profissional.
            </p>
            <div
              className="compare-box"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                marginBottom: "36px",
                border: "1px solid #242424",
                background: "#242424",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Coluna Assistente Técnico - fundo dourado, texto escuro */}
              <div
                style={{
                  background: "#c8a96e",
                  padding: "24px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#0a0a0a",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  Assistente Técnico
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {assistantItems.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        color: "#0a0a0a",
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ flexShrink: 0, fontWeight: 700 }}>✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Coluna Perito Judicial - fundo escuro, texto muted */}
              <div
                style={{
                  background: "#161616",
                  padding: "24px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#7a7067",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Perito Judicial
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {expertItems.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        color: "#7a7067",
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ opacity: 0.5, flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="#contato"
              style={{
                display: "inline-block",
                background: "#c8a96e",
                color: "#0a0a0a",
                padding: "14px 32px",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.2s",
              }}
            >
              Enviar caso para análise
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
            className="legal-grid-right"
          >
            {topics.map((topic) => (
              <div
                key={topic.tag}
                style={{
                  borderTop: "1px solid #242424",
                  paddingTop: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#c8a96e",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  {topic.tag}
                </p>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-cormorant)",
                    color: "#e8e0d4",
                    marginBottom: "12px",
                    fontWeight: 500,
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  className="legal-body-mobile"
                  style={{
                    fontSize: "0.9rem",
                    color: "#7a7067",
                    lineHeight: 1.7,
                  }}
                >
                  {topic.bodyMobile}
                </p>
                <p
                  className="legal-body-desktop"
                  style={{
                    fontSize: "0.9rem",
                    color: "#7a7067",
                    lineHeight: 1.7,
                    display: "none",
                  }}
                >
                  {topic.bodyDesktop}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .legal-body-desktop {
            display: block !important;
          }
          .legal-body-mobile {
            display: none !important;
          }
        }
        @media (max-width: 1100px) {
          .legal-section {
            padding: 92px 32px !important;
          }
          .legal-grid {
            grid-template-columns: 1fr !important;
            gap: 52px !important;
          }
        }
        @media (max-width: 720px) {
          .compare-box {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .legal-section {
            padding: 76px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
