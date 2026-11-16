import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'p'
}

export default function BlurText({ text, className, as = 'h1' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = motion[as]

  return (
    <Tag
      ref={ref as never}
      className={className}
      aria-label={text}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden="true"
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
