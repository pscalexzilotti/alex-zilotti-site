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
        Para Advogados e EscritÃ³rios
      </motion.div>
      <motion.h1 {...up(0.5)} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--warm)', maxWidth: 760, marginBottom: 32 }}>
        Assistente Perito em{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Psicologia JurÃ­dica</em>
      </motion.h1>
      <motion.p {...up(0.7)} style={{ fontSize: '0.92rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 540, marginBottom: 56 }}>
        Quando Direito e Psicologia se cruzam em um processo judicial, a qualidade do suporte tÃ©cnico psicolÃ³gico determina a robustez da estratÃ©gia.
      </motion.p>
      <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <ButtonPrimary href="https://wa.me/554199176772" external>Falar com o Assistente Perito</ButtonPrimary>
        <Link href="/" className="back-link" style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.3s' }}>â† PÃ¡gina Inicial</Link>
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
          <SectionLabel>Sobre o ServiÃ§o</SectionLabel>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2, marginTop: 20, marginBottom: 20 }}>O assistente perito psicÃ³logo Ã© o profissional que atua ao lado do advogado para traduzir, criticar e instrumentalizar o conhecimento psicolÃ³gico dentro da estratÃ©gia processual. NÃ£o se trata de psicologia aplicada ao cliente â€” trata-se de psicologia aplicada ao processo.</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2 }}>Laudos periciais tÃªm pressupostos metodolÃ³gicos que poucos advogados dominam. Quesitos mal formulados perdem oportunidades estratÃ©gicas. PerÃ­cias conduzidas sem acompanhamento tÃ©cnico podem comprometer casos que teriam outra soluÃ§Ã£o.</p>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <blockquote style={{ borderLeft: '2px solid var(--gdim)', paddingLeft: 36 }}>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '4rem', color: 'var(--gdim)', opacity: 0.3, lineHeight: 1, marginBottom: -10 }}>"</div>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--ivory)', lineHeight: 1.65, marginBottom: 24 }}>Laudos periciais psicolÃ³gicos contÃªm pressupostos metodolÃ³gicos que exigem leitura especializada. O advogado que domina essa interface opera em um nÃ­vel que seus pares raramente alcanÃ§am.</p>
            <cite style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontStyle: 'normal' }}>â€” Alex Cristoffer Zilotti Â· PsicÃ³logo JurÃ­dico e Assistente Perito</cite>
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
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/juridico.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--ink) 0%, transparent 30%, transparent 70%, var(--ink) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,8,10,0.45)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 64px' }}>
        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', fontWeight: 300, color: 'var(--warm)', textAlign: 'center', letterSpacing: '-0.01em', maxWidth: 700 }}>
          Suporte tÃ©cnico que <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>qualifica sua atuaÃ§Ã£o</em> onde Direito e Psicologia se cruzam.
        </p>
      </div>
    </div>
  )
}

const servicos = [
  { num: '01', title: 'AnÃ¡lise CrÃ­tica de Laudos', desc: 'Leitura especializada de laudos periciais psicolÃ³gicos, identificando inconsistÃªncias metodolÃ³gicas, lacunas tÃ©cnicas e pontos de questionamento estratÃ©gico.' },
  { num: '02', title: 'FormulaÃ§Ã£o de Quesitos', desc: 'ElaboraÃ§Ã£o tÃ©cnica de quesitos psicolÃ³gicos para perÃ­cias, com precisÃ£o terminolÃ³gica e orientaÃ§Ã£o estratÃ©gica. Quesitos bem formulados abrem espaÃ§o onde os mal formulados fecham.' },
  { num: '03', title: 'Pareceres TÃ©cnicos', desc: 'Documentos tÃ©cnicos que fundamentam, complementam ou contestam avaliaÃ§Ãµes psicolÃ³gicas juntadas ao processo. Redigidos com rigor cientÃ­fico e linguagem juridicamente aplicÃ¡vel.' },
  { num: '04', title: 'Acompanhamento de PerÃ­cias', desc: 'PresenÃ§a tÃ©cnica durante realizaÃ§Ã£o de perÃ­cias psicolÃ³gicas, assegurando que o processo avaliativo siga protocolos adequados.' },
  { num: '05', title: 'EstratÃ©gia Processual Psi', desc: 'Consultoria estratÃ©gica sobre como a dimensÃ£o psicolÃ³gica do caso pode ser instrumentalizada processualmente com maior eficiÃªncia.' },
  { num: '06', title: 'Apoio em AudiÃªncias', desc: 'Suporte tÃ©cnico especializado durante audiÃªncias que envolvam depoimentos, avaliaÃ§Ãµes ou argumentos psicolÃ³gicos.' },
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
      <RevealWrapper><SectionLabel>ServiÃ§os</SectionLabel></RevealWrapper>
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
  { num: '01', title: 'Vantagem TÃ©cnica', desc: 'Dominando a interface psicolÃ³gica-jurÃ­dica, o advogado identifica vulnerabilidades em laudos adversos e constrÃ³i argumentos que advogados sem esse suporte simplesmente nÃ£o veem.' },
  { num: '02', title: 'EficiÃªncia Processual', desc: 'Quesitos bem elaborados, laudos criticamente analisados e perÃ­cias acompanhadas resultam em processos mais eficientes, com menos surpresas e maior controle sobre os resultados.' },
  { num: '03', title: 'Credibilidade TÃ©cnica', desc: 'Pareceres e documentos tecnicamente fundamentados elevam a qualidade da argumentaÃ§Ã£o jurÃ­dica e aumentam a credibilidade do advogado diante do juÃ­zo.' },
]

export function BeneficiosJuridico() {
  return (
    <section style={{ background: 'var(--deep)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>BenefÃ­cios</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 68 }}>
          O que muda quando vocÃª tem <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>suporte especializado</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: 32 }}>Atendimento por agendamento Â· Confidencialidade garantida</p>
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

