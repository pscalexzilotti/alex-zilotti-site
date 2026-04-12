'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
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

/* ─── Hero ─── */
export function HeroClinica() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '160px 64px 100px',
      background: 'var(--deep)', position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle right glow */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
        background: 'linear-gradient(to left, rgba(196,169,122,0.04) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <motion.div {...up(0.3)} style={{
        fontSize: '0.52rem', letterSpacing: '0.38em', textTransform: 'uppercase',
        color: 'var(--gold)', fontWeight: 400, marginBottom: 32,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <span style={{ width: 22, height: 1, background: 'var(--gdim)', display: 'inline-block' }} />
        Psicologia Clínica Especializada
      </motion.div>

      <motion.h1 {...up(0.5)} style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
        fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em',
        color: 'var(--warm)', maxWidth: 760, marginBottom: 32,
      }}>
        Clínica Cognitiva de{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Alta Performance</em>
      </motion.h1>

      <motion.p {...up(0.7)} style={{
        fontSize: '0.92rem', color: 'var(--stone)', lineHeight: 1.9,
        maxWidth: 540, marginBottom: 56,
      }}>
        Psicoterapia especializada baseada em TCC de Alta Performance e Hipnose Clínica para
        quem opera sob pressão constante e precisa de clareza, não de conforto.
      </motion.p>

      <motion.div {...up(0.9)} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <ButtonPrimary href="https://wa.me/554199176772" external>
          Solicitar Avaliação
        </ButtonPrimary>
        <Link
          href="/"
          className="back-link-cli"
          style={{
            fontSize: '0.57rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 10,
            transition: 'color 0.3s',
          }}
        >
          ← Página Inicial
        </Link>
      </motion.div>

      <style>{`
        .back-link-cli:hover { color: var(--ivory) !important; }
        @media (max-width: 768px) { section { padding: 140px 28px 80px !important; } }
      `}</style>
    </section>
  )
}

/* ─── Imersão ─── */
function ImersaoCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="im-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px 36px',
        background: hovered ? 'var(--graphite)' : 'var(--charcoal)',
        transition: 'background 0.4s var(--ease)',
        display: 'flex', gap: 24, alignItems: 'flex-start',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: '1.8rem', fontWeight: 300, color: 'var(--gdim)',
        lineHeight: 1, flexShrink: 0, opacity: 0.7,
      }}>{num}</span>
      <div>
        <h4 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '1.15rem', fontWeight: 300, color: 'var(--warm)', marginBottom: 8,
        }}>{title}</h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.9 }}>{desc}</p>
      </div>
    </div>
  )
}

export function Imersao() {
  return (
    <section id="imersao" style={{ background: 'var(--charcoal)' }}>
      {/* Full-bleed image */}
      <div style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://picsum.photos/seed/hotel/1400/600)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,25,27,0.3) 0%, var(--charcoal) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 64,
        }}>
          <div style={{
            display: 'inline-flex', alignSelf: 'flex-start',
            fontSize: '0.48rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gdim)', border: '1px solid rgba(154,128,96,0.22)',
            padding: '7px 14px', marginBottom: 20,
          }}>
            Experiência Clínica Exclusiva · 3 dias
          </div>
          <h2 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3.8rem)',
            fontWeight: 300, lineHeight: 1.1, color: 'var(--warm)',
            letterSpacing: '-0.015em', maxWidth: 700,
          }}>
            Imersão{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>
              Rotas de Alta Performance Emocional
            </em>
          </h2>
        </div>
      </div>

      {/* Content below */}
      <div
        className="imersao-body"
        style={{ padding: '80px 64px 128px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}
      >
        <RevealWrapper>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2, marginBottom: 24 }}>
            A Imersão Rotas de Alta Performance Emocional é uma experiência clínica intensiva
            desenhada para quem não tem tempo a perder com processos lentos, mas que precisa de
            resultados reais e profundos.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 2 }}>
            Em três dias de trabalho focado, combinamos TCC de Alta Performance com Hipnose Clínica
            em um processo personalizado que vai além da terapia convencional — é uma recalibração
            profunda dos padrões mentais e emocionais que determinam seus resultados.
          </p>
        </RevealWrapper>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'rgba(154,128,96,0.07)' }}>
          {[
            { num: 'I', title: 'Avaliação Inicial', desc: 'Mapeamento aprofundado do perfil psicológico, padrões de resposta ao estresse e pontos de travamento que limitam a performance.' },
            { num: 'II', title: '3 Dias de Imersão', desc: 'Processo intensivo e personalizado de TCC e Hipnose Clínica em ambiente exclusivo. Trabalho profundo, focado e sem distrações externas.' },
            { num: 'III', title: 'Integração e Rota', desc: 'Consolidação dos avanços, construção da rota de manutenção e definição do plano de continuidade terapêutica se necessário.' },
          ].map((c, i) => (
            <RevealWrapper key={c.num} delay={i * 0.12}>
              <ImersaoCard {...c} />
            </RevealWrapper>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .imersao-body { grid-template-columns: 1fr !important; gap: 48px !important; padding: 60px 28px 80px !important; } }
      `}</style>
    </section>
  )
}

/* ─── Abordagem ─── */
export function AbordagemClinica() {
  return (
    <section style={{ background: 'var(--ink)', padding: '128px 64px' }}>
      <div
        className="abordagem-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}
      >
        <RevealWrapper>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '7/5' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(https://picsum.photos/seed/therapy/700/500)',
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(9,8,10,0.3) 0%, transparent 60%)',
            }} />
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper><SectionLabel>Abordagem Clínica</SectionLabel></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
              fontWeight: 300, lineHeight: 1.14, color: 'var(--warm)',
              letterSpacing: '-0.01em', marginBottom: 28,
            }}>
              TCC de Alta Performance e{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>Hipnose Clínica</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>
              A Terapia Cognitivo-Comportamental de Alta Performance não é TCC convencional. É
              uma abordagem adaptada para quem opera em contextos de alta demanda, pressão
              constante e onde o custo do erro é real.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 20 }}>
              Integrada à Hipnose Clínica — não como ferramenta de entretenimento, mas como
              técnica terapêutica validada — o processo atinge camadas de processamento que a
              terapia verbal isolada raramente alcança.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.88rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 40 }}>
              O resultado é um processo clínico que respeita a inteligência do cliente, trabalha
              com profundidade real e produz mudanças mensuráveis — não apenas insights.
            </p>
            <ButtonPrimary href="https://wa.me/554199176772" external>
              Solicitar Avaliação
            </ButtonPrimary>
          </RevealWrapper>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .abordagem-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
