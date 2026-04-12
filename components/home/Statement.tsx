import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Statement() {
  return (
    <section style={{
      background: 'var(--deep)',
      padding: '108px 64px',
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* Top line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 1, height: 54,
        background: 'linear-gradient(to bottom, transparent, var(--gdim))',
      }} />
      {/* Bottom line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%) rotate(180deg)',
        width: 1, height: 54,
        background: 'linear-gradient(to bottom, transparent, var(--gdim))',
      }} />

      <RevealWrapper>
        <p style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.35rem, 2.8vw, 2.5rem)',
          fontWeight: 300,
          lineHeight: 1.56,
          color: 'var(--ivory)',
          maxWidth: 780,
          margin: '0 auto',
          letterSpacing: '0.01em',
        }}>
          HÃ¡ decisÃµes que nÃ£o comportam erros. HÃ¡ processos que nÃ£o admitem fragilidades. HÃ¡ vidas
          que{' '}
          <strong style={{ fontWeight: 400, color: 'var(--warm)' }}>exigem clareza profunda</strong>
          {' '}â€” nÃ£o conforto superficial.
        </p>
      </RevealWrapper>
    </section>
  )
}

