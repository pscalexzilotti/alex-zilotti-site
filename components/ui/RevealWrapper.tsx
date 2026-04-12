'use client'

import { motion } from 'framer-motion'
import type { ReactNode, CSSProperties } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function RevealWrapper({ children, delay = 0, className, style }: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
