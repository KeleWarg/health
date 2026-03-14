'use client'

import Link from 'next/link'

const CDN = 'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev'

export function EdHero() {
  return (
    <section
      id="ed"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/AdobeStock_335054888 (1) 1.png"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.35)' }}
      >
        <source src={`${CDN}/videos/ed-hero-bg.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 w-full py-20 lg:py-28">
        <div className="lg:w-[33%]">
          <p className="text-white/60 text-[13px] font-medium uppercase tracking-[0.1em] mb-3">
            No waiting rooms. No pharmacy lines.
          </p>

          <h2 className="text-white text-headline-md sm:text-display lg:text-display-md font-medium mb-4">
            Your Best Performance.
            <br />
            <em className="not-italic text-primary-light">Delivered.</em>
          </h2>

          <p className="text-white/70 text-body leading-relaxed mb-6 max-w-md">
            Click &ldquo;Get Started&rdquo; to begin your 3-minute private evaluation. A US-licensed
            doctor is standing by to review your case.
          </p>

          <Link
            href="https://peptides-fpe5.vercel.app/"
            className="btn-primary btn-continue inline-flex items-center gap-2"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
