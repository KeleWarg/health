'use client'

import * as React from 'react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

const ICONS: Record<string, React.ReactNode> = {
  'Biomarker Testing': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M11 4v3m0 0v10a3 3 0 0 0 6 0V7m-6 0h6m-6 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="20" r="1" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  'Clinical Oversight': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M10 13.5a4 4 0 1 1 8 0M14 5v4m0 0h-2m2 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 17.5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2V22a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 18.5v3m-1.5-1.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  '$0 Until Prescribed': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15.5 12c-.5-.8-1.3-1-2-1-1.4 0-2 .8-2 1.5s.6 1.2 2 1.5c1.4.3 2 .8 2 1.5 0 .7-.6 1.5-2 1.5-.7 0-1.5-.2-2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 11v1m0 5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Personalized Therapy': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 8v12M14 8v12M20 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="17" r="2.5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="11" r="2.5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="14" r="2.5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'Real Outcomes': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 22l6-6 4 3 10-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

const CELLS = [
  {
    badge: 'Biomarker Testing',
    headline: '87 markers. Not 14.',
    bullets: [
      'Metabolic, hormonal, thyroid, cardiovascular, inflammatory',
      'All in one draw. Results in days.',
    ],
  },
  {
    badge: 'Clinical Oversight',
    headline: 'Every prescription starts with a physician.',
    bullets: [
      'Board-certified review before anything ships',
      '24hr average approval time',
    ],
  },
  {
    badge: '$0 Until Prescribed',
    headline: "You don't pay until approved.",
    bullets: [
      'No charge if not prescribed',
      'HSA / FSA eligible',
    ],
  },
  {
    badge: 'Personalized Therapy',
    headline: 'A protocol that evolves with you.',
    bullets: [
      'Dosed to your biomarkers, BMI, and goals',
      'Adjusted as your labs improve',
    ],
  },
  {
    badge: 'Real Outcomes',
    headline: '92% feel measurably better within 90 days.',
    bullets: [
      'Tracked through real biomarker data',
      'Most notice a difference within 2 weeks',
    ],
  },
]

export function WhyForbesVitals() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">The Difference</p>
          <h2 className="text-dark text-headline-md sm:text-display lg:text-display-md font-medium mb-4">
            Why people choose<br />Forbes Vitals.
          </h2>
          <p className="text-muted text-body leading-relaxed max-w-[640px]">
            &ldquo;The standard of care most people receive misses the markers that matter most.&rdquo;
          </p>
          <p className="mt-2 text-dark text-body font-semibold">
            Dr. James Liu, M.D.
            <span className="font-normal text-muted-light"> · Chief Medical Officer, Forbes Vitals</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3">
          {CELLS.map((cell, i) => {
            const border = '1px solid rgba(26,26,46,0.12)'
            const colIn2 = i % 2
            const rowIn2 = Math.floor(i / 2)
            const colIn3 = i % 3
            const rowIn3 = Math.floor(i / 3)
            const lastRowMobile = Math.floor((CELLS.length - 1) / 2)
            const lastRowDesktop = Math.floor((CELLS.length - 1) / 3)
            return (
              <div
                key={cell.badge}
                className="wfv-cell"
                style={{
                  borderBottom: rowIn2 < lastRowMobile ? border : undefined,
                  borderLeft: colIn2 === 1 ? border : undefined,
                  paddingLeft: colIn2 === 1 ? 20 : undefined,
                  paddingRight: colIn2 === 0 ? 20 : undefined,
                }}
              >
              <ScrollReveal delay={i * 80}>
              <div className="py-7 flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-primary mb-3">
                    {ICONS[cell.badge]}
                  </div>
                  <h3 className="text-dark text-headline-sm mb-2">
                    {cell.headline}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-primary text-caption font-medium">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <path d="M7 1.75v10.5M4.5 3.5v7M9.5 3.5v7M2 5.25v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    {cell.badge}
                  </span>
                </div>
                <div className="space-y-2 mt-4">
                  {cell.bullets.map((b) => (
                    <p key={b} className="text-muted text-body-sm leading-snug">
                      {b}
                    </p>
                  ))}
                </div>
              </div>
              </ScrollReveal>
              </div>
            )
          })}


          {/* CTA cell — index 5: col2=1, row2=2, col3=2, row3=1 */}
          <div
            className="wfv-cell"
            style={{
              borderLeft: '1px solid rgba(26,26,46,0.12)',
              paddingLeft: 20,
            }}
          >
          <ScrollReveal delay={CELLS.length * 80}>
          <div className="py-7 flex flex-col">
            <div className="flex-1">
              <div className="text-primary mb-3">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 9.5v9M9.5 14h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-dark text-headline-sm mb-2">
                Everything<br />included.
              </h3>
            </div>
            <div className="mt-4">
              <Link
                href="https://peptides-fpe5.vercel.app/"
                className="inline-flex items-center justify-center gap-2 text-primary text-[14px] font-medium px-5 py-2.5 rounded-full border border-primary/30 hover:bg-primary/[0.04] transition-colors"
              >
                See what&apos;s in your protocol
              </Link>
            </div>
          </div>
          </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
