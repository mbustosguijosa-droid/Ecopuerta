import { useEffect, useRef, useState, type CSSProperties } from 'react'

type Props = {
  src: string | string[]
  className?: string
  style?: CSSProperties
}

const FADE_IN_MS = 500
const FADE_OUT_MS = 550
const FADE_OUT_LEAD_S = 0.55

export default function FadingVideo({ src, className, style }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)
  const sources = Array.isArray(src) ? src : [src]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.style.opacity = '0'

    const fadeTo = (target: number, duration: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const from = parseFloat(video.style.opacity || '0')
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        video.style.opacity = String(from + (target - from) * t)
        if (t < 1) rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    const onLoaded = () => {
      fadingOutRef.current = false
      fadeTo(1, FADE_IN_MS)
    }

    const onTimeUpdate = () => {
      if (!video.duration || fadingOutRef.current) return
      if (video.duration - video.currentTime <= FADE_OUT_LEAD_S) {
        fadingOutRef.current = true
        fadeTo(0, FADE_OUT_MS)
      }
    }

    const onEnded = () => {
      if (sources.length === 1) {
        video.currentTime = 0
        void video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_IN_MS)
      } else {
        setIndex((i) => (i + 1) % sources.length)
      }
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    if (video.readyState >= 2) onLoaded()

    return () => {
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, sources.join('|')])

  // Pausa el vídeo cuando no está en pantalla (ahorra CPU/batería y evita tirones)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) void video.play().catch(() => {})
      else video.pause()
    })
    io.observe(video)
    return () => io.disconnect()
  }, [index])

  return (
    <video
      ref={videoRef}
      key={sources[index]}
      src={sources[index]}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )
}
