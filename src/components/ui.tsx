import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Aparición suave al entrar en pantalla (una sola vez). */
export const reveal = {
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const

export const revealDelay = (i: number) => ({
  ...reveal,
  transition: { ...reveal.transition, delay: i * 0.1 },
})

export function SectionHeader({
  label,
  children,
  intro,
  align = 'left',
}: {
  label: string
  children: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <motion.header {...reveal} className={align === 'center' ? 'text-center mx-auto' : ''}>
      <p className="text-sm font-body text-white/70 mb-5 tracking-wide">
        <span className="text-eco-light">//</span> {label}
      </p>
      <h2 className="font-heading text-[2.75rem] sm:text-6xl lg:text-[5rem] leading-[0.98] tracking-[-0.025em]">
        {children}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base md:text-lg font-body font-light text-white/75 leading-relaxed max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </motion.header>
  )
}

/** Envoltorio estándar de sección: padding, ancho máximo y ancla. */
export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative overflow-hidden bg-black scroll-mt-4 ${className}`}>
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 py-24 md:py-32">{children}</div>
    </section>
  )
}
