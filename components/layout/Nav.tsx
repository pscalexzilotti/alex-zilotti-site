'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'ClÃ­nica', href: '/clinica' },
    { label: 'Para Advogados', href: '/juridico' },
    { label: 'Workshop 3 Dias', href: '/workshop' },
    { label: 'Sobre', href: '/#sobre' },
  ]

  return (
    <>
      <nav
        aria-label="NavegaÃ§Ã£o principal"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: scrolled ? '17px 64px' : '28px 64px',
          background: scrolled ? 'rgba(9,8,10,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(154,128,96,0.09)' : 'transparent'}`,
          transition: 'background 0.5s, padding 0.4s, border-color 0.5s',
        }}
      >
        <Link href="/" aria-label="PÃ¡gina inicial">
          <div style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.06em',
            color: 'var(--ivory)', lineHeight: 1.2,
          }}>
            Alex Cristoffer Zilotti
            <small style={{
              display: 'block',
              fontFamily: 'var(--font-jost), system-ui, sans-serif',
              fontSize: '0.48rem', letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold)', fontWeight: 400, marginTop: 3,
            }}>
              PsicÃ³logo Â· CRP 08/48529
            </small>
          </div>
        </Link>

        <ul className="nav-links-desktop" style={{
          display: 'flex', gap: 38, listStyle: 'none', alignItems: 'center', margin: 0, padding: 0,
        }}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="nav-link" style={{
                fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--taupe)', fontWeight: 400, transition: 'color 0.3s',
              }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contato" className="nav-cta" style={{
              fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--glt)', border: '1px solid rgba(196,169,122,0.28)',
              padding: '11px 26px', fontWeight: 400, transition: 'all 0.35s var(--ease)',
              whiteSpace: 'nowrap', display: 'inline-block',
            }}>
              Solicitar AvaliaÃ§Ã£o
            </Link>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          style={{
            display: 'none', background: 'none', border: 'none',
            flexDirection: 'column', gap: 5, padding: 8, cursor: 'pointer',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1, background: 'var(--taupe)',
              transition: 'all 0.3s',
              transform: menuOpen ? i === 0 ? 'translateY(6px) rotate(45deg)' : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'none' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      <div style={{
        position: 'fixed', inset: 0, background: 'var(--deep)', zIndex: 99,
        display: menuOpen ? 'flex' : 'none',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 44,
      }}>
        {[...navLinks, { label: 'Solicitar AvaliaÃ§Ã£o', href: '/#contato' }].map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '2.2rem', fontWeight: 300, color: 'var(--ivory)',
            letterSpacing: '0.03em', transition: 'color 0.3s',
          }}>
            {label}
          </Link>
        ))}
      </div>

      <style>{`
        .nav-link:hover { color: var(--ivory) !important; }
        .nav-cta:hover { background: var(--gg) !important; border-color: var(--glt) !important; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 20px 28px !important; }
        }
      `}</style>
    </>
  )
}
