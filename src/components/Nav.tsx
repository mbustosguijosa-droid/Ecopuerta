import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'
import { ArrowUpRight } from './Icons'

export const NAV_LINKS = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Trabajos', id: 'trabajos' },
  { label: 'Taller', id: 'taller' },
  { label: 'Materiales', id: 'materiales' },
]

export default function Nav() {
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)

  // Resalta la sección visible
  useEffect(() => {
    const ids = ['inicio', ...NAV_LINKS.map((l) => l.id), 'presupuesto']
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 lg:px-16">
      <a
        href="#inicio"
        aria-label="Ecopuerta Factory — inicio"
        className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full"
      >
        <LogoMark className="h-7 w-7 text-white" />
      </a>

      <div className="liquid-glass hidden md:flex items-center rounded-full px-1.5 py-1.5">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`relative px-3.5 py-2 text-sm font-medium font-body transition-colors ${
              active === l.id ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {active === l.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{l.label}</span>
          </a>
        ))}
        <a
          href="#presupuesto"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
        >
          Pide presupuesto
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Móvil */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="liquid-glass md:hidden flex h-12 w-12 items-center justify-center rounded-full"
      >
        <span className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ${
              open ? 'top-1.5 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ${
              open ? 'top-1.5 -rotate-45' : 'top-3'
            }`}
          />
        </span>
      </button>
      <div className="hidden md:block h-12 w-12" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="liquid-glass-strong md:hidden absolute top-16 left-5 right-5 rounded-[1.5rem] p-3 flex flex-col"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="px-4 py-3 font-heading text-3xl text-white/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#presupuesto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black font-body"
            >
              Pide presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
