const footerLinks = [
  { href: "#alta-performance", label: "Psicoterapia" },
  { href: "#juridico", label: "Psicologia Jurídica" },
  { href: "#empresas", label: "Consultoria para Empresas" },
  { href: "#sobre", label: "Sobre" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div
        className="footer-main"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 40px 40px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--color-gold)",
                fontFamily: "var(--font-display)",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Alex Zilotti
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Psicólogo CRP 08/48529. Atendimento clínico de alta performance,
              psicologia jurídica e desenvolvimento humano para empresas.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Navegação
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--color-text)",
                      textDecoration: "none",
                      opacity: 0.75,
                      transition: "opacity 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.opacity = "1";
                      (e.target as HTMLAnchorElement).style.color = "var(--color-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.opacity = "0.75";
                      (e.target as HTMLAnchorElement).style.color = "var(--color-text)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://wa.me/5541991767772"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  opacity: 0.75,
                  transition: "opacity 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.opacity = "1";
                  (e.target as HTMLAnchorElement).style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.opacity = "0.75";
                  (e.target as HTMLAnchorElement).style.color = "var(--color-text)";
                }}
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/psicoalexz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  opacity: 0.75,
                  transition: "opacity 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.opacity = "1";
                  (e.target as HTMLAnchorElement).style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.opacity = "0.75";
                  (e.target as HTMLAnchorElement).style.color = "var(--color-text)";
                }}
              >
                @psicoalexz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-btm"
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--color-muted)",
              letterSpacing: "0.05em",
            }}
          >
            Todas as informações são protegidas pelo sigilo profissional conforme o Código de Ética do CFP.
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              color: "var(--color-muted)",
              whiteSpace: "nowrap",
            }}
          >
            &copy; {currentYear} Alex Cristoffer Zilotti
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-main { padding: 52px 32px 34px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 34px !important; }
          .footer-grid > div:last-child { text-align: left !important; }
          .footer-btm { flex-direction: column !important; gap: 10px !important; text-align: center !important; }
        }
        @media (max-width: 640px) {
          .footer-main { padding: 52px 24px 34px !important; }
        }
      `}</style>
    </footer>
  );
}
