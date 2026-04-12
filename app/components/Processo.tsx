import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    num: '01',
    title: 'Contato Inicial',
    desc: 'Uma conversa direta, confidencial e sem protocolo desnecessário. Esse primeiro contato permite entender o contexto, avaliar adequação e responder com clareza o que pode ser feito — e como.',
  },
  {
    num: '02',
    title: 'Sessão de Avaliação',
    desc: 'Uma sessão estruturada para mapeamento aprofundado. É onde a demanda real é identificada, o processo adequado é desenhado e a relação clínica começa a se construir com seriedade.',
  },
  {
    num: '03',
    title: 'Processo Terapêutico',
    desc: 'Um percurso clínico construído com critério, ajustado conforme evolução e orientado por objetivos concretos. Sem prazo fixo. Com profundidade real.',
  },
]

export default function Processo() {
  return (
    <section id="processo" style={{ background: 'var(--charcoal)', padding: '128px 64px' }}>
      <RevealWrapper><SectionLabel>Como funciona</SectionLabel></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
          fontWeight: 300, lineHeight: 1.14,
          color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 80,
        }}>
          Um processo{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>construído com intenção</em>
        </h2>
      </RevealWrapper>

      <div
        className="steps-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }}
      >
        {/* Connecting line */}
        <div style={{
          position: 'absolute', top: 28, left: '16.66%', right: '16.66%',
          height: 1, background: 'linear-gradient(to right, transparent, var(--gdim), transparent)',
          zIndex: 0, opacity: 0.35,
          pointerEvents: 'none',
        }} />

        {steps.map((s, i) => (
          <RevealWrapper key={s.num} delay={i * 0.15}>
            <div style={{ padding: '0 40px 0 0', position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '2.2rem', fontWeight: 300,
                color: 'var(--gdim)', letterSpacing: '-0.02em',
                marginBottom: 28, opacity: 0.7,
              }}>{s.num}</div>
              <h4 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.35rem', fontWeight: 300,
                color: 'var(--warm)', marginBottom: 16, letterSpacing: '-0.01em',
              }}>{s.title}</h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--stone)', lineHeight: 1.9 }}>{s.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .steps-grid > div > div { padding: 0 !important; }
        }
      `}</style>
    </section>
  )
}
