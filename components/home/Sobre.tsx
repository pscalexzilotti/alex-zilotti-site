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
      <div
        className="sobre-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '420px 1fr',
          gap: 96,
          maxWidth: 1200,
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {/* Sticky photo */}
        <RevealWrapper>
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '2/3' }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(https://picsum.photos/seed/portrait/420/630)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(15,14,16,0.7) 0%, transparent 50%)',
              }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                <p style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '1.15rem', fontWeight: 300,
                  color: 'var(--warm)', letterSpacing: '0.02em',
                }}>
                  Alex Cristoffer Zilotti
                </p>
                <p style={{
                  fontSize: '0.55rem', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: 'var(--gold)', marginTop: 4,
                }}>
                  CRP 08/48529
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Text */}
        <div>
          <RevealWrapper><SectionLabel>Sobre</SectionLabel></RevealWrapper>

          <RevealWrapper delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
              fontWeight: 300, lineHeight: 1.14,
              color: 'var(--warm)', letterSpacing: '-0.01em', marginBottom: 40,
            }}>
              Uma prática construída com{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>intenção e rigor</em>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Alex Cristoffer Zilotti é psicólogo com formação em Psicologia Jurídica e Forense e
              especialização em TCC de Alta Performance. Sua prática é construída sobre a intersecção
              entre dois mundos raramente tratados com igual profundidade: o mundo clínico — onde o
              ser humano se reconhece, se reorganiza e avança — e o mundo jurídico e corporativo, onde
              as consequências das decisões psicológicas são concretas, mensuráveis e definitivas.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em Gestão de Pessoas e formação em hipnose clínica, Alex opera com precisão
              técnica e sensibilidade clínica. Seu método não é genérico: cada processo terapêutico,
              cada parecer técnico e cada consultoria jurídico-psicológica é construído a partir da
              demanda real do cliente — não de protocolos padronizados.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresários, executivos, artistas e profissionais que vivem sob alta pressão
              — e com advogados e escritórios que precisam de suporte técnico especializado em casos
              onde Direito e Psicologia se cruzam. Discreto por natureza, rigoroso por formação,
              profundo por escolha.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.5}>
            <div style={{ marginBottom: 40 }}>
              <p style={{
                fontSize: '0.52rem', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20,
              }}>
                Formação e Credenciais
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {credenciais.map((c) => (
                  <li key={c} style={{
                    fontSize: '0.82rem', color: 'var(--taupe)',
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                  }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gdim)', flexShrink: 0, marginTop: 7 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.6}>
            <div style={{
              display: 'inline-flex', flexDirection: 'column',
              border: '1px solid rgba(154,128,96,0.2)', padding: '18px 28px',
            }}>
              <span style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone)' }}>
                Registro Profissional
              </span>
              <strong style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.3rem', fontWeight: 400, color: 'var(--glt)', marginTop: 4,
              }}>
                CRP 08/48529
              </strong>
            </div>
          </RevealWrapper>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
