#!/usr/bin/env pwsh
# ============================================================
# ALEX ZILOTTI — UPGRADE PREMIUM COMPLETO
# Execute na raiz do projeto: .\upgrade-premium.ps1
# ============================================================

Write-Host "Iniciando upgrade premium..." -ForegroundColor Cyan

$utf8 = [System.Text.UTF8Encoding]::new($false)

# ============================================================
# 1. app/layout.tsx — charset + metadataBase corrigidos
# ============================================================
$layout = @'
import type { Metadata } from "next"
import { cormorant, jost } from "./fonts"
import "./globals.css"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import Cursor from "@/components/layout/Cursor"
import WhatsAppButton from "@/components/layout/WhatsAppButton"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexzilotti.psc.br"),
  title: "Alex Zilotti | Psicologo Juridico & Alta Performance — CRP 08/48529",
  description: "Alex Zilotti — Psicologo Juridico, Forense e de Alta Performance. Atendimento especializado para empresarios, executivos, artistas e suporte tecnico pericial para advogados. Curitiba e online.",
  keywords: "psicologo juridico, psicologo forense, psicologo alta performance, assistente perito psicologo, analise laudo psicologico, TCC alta performance, hipnose clinica, psicologia forense Curitiba",
  openGraph: {
    title: "Alex Zilotti | Psicologo Juridico & Alta Performance",
    description: "Psicologia que opera onde a pressao e real, as decisoes sao definitivas e a discricao e inegociavel.",
    type: "website",
    images: ["/hero.jpeg"],
  },
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head><meta charSet="utf-8" /></head>
      <body>
        <a href="#main-content" className="skip-link">Ir para o conteudo</a>
        <Cursor />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\app\layout.tsx", $layout, $utf8)
Write-Host "OK layout.tsx" -ForegroundColor Green

# ============================================================
# 2. app/globals.css — design system completo
# ============================================================
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
  --gg: rgba(196,169,122,0.11);
  --ease: cubic-bezier(0.16,1,0.3,1);
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
  transition: top 0.3s;
}
.skip-link:focus { top: 1rem; }

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes up {
  to { opacity: 1; transform: translateY(0); }
}
'@
[System.IO.File]::WriteAllText("$PWD\app\globals.css", $globals, $utf8)
Write-Host "OK globals.css" -ForegroundColor Green

