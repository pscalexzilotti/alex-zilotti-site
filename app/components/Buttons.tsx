import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  external?: boolean
}

export function ButtonPrimary({ href, children, external }: ButtonProps) {
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link
      href={href}
      {...extra}
      className="btn-primary"
      style={{
        display: 'inline-block',
        fontSize: '0.57rem',
        letterSpacing: '0.24em',
        textTransform: 'uppercase' as const,
        color: 'var(--ink)',
        background: 'var(--glt)',
        padding: '15px 38px',
        fontWeight: 500,
        transition: 'all 0.35s var(--ease)',
        whiteSpace: 'nowrap' as const,
        fontFamily: 'var(--font-jost), system-ui, sans-serif',
      }}
    >
      {children}
      <style>{`.btn-primary:hover { background: var(--ivory) !important; transform: translateY(-2px) !important; }`}</style>
    </Link>
  )
}

export function ButtonGhost({ href, children, external }: ButtonProps) {
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link
      href={href}
      {...extra}
      className="btn-ghost"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 13,
        fontSize: '0.57rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase' as const,
        color: 'var(--taupe)',
        fontWeight: 400,
        transition: 'color 0.3s',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {children}
      <span
        className="btn-ghost-line"
        style={{
          display: 'block',
          width: 26,
          height: 1,
          background: 'currentColor',
          transition: 'width 0.4s var(--ease)',
        }}
      />
      <style>{`
        .btn-ghost:hover { color: var(--ivory) !important; }
        .btn-ghost:hover .btn-ghost-line { width: 48px !important; }
      `}</style>
    </Link>
  )
}
