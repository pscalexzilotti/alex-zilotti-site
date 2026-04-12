# Script de correção automática — Alex Zilotti Site
# Execute na raiz do projeto: .\corrigir.ps1

Write-Host "Iniciando correções..." -ForegroundColor Cyan

# ─────────────────────────────────────────
# 1. app/page.tsx
# ─────────────────────────────────────────
$homePage = @'
import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Publico from '@/components/home/Publico'
import Sobre from '@/components/home/Sobre'
import Processo from '@/components/home/Processo'
import Contato from '@/components/home/Contato'

export const metadata: Metadata = {
  title: 'Alex Zilotti | Psicólogo Jurídico & Alta Performance — CRP 08/48529',
  description: 'Atendimento para quem opera sob responsabilidade real. Psicologia Jurídica, Forense e de Alta Performance. Curitiba e atendimento online.',
  openGraph: {
    title: 'Alex Zilotti | Psicólogo Jurídico & Alta Performance',
    description: 'Psicologia que opera onde a pressão é real, as decisões são definitivas e a discrição é inegociável.',
    images: ['/hero.jpg'],
  },
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
Set-Content -Path "app\page.tsx" -Value $homePage -Encoding UTF8
Write-Host "✓ app/page.tsx corrigido" -ForegroundColor Green

# ─────────────────────────────────────────
# 2. app/clinica/page.tsx
# ─────────────────────────────────────────
$clinicaPage = @'
import type { Metadata } from 'next'
import { HeroClinica, EspecialidadesClinica, AbordagemClinica } from '@/components/clinica/ClinicaComponents'

export const metadata: Metadata = {
  title: 'Clínica Cognitiva de Alta Performance | Alex Zilotti',
  description: 'TCC de Alta Performance e Hipnose Clínica. Atendimento especializado em ansiedade, depressão, TDAH, autismo, terapia de casal e muito mais.',
  openGraph: {
    title: 'Clínica Cognitiva de Alta Performance | Alex Zilotti',
    description: 'Psicoterapia especializada para quem não pode se dar ao luxo de ficar paralisado.',
    images: ['/clinica.jpg'],
  },
}

export default function ClinicaPage() {
  return (
    <>
      <HeroClinica />
      <EspecialidadesClinica />
      <AbordagemClinica />
    </>
  )
}
'@
Set-Content -Path "app\clinica\page.tsx" -Value $clinicaPage -Encoding UTF8
Write-Host "✓ app/clinica/page.tsx corrigido" -ForegroundColor Green

# ─────────────────────────────────────────
# 3. app/workshop/ (criar pasta + page.tsx)
# ─────────────────────────────────────────
New-Item -ItemType Directory -Force -Path "app\workshop" | Out-Null
$workshopPage = @'
import type { Metadata } from 'next'
import { Imersao } from '@/components/clinica/ClinicaComponents'

export const metadata: Metadata = {
  title: 'Workshop de 3 Dias — Rotas de Alta Performance Emocional | Alex Zilotti',
  description: 'Experiência clínica exclusiva de 3 dias combinando TCC de Alta Performance e Hipnose Clínica.',
  openGraph: {
    title: 'Workshop de 3 Dias | Alex Zilotti',
    description: 'Experiência clínica intensiva de 3 dias. TCC de Alta Performance + Hipnose Clínica.',
    images: ['/workshop.jpg'],
  },
}

export default function WorkshopPage() {
  return <Imersao />
}
'@
Set-Content -Path "app\workshop\page.tsx" -Value $workshopPage -Encoding UTF8
Write-Host "✓ app/workshop/page.tsx criado" -ForegroundColor Green

# ─────────────────────────────────────────
# 4. components/layout/Nav.tsx
# ─────────────────────────────────────────
$nav = @'
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
    { label: 'Clínica', href: '/clinica' },
    { label: 'Para Advogados', href: '/juridico' },
    { label: 'Workshop 3 Dias', href: '/workshop' },
    { label: 'Sobre', href: '/#sobre' },
  ]

  return (
    <>
      <nav
        aria-label="Navegação principal"
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
        <Link href="/" aria-label="Página inicial">
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
              Psicólogo · CRP 08/48529
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
              Solicitar Avaliação
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
        {[...navLinks, { label: 'Solicitar Avaliação', href: '/#contato' }].map(({ label, href }) => (
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
'@
Set-Content -Path "components\layout\Nav.tsx" -Value $nav -Encoding UTF8
Write-Host "✓ components/layout/Nav.tsx corrigido" -ForegroundColor Green

# ─────────────────────────────────────────
# 5. components/home/Hero.tsx — foto real
# ─────────────────────────────────────────
$hero = @'
'use client'

import { motion } from 'framer-motion'
import { ButtonPrimary, ButtonGhost } from '@/components/ui/Buttons'

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  return (
    <section className="hero-wrap" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 64px 100px', position: 'relative', zIndex: 2 }}>
        <motion.div {...up(0.3)} style={{ fontSize: '0.52rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 22, height: 1, background: 'var(--gdim)', display: 'inline-block', flexShrink: 0 }} />
          Psicologia Jurídica · Alta Performance · Psicologia Forense
        </motion.div>
        <motion.h1 {...up(0.5)} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4.8vw, 4.6rem)', fontWeight: 300, lineHeight: 1.07, letterSpacing: '-0.015em', color: 'var(--warm)', marginBottom: 30 }}>
          Onde pressão,{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)', fontWeight: 300 }}>decisão</em>{' '}e psicologia convergem.
        </motion.h1>
        <motion.p {...up(0.7)} style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.92, maxWidth: 410, marginBottom: 50 }}>
          Atendimento para quem opera sob responsabilidade real. Suporte técnico especializado para escritórios e advogados que enfrentam casos onde Direito e Psicologia se cruzam.
        </motion.p>
        <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 34, flexWrap: 'wrap' }}>
          <ButtonPrimary href="#contato">Solicitar Avaliação</ButtonPrimary>
          <ButtonGhost href="/juridico">Para Advogados</ButtonGhost>
        </motion.div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-right">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--ink) 0%, rgba(9,8,10,0.25) 35%, transparent 65%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,8,10,0.55) 0%, transparent 40%)' }} />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', bottom: 56, right: 44, textAlign: 'right', zIndex: 3 }}>
          <p style={{ fontSize: '0.52rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(176,168,184,0.45)', lineHeight: 2.2 }}>
            Pós-graduando em Psicologia Forense e Jurídica<br />
            Pós-graduando em TCC de Alta Performance<br />
            <strong style={{ color: 'var(--gdim)', fontWeight: 400, fontSize: '0.52rem' }}>CRP 08/48529</strong>
          </p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 1 }} style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, zIndex: 3 }}>
        <span style={{ fontSize: '0.45rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
        <div style={{ width: 1, height: 34, background: 'linear-gradient(to bottom, var(--gdim), transparent)', animation: 'scrollPulse 2.4s ease-in-out infinite' }} />
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
Set-Content -Path "components\home\Hero.tsx" -Value $hero -Encoding UTF8
Write-Host "✓ components/home/Hero.tsx corrigido (foto real)" -ForegroundColor Green

# ─────────────────────────────────────────
# 6. components/home/Sobre.tsx — foto real
# ─────────────────────────────────────────
$sobre = @'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const credenciais = [
  'Psicólogo clínico com foco em TCC e hipnose',
  'Pós-graduando em Psicologia Forense e Jurídica',
  'Pós-graduando em TCC de Alta Performance',
  'MBA em Gestão de Pessoas',
  'Atuação em contextos clínicos, jurídicos e corporativos',
]

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--deep)', padding: '128px 64px' }}>
      <div className="sobre-grid" style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 96, maxWidth: 1200, margin: '0 auto', alignItems: 'start' }}>
        <RevealWrapper>
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '2/3' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/sobre.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,14,16,0.7) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.15rem', fontWeight: 300, color: 'var(--warm)', letterSpacing: '0.02em' }}>Alex Cristoffer Zilotti</p>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 4 }}>CRP 08/48529</p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper><SectionLabel>Sobre</SectionLabel></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 40 }}>
              Uma prática construída com{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>intenção e rigor</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Alex Cristoffer Zilotti é psicólogo com formação em Psicologia Jurídica e Forense e especialização em TCC de Alta Performance. Sua prática é construída sobre a intersecção entre dois mundos raramente tratados com igual profundidade: o mundo clínico — onde o ser humano se reconhece, se reorganiza e avança — e o mundo jurídico e corporativo, onde as consequências das decisões psicológicas são concretas, mensuráveis e definitivas.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em Gestão de Pessoas e formação em hipnose clínica, Alex opera com precisão técnica e sensibilidade clínica. Seu método não é genérico: cada processo terapêutico, cada parecer técnico e cada consultoria jurídico-psicológica é construído a partir da demanda real do cliente — não de protocolos padronizados.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresários, executivos, artistas e profissionais que vivem sob alta pressão — e com advogados e escritórios que precisam de suporte técnico especializado em casos onde Direito e Psicologia se cruzam. Discreto por natureza, rigoroso por formação, profundo por escolha.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.5}>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Formação e Credenciais</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {credenciais.map((c) => (
                  <li key={c} style={{ fontSize: '0.82rem', color: 'var(--taupe)', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gdim)', flexShrink: 0, marginTop: 7 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.6}>
            <div style={{ display: 'inline-flex', flexDirection: 'column', border: '1px solid rgba(154,128,96,0.2)', padding: '18px 28px' }}>
              <span style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone)' }}>Registro Profissional</span>
              <strong style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--glt)', marginTop: 4 }}>CRP 08/48529</strong>
            </div>
          </RevealWrapper>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .sobre-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}
'@
Set-Content -Path "components\home\Sobre.tsx" -Value $sobre -Encoding UTF8
Write-Host "✓ components/home/Sobre.tsx corrigido (foto real)" -ForegroundColor Green

# ─────────────────────────────────────────
# 7. components/clinica/ClinicaComponents.tsx — fotos reais
# ─────────────────────────────────────────
$clinica = @'
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import { ButtonPrimary } from '@/components/ui/Buttons'

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function HeroClinica() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 64px 100px', background: 'var(--deep)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'linear-gradient(to left, rgba(196,169,122,0.04) 0%, transparent 100%)', pointerEvents: 'none' }} />
      <motion.div {...up(0.3)} style={{ fontSize: '0.52rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ width: 22, height: 1, background: 'var(--gdim)', display: 'inline-block' }} />
        Psicologia Clínica Especializada
      </motion.div>
      <motion.h1 {...up(0.5)} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--warm)', maxWidth: 760, marginBottom: 32 }}>
        Clínica Cognitiva de{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Alta Performance</em>
      </motion.h1>
      <motion.p {...up(0.7)} style={{ fontSize: '0.92rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 540, marginBottom: 56 }}>
        Psicoterapia especializada baseada em TCC de Alta Performance e Hipnose Clínica para quem opera sob pressão constante e precisa de clareza, não de conforto.
      </motion.p>
      <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <ButtonPrimary href="https://wa.me/554199176772" external>Solicitar Avaliação</ButtonPrimary>
        <Link href="/" className="back-link-cli" style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.3s' }}>← Página Inicial</Link>
      </motion.div>
      <style>{`.back-link-cli:hover { color: var(--ivory) !important; }`}</style>
    </section>
  )
}

const especialidades = [
  'Transtorno de Ansiedade','Transtorno Obsessivo Compulsivo (TOC)',
  'Transtorno Depressivo','Transtorno do Espectro do Autismo (TEA)',
  'Terapia de Casal','TCC para Alta Performance',
  'Desenvolvimento Infantil','TCC em Fobias Específicas',
  'Transtorno de Personalidade','Transtorno do Pânico',
  'Transtornos Alimentares','TDAH',
  'Relações Interpessoais e Familiares',
]

function EspCard({ title }: { title: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ padding: '32px 28px', background: hovered ? 'var(--graphite)' : 'var(--charcoal)', borderTop: '1px solid rgba(154,128,96,0.15)', transition: 'background 0.4s var(--ease)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gdim)', flexShrink: 0, marginTop: 7 }} />
        <p style={{ fontSize: '0.82rem', color: hovered ? 'var(--ivory)' : 'var(--taupe)', lineHeight: 1.6, transition: 'color 0.3s' }}>{title}</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: hovered ? '100%' : '0', height: 1, background: 'var(--glt)', transition: 'width 0.6s var(--ease)' }} />
    </div>
  )
}

