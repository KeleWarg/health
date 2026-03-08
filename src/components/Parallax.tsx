'use client'
import * as React from 'react'

interface Props {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.1, className }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const offset = React.useRef(0)
  const raf = React.useRef(0)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    function update() {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      offset.current = (center - viewCenter) * speed
      el.style.transform = `translateY(${offset.current}px)`
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        raf.current = requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
