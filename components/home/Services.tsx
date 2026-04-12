'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import { ButtonGhost } from '@/components/ui/Buttons'

function SvcCard({
  num, title, desc, items, tag, featured,
}: {
  num: string
  title: string
  desc?: string
  items: string[]
  tag?: string
  featured?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? 'var(--graphite)' : 'var(--charcoal)',
          padding: '58px 50px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          position: 'relative',
          overflow: 'hidden',
          transition: 'background 0.5s var(--ease)',
        }}
        className="svc-featured"
      >
        {tag && (
          <div style={{
            position: 'absolute', top: 26, right: 26,
            fontSize: '0.46rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--gdim)', border: '1px solid rgba(154,128,96,0.18)', padding: '6px 12px',
          }}>{tag}</div>
        )}
        <div>
          <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--gdim)', marginBottom: 26, display: 'block' }}>{num}</span>
          <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.15rem, 1.9vw, 1.7rem)', fontWeight: 300, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 16 }}>{title}</h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: 30 }}>
            Suporte técnico especializado para advogados que precisam de expertise psicológica em processos judiciais complexos.
          </p>
          <ButtonGhost href="/juridico">Ver frente completa</ButtonGhost>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, alignContent: 'start' }}>
          {items.map((item) => (
            <li key={item} style={{ fontSize: '0.69rem', letterSpacing: '0.05em', color: 'var(--taupe)', display: 'flex', alignItems: 'flex-start', gap: 11 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gdim)', flexShrink: 0, marginTop: 6 }} />
              {item}
            </li>
          ))}
        </ul>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: hovered ? '100%' : '0', height: 1, background: 'var(--glt)', transition: 'width 0.6s var(--ease)' }} />
        <style>{`.svc-featured { grid-column: 1 / -1; }
          @media (max-width: 640px) { .svc-featured { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </div>
    )
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--graphite)' : 'var(--charcoal)',
        padding: '58px 50px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.5s var(--ease)',
        height: '100%',
      }}
    >
      <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--gdim)', marginBottom: 26, display: 'block' }}>{num}</span>
      <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.15rem, 1.9vw, 1.7rem)', fontWeight: 300, color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 16 }}>{title}</h3>
      {desc && <p style={{ fontSize: '0.84rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: 30 }}>{desc}</p>}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: '0.69rem', letterSpacing: '0.05em', color: 'var(--taupe)', display: 'flex', alignItems: 'flex-start', gap: 11 }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gdim)', flexShrink: 0, marginTop: 6 }} />
            {item}
          </li>
        ))}
      </ul>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: hovered ? '100%' : '0', height: 1, background: 'var(--glt)', transition: 'width 0.6s var(--ease)' }} />
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicos" style={{ background: 'var(--charcoal)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Áreas de Atuação</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
          fontWeight: 300, lineHeight: 1.14,
          color: 'var(--warm)', letterSpacing: '-0.01em',
        }}>
          Psicologia praticada com{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>rigor e profundidade</em>
        </h2>
      </RevealWrapper>

      <div
        className="svc-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          marginTop: 68,
          background: 'rgba(154,128,96,0.07)',
        }}
      >
        <RevealWrapper delay={0.1} style={{ display: 'contents' }}>
          <SvcCard
            num="01"
            title="Clínica Cognitiva de Alta Performance"
            desc="Psicoterapia especializada para quem não pode se dar ao luxo de ficar paralisado."
            items={[
              'TCC de Alta Performance',
              'Hipnose Clínica',
              'Regulação emocional sob pressão',
              'Tomada de decisão e clareza mental',
              'Processo terapêutico de alta profundidade',
            ]}
          />
        </RevealWrapper>

        <RevealWrapper delay={0.2} style={{ display: 'contents' }}>
          <SvcCard
            num="02"
            title="Psicologia Jurídica e Forense"
            desc="Suporte psicológico em contextos de alto risco legal, familiar e institucional."
            items={[
              'Avaliação psicológica pericial',
              'Suporte em processos de guarda',
              'Intervenção em situações de violência',
              'Acompanhamento em processos criminais',
              'Psicologia aplicada ao sistema de justiça',
            ]}
          />
        </RevealWrapper>

        <RevealWrapper delay={0.3} style={{ display: 'contents' }}>
          <SvcCard
            num="03"
            title="Assistente Perito para Advogados"
            tag="Frente Estratégica"
            featured
            items={[
              'Análise crítica de laudos periciais',
              'Formulação de quesitos técnicos',
              'Pareceres psicológicos',
              'Acompanhamento de perícias',
              'Estratégia processual psi',
              'Apoio em audiências',
              'Impugnação de laudos',
              'Consultas jurídico-psicológicas',
              'Relatórios técnicos especializados',
            ]}
          />
        </RevealWrapper>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
