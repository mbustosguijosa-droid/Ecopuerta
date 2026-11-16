import type { CSSProperties } from 'react'

/**
 * Mariposas animadas en SVG + CSS (sin vídeo).
 * Cada una vuela por una ruta propia (variables CSS --x0..--y4) mientras bate las alas.
 * Solo se anima transform, así que es muy ligero.
 */

type Palette = { a: string; b: string; edge: string }

const PALETTES: Record<string, Palette> = {
  verde: { a: '#E4F7EA', b: '#5DBE78', edge: '#1F6B37' },
  ambar: { a: '#FBE7C2', b: '#D99A4E', edge: '#7A4A26' },
  blanca: { a: '#FFFFFF', b: '#B9D9C4', edge: '#5E7F69' },
}

export function ButterflyShape({ palette = 'verde', flap = 0.32 }: { palette?: keyof typeof PALETTES; flap?: number }) {
  const p = PALETTES[palette]
  const id = `bf-${palette}`
  return (
    <svg viewBox="-50 -40 100 80" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="30%" cy="40%" r="80%">
          <stop offset="0%" stopColor={p.a} />
          <stop offset="70%" stopColor={p.b} />
          <stop offset="100%" stopColor={p.edge} />
        </radialGradient>
      </defs>
      {/* ala izquierda */}
      <g className="bf-wing bf-wing-l" style={{ animationDuration: `${flap}s` }}>
        <path d="M-2 -2 C-18 -34 -48 -30 -44 -8 C-42 4 -24 6 -2 2 Z" fill={`url(#${id})`} />
        <path d="M-2 2 C-22 6 -36 18 -28 28 C-20 36 -8 22 -2 6 Z" fill={`url(#${id})`} opacity="0.9" />
        <circle cx="-30" cy="-14" r="3" fill={p.edge} opacity="0.45" />
      </g>
      {/* ala derecha */}
      <g className="bf-wing bf-wing-r" style={{ animationDuration: `${flap}s` }}>
        <path d="M2 -2 C18 -34 48 -30 44 -8 C42 4 24 6 2 2 Z" fill={`url(#${id})`} />
        <path d="M2 2 C22 6 36 18 28 28 C20 36 8 22 2 6 Z" fill={`url(#${id})`} opacity="0.9" />
        <circle cx="30" cy="-14" r="3" fill={p.edge} opacity="0.45" />
      </g>
      {/* cuerpo y antenas */}
      <ellipse cx="0" cy="2" rx="2.4" ry="14" fill="#1a1a1a" />
      <path d="M-1 -11 C-4 -20 -8 -24 -11 -26 M1 -11 C4 -20 8 -24 11 -26" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

type Flight = {
  palette: keyof typeof PALETTES
  size: number // px
  duration: number // s
  delay: number // s
  path: [number, number][] // 5 puntos en vw/vh
  mobile?: boolean
}

// Rutas pensadas para rodear el titular y la cúpula sin taparlos demasiado
const FLIGHTS: Flight[] = [
  { palette: 'verde', size: 53, duration: 26, delay: 0, mobile: true, path: [[8, 70], [22, 48], [14, 28], [30, 18], [44, 34]] },
  { palette: 'ambar', size: 42, duration: 31, delay: -8, mobile: true, path: [[88, 62], [72, 42], [84, 24], [66, 14], [58, 38]] },
  { palette: 'blanca', size: 34, duration: 22, delay: -4, path: [[30, 86], [38, 66], [26, 54], [40, 40], [34, 72]] },
  { palette: 'verde', size: 39, duration: 34, delay: -15, mobile: true, path: [[70, 88], [62, 70], [78, 58], [70, 40], [82, 30]] },
  { palette: 'ambar', size: 31, duration: 28, delay: -20, path: [[12, 20], [24, 34], [10, 50], [20, 62], [6, 40]] },
  { palette: 'blanca', size: 28, duration: 24, delay: -11, mobile: true, path: [[92, 22], [80, 36], [92, 50], [76, 64], [88, 80]] },
  { palette: 'verde', size: 25, duration: 36, delay: -25, path: [[52, 12], [64, 24], [48, 30], [36, 20], [46, 8]] },
]

export default function Butterflies({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {FLIGHTS.map((f, i) => {
        const vars: Record<string, string> = {}
        f.path.forEach(([x, y], k) => {
          vars[`--x${k}`] = `${x}vw`
          vars[`--y${k}`] = `${y}vh`
        })
        return (
          <div
            key={i}
            className={`bf-flight absolute left-0 top-0 ${f.mobile ? '' : 'hidden md:block'}`}
            style={
              {
                ...vars,
                width: f.size,
                height: f.size,
                animationDuration: `${f.duration}s`,
                animationDelay: `${f.delay}s`,
              } as CSSProperties
            }
          >
            <div className="bf-bob h-full w-full" style={{ animationDelay: `${i * -0.7}s` }}>
              <ButterflyShape palette={f.palette} flap={0.22 + (i % 3) * 0.06} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
