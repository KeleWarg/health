'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    title: 'Weight Loss',
    headline: 'Lose weight with a prescription that works.',
    image: '/weight-loss-hero.png',
    href: '/weight-loss',
    gradient: 'linear-gradient(135deg, #1e1c0f 0%, #3d3820 60%, #5c5228 100%)',
    accent: '#c8b46a',
  },
  {
    title: 'Hair Loss',
    headline: 'Thicker hair starts here.',
    image: '/hair-loss-generated.png',
    href: '/hair-loss',
    gradient: 'linear-gradient(135deg, #261214 0%, #4a2428 60%, #6b3538 100%)',
    accent: '#c49fa8',
  },
  {
    title: 'Erectile Dysfunction',
    headline: 'Ready when you are.',
    image: '/ed-pills.png',
    href: '/ed',
    gradient: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
    accent: '#c4a07a',
  },
  {
    title: 'Testosterone',
    headline: 'Feel like yourself again.',
    image: '/trt-vial.png',
    href: '/trt',
    gradient: 'linear-gradient(135deg, #1a2019 0%, #2e3528 60%, #434d38 100%)',
    accent: '#a8c49f',
  },
]

const AUTO_PLAY_MS = 5000

export function HighlightsCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollTo = React.useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement | undefined
    if (!card) return
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [])

  React.useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(() => {
      const next = (active + 1) % SLIDES.length
      setActive(next)
      scrollTo(next)
    }, AUTO_PLAY_MS)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, paused, scrollTo])

  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft
        const children = Array.from(el.children) as HTMLElement[]
        let closest = 0
        let closestDist = Infinity
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - scrollLeft)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setActive(closest)
        ticking = false
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const togglePause = () => setPaused((p) => !p)

  return (
    <section className="w-full py-10 sm:py-14 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-[-0.02em] text-neutral-900">
            What we treat
          </h2>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-4 overflow-x-auto -mr-4 sm:-mr-6 lg:-mr-8 pr-4 sm:pr-6 highlights-scroll-container"
          style={{ scrollSnapType: 'x mandatory' }}
        >
        {SLIDES.map((slide, i) => {
          const isActive = i === active
          return (
            <Link
              key={slide.title}
              href={slide.href}
              className="group relative flex-shrink-0 rounded-2xl overflow-hidden"
              style={{
                width: 'clamp(280px, 65vw, 480px)',
                aspectRatio: '3 / 4',
                scrollSnapAlign: 'start',
                background: slide.gradient,
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 85vw, 740px"
                  priority={i < 2}
                />
              </div>

              <div
                className="absolute inset-0 bg-black/50 transition-opacity duration-500"
                style={{ opacity: isActive ? 0 : 1 }}
              />

              <div
                className="absolute inset-0 z-10 p-6 sm:p-8 transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                <p className="text-white text-[clamp(1.5rem,3.5vw,2rem)] font-medium leading-tight tracking-[-0.02em] max-w-[300px]">
                  {slide.headline}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              onClick={() => {
                setActive(i)
                scrollTo(i)
              }}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              className="relative h-2 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                background: i === active ? 'var(--color-primary)' : 'rgba(26,26,46,0.15)',
              }}
            >
              {i === active && (
                <span
                  className="absolute inset-0 rounded-full highlights-progress"
                  style={{
                    background: 'var(--color-primary-dark)',
                    transformOrigin: 'left',
                    animation: paused ? 'none' : `highlightsProgress ${AUTO_PLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
          <button
            onClick={togglePause}
            aria-label={paused ? 'Play carousel' : 'Pause carousel'}
            className="ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-neutral-100"
          >
            {paused ? (
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M1 1.5V12.5L11 7L1 1.5Z" fill="currentColor" className="text-neutral-600" />
              </svg>
            ) : (
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <rect x="0" y="0" width="3" height="14" rx="1" fill="currentColor" className="text-neutral-600" />
                <rect x="7" y="0" width="3" height="14" rx="1" fill="currentColor" className="text-neutral-600" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
