import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = { width: 24, height: 24, viewBox: '0 0 24 24', 'aria-hidden': true } as const

export const ArrowUpRight = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

export const Play = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <polygon points="6 4 20 12 6 20 6 4" />
  </svg>
)

export const ClockIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

/** Mano artesana: sustituye al GlobeIcon del prompt (más fiel al "hecho a mano"). */
export const HandIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
    <path d="M14 10V4a2 2 0 0 0-4 0v6" />
    <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
)

/** Puerta (sustituye ImageIcon) */
export const DoorIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17h2v2H3v-2h2V3Zm10 8.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
  </svg>
)

/** Percha / armario (sustituye MovieIcon) */
export const HangerIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 7.5a2.5 2.5 0 1 1 2.5-2.5c0 1.2-.9 1.8-2.5 2.6V9" />
    <path d="M12 9l9 6.2a1.5 1.5 0 0 1-.85 2.8H3.85A1.5 1.5 0 0 1 3 15.2L12 9Z" />
  </svg>
)

/** Escudo (sustituye LightbulbIcon) */
export const ShieldIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 1.5 4 4.6v6.1c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V4.6l-8-3.1Zm-1.2 14.7-3.6-3.6 1.4-1.4 2.2 2.2 4.8-4.8 1.4 1.4-6.2 6.2Z" />
  </svg>
)

export const MailIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const InstagramIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46H16.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.95v2.25H8v3h2.5V21h3Z" />
  </svg>
)

/** Casa (puertas para el hogar) */
export const HomeIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 3 2.5 11h2.5v9h5.5v-6h3v6H19v-9h2.5L12 3Z" />
  </svg>
)
