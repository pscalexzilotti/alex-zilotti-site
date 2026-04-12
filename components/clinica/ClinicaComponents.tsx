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
        Psicologia ClÃ­nica Especializada
      </motion.div>
      <motion.h1 {...up(0.5)} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--warm)', maxWidth: 760, marginBottom: 32 }}>
        ClÃ­nica Cognitiva de{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Alta Performance</em>
      </motion.h1>
      <motion.p {...up(0.7)} style={{ fontSize: '0.92rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 540, marginBottom: 56 }}>
        Psicoterapia especializada baseada em TCC de Alta Performance e Hipnose ClÃ­nica para quem opera sob pressÃ£o constante e precisa de clareza, nÃ£o de conforto.
      </motion.p>
      <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <ButtonPrimary href="https://wa.me/554199176772" external>Solicitar AvaliaÃ§Ã£o</ButtonPrimary>
        <Link href="/" className="back-link-cli" style={{ fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.3s' }}>â† PÃ¡gina Inicial</Link>
      </motion.div>
      <style>{`.back-link-cli:hover { color: var(--ivory) !important; }`}</style>
    </section>
  )
}

const especialidades = [
  'Transtorno de Ansiedade','Transtorno Obsessivo Compulsivo (TOC)',
  'Transtorno Depressivo','Transtorno do Espectro do Autismo (TEA)',
  'Terapia de Casal','TCC para Alta Performance',
  'Desenvolvimento Infantil','TCC em Fobias EspecÃ­ficas',
  'Transtorno de Personalidade','Transtorno do PÃ¢nico',
  'Transtornos Alimentares','TDAH',
  'RelaÃ§Ãµes Interpessoais e Familiares',
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
          Ãreas de <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>atendimento clÃ­nico</em>
        </h2>
      </RevealWrapper>
      <RevealWrapper delay={0.15}>
        <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: 600, marginBottom: 64 }}>
          A Terapia Cognitivo-Comportamental Ã© reconhecida cientificamente como uma das abordagens mais eficazes para o tratamento de uma ampla gama de condiÃ§Ãµes. Atendimento especializado para profissionais de alta performance e para quem busca mudanÃ§as reais e mensurÃ¡veis.
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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/workshop.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,25,27,0.3) 0%, var(--charcoal) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 64 }}>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', fontSize: '0.48rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gdim)', border: '1px solid rgba(154,128,96,0.22)', padding: '7px 14px', marginBottom: 20 }}>
            ExperiÃªncia ClÃ­nica Exclusiva Â· 3 dias
          </div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--warm)', letterSpacing: '-0.015em', maxWidth: 700 }}>
            Workshop <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Rotas de Alta Performance Emocional</em>
          </h2>
        </div>
      </div>
      <div className="workshop-body" style={{ padding: '80px 64px 128px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <RevealWrapper>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2, marginBottom: 24 }}>O Workshop Rotas de Alta Performance Emocional Ã© uma experiÃªncia clÃ­nica intensiva desenhada para quem nÃ£o tem tempo a perder com processos lentos, mas que precisa de resultados reais e profundos.</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2 }}>Em trÃªs dias de trabalho focado, combinamos TCC de Alta Performance com Hipnose ClÃ­nica em um processo personalizado â€” uma recalibraÃ§Ã£o profunda dos padrÃµes mentais e emocionais que determinam seus resultados.</p>
        </RevealWrapper>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'rgba(154,128,96,0.07)' }}>
          {[
            { num: 'I', title: 'AvaliaÃ§Ã£o Inicial', desc: 'Mapeamento aprofundado do perfil psicolÃ³gico, padrÃµes de resposta ao estresse e pontos de travamento que limitam a performance.' },
            { num: 'II', title: '3 Dias de Workshop', desc: 'Processo intensivo e personalizado de TCC e Hipnose ClÃ­nica em ambiente exclusivo. Trabalho profundo, focado e sem distraÃ§Ãµes externas.' },
            { num: 'III', title: 'IntegraÃ§Ã£o e Rota', desc: 'ConsolidaÃ§Ã£o dos avanÃ§os, construÃ§Ã£o da rota de manutenÃ§Ã£o e definiÃ§Ã£o do plano de continuidade terapÃªutica se necessÃ¡rio.' },
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
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/clinica.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(9,8,10,0.3) 0%, transparent 60%)' }} />
          </div>
        </RevealWrapper>
        <div>
          <RevealWrapper><SectionLabel>Abordagem ClÃ­nica</SectionLabel></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 28 }}>
              TCC de Alta Performance e{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Hipnose ClÃ­nica</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}><p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>A Terapia Cognitivo-Comportamental de Alta Performance nÃ£o Ã© TCC convencional. Ã‰ uma abordagem adaptada para quem opera em contextos de alta demanda, pressÃ£o constante e onde o custo do erro Ã© real.</p></RevealWrapper>
          <RevealWrapper delay={0.3}><p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>Integrada Ã  Hipnose ClÃ­nica â€” nÃ£o como ferramenta de entretenimento, mas como tÃ©cnica terapÃªutica validada â€” o processo atinge camadas de processamento que a terapia verbal isolada raramente alcanÃ§a.</p></RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 40 }}>O resultado Ã© um processo clÃ­nico que respeita a inteligÃªncia do cliente, trabalha com profundidade real e produz mudanÃ§as mensurÃ¡veis â€” nÃ£o apenas insights.</p>
            <ButtonPrimary href="https://wa.me/554199176772" external>Solicitar AvaliaÃ§Ã£o</ButtonPrimary>
          </RevealWrapper>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .abordagem-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}

