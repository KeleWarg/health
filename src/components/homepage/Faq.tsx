'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const FAQS = [
  { q: 'What is NAD+ therapy?', a: '' },
  { q: 'What is biomarker testing?', a: '' },
  { q: 'How much do the programs cost?', a: '' },
  { q: 'Do I need insurance?', a: '' },
  { q: 'What is a Vitality Index?', a: '' },
  { q: 'What is a BioIQ score?', a: '' },
  { q: 'How are prescriptions handled?', a: '' },
  { q: 'Can I do both programs?', a: '' },
  { q: 'What states do you serve?', a: '' },
  { q: 'What if I\'m not approved for NAD+ therapy?', a: '' },
]

const NAV_CARDS = [
  {
    label: 'NAD+ Therapy',
    hook: 'Restore your energy at the cellular level.',
    line2: 'Clinician-prescribed. Personalized to your biology. $0 due until approved.',
    line3: 'From $199/mo · Free delivery · Cancel anytime',
    href: '/peptides',
    image: '/NAD+.png',
    bg: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)',
    bgHover: 'linear-gradient(135deg, #238068 0%, #145c50 100%)',
    rotateImage: true,
    imageOffsetBottom: '0px',
  },
  {
    label: 'Biomarker Testing',
    hook: '87 markers. The test your physical never runs.',
    line2: 'Metabolic, hormonal, cardiovascular, thyroid, and inflammatory — one draw, full picture.',
    line3: '$399/yr · HSA/FSA eligible · Results in days',
    href: '/biomarkers',
    image: '/step5-nobg.png',
    bg: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
    bgHover: 'linear-gradient(135deg, #4a2c1a 0%, #6b3d22 50%, #8a5230 100%)',
    rotateImage: false,
    imageOffsetBottom: '-20px',
  },
]

export function Faq() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null)

  return (
    <section className="bg-surface pt-16 sm:pt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Common Questions</p>
        <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md font-medium mb-10">
          Everything you want to know<br /><em className="not-italic text-primary">before you start.</em>
        </h2>

        <div className="divide-y divide-border">
          {FAQS.map((faq, i) => (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-neutral-900 font-medium text-[15px] pr-4">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={cn(
                    'flex-shrink-0 text-neutral-400 transition-transform duration-300',
                    openIdx === i && 'rotate-45',
                  )}
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-out',
                  openIdx === i ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0',
                )}
              >
                <p className="text-neutral-500 text-[14px] leading-relaxed">
                  {faq.a || 'Answer coming soon.'}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Nav cards — full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-12">
        {NAV_CARDS.map((card, i) => (
          <Link
            key={card.label}
            href={card.href}
            className="group relative transition-all duration-300 block"
            style={{ background: card.bg }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: card.bgHover }}
            />
            <div className="relative flex flex-col min-h-[280px] sm:min-h-[300px] overflow-hidden">
              <div className="relative z-10 px-6 sm:px-10 pt-8 pb-6 flex-1 flex flex-col">
                <p className="font-semibold text-[24px] sm:text-[28px] leading-tight mb-2 text-white">
                  {card.label}
                </p>
                <p className="text-[15px] font-medium leading-snug max-w-[55%] text-white/70">{card.hook}</p>
                <p className="text-[14px] font-normal leading-relaxed max-w-[55%] text-white/60 mt-2">{card.line2}</p>
                <p className="text-[13px] font-medium tracking-[0.02em] max-w-[55%] text-white/45 mt-3">{card.line3}</p>
                <span className="absolute bottom-6 right-6 sm:right-10 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 group-hover:border-white/70 group-hover:bg-white/10 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white/60 group-hover:text-white group-hover:translate-x-[1px] transition-all duration-300">
                    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              <div className="absolute right-0 bottom-0 h-full flex items-end justify-center" style={{ width: card.rotateImage ? '45%' : 'auto', bottom: card.imageOffsetBottom }}>
                <img
                  src={card.image}
                  alt={card.label}
                  className="object-contain pointer-events-none max-w-none"
                  style={{
                    height: card.rotateImage ? '200px' : '220px',
                    filter: `drop-shadow(0 12px 28px rgba(0,0,0,${card.rotateImage ? '0.45' : '0.3'}))`,
                    animation: `${card.rotateImage ? 'float-gentle-tilted-12' : 'float-gentle'} 3s ease-in-out ${i * 1.2}s infinite`,
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
