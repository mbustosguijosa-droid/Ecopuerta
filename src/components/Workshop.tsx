import { motion } from 'framer-motion'
import { Section, SectionHeader, reveal, revealDelay } from './ui'
import { ArrowUpRight } from './Icons'
import { ADDRESS, MAPS_QUERY } from '../data'

// TEXTOS PROVISIONALES — pendientes de los datos reales de la familia.
const TIMELINE = [
  {
    year: 'Años 90',
    title: 'Empieza el oficio',
    text: 'Los primeros trabajos de carpintería y montaje: puertas, armarios y mucha obra a pie de casa.',
  },
  {
    year: '2007',
    title: 'Nace Ecopuerta Factory',
    text: 'La experiencia de años se convierte en empresa propia, con taller y equipo de montaje.',
  },
  {
    year: 'Hoy',
    title: 'El mismo cuidado, más oficio',
    text: 'Seguimos diseñando, fabricando e instalando a medida, con la cercanía de siempre.',
  },
]

const STATS = [
  { value: '30+', label: 'años de oficio' },
  { value: '2007', label: 'año de fundación' },
  { value: '100%', label: 'a medida' },
]

const VALUES = ['Trato cercano', 'Medición profesional', 'Productos de calidad', 'Montaje seguro', 'Hecho a mano']

export default function Workshop() {
  return (
    <Section id="taller" className="bg-gradient-to-b from-black via-[#06100a] to-black">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <SectionHeader
            label="El taller"
            intro={
              <>
                Somos una empresa familiar y nos gusta el trato cercano: hablas siempre con nosotros, de principio a
                fin. Tomamos las medidas en tu casa con precisión profesional, trabajamos solo con productos de
                primera calidad y montamos cada puerta con seguridad y garantía.
              </>
            }
          >
            Una familia,
            <br />
            <span className="em">un oficio</span>
          </SectionHeader>

          <motion.ul {...reveal} className="mt-10 flex flex-wrap gap-2">
            {VALUES.map((v) => (
              <li key={v} className="liquid-glass rounded-full px-4 py-1.5 text-sm font-body text-white/85">
                {v}
              </li>
            ))}
          </motion.ul>

          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...revealDelay(i)} className="liquid-glass rounded-[1.25rem] p-4 sm:p-5">
                <div className="font-heading text-3xl sm:text-4xl tracking-[-0.02em] leading-none">{s.value}</div>
                <div className="mt-2 text-xs sm:text-sm font-body font-light text-white/70 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <ol className="relative border-l border-white/15 ml-2 lg:mt-24">
          {TIMELINE.map((step, i) => (
            <motion.li key={step.year} {...revealDelay(i)} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-eco-light shadow-[0_0_0_4px_rgba(107,203,133,0.15)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-eco-light font-body">{step.year}</p>
              <h3 className="mt-2 font-heading text-3xl md:text-4xl tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-white/70 font-body font-light leading-relaxed max-w-md">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Dónde estamos */}
      <div className="mt-24 grid gap-6 lg:grid-cols-[0.8fr_1.6fr] items-stretch">
        <motion.div {...reveal} className="liquid-glass rounded-[1.5rem] p-7 md:p-8 flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-eco-light font-body">Visítanos</p>
            <h3 className="mt-3 font-heading text-4xl md:text-5xl tracking-[-0.02em] leading-[1.02]">
              Nuestro <span className="em">taller</span>
            </h3>
            <address className="mt-6 not-italic font-body text-white/80 leading-relaxed">
              {ADDRESS.street}
              <br />
              {ADDRESS.area}
              <br />
              {ADDRESS.city}
            </address>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`}
            target="_blank"
            rel="noreferrer"
            className="self-start inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
          >
            Cómo llegar
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div {...reveal} className="liquid-glass relative rounded-[1.5rem] overflow-hidden min-h-[340px] md:min-h-[420px]">
          <iframe
            title="Vista aérea del taller de Ecopuerta Factory en el Polígono El Laurel"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&t=k&z=17&ie=UTF8&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.9)_contrast(1.05)]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_80px_rgba(0,0,0,0.55)]" />
        </motion.div>
      </div>
    </Section>
  )
}