export function EspecialidadesClinica() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Especialidades</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 16 }}>
          Áreas de <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>atendimento clínico</em>
        </h2>
      </RevealWrapper>
      <RevealWrapper delay={0.15}>
        <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 600, marginBottom: 64 }}>
          A Terapia Cognitivo-Comportamental é reconhecida cientificamente como uma das abordagens mais eficazes para o tratamento de uma ampla gama de condições. Atendimento especializado para profissionais de alta performance e para quem busca mudanças reais e mensuráveis.
        </p>
      </RevealWrapper>
      <div className="esp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: 'rgba(154,128,96,0.07)' }}>
        {especialidades.map((e, i) => (<RevealWrapper key={e} delay={i * 0.04}><EspCard title={e} /></RevealWrapper>))}
      </div>
      <style>{`
        @media (max-width: 1024px) { .esp-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .esp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .esp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function ImCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="im-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ padding: '32px 36px', background: hovered ? 'var(--graphite)' : 'var(--charcoal)', transition: 'background 0.4s var(--ease)', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.8rem', fontWeight: 300, color: 'var(--gdim)', lineHeight: 1, flexShrink: 0, opacity: 0.7 }}>{num}</span>
      <div>
        <h4 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.15rem', fontWeight: 300, color: 'var(--warm)', marginBottom: 8 }}>{title}</h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.9 }}>{desc}</p>
      </div>
    </div>
  )
}

export function Imersao() {
  return (
    <section id="workshop" style={{ background: 'var(--charcoal)' }}>
      <div style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/workshop.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,25,27,0.3) 0%, var(--charcoal) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 64 }}>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', fontSize: '0.48rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gdim)', border: '1px solid rgba(154,128,96,0.22)', padding: '7px 14px', marginBottom: 20 }}>
            Experiência Clínica Exclusiva · 3 dias
          </div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--warm)', letterSpacing: '-0.015em', maxWidth: 700 }}>
            Workshop <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Rotas de Alta Performance Emocional</em>
          </h2>
        </div>
      </div>
      <div className="workshop-body" style={{ padding: '80px 64px 128px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <RevealWrapper>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2, marginBottom: 24 }}>O Workshop Rotas de Alta Performance Emocional é uma experiência clínica intensiva desenhada para quem não tem tempo a perder com processos lentos, mas que precisa de resultados reais e profundos.</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2 }}>Em três dias de trabalho focado, combinamos TCC de Alta Performance com Hipnose Clínica em um processo personalizado — uma recalibração profunda dos padrões mentais e emocionais que determinam seus resultados.</p>
        </RevealWrapper>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'rgba(154,128,96,0.07)' }}>
          {[
            { num: 'I', title: 'Avaliação Inicial', desc: 'Mapeamento aprofundado do perfil psicológico, padrões de resposta ao estresse e pontos de travamento que limitam a performance.' },
            { num: 'II', title: '3 Dias de Workshop', desc: 'Processo intensivo e personalizado de TCC e Hipnose Clínica em ambiente exclusivo. Trabalho profundo, focado e sem distrações externas.' },
            { num: 'III', title: 'Integração e Rota', desc: 'Consolidação dos avanços, construção da rota de manutenção e definição do plano de continuidade terapêutica se necessário.' },
          ].map((c, i) => (<RevealWrapper key={c.num} delay={i * 0.12}><ImCard {...c} /></RevealWrapper>))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .workshop-body { grid-template-columns: 1fr !important; gap: 48px !important; padding: 60px 28px 80px !important; } }`}</style>
    </section>
  )
}

