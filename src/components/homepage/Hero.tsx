'use client'

import * as React from 'react'
import Link from 'next/link'

const CDN = 'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev'

const HERO_VIDEOS = [
  { src: `${CDN}/AdobeStock_440017363_Video_4K_Preview.mp4`,  poster: `${CDN}/AdobeStock_440017363_Video_4K_Preview-poster.jpg` },
  { src: `${CDN}/AdobeStock_196522896_Video_4K_Preview.mp4`,  poster: `${CDN}/AdobeStock_196522896_Video_4K_Preview-poster.jpg` },
  { src: `${CDN}/AdobeStock_1792765974_Video_HD_Preview.mp4`, poster: `${CDN}/AdobeStock_1792765974_Video_HD_Preview-poster.jpg` },
  { src: `${CDN}/AdobeStock_245344941_Video_4K_Preview.mp4`,  poster: `${CDN}/AdobeStock_245344941_Video_4K_Preview-poster.jpg` },
  { src: `${CDN}/AdobeStock_228861647_Video_HD_Preview.mp4`,  poster: `${CDN}/AdobeStock_228861647_Video_HD_Preview-poster.jpg` },
  { src: `${CDN}/AdobeStock_663878535_Video_HD_Preview.mp4`,  poster: `${CDN}/AdobeStock_663878535_Video_HD_Preview-poster.jpg` },
]

const FADE_MS = 800
const INTERVAL_MS = 7000

const NAV_CARDS = [
  {
    label: 'NAD+ Therapy',
    hook: 'Restore your energy at the cellular level.',
    quizHref: '/peptides',
    learnHref: '/nad',
    image: '/NAD+.png',
    bg: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)',
    bgHover: 'linear-gradient(135deg, #238068 0%, #145c50 100%)',
    isGradient: true,
    rotateImage: true,
  },
  {
    label: 'Biomarker Testing',
    hook: '87 markers. The test your physical never runs.',
    quizHref: '/biomarkers',
    learnHref: '/biomarkers-info',
    image: '/step5-nobg.png',
    bg: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
    bgHover: 'linear-gradient(135deg, #4a2c1a 0%, #6b3d22 50%, #8a5230 100%)',
    isGradient: true,
    rotateImage: false,
    imageOffsetBottom: '-20px',
  },
]

const SENTENCES = [
  { prefix: 'Live with more ', accent: 'energy.' },
  { prefix: 'Supercharge ', accent: 'your body.' },
  { prefix: 'Trust what ', accent: 'you feel.' },
]
const TYPE_SPEED = 50
const DELETE_SPEED = 30
const PAUSE_AFTER_TYPED = 3400

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function HeroVideoBackground() {
  const [active, setActive] = React.useState(0)
  const reducedMotion = useReducedMotion()
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([])

  React.useEffect(() => {
    if (reducedMotion || HERO_VIDEOS.length <= 1) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_VIDEOS.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [reducedMotion])

  React.useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === active) {
        el.play().catch(() => {})
      } else {
        el.pause()
        el.currentTime = 0
      }
    })
  }, [active])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_VIDEOS.map((video, i) => (
        <video
          key={video.src}
          ref={(el) => { videoRefs.current[i] = el }}
          src={i <= active + 1 || i === 0 ? video.src : undefined}
          poster={video.poster}
          muted
          playsInline
          loop
          preload={i === 0 ? 'auto' : 'none'}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [sentenceIndex, setSentenceIndex] = React.useState(0)
  const [displayed, setDisplayed] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  const fullText = SENTENCES[sentenceIndex].prefix + SENTENCES[sentenceIndex].accent

  React.useEffect(() => {
    if (!isDeleting && displayed === fullText) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setSentenceIndex((i) => (i + 1) % SENTENCES.length)
      return
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? fullText.slice(0, displayed.length - 1) : fullText.slice(0, displayed.length + 1),
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, fullText])

  return (
    <section
      id="hero"
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' }}
    >
      {/* <HeroVideoBackground /> */}

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/50 to-black/70" />

      <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center pt-44 pb-28">
        <p className="text-white/60 text-[13px] tracking-[0.12em] uppercase mb-5 animate-fade-in-up stagger-1">
          Forbes Health · Clinician-Led Programs
        </p>

        <h1 className="font-display text-white text-[clamp(3rem,6.5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.02em] mb-5 min-h-[2.16em] animate-fade-in-up stagger-2">
          {(() => {
            const { prefix } = SENTENCES[sentenceIndex]
            const prefixLen = prefix.length
            const showPrefix = displayed.slice(0, prefixLen)
            const showAccent = displayed.slice(prefixLen)
            const cursor = <span className="inline-block w-[3px] h-[0.85em] bg-white/60 ml-[2px] align-baseline animate-blink" />
            const onFirstLine = showAccent.length === 0
            return (
              <>
                <span className="block">{showPrefix}{onFirstLine && cursor}</span>
                <span className="block">
                  {showAccent}{!onFirstLine && cursor}
                </span>
              </>
            )
          })()}
        </h1>

        <p className="text-white/70 text-lg font-medium max-w-[560px] mx-auto mt-8 mb-8 animate-fade-in-up stagger-3">
          Your biology has answers your last physical never found.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 animate-fade-in-up stagger-4">
          <Link
            href="/peptides"
            className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-medium text-[15px] px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors w-full sm:w-auto"
          >
            Discover Your Vitality Index
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/biomarkers"
            className="inline-flex items-center justify-center gap-2 text-white font-medium text-[15px] px-7 py-3.5 rounded-lg border border-white/25 hover:bg-white/[0.08] transition-colors w-full sm:w-auto"
          >
            Discover Your BioIQ
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <p className="text-white/40 text-sm mb-12 animate-fade-in-up stagger-5">
          Trusted by 12,000+ patients · Backed by Forbes Health
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 sm:px-6">
        <div className="max-w-[840px] mx-auto grid grid-cols-2 gap-4">
          {NAV_CARDS.map((card, i) => (
            <Link
              key={card.label}
              href={card.quizHref}
              className="group relative rounded-2xl transition-all duration-300 block hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              style={{ background: card.bg }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: card.bgHover }}
              />
              <div className="relative flex flex-col h-[180px] overflow-hidden rounded-2xl">
                <div className="relative z-10 px-5 pt-5 pb-5 flex-1 flex flex-col">
                  <p className="font-semibold text-[22px] leading-tight mb-1.5 text-white">
                    {card.label}
                  </p>
                  <p className="text-[15px] font-medium leading-snug max-w-[55%] text-white/50">{card.hook}</p>
                  <span className="absolute bottom-4 right-4 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 group-hover:border-white/70 group-hover:bg-white/10 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/60 group-hover:text-white group-hover:translate-x-[1px] transition-all duration-300">
                      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                <div className="absolute right-0 bottom-0 h-full flex items-end justify-center" style={{ width: card.rotateImage ? '45%' : 'auto', bottom: card.imageOffsetBottom ?? '0px' }}>
                  <img
                    src={card.image}
                    alt={card.label}
                    className="object-contain pointer-events-none max-w-none"
                    style={{
                      height: card.rotateImage ? '160px' : '170px',
                      filter: `drop-shadow(0 12px 28px rgba(0,0,0,${card.rotateImage ? '0.45' : '0.3'}))`,
                      animation: `${card.rotateImage ? 'float-gentle-tilted-12' : 'float-gentle'} 3s ease-in-out ${i * 1.2}s infinite`,
                    }}
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
