"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16,1,0.3,1] as const },
})

export default function Hero() {
  return (
    <section className="hero-w" style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* LEFT */}
      <div className="hero-l" style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 64px 100px", position: "relative", zIndex: 2,
      }}>
        <motion.div {...up(0.3)} style={{
          fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 400, marginBottom: 32,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block", flexShrink: 0 }}/>
          Psicologia Juridica Â· Alta Performance Â· Psicologia Forense
        </motion.div>

        <motion.h1 {...up(0.5)} style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(2.5rem, 4.8vw, 4.6rem)",
          fontWeight: 300, lineHeight: 1.07, letterSpacing: "-0.015em", color: "var(--warm)", marginBottom: 30,
        }}>
          Onde pressao,{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)", fontWeight: 300 }}>decisao</em>{" "}
          e psicologia convergem.
        </motion.h1>

        <motion.p {...up(0.7)} style={{
          fontSize: "0.88rem", color: "var(--stone)", lineHeight: 1.92, maxWidth: 410, marginBottom: 50,
        }}>
          Atendimento para quem opera sob responsabilidade real. Suporte tecnico especializado
          para escritorios e advogados que enfrentam casos onde Direito e Psicologia se cruzam.
        </motion.p>

        <motion.div {...up(0.9)} style={{ display: "flex", alignItems: "center", gap: 34, flexWrap: "wrap" }}>
          <Link href="#contato" style={{
            display: "inline-block", fontSize: "0.57rem", letterSpacing: "0.24em",
            textTransform: "uppercase", color: "var(--ink)", background: "var(--glt)",
            padding: "15px 38px", fontWeight: 500, transition: "all 0.35s var(--ease)",
          }} className="btn-p">Solicitar Avaliacao</Link>
          <Link href="/juridico" className="btn-g" style={{
            display: "inline-flex", alignItems: "center", gap: 13,
            fontSize: "0.57rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--taupe)", fontWeight: 400, transition: "color 0.3s",
          }}>
            Para Advogados
            <span className="btn-g-line" style={{ display: "block", width: 26, height: 1, background: "currentColor", transition: "width 0.4s var(--ease)" }}/>
          </Link>
        </motion.div>
      </div>

      {/* RIGHT â€” foto real */}
      <div style={{ position: "relative", overflow: "hidden" }} className="hero-r">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16,1,0.3,1] }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(/hero.jpeg)",
            backgroundSize: "cover", backgroundPosition: "55% top",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--ink) 0%, rgba(9,8,10,0.25) 35%, transparent 65%)" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(9,8,10,0.55) 0%, transparent 40%)" }}/>

        {/* Badge CRP */}
        <motion.div {...up(1.3)} style={{ position: "absolute", bottom: 56, right: 44, textAlign: "right", zIndex: 3 }}>
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(176,168,184,0.45)", lineHeight: 2.2 }}>
            Pos-graduando em Psicologia Forense e Juridica<br/>
            Pos-graduando em TCC de Alta Performance<br/>
            <strong style={{ color: "var(--gdim)", fontWeight: 400, fontSize: "0.52rem" }}>CRP 08/48529</strong>
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 9, zIndex: 3,
        }}
      >
        <span style={{ fontSize: "0.45rem", letterSpacing: "0.34em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <div style={{ width: 1, height: 34, background: "linear-gradient(to bottom, var(--gdim), transparent)", animation: "scrollPulse 2.4s ease-in-out infinite" }}/>
      </motion.div>

      <style>{`
        .btn-p:hover { background: var(--ivory) !important; transform: translateY(-2px) !important; }
        .btn-g:hover { color: var(--ivory) !important; }
        .btn-g:hover .btn-g-line { width: 48px !important; }
        @media (max-width: 768px) {
          .hero-w { grid-template-columns: 1fr !important; }
          .hero-r { display: none !important; }
          .hero-l { padding: 120px 28px 80px !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}