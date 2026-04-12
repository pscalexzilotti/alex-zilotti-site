'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const cards = [
  {
    title: 'Empresários e Executivos',
    desc: 'Líderes que tomam decisões de alto impacto e precisam de clareza mental, resiliência e equilíbrio emocional para performar sem se destruir.',
  },
  {
    title: 'Artistas e Influenciadores',
    desc: 'Profissionais expostos à pressão constante do público, da imagem e da performance, que precisam de suporte psicológico discreto e especializado.',
  },
  {
    title: 'Pessoas em Processos Judiciais',
    desc: 'Indivíduos que enfrentam disputas legais complexas — guarda, divórcio, processos criminais — e precisam de suporte psicológico qualificado.',
  },
  {
    title: 'Líderes sob Alta Responsabilidade',
    desc: 'Profissionais em posições de alta responsabilidade que gerenciam equipes, crises e decisões com consequências reais e duradouras.',
  },
  {
    title: 'Advogados e Escritórios',
    desc: 'Profissionais jurídicos que precisam de suporte técnico especializado em psicologia para casos onde Direito e Psicologia se cruzam.',
  },
  {
    title: 'Famílias em Contextos Sensíveis',
    desc: 'Famílias que atravessam situações delicadas — separações litigiosas, crises familiares, processos de guarda — e precisam de intervenção especializada.',
  },
]

function PubCard({ title, desc }: { title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--charcoal)' : 'var(--ink)',
        padding: '42px 36px',
        borderTop: '1px solid rgba(154,128,96,0.22)',
        transition: 'background 0.4s var(--ease)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: '1.2rem', fontWeight: 300,
        color: 'var(--warm)', marginBottom: 14, letterSpacing: '-0.01em',
      }}>{title}</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.9 }}>{desc}</p>
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: hovered ? '100%' : '0', height: 1,
        background: 'var(--glt)', transition: 'width 0.6s var(--ease)',
      }} />
    </div>
  )
}

export default function Publico() {
  return (
    <section style={{ background: 'var(--ink)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Para quem</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
          fontWeight: 300, lineHeight: 1.14,
          color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 68,
        }}>
          Quem busca esse{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>nível de trabalho</em>
        </h2>
      </RevealWrapper>

      <div
        className="pub-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          background: 'rgba(154,128,96,0.07)',
        }}
      >
        {cards.map((c, i) => (
          <RevealWrapper key={c.title} delay={i * 0.07}>
            <PubCard {...c} />
          </RevealWrapper>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) { .pub-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .pub-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
