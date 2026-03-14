'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  quizText?: string
  learnHref?: string
  learnText?: string
  legal: string
  carousel?: unknown[]
  reversed?: boolean
  heroImage?: string
  heroImageAlt?: string
  heroImageClassName?: string
  heroObjectPosition?: string
  heroOffset?: string
  heroFullWidth?: boolean
  secondaryImage?: string
  secondaryVideo?: string
  collageVideos?: string[]
  collageImages?: Record<number, string>
  checklistDark?: boolean
  checklistButtonText?: string
  checklistBackground?: string
  sectionDark?: boolean
  sectionBackground?: string
  accentColor?: string
  blendTop?: string
  blendBottom?: string
  flushBottom?: boolean
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
  quizText = 'Take the Quiz',
  learnHref,
  learnText = 'Learn more',
  legal,
  reversed,
  heroImage,
  heroImageAlt,
  heroImageClassName,
  heroObjectPosition,
  heroOffset,
  heroFullWidth,
  secondaryImage,
  secondaryVideo,
  collageVideos,
  collageImages,
  checklistDark,
  checklistButtonText = "Get personalized treatment",
  checklistBackground,
  sectionDark,
  sectionBackground,
  accentColor,
  blendTop,
  blendBottom,
  flushBottom,
  className,
}: ProductSectionProps) {
  const isDark = checklistDark || !!checklistImage || !!checklistWidget || !!checklistBackground
  const hasInlineChecklist = checklist.length > 0 && !!heroImage

  const textBlock = (
    <>
      <p className={cn("text-[13px] font-medium uppercase tracking-[0.1em] mb-3", sectionDark ? "text-white/60" : "text-primary")}>
        {eyebrow}
      </p>
      <h2
        className="text-headline-md sm:text-display lg:text-display-md font-semibold sm:font-medium mb-4"
        style={{ color: sectionDark ? '#ffffff' : '#1A1A2E' }}
      >
        {h2}
        <em className={cn("not-italic", !accentColor && (sectionDark ? "text-primary-light" : "text-primary"))} style={accentColor ? { color: accentColor } : undefined}>{h2Accent}</em>
      </h2>
      <p className={cn("text-[1rem] leading-relaxed mb-6", sectionDark ? "text-white/70" : "text-neutral-500")}>
        {body}
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Link
          href={quizHref}
          className="btn-primary btn-continue inline-flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {quizText}
          {quizText !== 'Coming Soon...' && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Link>
        {learnHref && (
          <Link
            href={learnHref}
            className="text-primary text-[15px] font-medium py-3 px-1 underline underline-offset-4 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            {learnText}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        )}
      </div>
    </>
  )

  const heroBlock = heroImage ? (
    heroImageClassName ? (
      <div
        className={cn("relative aspect-[3/4] rounded-xl lg:rounded-2xl lg:mt-16 overflow-hidden lg:overflow-visible", heroImageClassName)}
        style={{ animation: 'float-gentle 4s ease-in-out infinite' }}
      >
        <Image
          src={heroImage}
          alt={heroImageAlt ?? ''}
          width={1200}
          height={900}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] lg:w-[190%] max-w-none object-contain drop-shadow-lg"
          sizes="(max-width: 1024px) 130vw, 190vw"
        />
      </div>
    ) : heroFullWidth ? (
      <div className="relative" style={{ top: heroOffset || '16px' }}>
        <Image
          src={heroImage}
          alt={heroImageAlt ?? ''}
          width={1200}
          height={900}
          className="w-[150%] max-w-none object-contain"
          style={{ animation: 'float-gentle 4s ease-in-out infinite', marginLeft: 'calc(-25% + 100px)' }}
          sizes="150vw"
        />
      </div>
    ) : (
      <Image
        src={heroImage}
        alt={heroImageAlt ?? ''}
        width={800}
        height={1067}
        className="w-full aspect-[3/4] object-cover rounded-xl lg:rounded-2xl lg:mt-16"
        style={{ animation: 'float-gentle 4s ease-in-out infinite', objectPosition: heroObjectPosition, marginTop: heroOffset }}
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
    )
  ) : null

  const collageElements = collageVideos && collageVideos.length > 0 ? (
    <>
      {collageImages?.[0] ? (
        <div className="flex-1 min-w-0 lg:flex-none lg:w-full">
          <Image
            src={collageImages[0]}
            alt=""
            width={800}
            height={1067}
            className="w-full aspect-[3/4] object-cover rounded-xl lg:rounded-2xl -scale-x-100"
            style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
            sizes="(max-width: 1024px) 50vw, 24vw"
          />
        </div>
      ) : (
        <div className="flex-1 min-w-0 lg:flex-none lg:w-full">
          <video
            src={collageVideos[0]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[3/4] object-cover rounded-xl lg:rounded-2xl"
            style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
          />
        </div>
      )}
      {collageImages?.[1] && (
        <div className="flex-1 min-w-0 lg:flex-none lg:w-full">
          <Image
            src={collageImages[1]}
            alt=""
            width={800}
            height={800}
            className="w-full aspect-[3/4] lg:aspect-square object-cover rounded-xl lg:rounded-2xl"
            style={{ animation: 'float-gentle 4s ease-in-out 2s infinite' }}
            sizes="(max-width: 1024px) 50vw, 24vw"
          />
        </div>
      )}
    </>
  ) : secondaryVideo ? (
    <div className="flex-1 min-w-0 lg:flex-none lg:w-full">
      <video
        src={secondaryVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full aspect-[3/4] object-cover rounded-xl lg:rounded-2xl"
        style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
      />
    </div>
  ) : secondaryImage ? (
    <div className="flex-1 min-w-0 lg:flex-none lg:w-full">
      <Image
        src={secondaryImage}
        alt=""
        width={800}
        height={1067}
        className="w-full aspect-[3/4] object-cover rounded-xl lg:rounded-2xl"
        style={{ animation: 'float-gentle 4s ease-in-out 1.5s infinite' }}
        sizes="(max-width: 1024px) 50vw, 24vw"
      />
    </div>
  ) : null

  return (
    <section
      id={id}
      className={cn('py-16 sm:py-24 relative', sectionDark ? 'overflow-hidden' : (reversed ? 'bg-surface-cream' : 'bg-surface'), flushBottom && '!pb-0', className)}
      style={sectionDark ? { background: sectionBackground || 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' } : undefined}
    >
      {sectionDark && (
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      )}
      {blendTop && (
        <div className="absolute top-0 left-0 right-0 h-24 z-[1] pointer-events-none" style={{ background: `linear-gradient(to bottom, ${blendTop}, transparent)` }} />
      )}
      {blendBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[1] pointer-events-none" style={{ background: `linear-gradient(to top, ${blendBottom}, transparent)` }} />
      )}
      <div className={cn("max-w-[1280px] mx-auto px-4 sm:px-6", sectionDark && "relative z-[2]")}>
        {hasInlineChecklist ? (
          <div className={cn("flex flex-col lg:flex-row gap-5 lg:gap-8 mb-10", sectionDark ? "lg:items-center" : "lg:items-start")}>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-start">
                <div className="lg:w-[48%] flex-shrink-0">
                  {textBlock}
                  {(heroBlock || collageElements) && (
                    <div className="lg:hidden mt-6 flex gap-3 items-start">
                      {heroBlock && (
                        <div className="flex-1 min-w-0">{heroBlock}</div>
                      )}
                      {collageElements}
                    </div>
                  )}
                </div>
                <Parallax speed={0.05} className="hidden lg:block flex-1 relative z-10">
                  {heroBlock}
                </Parallax>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 mt-6">
                <h4 className="font-semibold text-[22px] mb-5 text-neutral-900">
                  {checklistTitle}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="12" fill="#2A6B5A" />
                        <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[15px] text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {legal && <p className="text-neutral-500 text-[12px] leading-relaxed mt-4">{legal}</p>}
            </div>
            {collageElements && (
              <div className="hidden lg:flex flex-col gap-5 w-[24%] flex-shrink-0">
                {collageElements}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className={cn("flex flex-col lg:flex-row gap-8 lg:gap-12", flushBottom ? 'mb-0' : 'mb-10', heroFullWidth ? "lg:items-center" : sectionDark && !flushBottom ? "lg:items-center" : "lg:items-start")}>
              <div className="lg:w-[33%] flex-shrink-0">
                {textBlock}
                {(heroBlock || collageElements) && (
                  <div className="lg:hidden mt-6 flex gap-3 items-start">
                    {heroBlock && (
                      <div className="flex-1 min-w-0">{heroBlock}</div>
                    )}
                    {collageElements}
                  </div>
                )}
              </div>
              {heroImage && (
                <div className={cn("hidden lg:flex items-start gap-5 flex-1 min-w-0", (flushBottom || heroFullWidth) && "self-end items-end")}>
                  {heroFullWidth ? (
                    <Parallax speed={0.05} className="w-full relative z-10">
                      {heroBlock}
                    </Parallax>
                  ) : (
                    <>
                      <Parallax speed={0.05} className="w-[48%] relative z-10">
                        {heroBlock}
                      </Parallax>
                      {collageElements && (
                        <div className={cn("w-[48%] flex flex-col gap-5", flushBottom && "justify-end")}>
                          {collageElements}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {checklist.length > 0 && (
              <>
                <div 
                  className={cn(
                    "relative rounded-xl p-6 sm:p-8 mt-14 mb-6 overflow-hidden",
                    (checklistImage || checklistWidget) ? "flex flex-col-reverse lg:block" : "",
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
                  {(checklistImage || checklistWidget) && (
                    <div className="mb-6 lg:mb-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[35%] h-[240px] lg:h-auto flex items-center justify-center">
                      {checklistWidget ?? (
                        <Image
                          src={checklistImage!}
                          alt=""
                          width={400}
                          height={400}
                          className="object-contain drop-shadow-xl"
                          style={{ maxWidth: '60%', maxHeight: '60%', animation: 'float-gentle 4s ease-in-out infinite' }}
                          sizes="(max-width: 1024px) 60vw, 20vw"
                        />
                      )}
                    </div>
                  )}

                  <div className={(checklistImage || checklistWidget) ? "lg:max-w-[65%] relative z-10" : "relative z-10"}>
                    <h4 className={cn("font-semibold text-[18px] mb-5", isDark ? "text-white" : "text-neutral-900")}>
                      {checklistTitle}
                    </h4>
                    
                    <ul className={cn(
                      "grid gap-x-4 gap-y-2 items-start content-start",
                      (checklistImage || checklistWidget)
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
                </div>

                {legal && <p className="text-neutral-500 text-[12px] leading-relaxed">{legal}</p>}
              </>
            )}
          </>
        )}
      </div>
    </section>
  )
}
