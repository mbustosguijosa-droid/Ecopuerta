import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Fondo de vetas de madera generado en SVG.
 * Las líneas rodean dos "nudos" como en un tablón real. Al cargar se dibujan,
 * y después el conjunto "respira" muy despacio. Solo se anima transform/opacity
 * (compuesto en GPU), así que no penaliza el rendimiento.
 */

const W = 1600
const H = 1000

type Knot = { x: number; y: number; sx: number; sy: number; strength: number }

const KNOTS: Knot[] = [
  { x: 1120, y: 360, sx: 170, sy: 75, strength: 70 },
  { x: 380, y: 720, sx: 120, sy: 55, strength: 48 },
]

function grainLines(count: number, seed: number) {
  const lines: string[] = []
  const spacing = H / (count - 1)
  for (let i = 0; i < count; i++) {
    const y0 = i * spacing
    const phase = (i * 0.37 + seed) % (Math.PI * 2)
    let d = ''
    for (let x = -40; x <= W + 40; x += 16) {
      let y = y0 + Math.sin(x * 0.0021 + phase) * 9 + Math.sin(x * 0.0007 + i * 0.11) * 22
      for (const k of KNOTS) {
        const dy = y0 - k.y
        const fall = Math.exp(-((x - k.x) ** 2) / (2 * k.sx ** 2)) * Math.exp(-(dy ** 2) / (2 * (k.sy * 2.4) ** 2))
        y += Math.sign(dy || 1) * k.strength * fall
      }
      d += `${d ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
    }
    lines.push(d)
  }
  return lines
}

function knotRings(k: Knot, rings: number) {
  return Array.from({ length: rings }, (_, r) => {
    const t = (r + 1) / rings
    return { rx: k.sx * 0.42 * t, ry: k.sy * 0.42 * t }
  })
}

export default function WoodGrain({ animate = true, className = '' }: { animate?: boolean; className?: string }) {
  const lines = useMemo(() => grainLines(46, 1.3), [])
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  // Pausa la animación cuando el fondo no está en pantalla
  useEffect(() => {
    if (!animate || !ref.current) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    io.observe(ref.current)
    return () => io.disconnect()
  }, [animate])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden [contain:paint] ${visible ? '' : 'grain-paused'} ${className}`}
    >
      {/* luz cálida que recorre la madera */}
      <div className="grain-glow absolute -inset-[20%]" />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 h-full w-full ${animate ? 'grain-breathe' : ''}`}
      >
        <defs>
          <linearGradient id="grain-stroke" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E9DCC6" stopOpacity="0.16" />
            <stop offset="55%" stopColor="#6BCB85" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E9DCC6" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#grain-stroke)" strokeWidth="1" vectorEffect="non-scaling-stroke">
          {lines.map((d, i) => (
            <path
              key={i}
              d={d}
              pathLength={1}
              className={animate ? 'grain-draw' : undefined}
              style={animate ? { animationDelay: `${(i % 23) * 55}ms` } : undefined}
              strokeWidth={i % 7 === 0 ? 1.6 : 1}
            />
          ))}
          {KNOTS.map((k, ki) =>
            knotRings(k, 6).map((r, ri) => (
              <ellipse
                key={`${ki}-${ri}`}
                cx={k.x}
                cy={k.y}
                rx={r.rx}
                ry={r.ry}
                pathLength={1}
                className={animate ? 'grain-draw' : undefined}
                style={animate ? { animationDelay: `${600 + ri * 90}ms` } : undefined}
              />
            )),
          )}
        </g>
      </svg>

      {/* viñeta para que el texto respire */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.7)_65%,#000_100%)]" />
    </div>
  )
}
