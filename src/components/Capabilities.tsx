import { motion } from "framer-motion";
import type { ReactNode } from "react";
import WoodGrain from "./WoodGrain";
import { LogoLockup } from "./Logo";
import {
  DoorIcon,
  FacebookIcon,
  HangerIcon,
  InstagramIcon,
  MailIcon,
  ShieldIcon,
} from "./Icons";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAILTO,
} from "../data";

type Card = {
  title: string;
  icon: ReactNode;
  tags: string[];
  body: string;
  images: { src: string; alt: string }[];
};

const CARDS: Card[] = [
  {
    title: "Puertas a medida",
    icon: <DoorIcon className="h-5 w-5" />,
    tags: ["Diseño propio", "Lacadas", "Madera", "Fresados"],
    body: "Diseñamos contigo cada puerta: modelo, acabado y herrajes. Lacadas, en madera o con fresados exclusivos, fabricadas a mano y ajustadas al milímetro.",
    images: [
      {
        src: "/img/puertas-lacadas.webp",
        alt: "Dos puertas de interior lacadas en blanco con fresados horizontales",
      },
    ],
  },
  {
    title: "Armarios y vestidores",
    icon: <HangerIcon className="h-5 w-5" />,
    tags: ["Empotrados", "Vestidores", "Luz LED", "Interiores"],
    body: "Armarios empotrados y vestidores pensados para tu espacio: interiores a medida, iluminación integrada y frentes que se funden con la casa.",
    images: [
      {
        src: "/img/vestidor.webp",
        alt: "Vestidor en U con iluminación LED, cajonera central y barras de colgar",
      },
      {
        src: "/img/armario-empotrado.webp",
        alt: "Armario empotrado de siete puertas lacadas en blanco con molduras clásicas",
      },
    ],
  },
  {
    title: "Entrada y seguridad",
    icon: <ShieldIcon className="h-5 w-5" />,
    tags: ["Acorazadas", "Seguridad", "PVC", "Aluminio"],
    body: "Puertas de seguridad, acorazadas y cerramientos en PVC y aluminio. Montaje profesional, herrajes de calidad y barnizados que aguantan el paso del tiempo.",
    images: [
      {
        src: "/img/puerta-seguridad.webp",
        alt: "Puerta de seguridad con acabado madera, tirador largo de acero y bisagras reforzadas",
      },
    ],
  },
];

const reveal = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function Capabilities() {
  return (
    <section
      id="servicios"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <WoodGrain animate={false} className="opacity-60" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <motion.header
          {...reveal}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-auto"
        >
          <p className="text-sm font-body text-white/80 mb-6">
            <span className="text-eco-light">//</span> Lo que hacemos
          </p>
          <h2 className="font-heading text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-[-0.025em]">
            Oficio <span className="em">artesano</span>,
            <br />
            de principio a fin
          </h2>
        </motion.header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              {...reveal}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.12 }}
              className="group liquid-glass rounded-[1.25rem] p-6 min-h-[440px] flex flex-col"
            >
              <CardPhotos images={card.images} />

              <div className="relative flex items-start justify-between gap-4">
                <div className="liquid-glass h-11 w-11 shrink-0 rounded-[0.75rem] flex items-center justify-center text-eco-light">
                  {card.icon}
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

              <div className="relative">
                <h3 className="font-heading text-3xl md:text-[2.5rem] tracking-[-0.02em] leading-[1.05]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contacto */}
        <motion.footer
          id="contacto"
          {...reveal}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 liquid-glass rounded-[1.25rem] p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between"
        >
          <div className="flex flex-col gap-3">
            <LogoLockup />
            <p className="text-sm font-body font-light text-white/80 max-w-md leading-snug">
              Cuéntanos tu proyecto y te preparamos un presupuesto sin
              compromiso. Te respondemos personalmente, como siempre.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black font-body hover:bg-eco-light transition-colors"
            >
              <MailIcon className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Ecopuerta Factory"
                className="liquid-glass h-11 w-11 rounded-full flex items-center justify-center hover:text-eco-light transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Ecopuerta Factory"
                className="liquid-glass h-11 w-11 rounded-full flex items-center justify-center hover:text-eco-light transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.footer>

        <p className="mt-6 text-xs font-body text-white/50 text-center">
          © 2007–{new Date().getFullYear()} Ecopuerta Factory · Carpintería,
          montaje e instalación a medida
        </p>
      </div>
    </section>
  );
}

/** Foto(s) de fondo de la tarjeta. Si hay dos, la segunda aparece al pasar el ratón. */
function CardPhotos({ images }: { images: Card["images"] }) {
  const [first, second] = images;
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden rounded-[inherit]">
      <img
        src={first.src}
        alt={first.alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-700 ease-out group-hover:scale-105 ${
          second ? "group-hover:opacity-0" : ""
        }`}
      />
      {second && (
        <img
          src={second.src}
          alt={second.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/90" />
    </div>
  );
}
