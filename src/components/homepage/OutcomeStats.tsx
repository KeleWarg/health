'use client'

import * as React from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Parallax } from '@/components/Parallax'

const stats = [
  { value: 15, suffix: '%', label: 'Avg. body weight lost on semaglutide*' },
  { value: 30, suffix: ' min', label: 'Time to effect for sildenafil*' },
  { value: 90, suffix: '%', label: 'Of hair loss is DHT-related and treatable*' },
  { value: 1, suffix: ' platform', label: 'Four treatments. One care team.' },
]

const STAGGER_MT = ['mt-0', 'mt-12', 'mt-4', 'mt-16']

function useCountUp(end: number, trigger: boolean, duration = 1500) {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!trigger) return
    let raf: number
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [trigger, end, duration])

  return current
}

function StatValue({ end, suffix, trigger }: { end: number; suffix: string; trigger: boolean }) {
  const count = useCountUp(end, trigger)
  return (
    <span className="font-display text-white font-bold" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
      {count}{suffix}
    </span>
  )
}

export function OutcomeStats() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
            padding: '64px 24px',
          }}
        >
          {/* Hero image — foreground, right-aligned */}
          <Parallax speed={-0.04} className="absolute top-0 right-0 h-[90%] w-auto z-[1] hidden lg:block">
            <img
              src="/AdobeStock_507785886 3.png"
              alt=""
              className="h-full w-auto object-contain pointer-events-none animate-float"
              style={{ filter: 'drop-shadow(-20px 0 40px rgba(0,0,0,0.4))' }}
            />
          </Parallax>

          {/* Gradient fade on the left edge of the image so text stays readable */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none rounded-2xl hidden lg:block"
            style={{
              background: 'linear-gradient(to right, rgba(44,24,16,1) 0%, rgba(44,24,16,0.95) 40%, rgba(44,24,16,0.4) 65%, transparent 80%)',
            }}
          />

          {/* Subtle dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-2xl"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Mobile hero image — in-flow, above stats */}
          <div className="relative z-[3] -mt-16 -mx-6 mb-4 lg:hidden">
            <img
              src="/AdobeStock_507785886 3.png"
              alt=""
              className="w-full h-auto object-cover max-h-[240px] object-[center_15%] animate-float"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(44,24,16,1) 0%, rgba(44,24,16,0) 40%)',
              }}
            />
          </div>

          <div className="relative z-[5] px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-white/50 text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Backed by Science</p>
          <h2
            className="font-display font-medium text-white mb-4"
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)' }}
          >
            Real results.<br />Measured, not&nbsp;promised.
          </h2>
          <p className="text-white/55 text-base max-w-[480px]">
            Every treatment we prescribe is supported by published clinical research.
          </p>
        </div>

        {/* Desktop: staggered stems layout */}
        <div className="hidden md:flex items-end relative">
          {/* Horizontal baseline */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, transparent 1px, transparent 40px)',
              backgroundSize: '40px 1px',
            }}
          />

          <div className="flex w-full justify-between gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 120}
                className={`flex flex-col items-center flex-1 ${STAGGER_MT[i]}`}
              >
                <div className="w-[200px] p-5">
                  <StatValue end={stat.value} suffix={stat.suffix} trigger={visible} />
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    {stat.label}
                  </p>
                </div>

                {/* Stem */}
                <div className="w-px flex-1 min-h-[32px] bg-white/20" />

                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-white/50 shrink-0 translate-y-[3px]" />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5">
              <StatValue end={stat.value} suffix={stat.suffix} trigger={visible} />
              <p className="text-white/60 text-sm leading-relaxed mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  )
}