# ============================================================
# 3. components/layout/Nav.tsx
# ============================================================
$nav = @'
"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = [
    { label: "Clinica", href: "/clinica" },
    { label: "Para Advogados", href: "/juridico" },
    { label: "Workshop 3 Dias", href: "/workshop" },
    { label: "Sobre", href: "/#sobre" },
  ]

  return (
    <>
      <nav aria-label="Navegacao" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: scrolled ? "17px 64px" : "28px 64px",
        background: scrolled ? "rgba(9,8,10,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(154,128,96,0.09)" : "1px solid transparent",
        transition: "background 0.5s, padding 0.4s, border-color 0.5s",
      }}>
        <Link href="/">
          <div style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.06em", color: "var(--ivory)", lineHeight: 1.2,
          }}>
            Alex Cristoffer Zilotti
            <small style={{
              display: "block", fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.48rem", letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--gold)", fontWeight: 400, marginTop: 3,
            }}>Psicologo · CRP 08/48529</small>
          </div>
        </Link>

        <ul className="nav-d" style={{ display: "flex", gap: 38, listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="nav-lk" style={{
                fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--taupe)", fontWeight: 400, transition: "color 0.3s",
              }}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href="/#contato" className="nav-cta" style={{
              fontSize: "0.57rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--glt)", border: "1px solid rgba(196,169,122,0.28)",
              padding: "11px 26px", fontWeight: 400, transition: "all 0.35s var(--ease)",
              whiteSpace: "nowrap", display: "inline-block",
            }}>Solicitar Avaliacao</Link>
          </li>
        </ul>

        <button className="nav-m" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}
          style={{ display: "none", background: "none", border: "none", flexDirection: "column", gap: 5, padding: 8, cursor: "pointer" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 1, background: "var(--taupe)", transition: "all 0.3s",
              transform: menuOpen ? i===0 ? "translateY(6px) rotate(45deg)" : i===2 ? "translateY(-6px) rotate(-45deg)" : "none" : "none",
              opacity: menuOpen && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--deep)", zIndex: 99,
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 44,
        }}>
          {[...links, { label: "Solicitar Avaliacao", href: "/#contato" }].map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "2.2rem", fontWeight: 300, color: "var(--ivory)", letterSpacing: "0.03em",
            }}>{label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-lk:hover { color: var(--ivory) !important; }
        .nav-cta:hover { background: var(--gg) !important; border-color: var(--glt) !important; }
        @media (max-width: 768px) {
          .nav-d { display: none !important; }
          .nav-m { display: flex !important; }
          nav { padding: 20px 28px !important; }
        }
      `}</style>
    </>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\layout\Nav.tsx", $nav, $utf8)
Write-Host "OK Nav.tsx" -ForegroundColor Green

# ============================================================
# 4. components/layout/Footer.tsx — email correto + Workshop
# ============================================================
$footer = @'
import Link from "next/link"

const links = [
  { label: "Clinica", href: "/clinica" },
  { label: "Para Advogados", href: "/juridico" },
  { label: "Workshop 3 Dias", href: "/workshop" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
]

export default function Footer() {
  return (
    <footer style={{ background: "var(--deep)", borderTop: "1px solid rgba(154,128,96,0.08)" }}>
      <div className="ft-g" style={{
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 64,
        maxWidth: 1200, margin: "0 auto", padding: "72px 64px 56px",
        borderBottom: "1px solid rgba(154,128,96,0.08)",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.06em", color: "var(--ivory)", marginBottom: 16, lineHeight: 1.2,
          }}>
            Alex Zilotti
            <small style={{
              display: "block", fontFamily: "var(--font-jost), system-ui, sans-serif",
              fontSize: "0.48rem", letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--gold)", fontWeight: 400, marginTop: 3,
            }}>Psicologo · CRP 08/48529</small>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--stone)", lineHeight: 1.9, maxWidth: 280 }}>
            Psicologia Juridica, Forense e de Alta Performance. Atendimento presencial e online em todo o Brasil.
          </p>
        </div>

        <nav aria-label="Rodape" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Navegacao</p>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} className="ft-lk" style={{ fontSize: "0.78rem", color: "var(--stone)", transition: "color 0.3s" }}>{label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Informacoes</p>
          <p style={{ fontSize: "0.78rem", color: "var(--stone)" }}>CRP 08/48529</p>
          <p style={{ fontSize: "0.78rem", color: "var(--stone)" }}>Curitiba · Parana</p>
          <p style={{ fontSize: "0.78rem", color: "var(--stone)" }}>Atendimento online em todo Brasil</p>
          <a href="mailto:contato@alexzilotti.psc.br" className="ft-lk" style={{ fontSize: "0.78rem", color: "var(--gold)", marginTop: 8, transition: "color 0.3s" }}>
            contato@alexzilotti.psc.br
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "28px 64px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em" }}>2025 Alex Zilotti · Todos os direitos reservados</p>
        <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em" }}>Psicologo Juridico · Psicologo Forense · Alta Performance</p>
      </div>

      <style>{`
        .ft-lk:hover { color: var(--ivory) !important; }
        @media (max-width: 768px) {
          .ft-g { grid-template-columns: 1fr !important; gap: 40px !important; padding: 48px 28px !important; }
          footer > div:last-child { padding: 20px 28px !important; }
        }
      `}</style>
    </footer>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\layout\Footer.tsx", $footer, $utf8)
Write-Host "OK Footer.tsx (email: contato@alexzilotti.psc.br)" -ForegroundColor Green

# ============================================================
# 5. components/home/Hero.tsx — fiel ao HTML premium
# ============================================================
$hero = @'
"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16,1,0.3,1] as const },
})

export default function Hero() {
  return (
    <section className="hero-w" style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* LEFT */}
      <div className="hero-l" style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 64px 100px", position: "relative", zIndex: 2,
      }}>
        <motion.div {...up(0.3)} style={{
          fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 400, marginBottom: 32,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block", flexShrink: 0 }}/>
          Psicologia Juridica · Alta Performance · Psicologia Forense
        </motion.div>

        <motion.h1 {...up(0.5)} style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2.5rem, 4.8vw, 4.6rem)",
          fontWeight: 300, lineHeight: 1.07, letterSpacing: "-0.015em", color: "var(--warm)", marginBottom: 30,
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
          <Link href="#contato" style={{
            display: "inline-block", fontSize: "0.57rem", letterSpacing: "0.24em",
            textTransform: "uppercase", color: "var(--ink)", background: "var(--glt)",
            padding: "15px 38px", fontWeight: 500, transition: "all 0.35s var(--ease)",
          }} className="btn-p">Solicitar Avaliacao</Link>
          <Link href="/juridico" className="btn-g" style={{
            display: "inline-flex", alignItems: "center", gap: 13,
            fontSize: "0.57rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--taupe)", fontWeight: 400, transition: "color 0.3s",
          }}>
            Para Advogados
            <span className="btn-g-line" style={{ display: "block", width: 26, height: 1, background: "currentColor", transition: "width 0.4s var(--ease)" }}/>
          </Link>
        </motion.div>
      </div>

      {/* RIGHT — foto real */}
      <div style={{ position: "relative", overflow: "hidden" }} className="hero-r">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16,1,0.3,1] }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(/hero.jpeg)",
            backgroundSize: "cover", backgroundPosition: "55% top",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--ink) 0%, rgba(9,8,10,0.25) 35%, transparent 65%)" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,8,10,0.55) 0%, transparent 40%)" }}/>

        {/* Badge CRP */}
        <motion.div {...up(1.3)} style={{ position: "absolute", bottom: 56, right: 44, textAlign: "right", zIndex: 3 }}>
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(176,168,184,0.45)", lineHeight: 2.2 }}>
            Pos-graduando em Psicologia Forense e Juridica<br/>
            Pos-graduando em TCC de Alta Performance<br/>
            <strong style={{ color: "var(--gdim)", fontWeight: 400, fontSize: "0.52rem" }}>CRP 08/48529</strong>
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 9, zIndex: 3,
        }}
      >
        <span style={{ fontSize: "0.45rem", letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <div style={{ width: 1, height: 34, background: "linear-gradient(to bottom, var(--gdim), transparent)", animation: "scrollPulse 2.4s ease-in-out infinite" }}/>
      </motion.div>

      <style>{`
        .btn-p:hover { background: var(--ivory) !important; transform: translateY(-2px) !important; }
        .btn-g:hover { color: var(--ivory) !important; }
        .btn-g:hover .btn-g-line { width: 48px !important; }
        @media (max-width: 768px) {
          .hero-w { grid-template-columns: 1fr !important; }
          .hero-r { display: none !important; }
          .hero-l { padding: 120px 28px 80px !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Hero.tsx", $hero, $utf8)
Write-Host "OK Hero.tsx (foto hero.jpeg + badge CRP)" -ForegroundColor Green

# ============================================================
# 6. components/home/Statement.tsx — manifesto premium
# ============================================================
$statement = @'
import RevealWrapper from "@/components/ui/RevealWrapper"

export default function Statement() {
  return (
    <section style={{
      background: "var(--deep)", padding: "108px 64px", textAlign: "center", position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 1, height: 54, background: "linear-gradient(to bottom, transparent, var(--gdim))",
      }}/>
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%) rotate(180deg)",
        width: 1, height: 54, background: "linear-gradient(to bottom, transparent, var(--gdim))",
      }}/>
      <RevealWrapper>
        <p style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.35rem, 2.8vw, 2.5rem)",
          fontWeight: 300, lineHeight: 1.56, color: "var(--ivory)",
          maxWidth: 780, margin: "0 auto", letterSpacing: "0.01em",
        }}>
          Ha decisoes que nao comportam erros. Ha processos que nao admitem fragilidades. Ha vidas que{" "}
          <strong style={{ fontWeight: 400, color: "var(--warm)" }}>exigem clareza profunda</strong>
          {" "}— nao conforto superficial.
        </p>
      </RevealWrapper>
    </section>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Statement.tsx", $statement, $utf8)
