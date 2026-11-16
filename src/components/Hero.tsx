import { motion } from 'framer-motion'
import BlurText from './BlurText'
import WoodGrain from './WoodGrain'
import { LogoMark } from './Logo'
import { ArrowUpRight, ClockIcon, HandIcon, Play } from './Icons'
import { MAILTO } from '../data'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
}
const t = (delay: number) => ({ duration: 0.8, ease: 'easeOut' as const, delay })

const NAV_LINKS = [
  { label: 'Trabajos', href: '#servicios' },
  { label: 'Taller', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Materiales', href: '#materiales' },
  { label: 'Contacto', href: '#contacto' },
]

const MATERIALS = ['Madera', 'PVC', 'Aluminio', 'Vidrio', 'Herrajes']

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen md:h-screen overflow-hidden bg-black">
      <WoodGrain />

      <div className="relative z-10 flex flex-col min-h-screen md:h-full">
        {/* Navbar */}
        <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
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
                key={l.label}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-eco-light transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
            >
              Pide presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href={MAILTO}
            aria-label="Pide presupuesto por correo"
            className="liquid-glass flex md:hidden h-12 w-12 items-center justify-center rounded-full"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <div className="hidden md:block h-12 w-12" />
        </nav>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 md:pt-20 px-4 text-center">
          <motion.div
            {...fadeUp}
            transition={t(0.4)}
            className="liquid-glass rounded-full flex items-center gap-2.5 py-1 pl-1 pr-4 text-xs sm:text-sm font-body text-white/90"
          >
            <span className="shrink-0 whitespace-nowrap rounded-full bg-eco px-2.5 py-0.5 text-xs font-semibold text-white">
              Desde 2007
            </span>
            <span>Más de 30 años de oficio<span className="hidden sm:inline"> en carpintería a medida</span></span>
          </motion.div>

          <div className="mt-6 max-w-4xl">
            <BlurText
              text="Puertas hechas a mano para durar toda una vida"
              emphasis={['a', 'mano']}
              className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] font-heading text-white leading-[0.95] tracking-[-0.025em]"
            />
          </div>

          <motion.p
            {...fadeUp}
            transition={t(0.8)}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Somos un taller familiar de carpinteros e instaladores. Diseñamos, fabricamos y montamos
            puertas, armarios y vestidores a medida en madera, PVC y aluminio — con el cuidado de
            siempre y un acabado que se nota al tacto.
          </motion.p>

          <motion.div {...fadeUp} transition={t(1.1)} className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a
              href={MAILTO}
              className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium font-body hover:text-eco-light transition-colors"
            >
              Pide presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm font-medium font-body text-white/90 hover:text-eco-light transition-colors"
            >
              <Play className="h-3.5 w-3.5" />
              Ver trabajos
            </a>
          </motion.div>

          <motion.div {...fadeUp} transition={t(1.3)} className="mt-8 flex justify-center gap-3 sm:gap-4">
            <StatCard icon={<ClockIcon className="h-6 w-6" />} value="30+" label="Años de experiencia en el oficio" />
            <StatCard icon={<HandIcon className="h-6 w-6" />} value="100%" label="Diseñado, fabricado e instalado a medida" />
          </motion.div>
        </div>

        {/* Barra inferior: materiales */}
        <motion.div
          id="materiales"
          {...fadeUp}
          transition={t(1.4)}
          className="flex flex-col items-center gap-4 pb-8 pt-8 px-4"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs sm:text-sm font-body text-white/90 text-center">
            Trabajamos con los materiales de siempre, montados por profesionales
          </div>
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-2 md:gap-x-16">
            {MATERIALS.map((m) => (
              <li key={m} className="font-heading text-2xl md:text-3xl tracking-[-0.01em] text-white/85">
                {m}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="liquid-glass p-4 sm:p-5 w-[160px] sm:w-[220px] rounded-[1.25rem] text-left">
      <span className="text-eco-light">{icon}</span>
      <div className="text-4xl font-heading tracking-[-0.02em] leading-none mt-4">{value}</div>
      <div className="mt-2 text-sm font-body font-light text-white/80 leading-snug">{label}</div>
    </div>
  )
}
