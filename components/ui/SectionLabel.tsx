import type { ReactNode } from 'react'

export default function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div style={{
      fontSize: '0.52rem',
      letterSpacing: '0.38em',
      textTransform: 'uppercase' as const,
      color: 'var(--gold)',
      fontWeight: 400,
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      justifyContent: center ? 'center' : 'flex-start',
    }}>
      <span style={{ width: 22, height: 1, background: 'var(--gdim)', display: 'inline-block', flexShrink: 0 }} />
      {children}
    </div>
  )
}