Write-Host "OK Statement.tsx" -ForegroundColor Green

# ============================================================
# 7. components/home/Sobre.tsx — foto sobre.jpeg + sticky
# ============================================================
$sobre = @'
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
                  Psicologo · CRP 08/48529
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
              especializacao em TCC de Alta Performance — uma interseccao deliberada entre dois mundos
              que raramente se encontram com igual profundidade.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em Gestao de Pessoas e formacao em hipnose clinica, Alex opera com precisao
              tecnica e sensibilidade clinica. Cada processo terapeutico, cada parecer tecnico e cada
              consultoria juridico-psicologica e construido a partir da demanda real do cliente —
              nao de protocolos padronizados.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresarios, executivos, artistas e profissionais que vivem sob alta pressao
              — e com advogados e escritorios que precisam de suporte tecnico especializado em casos
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
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Sobre.tsx", $sobre, $utf8)
Write-Host "OK Sobre.tsx (foto sobre.jpeg + sticky + zoom hover)" -ForegroundColor Green

# ============================================================
# 8. components/home/Contato.tsx — email correto
# ============================================================
$contato = @'
"use client"
import { useState } from "react"
import type { ReactNode } from "react"
import RevealWrapper from "@/components/ui/RevealWrapper"
import SectionLabel from "@/components/ui/SectionLabel"

