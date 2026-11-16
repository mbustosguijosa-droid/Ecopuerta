import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PhotoCycler, { type Photo } from './PhotoCycler'
import { Section, SectionHeader, revealDelay } from './ui'
import { InstagramIcon } from './Icons'
import { INSTAGRAM_URL, WORKS } from '../data'

const SIZE = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  normal: '',
}

export default function Works() {
  const [open, setOpen] = useState<Photo | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Section id="trabajos">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <SectionHeader
          label="Trabajos"
          intro="Una pequeña muestra de lo que sale del taller. Cada proyecto se diseña, se fabrica y se monta por nuestro equipo."
        >
          Hecho aquí, <span className="em">pieza a pieza</span>
        </SectionHeader>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="liquid-glass shrink-0 self-start md:self-auto rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm font-body text-white/85 hover:text-eco-light transition-colors"
        >
          <InstagramIcon className="h-4 w-4" />
          Más en Instagram
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-5">
        {WORKS.map((w, i) => (
          <motion.figure
            key={w.title}
            {...revealDelay(i)}
            className={`group relative min-h-[320px] md:min-h-0 rounded-[1.25rem] overflow-hidden liquid-glass ${SIZE[w.size]}`}
          >
            <PhotoCycler photos={w.photos} />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-eco-light font-body">{w.place}</p>
                <p className="mt-1 font-heading text-2xl md:text-3xl leading-tight">{w.title}</p>
              </div>
            </figcaption>
            <button
              type="button"
              onClick={() => setOpen(w.photos[0])}
              aria-label={`Ampliar: ${w.title}`}
              className="absolute top-4 right-4 liquid-glass h-10 w-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
          >
            <motion.img
              src={open.src}
              alt={open.alt}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <button
              type="button"
              className="absolute top-5 right-5 liquid-glass h-11 w-11 rounded-full text-xl"
              aria-label="Cerrar"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
