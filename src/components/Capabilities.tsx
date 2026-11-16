import { motion } from 'framer-motion'
import WoodGrain from './WoodGrain'
import PhotoCycler from './PhotoCycler'
import { DoorIcon, HangerIcon, HomeIcon } from './Icons'
import { SectionHeader, revealDelay } from './ui'
import { SERVICES } from '../data'

const ICONS = {
  puertas: <DoorIcon className="h-5 w-5" />,
  armarios: <HangerIcon className="h-5 w-5" />,
  hogar: <HomeIcon className="h-5 w-5" />,
}

export default function Capabilities() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-black">
      <WoodGrain animate={false} className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 py-24 md:py-32">
        <SectionHeader label="Lo que hacemos">
          Oficio <span className="em">artesano</span>,
          <br />
          de principio a fin
        </SectionHeader>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((card, i) => (
            <motion.article
              key={card.key}
              {...revealDelay(i)}
              className="group liquid-glass rounded-[1.25rem] p-6 min-h-[440px] flex flex-col"
            >
              <PhotoCycler photos={[...card.photos]} />

              <div className="pointer-events-none relative flex items-start justify-between gap-4">
                <div className="liquid-glass h-11 w-11 shrink-0 rounded-[0.75rem] flex items-center justify-center text-eco-light">
                  {ICONS[card.key]}
                </div>
                <ul className="flex flex-wrap justify-end gap-1.5">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1" />

              <div className="pointer-events-none relative">
                <h3 className="font-heading text-3xl md:text-[2.5rem] tracking-[-0.02em] leading-[1.05]">{card.title}</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[34ch]">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
