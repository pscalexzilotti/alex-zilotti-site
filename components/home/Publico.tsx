'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const cards = [
  {
    title: 'EmpresÃ¡rios e Executivos',
    desc: 'LÃ­deres que tomam decisÃµes de alto impacto e precisam de clareza mental, resiliÃªncia e equilÃ­brio emocional para performar sem se destruir.',
  },
  {
    title: 'Artistas e Influenciadores',
    desc: 'Profissionais expostos Ã  pressÃ£o constante do pÃºblico, da imagem e da performance, que precisam de suporte psicolÃ³gico discreto e especializado.',
  },
  {
    title: 'Pessoas em Processos Judiciais',
    desc: 'IndivÃ­duos que enfrentam disputas legais complexas â€” guarda, divÃ³rcio, processos criminais â€” e precisam de suporte psicolÃ³gico qualificado.',
  },
  {
    title: 'LÃ­deres sob Alta Responsabilidade',
    desc: 'Profissionais em posiÃ§Ãµes de alta responsabilidade que gerenciam equipes, crises e decisÃµes com consequÃªncias reais e duradouras.',
  },
  {
    title: 'Advogados e EscritÃ³rios',
    desc: 'Profissionais jurÃ­dicos que precisam de suporte tÃ©cnico especializado em psicologia para casos onde Direito e Psicologia se cruzam.',
  },
  {
    title: 'FamÃ­lias em Contextos SensÃ­veis',
    desc: 'FamÃ­lias que atravessam situaÃ§Ãµes delicadas â€” separaÃ§Ãµes litigiosas, crises familiares, processos de guarda â€” e precisam de intervenÃ§Ã£o especializada.',
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
          <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>nÃ­vel de trabalho</em>
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

