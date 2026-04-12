# Correção completa — Alex Zilotti Site
# Execute: .\corrigir2.ps1

Write-Host "Corrigindo encoding e problemas visuais..." -ForegroundColor Cyan

# ─── app/layout.tsx — adiciona charset e corrige paddingTop ───
$layout = @'
import type { Metadata } from 'next'
import { cormorant, jost } from './fonts'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Alex Zilotti | Psicologo Juridico & Alta Performance',
  description: 'Alex Zilotti — Psicologo Juridico, Forense e de Alta Performance. Atendimento especializado para empresarios, executivos, artistas e suporte tecnico pericial para advogados.',
  metadataBase: new URL('https://www.alexzilotti.psc.br'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Ir para o conteudo</a>
        <Cursor />
        <Nav />
        <main id="main-content" style={{ paddingTop: 0 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\app\layout.tsx", $layout, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK app/layout.tsx" -ForegroundColor Green

# ─── app/globals.css ───
$globals = @'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ink: #09080a;
  --deep: #0f0e10;
  --charcoal: #1a191b;
  --graphite: #272528;
  --muted: #48454c;
  --stone: #79757f;
  --taupe: #b0a8b8;
  --ivory: #e4dced;
  --warm: #f0ebf5;
  --gold: #9a8060;
  --glt: #c4a97a;
  --gdim: #6b5940;
  --gg: rgba(196, 169, 122, 0.11);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

html { scroll-behavior: smooth; }

body {
  background: var(--ink);
  color: var(--ivory);
  font-family: var(--font-jost), system-ui, sans-serif;
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  cursor: none;
}

@media (hover: none) { body { cursor: auto; } }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
::selection { background: rgba(196,169,122,0.2); color: var(--warm); }
a { color: inherit; text-decoration: none; }

.skip-link {
  position: absolute; top: -100%; left: 1rem;
  background: var(--glt); color: var(--ink);
  padding: 0.5rem 1rem; font-size: 0.75rem; z-index: 9999;
}
.skip-link:focus { top: 1rem; }

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
'@
[System.IO.File]::WriteAllText("$PWD\app\globals.css", $globals, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK app/globals.css" -ForegroundColor Green

# ─── components/layout/Nav.tsx ───
$nav = @'
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Clinica", href: "/clinica" },
    { label: "Para Advogados", href: "/juridico" },
    { label: "Workshop 3 Dias", href: "/workshop" },
    { label: "Sobre", href: "/#sobre" },
  ]

  return (
    <>
      <nav
        aria-label="Navegacao principal"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: scrolled ? "17px 64px" : "28px 64px",
          background: scrolled ? "rgba(9,8,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(154,128,96,0.09)" : "transparent"}`,
          transition: "background 0.5s, padding 0.4s, border-color 0.5s",
        }}
      >
        <Link href="/" aria-label="Pagina inicial">
          <div style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.06em",
            color: "var(--ivory)", lineHeight: 1.2,
          }}>
            Alex Cristoffer Zilotti
            <small style={{
              display: "block",
              fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.48rem", letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--gold)", fontWeight: 400, marginTop: 3,
            }}>
              Psicologo · CRP 08/48529
            </small>
          </div>
        </Link>

        <ul className="nav-links-desktop" style={{
          display: "flex", gap: 38, listStyle: "none", alignItems: "center", margin: 0, padding: 0,
        }}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="nav-link" style={{
                fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--taupe)", fontWeight: 400, transition: "color 0.3s",
              }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contato" className="nav-cta" style={{
              fontSize: "0.57rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--glt)", border: "1px solid rgba(196,169,122,0.28)",
              padding: "11px 26px", fontWeight: 400, transition: "all 0.35s var(--ease)",
              whiteSpace: "nowrap", display: "inline-block",
            }}>
              Solicitar Avaliacao
            </Link>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          style={{
            display: "none", background: "none", border: "none",
            flexDirection: "column", gap: 5, padding: 8, cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 1, background: "var(--taupe)",
              transition: "all 0.3s",
              transform: menuOpen ? i === 0 ? "translateY(6px) rotate(45deg)" : i === 2 ? "translateY(-6px) rotate(-45deg)" : "none" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      <div style={{
        position: "fixed", inset: 0, background: "var(--deep)", zIndex: 99,
        display: menuOpen ? "flex" : "none",
        flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 44,
      }}>
        {[...navLinks, { label: "Solicitar Avaliacao", href: "/#contato" }].map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "2.2rem", fontWeight: 300, color: "var(--ivory)",
            letterSpacing: "0.03em", transition: "color 0.3s",
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
'@
[System.IO.File]::WriteAllText("$PWD\components\layout\Nav.tsx", $nav, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK Nav.tsx" -ForegroundColor Green

# ─── components/layout/Footer.tsx ───
$footer = @'
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
'@
[System.IO.File]::WriteAllText("$PWD\components\layout\Footer.tsx", $footer, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK Footer.tsx" -ForegroundColor Green

# ─── components/home/Hero.tsx ───
$hero = @'
"use client"

import { motion } from "framer-motion"
import { ButtonPrimary, ButtonGhost } from "@/components/ui/Buttons"

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  return (
    <section className="hero-wrap" style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      <div className="hero-left" style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 64px 100px", position: "relative", zIndex: 2,
      }}>
        <motion.div {...up(0.3)} style={{
          fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 400, marginBottom: 32,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block", flexShrink: 0 }} />
          Psicologia Juridica · Alta Performance · Psicologia Forense
        </motion.div>

        <motion.h1 {...up(0.5)} style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2.5rem, 4.8vw, 4.6rem)",
          fontWeight: 300, lineHeight: 1.07, letterSpacing: "-0.015em",
          color: "var(--warm)", marginBottom: 30,
        }}>
          Onde pressao,{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)", fontWeight: 300 }}>decisao</em>{" "}
          e psicologia convergem.
        </motion.h1>

        <motion.p {...up(0.7)} style={{
          fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, maxWidth: 410, marginBottom: 50,
        }}>
          Atendimento para quem opera sob responsabilidade real. Suporte tecnico especializado
          para escritorios e advogados que enfrentam casos onde Direito e Psicologia se cruzam.
        </motion.p>

        <motion.div {...up(0.9)} style={{ display: "flex", alignItems: "center", gap: 34, flexWrap: "wrap" }}>
          <ButtonPrimary href="#contato">Solicitar Avaliacao</ButtonPrimary>
          <ButtonGhost href="/juridico">Para Advogados</ButtonGhost>
        </motion.div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }} className="hero-right">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(/hero.jpeg)",
            backgroundSize: "cover", backgroundPosition: "center top",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--ink) 0%, rgba(9,8,10,0.25) 35%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,8,10,0.55) 0%, transparent 40%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "absolute", bottom: 56, right: 44, textAlign: "right", zIndex: 3 }}
        >
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(176,168,184,0.45)", lineHeight: 2.2 }}>
            Pos-graduando em Psicologia Forense e Juridica<br />
            Pos-graduando em TCC de Alta Performance<br />
            <strong style={{ color: "var(--gdim)", fontWeight: 400, fontSize: "0.52rem" }}>CRP 08/48529</strong>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 9, zIndex: 3,
        }}
      >
        <span style={{ fontSize: "0.45rem", letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <div style={{ width: 1, height: 34, background: "linear-gradient(to bottom, var(--gdim), transparent)", animation: "scrollPulse 2.4s ease-in-out infinite" }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-wrap { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .hero-left { padding: 120px 28px 80px !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Hero.tsx", $hero, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK Hero.tsx" -ForegroundColor Green

# ─── components/home/Sobre.tsx ───
$sobre = @'
import RevealWrapper from "@/components/ui/RevealWrapper"
import SectionLabel from "@/components/ui/SectionLabel"

const credenciais = [
  "Psicologo clinico com foco em TCC e hipnose",
  "Pos-graduando em Psicologia Forense e Juridica",
  "Pos-graduando em TCC de Alta Performance",
  "MBA em Gestao de Pessoas",
  "Atuacao em contextos clinicos, juridicos e corporativos",
]

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: "var(--deep)", padding: "128px 64px" }}>
      <div className="sobre-grid" style={{
        display: "grid", gridTemplateColumns: "420px 1fr",
        gap: 96, maxWidth: 1200, margin: "0 auto", alignItems: "start",
      }}>
        <RevealWrapper>
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "2/3" }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "url(/sobre.jpeg)",
                backgroundSize: "cover", backgroundPosition: "center top",
              }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,14,16,0.7) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 300, color: "var(--warm)", letterSpacing: "0.02em" }}>
                  Alex Cristoffer Zilotti
                </p>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginTop: 4 }}>
                  CRP 08/48529
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
              Uma pratica construida com{" "}
              <em style={{ fontStyle: "italic", color: "var(--glt)" }}>intencao e rigor</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 24 }}>
              Alex Cristoffer Zilotti e psicologo com formacao em Psicologia Juridica e Forense e
              especializacao em TCC de Alta Performance. Sua pratica e construida sobre a interseccao
              entre dois mundos raramente tratados com igual profundidade: o mundo clinico e o mundo
              juridico e corporativo, onde as consequencias das decisoes psicologicas sao concretas,
              mensuraveis e definitivas.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em Gestao de Pessoas e formacao em hipnose clinica, Alex opera com precisao
              tecnica e sensibilidade clinica. Seu metodo nao e generico: cada processo terapeutico,
              cada parecer tecnico e cada consultoria juridico-psicologica e construido a partir da
              demanda real do cliente — nao de protocolos padronizados.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresarios, executivos, artistas e profissionais que vivem sob alta pressao
              — e com advogados e escritorios que precisam de suporte tecnico especializado em casos
              onde Direito e Psicologia se cruzam. Discreto por natureza, rigoroso por formacao,
              profundo por escolha.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.5}>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: "0.52rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Formacao e Credenciais
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {credenciais.map((c) => (
                  <li key={c} style={{ fontSize: "0.82rem", color: "var(--taupe)", display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gdim)", flexShrink: 0, marginTop: 7 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.6}>
            <div style={{ display: "inline-flex", flexDirection: "column", border: "1px solid rgba(154,128,96,0.2)", padding: "18px 28px" }}>
              <span style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)" }}>
                Registro Profissional
              </span>
              <strong style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--glt)", marginTop: 4 }}>
                CRP 08/48529
              </strong>
            </div>
          </RevealWrapper>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sobre-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Sobre.tsx", $sobre, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK Sobre.tsx" -ForegroundColor Green

# ─── components/juridico/JuridicoComponents.tsx — strip com foto juridico.jpeg ───
$jur_strip = '            backgroundImage: "url(/juridico.jpeg)",'
$jur_content = [System.IO.File]::ReadAllText("$PWD\components\juridico\JuridicoComponents.tsx")
$jur_content = $jur_content -replace 'backgroundImage: "url\(/juridico\.(jpg|jpeg)\)"', 'backgroundImage: "url(/juridico.jpeg)"'
[System.IO.File]::WriteAllText("$PWD\components\juridico\JuridicoComponents.tsx", $jur_content, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK JuridicoComponents.tsx" -ForegroundColor Green

# ─── components/clinica/ClinicaComponents.tsx — fotos clinica.jpeg e workshop.jpeg ───
$cli_content = [System.IO.File]::ReadAllText("$PWD\components\clinica\ClinicaComponents.tsx")
$cli_content = $cli_content -replace 'backgroundImage: "url\(/clinica\.(jpg|jpeg)\)"', 'backgroundImage: "url(/clinica.jpeg)"'
$cli_content = $cli_content -replace 'backgroundImage: "url\(/workshop\.(jpg|jpeg)\)"', 'backgroundImage: "url(/workshop.jpeg)"'
[System.IO.File]::WriteAllText("$PWD\components\clinica\ClinicaComponents.tsx", $cli_content, [System.Text.UTF8Encoding]::new($false))
Write-Host "OK ClinicaComponents.tsx" -ForegroundColor Green

# ─── Git ───
Write-Host "`nFazendo commit..." -ForegroundColor Cyan
git add -A
git commit -m "fix: corrige encoding UTF-8, fotos e footer"
git push
Write-Host "`nPronto! Aguarde o deploy na Vercel." -ForegroundColor Green
'@

[System.IO.File]::WriteAllText("$PWD\corrigir2.ps1", $content, [System.Text.UTF8Encoding]::new($false))
