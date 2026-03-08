'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProductSectionProps {
  id: string
  eyebrow: string
  h2: string
  h2Accent: string
  h3?: string
  body: string
  checklistTitle: string
  checklist: string[]
  quizHref: string
  learnHref: string
  legal: string
  carousel?: unknown[]
  reversed?: boolean
  heroImage?: string
  heroImageAlt?: string
  secondaryImage?: string
  secondaryVideo?: string
}

export function ProductSection({
  id,
  eyebrow,
  h2,
  h2Accent,
  body,
  checklistTitle,
  checklist,
  quizHref,
  learnHref,
  legal,
  reversed,
  heroImage,
  heroImageAlt,
  secondaryImage,
  secondaryVideo,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-24', reversed ? 'bg-surface-cream' : 'bg-surface')}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-10">
          <div className="lg:w-[33%] flex-shrink-0">
            <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">
              {eyebrow}
            </p>
            <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md mb-4">
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
                className="text-primary text-[15px] font-medium py-3 px-1 hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          {heroImage && (
            <div className="hidden lg:flex items-start gap-5 flex-1 min-w-0">
              <img
                src={heroImage}
                alt={heroImageAlt ?? ''}
                className="w-[48%] aspect-[3/4] object-cover rounded-2xl mt-16"
                style={{ animation: 'float-gentle 4s ease-in-out infinite' }}
              />
              {secondaryVideo ? (
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
        <div className="rounded-xl border border-border bg-white p-6 sm:p-8 mt-14 mb-6">
          <h4 className="text-neutral-900 font-semibold text-[15px] mb-5">{checklistTitle}</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                  <circle cx="10" cy="10" r="9" fill="#2A6B5A" fillOpacity="0.08" />
                  <path d="M6.5 10l2.5 2.5 5-5" stroke="#2A6B5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-neutral-800 text-[15px] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <p className="text-neutral-500 text-[12px] leading-relaxed">{legal}</p>
      </div>
    </section>
  )
}
