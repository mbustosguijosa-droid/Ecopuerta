import { motion } from 'framer-motion'
import BlurText from './BlurText'
import WoodGrain from './WoodGrain'
import HeroPlant from './HeroPlant'
import Seal from './Seal'
import { ArrowUpRight } from './Icons'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0, transitionEnd: { filter: 'none' } },
}
const t = (delay: number) => ({ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay })

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black">
      <WoodGrain />

      {/* El logo, a lo grande, de fondo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
        <HeroPlant className="h-[78svh] max-h-[860px] w-auto translate-y-[2%]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[55%] bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      />

      <div className="relative z-10 flex h-full flex-col items-center px-4 pt-28 md:pt-32 text-center">
        <div className="max-w-4xl">
          <BlurText
            text="Puertas hechas a mano para durar toda una vida"
            emphasis={['a', 'mano']}
            className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading text-white leading-[0.95] tracking-[-0.025em]"
          />
        </div>

        <motion.p
          {...fadeUp}
          transition={t(0.9)}
          className="mt-5 text-[15px] md:text-lg text-white/80 max-w-xl font-body font-light leading-snug"
        >
          Taller familiar de carpintería. Diseñamos, fabricamos y montamos puertas, armarios y vestidores a medida.
        </motion.p>

        <motion.div {...fadeUp} transition={t(1.15)} className="mt-7 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#presupuesto"
            className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium font-body hover:text-eco-light transition-colors"
          >
            Pide presupuesto
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#trabajos"
            className="group inline-flex items-center gap-2 text-sm font-medium font-body text-white/85 hover:text-white transition-colors"
          >
            Ver trabajos
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      {/* Sello: desde 2007 · +30 años */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={t(2.4)}
        className="absolute z-10 bottom-6 right-5 md:bottom-10 md:right-12 h-24 w-24 md:h-32 md:w-32"
      >
        <Seal className="h-full w-full" />
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#servicios"
        aria-label="Bajar a servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t(2.8)}
        className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <span className="scroll-cue block h-10 w-px bg-gradient-to-b from-white/0 via-white/70 to-white/0" />
      </motion.a>
    </section>
  )
}
