"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#alta-performance", label: "Cl\u00ednica" },
  { href: "#juridico", label: "Jur\u00eddico" },
  { href: "#empresas", label: "Empresas" },
  { href: "#sobre", label: "Sobre" },
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
          transition: "background 0.5s, padding 0.4s, border-color 0.5s",
          background: scrolled ? "rgba(9,8,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(154,128,96,0.09)" : "1px solid transparent",
        }}
      >
        <a
          href="#inicio"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.2rem",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "var(--ivory)",
            textDecoration: "none",
          }}
        >
          Alex Cristoffer Zilotti
          <small
            style={{
              display: "block",
              fontFamily: "var(--sans)",
              fontSize: "0.48rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 400,
              marginTop: 3,
            }}
          >
            Psic\u00f3logo \u00b7 CRP 08/48529
          </small>
        </a>

        {/* Nav desktop */}
        <nav
          style={{ display: "flex", gap: 38, alignItems: "center", listStyle: "none" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--taupe)",
                textDecoration: "none",
                fontWeight: 400,
                transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ivory)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--taupe)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            style={{
              fontSize: "0.57rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--glt)",
              border: "1px solid rgba(196,169,122,0.28)",
              padding: "11px 26px",
              textDecoration: "none",
              fontWeight: 400,
              transition: "all 0.35s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--gg)";
              e.currentTarget.style.borderColor = "var(--glt)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(196,169,122,0.28)";
            }}
          >
            Solicitar Avalia\u00e7\u00e3o
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            color: "var(--taupe)",
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          <span style={{ display: "block", width: 22, height: 1, background: "var(--taupe)", transition: "all 0.3s", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1, background: "var(--taupe)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 1, background: "var(--taupe)", transition: "all 0.3s", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--deep)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 44,
          }}
        >
          {[...navLinks, { href: "#contato", label: "Contato" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "var(--ivory)",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1101px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
