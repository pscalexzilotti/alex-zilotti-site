import Link from "next/link"
 
const navLinks = [
  { label: "Clinica", href: "/clinica" },
  { label: "Para Advogados", href: "/juridico" },
  { label: "Workshop 3 Dias", href: "/workshop" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
]
 
export default function Footer() {
  return (
    <footer style={{ background: "var(--deep)", borderTop: "1px solid rgba(154,128,96,0.08)" }}>
      <div className="ft-grid" style={{
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
        gap: 64, maxWidth: 1200, margin: "0 auto",
        padding: "72px 64px 56px",
        borderBottom: "1px solid rgba(154,128,96,0.08)",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.06em",
            color: "var(--ivory)", marginBottom: 16, lineHeight: 1.2,
          }}>
            Alex Zilotti
            <small style={{
              display: "block",
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.48rem", letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--gold)", fontWeight: 400, marginTop: 3,
            }}>
              Psicologo · CRP 08/48529
            </small>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--stone)", lineHeight: 1.9, maxWidth: 280 }}>
            Psicologia Juridica, Forense e de Alta Performance. Atendimento presencial e online em todo o Brasil.
          </p>
        </div>
 
        <nav aria-label="Rodape" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
            Navegacao
          </p>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="ft-link" style={{ fontSize: "0.78rem", color: "var(--stone)", transition: "color 0.3s" }}>
              {label}
            </Link>
          ))}
        </nav>
 
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
            Informacoes
          </p>
          {["CRP 08/48529", "Curitiba · Parana", "Atendimento online em todo Brasil"].map((t) => (
            <p key={t} style={{ fontSize: "0.78rem", color: "var(--stone)" }}>{t}</p>
          ))}
          <a href="mailto:contato@alexzilotti.com.br" className="ft-link" style={{ fontSize: "0.78rem", color: "var(--gold)", marginTop: 8, transition: "color 0.3s" }}>
            contato@alexzilotti.com.br
          </a>
        </div>
      </div>
 
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "28px 64px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em" }}>
          2025 Alex Zilotti · Todos os direitos reservados
        </p>
        <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em" }}>
          Psicologo Juridico · Psicologo Forense · Alta Performance
        </p>
      </div>
 
      <style>{`
        .ft-link:hover { color: var(--ivory) !important; }
        @media (max-width: 768px) {
          .ft-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 48px 28px !important; }
          footer > div:last-child { padding: 20px 28px !important; }
        }
      `}</style>
    </footer>
  )
}