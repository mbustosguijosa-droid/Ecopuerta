import { motion } from 'framer-motion'
import { Section, SectionHeader, revealDelay } from './ui'

// Cada material lleva una "muestra" hecha con CSS (sin fotos), como un muestrario.
const MATERIALS = [
  {
    name: 'Madera',
    text: 'Maciza, chapada o lacada. Roble, nogal, haya… con barnices que protegen y realzan la veta.',
    swatch: 'swatch-wood',
  },
  {
    name: 'PVC',
    text: 'Resistente a la humedad y sin mantenimiento. Ideal para cerramientos, baños y exteriores.',
    swatch: 'swatch-pvc',
  },
  {
    name: 'Aluminio',
    text: 'Ligero, duradero y de líneas finas. Perfiles para cerramientos, correderas y frentes modernos.',
    swatch: 'swatch-alu',
  },
  {
    name: 'Vidrio',
    text: 'Transparente, mateado o grabado. Luz natural sin perder intimidad en puertas y divisiones.',
    swatch: 'swatch-glass',
  },
  {
    name: 'Herrajes',
    text: 'Bisagras, cerraduras de seguridad, tiradores y guías. Lo que no se ve también se elige bien.',
    swatch: 'swatch-metal',
  },
]

export default function Materials() {
  return (
    <Section id="materiales">
      <SectionHeader
        label="Materiales"
        intro="Trabajamos con los materiales de siempre y con los mejores proveedores. Te ayudamos a elegir el adecuado para cada espacio."
      >
        El material <span className="em">correcto</span>
        <br />
        para cada puerta
      </SectionHeader>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {MATERIALS.map((m, i) => (
          <motion.article
            key={m.name}
            {...revealDelay(i)}
            className="group liquid-glass rounded-[1.25rem] p-3 flex flex-col"
          >
            <div
              className={`${m.swatch} relative h-44 rounded-[0.9rem] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[0.98]`}
            />
            <div className="p-3 pt-5">
              <h3 className="font-heading text-3xl tracking-[-0.02em]">{m.name}</h3>
              <p className="mt-2 text-sm font-body font-light text-white/70 leading-snug">{m.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
