import { motion } from 'framer-motion'

/**
 * El logotipo a gran escala: una cúpula de cristal sobre una peana de madera
 * que protege un brote. La cúpula se dibuja, el tallo crece, las hojas se abren
 * y después la planta se mece dentro del cristal. Las animaciones continuas son
 * CSS sobre transform (ligeras).
 */
const ease = [0.22, 1, 0.36, 1] as const

// Geometría de la cúpula
const L = 150 // borde izquierdo
const R = 450 // borde derecho
const TOP = 330 // centro del arco
const RIM = 712 // base del cristal
const DOME = `M${L} ${RIM} V${TOP} A150 150 0 0 1 ${R} ${TOP} V${RIM}`

export default function HeroPlant({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 800" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="plant-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3FA45B" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#3FA45B" stopOpacity="0.14" />
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

        {/* cristal: más brillante en los bordes, casi transparente en el centro */}
        <linearGradient id="glass-fill" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="14%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.015" />
          <stop offset="86%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.13" />
        </linearGradient>
        <linearGradient id="glass-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="dome-clip">
          <path d={`${DOME} Z`} />
        </clipPath>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        {/* peana de madera */}
        <linearGradient id="wood-side" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3b2414" />
          <stop offset="35%" stopColor="#7a4a26" />
          <stop offset="60%" stopColor="#5e381c" />
          <stop offset="100%" stopColor="#2b190d" />
        </linearGradient>
        <linearGradient id="wood-top" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9a6234" />
          <stop offset="100%" stopColor="#5a3519" />
        </linearGradient>
      </defs>

      {/* halo de luz tras el brote */}
      <motion.circle
        cx="300"
        cy="520"
        r="250"
        fill="url(#plant-glow)"
        className="plant-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 1.2 }}
      />

      {/* peana */}
      <motion.g initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease }}>
        <ellipse cx="300" cy="768" rx="195" ry="24" fill="#000" opacity="0.6" filter="url(#soft)" />
        <path d="M105 722 V752 A195 24 0 0 0 495 752 V722 Z" fill="url(#wood-side)" />
        <ellipse cx="300" cy="722" rx="195" ry="24" fill="url(#wood-top)" />
        <ellipse cx="300" cy="722" rx="195" ry="24" fill="none" stroke="#c48a55" strokeOpacity="0.5" />
        {/* vetas de la peana */}
        <path d="M130 740 C200 746 260 736 330 744 S440 748 480 738" fill="none" stroke="#2b190d" strokeOpacity="0.5" />
        <path d="M120 750 C190 758 280 750 360 758" fill="none" stroke="#c48a55" strokeOpacity="0.2" />
      </motion.g>

      {/* parte trasera del aro del cristal */}
      <motion.ellipse
        cx="300"
        cy={RIM}
        rx={(R - L) / 2}
        ry="16"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* planta (dentro del cristal): todo el conjunto se mece desde la base */}
      <g transform="translate(0 -66)">
        <g className="plant-sway">
          <motion.path
            d="M300 780 C297 700 305 630 300 560 C296 500 303 460 300 420"
            fill="none"
            stroke="#6BCB85"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease, delay: 0.9 }}
          />
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
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ originX: 0.5, originY: 1 }}
            transition={{ duration: 1.1, ease, delay: 2.3 }}
          >
            <g className="leaf-sway-t">
              <path d="M300 424 C284 400 286 370 300 350 C314 370 316 400 300 424Z" fill="#A7E3B6" />
            </g>
          </motion.g>
        </g>

        {/* polen flotando dentro de la cúpula */}
        <g className="pollen" fill="#CDEFD6">
          <circle cx="250" cy="500" r="2" style={{ animationDelay: '0s' }} />
          <circle cx="352" cy="450" r="1.6" style={{ animationDelay: '2.5s' }} />
          <circle cx="330" cy="640" r="1.8" style={{ animationDelay: '5s' }} />
          <circle cx="228" cy="590" r="1.4" style={{ animationDelay: '7.5s' }} />
          <circle cx="380" cy="560" r="1.5" style={{ animationDelay: '3.7s' }} />
        </g>
      </g>

      {/* cristal */}
      <motion.path
        d={`${DOME} Z`}
        fill="url(#glass-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1 }}
      />
      {/* brillo que recorre el cristal */}
      <g clipPath="url(#dome-clip)">
        <rect className="glass-shine" x="40" y="120" width="110" height="640" fill="url(#shine)" transform="skewX(-14)" />
      </g>
      <motion.path
        d={DOME}
        fill="none"
        stroke="url(#glass-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease }}
      />
      {/* reflejos */}
      <motion.path
        d="M176 690 V338 A124 124 0 0 1 238 232"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="9"
        strokeLinecap="round"
        filter="url(#soft)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease, delay: 0.6 }}
      />
      <motion.path
        d="M184 640 V350"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease, delay: 1 }}
      />
      <motion.path
        d="M428 610 V360 A124 124 0 0 0 404 290"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.16"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease, delay: 1.1 }}
      />

      {/* parte delantera del aro */}
      <motion.path
        d={`M${L} ${RIM} A150 16 0 0 0 ${R} ${RIM}`}
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.9 }}
      />

      {/* pomo de la cúpula */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.9 }}>
        <rect x="294" y="164" width="12" height="18" rx="3" fill="#ffffff" fillOpacity="0.25" />
        <circle cx="300" cy="156" r="14" fill="#ffffff" fillOpacity="0.14" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="295" cy="151" r="4" fill="#ffffff" fillOpacity="0.7" />
      </motion.g>
    </svg>
  )
}
