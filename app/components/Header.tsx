"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#alta-performance", label: "Psicoterapia" },
  { href: "#juridico", label: "Jurídico" },
  { href: "#empresas", label: "Empresas" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-[var(--color-text)] text-lg font-semibold tracking-tight no-underline hover:text-[var(--color-primary)] transition-colors"
        >
          Alex Zilotti
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-muted)] text-sm font-medium hover:text-[var(--color-text)] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-sm font-medium px-4 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Contato
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-[var(--color-text-muted)]"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--color-text)] text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-sm font-medium px-4 py-2.5 rounded-[var(--radius-md)] text-center mt-1"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}