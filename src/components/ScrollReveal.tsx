'use client'
import * as React from 'react'

type Direction = 'up' | 'left' | 'right'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

const OFFSETS: Record<Direction, string> = {
  up: 'translateY(24px)',
  left: 'translateX(-24px)',
  right: 'translateX(24px)',
}

export function ScrollReveal({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : OFFSETS[direction],
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
