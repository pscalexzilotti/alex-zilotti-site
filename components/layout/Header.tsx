"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/psicologia-juridica", label: "JurÃ­dico" },
  { href: "/#psicoterapia", label: "Psicoterapia" },
  { href: "//empresas", label: "Empresas" },
  { href: "/#sobre", label: "Sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "17px 64px" : "28px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background 0.5s, padding 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(10,10,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <a href="/#inicio" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.03em", color: "var(--color-text)" }}>
            Alex Cristoffer Zilotti
          </p>
          <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)" }}>
            PsicÃ³logo Â· CRP 08/48529
          </p>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 48 }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.04em", color: "var(--color-muted)", transition: "color 0.25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/5541991767772" style={{ padding: "10px 24px", border: "1px solid rgba(184,151,42,0.28)", background: "transparent", color: "var(--color-gold)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", transition: "background 0.25s, border-color 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-gold-dim)"; e.currentTarget.style.borderColor = "var(--color-gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(184,151,42,0.28)"; }}>
            Contato
          </a>
        </nav>

        <button onClick={() => setMenuOpen((p) => !p)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 8, color: "var(--color-muted)" }} className="show-mobile" aria-label="Menu">
          <span style={{ width: 24, height: 2, background: "currentColor" }}></span>
          <span style={{ width: 24, height: 2, background: "currentColor" }}></span>
          <span style={{ width: 24, height: 2, background: "currentColor" }}></span>
        </button>
      </header>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,10,10,0.98)", zIndex: 99, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }} onClick={() => setMenuOpen(false)}>
          {[...navLinks, { href: "https://wa.me/5541991767772", label: "Contato" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 300, color: "var(--color-text)", textDecoration: "none", letterSpacing: "0.03em" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

