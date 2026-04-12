'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    let rafId: number
    const loop = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.11
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.11
      ring.style.left = pos.current.rx + 'px'
      ring.style.top = pos.current.ry + 'px'
      rafId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)

    const hoverEls = document.querySelectorAll('a, button, .svc-card, .ben-card, .pub-card, .im-card, .step-card')
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => ring.classList.add('cur-hover'))
      el.addEventListener('mouseleave', () => ring.classList.remove('cur-hover'))
    }
    hoverEls.forEach(addHover)

    // Watch for new interactive elements (for dynamic content)
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .svc-card, .ben-card, .pub-card, .im-card').forEach(addHover)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '7px',
          height: '7px',
          background: 'var(--glt)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s var(--ease)',
        }}
      />
      <div
        ref={ringRef}
        className="cur-ring"
        style={{
          position: 'fixed',
          width: '34px',
          height: '34px',
          border: '1px solid rgba(196,169,122,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.45s var(--ease), width 0.3s var(--ease), height 0.3s var(--ease), border-color 0.3s',
        }}
      />
      <style>{`
        @media (hover: none) {
          .cur-ring, [data-cursor] { display: none !important; }
        }
        .cur-ring.cur-hover {
          width: 56px !important;
          height: 56px !important;
          border-color: rgba(196,169,122,0.55) !important;
        }
      `}</style>
    </>
  )
}