export function AbordagemClinica() {
  return (
    <section style={{ background: 'var(--ink)', padding: '128px 64px' }}>
      <div className="abordagem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
        <RevealWrapper>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '7/5' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/clinica.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(9,8,10,0.3) 0%, transparent 60%)' }} />
          </div>
        </RevealWrapper>
        <div>
          <RevealWrapper><SectionLabel>Abordagem Clínica</SectionLabel></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 28 }}>
              TCC de Alta Performance e{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Hipnose Clínica</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}><p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>A Terapia Cognitivo-Comportamental de Alta Performance não é TCC convencional. É uma abordagem adaptada para quem opera em contextos de alta demanda, pressão constante e onde o custo do erro é real.</p></RevealWrapper>
          <RevealWrapper delay={0.3}><p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>Integrada à Hipnose Clínica — não como ferramenta de entretenimento, mas como técnica terapêutica validada — o processo atinge camadas de processamento que a terapia verbal isolada raramente alcança.</p></RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 40 }}>O resultado é um processo clínico que respeita a inteligência do cliente, trabalha com profundidade real e produz mudanças mensuráveis — não apenas insights.</p>
            <ButtonPrimary href="https://wa.me/554199176772" external>Solicitar Avaliação</ButtonPrimary>
          </RevealWrapper>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .abordagem-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}