function Opt({ href, icon, title, sub, ext }: { href: string; icon: ReactNode; title: string; sub: string; ext?: boolean }) {
  const [h, setH] = useState(false)
  return (
    <a href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "48px 32px",
        background: h ? "var(--charcoal)" : "var(--ink)", transition: "background 0.4s var(--ease)",
      }}>
      <div style={{ color: h ? "var(--glt)" : "var(--gold)", transition: "color 0.3s" }}>{icon}</div>
      <h5 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", fontWeight: 300, color: "var(--warm)" }}>{title}</h5>
      <p style={{ fontSize: "0.75rem", color: "var(--stone)", textAlign: "center" }}>{sub}</p>
    </a>
  )
}

export default function Contato() {
  return (
    <section id="contato" style={{ background: "var(--ink)", padding: "128px 64px", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 1, height: 54, background: "linear-gradient(to bottom, transparent, var(--gdim))",
      }}/>
      <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
        <RevealWrapper><SectionLabel center>Contato</SectionLabel></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
            fontWeight: 300, lineHeight: 1.14, color: "var(--warm)", letterSpacing: "-0.01em", marginBottom: 24,
          }}>
            O proximo passo comeca com{" "}
            <em style={{ fontStyle: "italic", color: "var(--glt)" }}>uma conversa</em>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p style={{ fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.9, marginBottom: 56 }}>
            Sem formularios impessoais — apenas um contato direto, discreto e sem compromisso.
            Atendimento por agendamento. Confidencialidade garantida.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.3}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(154,128,96,0.07)", marginBottom: 40 }}>
            <Opt href="https://wa.me/554199176772" ext title="WhatsApp" sub="Resposta rapida e direta"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
            />
            <Opt href="mailto:contato@alexzilotti.psc.br" title="E-mail" sub="Para demandas mais detalhadas"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
            />
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.4}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            Discricao total · Sigilo garantido · Atendimento premium
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\components\home\Contato.tsx", $contato, $utf8)
Write-Host "OK Contato.tsx (email: contato@alexzilotti.psc.br)" -ForegroundColor Green

# ============================================================
# 9. components/clinica/ClinicaComponents.tsx — foto clinica.jpeg
# ============================================================
$cli = [System.IO.File]::ReadAllText("$PWD\components\clinica\ClinicaComponents.tsx")
$cli = $cli -replace 'url\(/clinica\.(jpg|jpeg)\)', 'url(/clinica.jpeg)'
$cli = $cli -replace 'url\(/workshop\.(jpg|jpeg)\)', 'url(/workshop.jpeg)'
[System.IO.File]::WriteAllText("$PWD\components\clinica\ClinicaComponents.tsx", $cli, $utf8)
Write-Host "OK ClinicaComponents.tsx (fotos .jpeg)" -ForegroundColor Green

# ============================================================
# 10. components/juridico/JuridicoComponents.tsx — foto juridico.jpeg
# ============================================================
$jur = [System.IO.File]::ReadAllText("$PWD\components\juridico\JuridicoComponents.tsx")
$jur = $jur -replace 'url\(/juridico\.(jpg|jpeg)\)', 'url(/juridico.jpeg)'
[System.IO.File]::WriteAllText("$PWD\components\juridico\JuridicoComponents.tsx", $jur, $utf8)
Write-Host "OK JuridicoComponents.tsx (foto .jpeg)" -ForegroundColor Green

# ============================================================
# 11. app/page.tsx — imports corretos
# ============================================================
$home = @'
import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import Statement from "@/components/home/Statement"
import Services from "@/components/home/Services"
import Publico from "@/components/home/Publico"
import Sobre from "@/components/home/Sobre"
import Processo from "@/components/home/Processo"
import Contato from "@/components/home/Contato"

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicologo Juridico & Alta Performance — CRP 08/48529",
  description: "Atendimento para quem opera sob responsabilidade real. Psicologia Juridica, Forense e de Alta Performance. Curitiba e atendimento online.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Publico />
      <Sobre />
      <Processo />
      <Contato />
    </>
  )
}
'@
[System.IO.File]::WriteAllText("$PWD\app\page.tsx", $home, $utf8)
Write-Host "OK app/page.tsx" -ForegroundColor Green

# ============================================================
# 12. Git commit e push
# ============================================================
Write-Host "`nFazendo commit e push..." -ForegroundColor Cyan
git add -A
git commit -m "upgrade: premium design, encoding UTF-8, fotos, email correto"
git push
Write-Host "`nSITE ATUALIZADO! Aguarde o deploy na Vercel (2-3 min)." -ForegroundColor Green
Write-Host "Acesse: https://www.alexzilotti.psc.br" -ForegroundColor Cyan
