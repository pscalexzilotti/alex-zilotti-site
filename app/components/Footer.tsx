const footerLinks = [
  { href: "#alta-performance", label: "Psicoterapia" },
  { href: "#juridico", label: "Psicologia Jurídica" },
  { href: "#empresas", label: "Consultoria para Empresas" },
  { href: "#sobre", label: "Sobre" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[var(--color-text)] text-[var(--color-text-inverse)] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            <p
              className="font-[family-name:var(--font-display)] font-light mb-2"
              style={{ fontSize: "var(--text-xl)" }}
            >
              Alex Cristoffer Zilotti
            </p>
            <p className="text-sm opacity-60 mb-1">Psicólogo · CRP 08/48529</p>
            <p className="text-sm opacity-60">Maringá, PR — Presencial e online</p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase opacity-50 mb-4">
              Navegação
            </p>
            <nav aria-label="Rodapé">
              <ul className="space-y-2" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase opacity-50 mb-4">
              Contato
            </p>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href="https://www.instagram.com/pscalexzilotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs opacity-40 max-w-xl">
            Todas as informações compartilhadas são protegidas pelo sigilo
            profissional conforme o Código de Ética do CFP. Este site tem
            caráter exclusivamente informativo.
          </p>
          <p className="text-xs opacity-30 shrink-0">© {currentYear} Alex Zilotti</p>
        </div>
      </div>
    </div>
  );
}