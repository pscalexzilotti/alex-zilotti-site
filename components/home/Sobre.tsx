import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

const credenciais = [
  'PsicÃ³logo clÃ­nico com foco em TCC e hipnose',
  'PÃ³s-graduando em Psicologia Forense e JurÃ­dica',
  'PÃ³s-graduando em TCC de Alta Performance',
  'MBA em GestÃ£o de Pessoas',
  'AtuaÃ§Ã£o em contextos clÃ­nicos, jurÃ­dicos e corporativos',
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
              Uma prÃ¡tica construÃ­da com{' '}<em style={{ fontStyle: 'italic', color: 'var(--glt)' }}>intenÃ§Ã£o e rigor</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Alex Cristoffer Zilotti Ã© psicÃ³logo com formaÃ§Ã£o em Psicologia JurÃ­dica e Forense e especializaÃ§Ã£o em TCC de Alta Performance. Sua prÃ¡tica Ã© construÃ­da sobre a intersecÃ§Ã£o entre dois mundos raramente tratados com igual profundidade: o mundo clÃ­nico â€” onde o ser humano se reconhece, se reorganiza e avanÃ§a â€” e o mundo jurÃ­dico e corporativo, onde as consequÃªncias das decisÃµes psicolÃ³gicas sÃ£o concretas, mensurÃ¡veis e definitivas.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 24 }}>
              Com MBA em GestÃ£o de Pessoas e formaÃ§Ã£o em hipnose clÃ­nica, Alex opera com precisÃ£o tÃ©cnica e sensibilidade clÃ­nica. Seu mÃ©todo nÃ£o Ã© genÃ©rico: cada processo terapÃªutico, cada parecer tÃ©cnico e cada consultoria jurÃ­dico-psicolÃ³gica Ã© construÃ­do a partir da demanda real do cliente â€” nÃ£o de protocolos padronizados.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.95, marginBottom: 48 }}>
              Trabalha com empresÃ¡rios, executivos, artistas e profissionais que vivem sob alta pressÃ£o â€” e com advogados e escritÃ³rios que precisam de suporte tÃ©cnico especializado em casos onde Direito e Psicologia se cruzam. Discreto por natureza, rigoroso por formaÃ§Ã£o, profundo por escolha.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.5}>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>FormaÃ§Ã£o e Credenciais</p>
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
