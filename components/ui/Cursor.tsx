'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      posRef.current.mx = e.clientX
      posRef.current.my = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    let rafId: number
    const loop = () => {
      posRef.current.rx += (posRef.current.mx - posRef.current.rx) * 0.11
      posRef.current.ry += (posRef.current.my - posRef.current.ry) * 0.11
      ring.style.left = posRef.current.rx + 'px'
      ring.style.top = posRef.current.ry + 'px'
      rafId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => ring.classList.add('cur-hover'))
      el.addEventListener('mouseleave', () => ring.classList.remove('cur-hover'))
    }

    const attachAll = () => {
      document.querySelectorAll('a, button').forEach(addHover)
    }
    attachAll()

    const observer = new MutationObserver(attachAll)
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
          width: 7,
          height: 7,
          background: 'var(--glt)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 34,
          height: 34,
          border: '1px solid rgba(196,169,122,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s var(--ease), height 0.3s var(--ease), border-color 0.3s',
        }}
      />
      <style>{`
        @media (hover: none) {
          [data-cursor-dot], [data-cursor-ring] { display: none !important; }
        }
        .cur-hover {
          width: 56px !important;
          height: 56px !important;
          border-color: rgba(196,169,122,0.55) !important;
        }
      `}</style>
    </>
  )
}
