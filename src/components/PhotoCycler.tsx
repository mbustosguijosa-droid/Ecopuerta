import { useEffect, useRef, useState } from 'react'

export type Photo = { src: string; alt: string }

/**
 * Muestra una foto y, mientras el cursor está encima (o tras tocarla en móvil),
 * va pasando por las demás en orden aleatorio con un fundido suave.
 * Para añadir fotos basta con añadirlas a la lista `photos`.
 */
export default function PhotoCycler({
  photos,
  interval = 1500,
  className = '',
  overlay = true,
}: {
  photos: Photo[]
  interval?: number
  className?: string
  overlay?: boolean
}) {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)
  const timer = useRef<number | null>(null)
  const canCycle = photos.length > 1

  useEffect(() => {
    if (!active || !canCycle) return
    const next = () =>
      setIndex((current) => {
        let n = current
        while (n === current) n = Math.floor(Math.random() * photos.length)
        return n
      })
    next()
    timer.current = window.setInterval(next, interval)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [active, canCycle, interval, photos.length])

  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(true)}
      onPointerLeave={(e) => {
        if (e.pointerType !== 'mouse') return
        setActive(false)
        setIndex(0)
      }}
      onClick={() => canCycle && setActive((a) => !a)}
    >
      {photos.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={i === index ? p.alt : ''}
          aria-hidden={i !== index}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${active ? 'scale-[1.05]' : 'scale-100'}`}
        />
      ))}
      {overlay && <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/90" />}
      {canCycle && (
        <div className="pointer-events-none absolute bottom-3 right-4 flex gap-1">
          {photos.map((p, i) => (
            <span
              key={p.src}
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-4 bg-white/90' : 'w-1 bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
