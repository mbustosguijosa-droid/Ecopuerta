import { motion } from 'framer-motion'
import BlurText from './BlurText'
import Butterflies from './Butterflies'
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
    <section id="inicio" className="relative min-h-[100svh] md:h-[100svh] md:min-h-[680px] overflow-hidden bg-black">
      {/* Fondo: luz suave + mariposas animadas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_75%,rgba(63,164,91,0.16)_0%,rgba(0,0,0,0)_70%)]"
      />
      <Butterflies className="z-[1]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[55%] bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      />

      <div className="relative z-10 flex min-h-[100svh] md:h-full flex-col items-center px-4 pt-28 md:pt-32 text-center">
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

        {/* El logo, a lo grande: cúpula de cristal con el brote */}
        <div className="pointer-events-none relative mt-10 flex w-full flex-1 items-end justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:-z-10">
          <HeroPlant className="h-[56svh] max-h-[520px] md:h-[56svh] md:max-h-[700px] w-auto md:translate-y-[2%]" />
          <div className="absolute right-0 top-0 h-20 w-20 md:hidden">
            <Seal className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* Sello: desde 2007 · +30 años */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={t(2.4)}
        className="absolute z-10 hidden md:block md:bottom-10 md:right-12 md:h-32 md:w-32"
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
