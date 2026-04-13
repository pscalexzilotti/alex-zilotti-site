import RevealWrapper from "@/components/ui/RevealWrapper"
import SectionLabel from "@/components/ui/SectionLabel"

const creds = [
  "Psicologo clinico com foco em TCC e hipnose",
  "Pos-graduando em Psicologia Forense e Juridica",
  "Pos-graduando em TCC de Alta Performance",
  "MBA em Gestao de Pessoas",
  "Atuacao em contextos clinicos, juridicos e corporativos",
]

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: "var(--deep)", padding: "128px 64px" }}>
      <div className="sobre-g" style={{
        display: "grid", gridTemplateColumns: "420px 1fr",
        gap: 92, maxWidth: 1200, margin: "0 auto", alignItems: "start",
      }}>
        <RevealWrapper>
          <div style={{ position: "sticky", top: 116 }}>
            <div className="sobre-ph" style={{ position: "relative", overflow: "hidden", aspectRatio: "2/3" }}>
              <div className="sobre-img" style={{
                position: "absolute", inset: 0,
                backgroundImage: "url(/sobre.jpeg)",
                backgroundSize: "cover", backgroundPosition: "center top",
                transition: "transform 0.8s var(--ease)",
              }}/>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(15,14,16,0.9) 0%, transparent 50%)",
              }}/>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 28px", zIndex: 2 }}>
                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.45rem", fontWeight: 300, color: "var(--warm)", marginBottom: 3,
                }}>Alex Cristoffer Zilotti</h3>
                <p style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>
                  Psicologo Â· CRP 08/48529
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper><SectionLabel>Sobre</SectionLabel></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 300, lineHeight: 1.14, color: "var(--warm)", letterSpacing: "-0.01em", marginBottom: 40,
            }}>
              Uma combinacao rara.{" "}
              <em style={{ fontStyle: "italic", color: "var(--glt)" }}>Deliberadamente construida.</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 24 }}>
              Os maiores obstaculos de quem opera em alto nivel sao, frequentemente, de natureza psicologica.
              Alex Cristoffer Zilotti e psicologo com formacao em Psicologia Juridica e Forense e
              especializacao em TCC de Alta Performance â€” uma interseccao deliberada entre dois mundos
              que raramente se encontram com igual profundidade.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em Gestao de Pessoas e formacao em hipnose clinica, Alex opera com precisao
              tecnica e sensibilidade clinica. Cada processo terapeutico, cada parecer tecnico e cada
              consultoria juridico-psicologica e construido a partir da demanda real do cliente â€”
              nao de protocolos padronizados.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresarios, executivos, artistas e profissionais que vivem sob alta pressao
              â€” e com advogados e escritorios que precisam de suporte tecnico especializado em casos
              onde Direito e Psicologia se cruzam. Discreto por natureza. Rigoroso por formacao.
              Profundo por escolha.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.5}>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: "0.52rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Formacao e Credenciais
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {creds.map(c => (
                  <li key={c} style={{ fontSize: "0.82rem", color: "var(--taupe)", display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span style={{ width: 13, height: 1, background: "var(--gdim)", flexShrink: 0, marginTop: 10, display: "inline-block" }}/>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.6}>
            <div style={{ display: "inline-flex", flexDirection: "column", border: "1px solid rgba(154,128,96,0.2)", padding: "18px 28px" }}>
              <span style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)" }}>Registro Profissional</span>
              <strong style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--glt)", marginTop: 4 }}>
                CRP 08/48529
              </strong>
            </div>
          </RevealWrapper>
        </div>
      </div>

      <style>{`
        .sobre-ph:hover .sobre-img { transform: scale(1.03) !important; }
        @media (max-width: 900px) { .sobre-g { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}