'@
Set-Content -Path "components\clinica\ClinicaComponents.tsx" -Value $clinica -Encoding UTF8
Write-Host "✓ components/clinica/ClinicaComponents.tsx corrigido (fotos reais)" -ForegroundColor Green

# ─────────────────────────────────────────
# 8. components/juridico/JuridicoComponents.tsx — foto real
# ─────────────────────────────────────────
$juridico = @'
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import { ButtonPrimary } from '@/components/ui/Buttons'

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function HeroJuridico() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 64px 100px', background: 'var(--ink)', position: 'relative' }}>
      <motion.div {...up(0.3)} style={{ fontSize: '0.52rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ width: 22, height: 1, background: 'var(--gdim)', display: 'inline-block' }} />
        Para Advogados e Escritórios
      </motion.div>
      <motion.h1 {...up(0.5)} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--warm)', maxWidth: 760, marginBottom: 32 }}>
        Assistente Perito em{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Psicologia Jurídica</em>
      </motion.h1>
      <motion.p {...up(0.7)} style={{ fontSize: '0.92rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 540, marginBottom: 56 }}>
        Quando Direito e Psicologia se cruzam em um processo judicial, a qualidade do suporte técnico psicológico determina a robustez da estratégia.
      </motion.p>
      <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <ButtonPrimary href="https://wa.me/554199176772" external>Falar com o Assistente Perito</ButtonPrimary>
        <Link href="/" className="back-link" style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.3s' }}>← Página Inicial</Link>
      </motion.div>
      <style>{`.back-link:hover { color: var(--ivory) !important; }`}</style>
    </section>
  )
}

export function IntroJuridico() {
  return (
    <section style={{ background: 'var(--charcoal)', padding: '128px 64px' }}>
      <div className="intro-jur-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1200, margin: '0 auto' }}>
        <RevealWrapper>
          <SectionLabel>Sobre o Serviço</SectionLabel>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2, marginTop: 20, marginBottom: 20 }}>O assistente perito psicólogo é o profissional que atua ao lado do advogado para traduzir, criticar e instrumentalizar o conhecimento psicológico dentro da estratégia processual. Não se trata de psicologia aplicada ao cliente — trata-se de psicologia aplicada ao processo.</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2 }}>Laudos periciais têm pressupostos metodológicos que poucos advogados dominam. Quesitos mal formulados perdem oportunidades estratégicas. Perícias conduzidas sem acompanhamento técnico podem comprometer casos que teriam outra solução.</p>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <blockquote style={{ borderLeft: '2px solid var(--gdim)', paddingLeft: 36 }}>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '4rem', color: 'var(--gdim)', opacity: 0.3, lineHeight: 1, marginBottom: -10 }}>"</div>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ivory)', lineHeight: 1.65, marginBottom: 24 }}>Laudos periciais psicológicos contêm pressupostos metodológicos que exigem leitura especializada. O advogado que domina essa interface opera em um nível que seus pares raramente alcançam.</p>
            <cite style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontStyle: 'normal' }}>— Alex Cristoffer Zilotti · Psicólogo Jurídico e Assistente Perito</cite>
          </blockquote>
        </RevealWrapper>
      </div>
      <style>{`@media (max-width: 768px) { .intro-jur-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}

export function CinematicStrip() {
  return (
    <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/juridico.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--ink) 0%, transparent 30%, transparent 70%, var(--ink) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,8,10,0.45)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 64px' }}>
        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', fontWeight: 300, color: 'var(--warm)', textAlign: 'center', letterSpacing: '-0.01em', maxWidth: 700 }}>
          Suporte técnico que <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>qualifica sua atuação</em> onde Direito e Psicologia se cruzam.
        </p>
      </div>
    </div>
  )
}

const servicos = [
  { num: '01', title: 'Análise Crítica de Laudos', desc: 'Leitura especializada de laudos periciais psicológicos, identificando inconsistências metodológicas, lacunas técnicas e pontos de questionamento estratégico.' },
  { num: '02', title: 'Formulação de Quesitos', desc: 'Elaboração técnica de quesitos psicológicos para perícias, com precisão terminológica e orientação estratégica. Quesitos bem formulados abrem espaço onde os mal formulados fecham.' },
  { num: '03', title: 'Pareceres Técnicos', desc: 'Documentos técnicos que fundamentam, complementam ou contestam avaliações psicológicas juntadas ao processo. Redigidos com rigor científico e linguagem juridicamente aplicável.' },
  { num: '04', title: 'Acompanhamento de Perícias', desc: 'Presença técnica durante realização de perícias psicológicas, assegurando que o processo avaliativo siga protocolos adequados.' },
  { num: '05', title: 'Estratégia Processual Psi', desc: 'Consultoria estratégica sobre como a dimensão psicológica do caso pode ser instrumentalizada processualmente com maior eficiência.' },
  { num: '06', title: 'Apoio em Audiências', desc: 'Suporte técnico especializado durante audiências que envolvam depoimentos, avaliações ou argumentos psicológicos.' },
]

function SvcCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ padding: '44px 36px', background: hovered ? 'var(--charcoal)' : 'var(--ink)', transition: 'background 0.4s var(--ease)', position: 'relative', overflow: 'hidden' }}>
      <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--gdim)', display: 'block', marginBottom: 20 }}>{num}</span>
      <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 300, color: 'var(--warm)', marginBottom: 14 }}>{title}</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.9 }}>{desc}</p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: hovered ? '100%' : '0', height: 1, background: 'var(--glt)', transition: 'width 0.6s var(--ease)' }} />
    </div>
  )
}

export function ServicosJuridico() {
  return (
    <section style={{ background: 'var(--ink)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Serviços</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 68 }}>
          O que o <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>assistente perito</em> entrega
        </h2>
      </RevealWrapper>
      <div className="svc-jur-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: 'rgba(154,128,96,0.07)' }}>
        {servicos.map((s, i) => (<RevealWrapper key={s.num} delay={i * 0.07}><SvcCard {...s} /></RevealWrapper>))}
      </div>
      <style>{`
        @media (max-width: 900px) { .svc-jur-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .svc-jur-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

const beneficios = [
  { num: '01', title: 'Vantagem Técnica', desc: 'Dominando a interface psicológica-jurídica, o advogado identifica vulnerabilidades em laudos adversos e constrói argumentos que advogados sem esse suporte simplesmente não veem.' },
  { num: '02', title: 'Eficiência Processual', desc: 'Quesitos bem elaborados, laudos criticamente analisados e perícias acompanhadas resultam em processos mais eficientes, com menos surpresas e maior controle sobre os resultados.' },
  { num: '03', title: 'Credibilidade Técnica', desc: 'Pareceres e documentos tecnicamente fundamentados elevam a qualidade da argumentação jurídica e aumentam a credibilidade do advogado diante do juízo.' },
]

export function BeneficiosJuridico() {
  return (
    <section style={{ background: 'var(--deep)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Benefícios</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 68 }}>
          O que muda quando você tem <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>suporte especializado</em>
        </h2>
      </RevealWrapper>
      <div className="ben-jur-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: 'rgba(154,128,96,0.07)' }}>
        {beneficios.map((b, i) => (
          <RevealWrapper key={b.num} delay={i * 0.12}>
            <div style={{ padding: '56px 48px', borderRight: i < 2 ? '1px solid rgba(154,128,96,0.12)' : 'none', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '5rem', fontWeight: 300, color: 'var(--gdim)', opacity: 0.18, lineHeight: 1, position: 'absolute', top: 32, right: 36, letterSpacing: '-0.04em' }}>{b.num}</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--warm)', marginBottom: 16, position: 'relative', zIndex: 1 }}>{b.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--stone)', lineHeight: 1.9 }}>{b.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
      <RevealWrapper delay={0.4}>
        <div style={{ textAlign: 'center', marginTop: 80 }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 32 }}>Atendimento por agendamento · Confidencialidade garantida</p>
          <ButtonPrimary href="https://wa.me/554199176772" external>Falar com o Assistente Perito</ButtonPrimary>
        </div>
      </RevealWrapper>
      <style>{`
        @media (max-width: 768px) {
          .ben-jur-grid { grid-template-columns: 1fr !important; }
          .ben-jur-grid > div > div { border-right: none !important; border-bottom: 1px solid rgba(154,128,96,0.12); }
        }
      `}</style>
    </section>
  )
}
'@
Set-Content -Path "components\juridico\JuridicoComponents.tsx" -Value $juridico -Encoding UTF8
Write-Host "✓ components/juridico/JuridicoComponents.tsx corrigido (foto real)" -ForegroundColor Green

# ─────────────────────────────────────────
# 9. Git commit e push
# ─────────────────────────────────────────
Write-Host "`nFazendo commit..." -ForegroundColor Cyan
git add -A
git commit -m "fix: corrige home, clinica, workshop, nav e adiciona fotos reais"
git push
Write-Host "`n✅ Tudo pronto! Aguarde o deploy na Vercel." -ForegroundColor Green
