'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TrustTicker } from './TrustTicker'

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

const FEATURED_CARDS = [
  {
    label: 'Weight Loss',
    hook: 'Clinician-guided plans that work.',
    href: '#',
    bg: '#edf5f2',
    hoverBg: 'linear-gradient(135deg, #1a2019 0%, #2e3528 60%, #434d38 100%)',
    image: '/weight-loss-generated-new.png',
    glowColor: 'rgba(218, 175, 85, 0.55)',
  },
  {
    label: 'Hair Loss',
    hook: 'Thicker hair starts here.',
    href: '#',
    bg: '#f2ece6',
    hoverBg: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
    image: '/hair-loss-generated.png',
    glowColor: 'rgba(218, 175, 85, 0.55)',
  },
]

const COMPACT_CARDS = [
  { label: 'ED Medication', hook: 'Confidence when it counts.', href: '#', bg: '#E8EBF0', hoverBg: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)', image: '/ed-pill.png', glowColor: 'rgba(218, 175, 85, 0.55)' },
  { label: 'More Testosterone', hook: 'Reclaim your energy & drive.', href: '#', bg: '#F2EBE8', hoverBg: 'linear-gradient(135deg, #1a2019 0%, #2e3528 60%, #434d38 100%)', image: '/trt-generated-new.png', glowColor: 'rgba(218, 175, 85, 0.55)' },
]

const SENTENCES = [
  { prefix: 'Weight loss ', accent: 'that actually works.' },
  { prefix: 'Thicker hair ', accent: 'in months, not years.' },
  { prefix: 'ED treatment ', accent: 'without the visit.' },
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
    <>
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' }}
    >
      {/* <HeroVideoBackground /> */}

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/50 to-black/70" />

      <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center pt-24 pb-[72px]">
        <p className="text-white/60 text-[13px] tracking-[0.12em] uppercase mb-5 animate-fade-in-up stagger-1">
          Every treatment you need
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
          Licensed clinicians prescribe FDA-approved treatments — delivered discreetly to your door.
        </p>

        <p className="text-white/40 text-sm mb-0 animate-fade-in-up stagger-4">
          Board-certified MDs · Free shipping · HSA/FSA accepted
        </p>
      </div>

    </section>

      <TrustTicker />

      <div className="px-4 sm:px-6 py-6">
        <div className="max-w-[960px] mx-auto flex flex-col gap-3">
          {/* Featured cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURED_CARDS.map((card, i) => {
              const delay = `${i * 0.9}s`
              return (
              <Link
                key={card.label}
                href={card.href}
                className="group relative block rounded-2xl overflow-visible shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-[1.015]"
                style={{ background: card.bg }}
              >
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ background: card.bg }}
                />
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  style={{ background: card.hoverBg }}
                />
                <div className="relative flex flex-col h-[140px]">
                  <div className="relative z-10 px-5 pt-5 pb-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-[20px] leading-tight text-[#2a2520] transition-colors duration-300 group-hover:text-white">
                        {card.label}
                      </h3>
                      <p className="text-[14px] leading-snug mt-1 max-w-[55%] text-[#6b6158] transition-colors duration-300 group-hover:text-white/70">{card.hook}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span />
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.05] transition-colors duration-300 group-hover:bg-white/15">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#6b6158] transition-colors duration-300 group-hover:text-white/80">
                          <path d="M5.25 3.5L8.75 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  {card.image && (
                    <>
                      <div
                        className="absolute right-[12%] bottom-[6px] w-[30%] h-[10px] rounded-full pointer-events-none z-[19] animate-card-shadow"
                        style={{ animationDelay: delay }}
                      />
                      <div
                        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full pointer-events-none z-[18] opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-[30px]"
                        style={{ background: `radial-gradient(circle, ${card.glowColor} 0%, transparent 70%)` }}
                      />
                      <div className="absolute right-[-8px] top-[calc(50%-12px)] -translate-y-1/2 h-[150%] w-[55%] pointer-events-none z-20">
                        <div
                          className="relative w-full h-full animate-card-float"
                          style={{ animationDelay: delay }}
                        >
                          <Image
                            src={card.image}
                            alt={card.label}
                            fill
                            className="object-contain object-right transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 45vw, 200px"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Link>
              )
            })}
          </div>

          {/* Compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPACT_CARDS.map((card, i) => (
              <Link
                key={card.label}
                href={card.href}
                className="group relative block rounded-2xl overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-[1.015]"
                style={{ background: card.bg }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  style={{ background: card.hoverBg }}
                />
                <div className="relative z-10 flex items-center justify-between h-[140px] sm:h-[72px] px-5">
                  <div>
                    <p className="font-semibold text-[15px] text-neutral-800 transition-colors duration-300 group-hover:text-white">{card.label}</p>
                    <p className="text-[14px] leading-snug mt-1 text-[#6b6158] sm:hidden">{card.hook}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* @ts-ignore */}
                    {card.image && (
                      <div className="relative w-20 h-20">
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-[20px] scale-125"
                          style={{ background: `radial-gradient(circle, ${card.glowColor} 0%, transparent 70%)` }}
                        />
                        <div className="relative w-full h-full animate-card-float" style={{ animationDelay: `${i * 0.5}s` }}>
                          <Image
                            // @ts-ignore
                            src={card.image}
                            alt={card.label}
                            fill
                            className="object-contain"
                            sizes="80px"
                          />
                        </div>
                      </div>
                    )}
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/[0.04] transition-colors duration-300 group-hover:bg-white/15">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
                        <path d="M5.25 3.5L8.75 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
