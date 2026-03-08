'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Parallax } from '@/components/Parallax'

interface ProductSectionProps {
  id: string
  eyebrow: string
  h2: string
  h2Accent: string
  h3?: string
  body: string
  checklistTitle: string
  checklist: string[]
  checklistImage?: string
  checklistWidget?: React.ReactNode
  quizHref: string
  learnHref: string
  legal: string
  carousel?: unknown[]
  reversed?: boolean
  heroImage?: string
  heroImageAlt?: string
  secondaryImage?: string
  secondaryVideo?: string
  collageVideos?: string[]
  checklistDark?: boolean
  checklistButtonText?: string
  checklistBackground?: string
  className?: string
}

export function ProductSection({
  id,
  eyebrow,
  h2,
  h2Accent,
  body,
  checklistTitle,
  checklist,
  checklistImage,
  checklistWidget,
  quizHref,
  learnHref,
  legal,
  reversed,
  heroImage,
  heroImageAlt,
  secondaryImage,
  secondaryVideo,
  collageVideos,
  checklistDark,
  checklistButtonText = "Get personalized treatment",
  checklistBackground,
  className,
}: ProductSectionProps) {
  const isDark = checklistDark || !!checklistImage || !!checklistWidget || !!checklistBackground

  return (
    <section
      id={id}
      className={cn('py-16 sm:py-24', reversed ? 'bg-surface-cream' : 'bg-surface', className)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-10">
          <div className="lg:w-[33%] flex-shrink-0">
            <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">
              {eyebrow}
            </p>
            <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md font-medium mb-4">
              {h2}
              <em className="not-italic text-primary">{h2Accent}</em>
            </h2>
            <p className="text-neutral-500 text-body leading-relaxed mb-6">
              {body}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href={quizHref}
                className="btn-primary btn-continue inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Take the Quiz
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href={learnHref}
                className="text-primary text-[15px] font-medium py-3 px-1 underline underline-offset-4 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {heroImage && (
            <div className="hidden lg:flex items-start gap-5 flex-1 min-w-0">
              <Parallax speed={0.05} className="w-[48%]">
                <img
                  src={heroImage}
                  alt={heroImageAlt ?? ''}
                  className="w-full aspect-[3/4] object-cover rounded-2xl mt-16"
                  style={{ animation: 'float-gentle 4s ease-in-out infinite' }}
                />
              </Parallax>
              {collageVideos && collageVideos.length > 0 ? (
                <div
                  className="w-[48%] aspect-[3/4] flex flex-col gap-3"
                  style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
                >
                  <video
                    src={collageVideos[0]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full flex-1 min-h-0 object-cover rounded-2xl"
                  />
                  <div className="flex gap-3 flex-1 min-h-0">
                    {collageVideos[1] && (
                      <video
                        src={collageVideos[1]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="flex-1 min-w-0 h-full object-cover rounded-2xl"
                      />
                    )}
                    {collageVideos[2] && (
                      <video
                        src={collageVideos[2]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="flex-1 min-w-0 h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              ) : secondaryVideo ? (
                <video
                  src={secondaryVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[48%] aspect-[3/4] object-cover rounded-2xl"
                  style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
                />
              ) : secondaryImage ? (
                <img
                  src={secondaryImage}
                  alt=""
                  className="w-[48%] aspect-[3/4] object-cover rounded-2xl"
                  style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Checklist */}
        <div 
          className={cn(
            "relative rounded-xl p-6 sm:p-8 mt-14 mb-6 overflow-hidden",
            isDark ? "" : "border border-border"
          )}
          style={
            checklistBackground 
              ? { background: checklistBackground }
              : isDark 
                ? { background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' } 
                : { backgroundColor: 'white' }
          }
        >
          <div className={(checklistImage || checklistWidget) ? "lg:max-w-[65%] relative z-10" : "relative z-10"}>
            <h4 className={cn("font-semibold text-[18px] mb-5", isDark ? "text-white" : "text-neutral-900")}>
              {checklistTitle}
            </h4>
            
            <ul className={cn(
              "grid gap-x-4 gap-y-2 items-start content-start",
              checklistImage 
                ? "grid-cols-1 sm:grid-cols-2" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}>
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="10" cy="10" r="9" fill={isDark ? "white" : "#2A6B5A"} fillOpacity={isDark ? "0.15" : "0.08"} />
                    <path d="M6.5 10l2.5 2.5 5-5" stroke={isDark ? "white" : "#2A6B5A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={cn("text-[15px] leading-snug", isDark ? "text-white/90" : "text-neutral-800")}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {(checklistImage || checklistWidget || checklistDark) && (
              <div className="mt-8">
                <Link
                  href={quizHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-neutral-100 transition-colors"
                >
                  {checklistButtonText}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {(checklistImage || checklistWidget) && (
            <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[35%] h-[240px] lg:h-auto flex items-center justify-center">
              {checklistWidget ?? (
                <img
                  src={checklistImage}
                  alt=""
                  className="object-contain drop-shadow-xl"
                  style={{ maxWidth: '60%', maxHeight: '60%', animation: 'float-gentle 4s ease-in-out infinite' }}
                />
              )}
            </div>
          )}
        </div>

        {/* Legal */}
        <p className="text-neutral-500 text-[12px] leading-relaxed">{legal}</p>
      </div>
    </section>
  )
}
