import { motion } from 'framer-motion'

/**
 * El logotipo a gran escala: un arco de cristal (la puerta) que protege un brote.
 * El arco se dibuja, el tallo crece, las hojas se abren y después se mecen.
 * Las animaciones continuas son CSS sobre transform (ligeras).
 */
const ease = [0.22, 1, 0.36, 1] as const

export default function HeroPlant({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 800" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="plant-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3FA45B" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#3FA45B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3FA45B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="leaf-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1F6B37" />
          <stop offset="60%" stopColor="#3FA45B" />
          <stop offset="100%" stopColor="#8FD9A2" />
        </linearGradient>
        <linearGradient id="leaf-b" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2A8547" />
          <stop offset="100%" stopColor="#A7E3B6" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* halo de luz tras el brote */}
      <motion.circle
        cx="300"
        cy="540"
        r="260"
        fill="url(#plant-glow)"
        className="plant-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 1.2 }}
      />

      {/* arco de cristal */}
      <motion.path
        d="M120 780 V300 A180 180 0 0 1 480 300 V780"
        fill="none"
        stroke="url(#glass)"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease }}
      />
      {/* reflejo interior del cristal */}
      <motion.path
        d="M152 740 V306 A148 148 0 0 1 232 176"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.1"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease, delay: 0.6 }}
      />
      {/* suelo */}
      <motion.path
        d="M40 780 H560"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.3 }}
      />
      {/* pomo */}
      <motion.circle
        cx="436"
        cy="560"
        r="6"
        fill="#ffffff"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      />

      {/* planta: todo el conjunto se mece desde la base */}
      <g className="plant-sway">
        <motion.path
          d="M300 780 C297 700 305 630 300 560 C296 500 303 460 300 410"
          fill="none"
          stroke="#6BCB85"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.9 }}
        />

        {/* hoja izquierda (grande) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ originX: 1, originY: 1 }}
          transition={{ duration: 1.3, ease, delay: 1.7 }}
        >
          <g className="leaf-sway-l">
            <path d="M300 612 C246 614 196 584 184 516 C246 512 292 552 300 612Z" fill="url(#leaf-a)" />
            <path d="M300 612 C262 590 226 556 196 524" fill="none" stroke="#0f3d1f" strokeOpacity="0.35" strokeWidth="2" />
          </g>
        </motion.g>

        {/* hoja derecha */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ originX: 0, originY: 1 }}
          transition={{ duration: 1.3, ease, delay: 2 }}
        >
          <g className="leaf-sway-r">
            <path d="M301 548 C348 548 392 520 400 462 C347 462 308 494 301 548Z" fill="url(#leaf-b)" />
            <path d="M301 548 C334 526 364 498 390 470" fill="none" stroke="#0f3d1f" strokeOpacity="0.3" strokeWidth="2" />
          </g>
        </motion.g>

        {/* yema superior */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ originX: 0.5, originY: 1 }}
          transition={{ duration: 1.1, ease, delay: 2.3 }}
        >
          <g className="leaf-sway-t">
            <path d="M300 414 C284 390 286 360 300 340 C314 360 316 390 300 414Z" fill="#A7E3B6" />
          </g>
        </motion.g>
      </g>

      {/* polen flotando */}
      <g className="pollen" fill="#CDEFD6">
        <circle cx="250" cy="470" r="2" style={{ animationDelay: '0s' }} />
        <circle cx="352" cy="420" r="1.6" style={{ animationDelay: '2.5s' }} />
        <circle cx="330" cy="610" r="1.8" style={{ animationDelay: '5s' }} />
        <circle cx="228" cy="560" r="1.4" style={{ animationDelay: '7.5s' }} />
        <circle cx="380" cy="520" r="1.5" style={{ animationDelay: '3.7s' }} />
      </g>
    </svg>
  )
}
