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

const ROUTING_CARDS = [
  {
    hook: 'Curious what your body could tell you?',
    label: 'Biomarker testing',
    href: '/biomarkers',
  },
  {
    hook: 'Ready to feel the difference?',
    label: 'NAD+ therapy',
    href: '/peptides',
  },
]

export function Faq() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null)

  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-neutral-900 text-headline-lg mb-10">
          Everything you want to know <em className="not-italic text-primary">before you start.</em>
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

        {/* Routing cards */}
        <div className="mt-12 space-y-3">
          {ROUTING_CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group flex items-center justify-between bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-200"
            >
              <div>
                <p className="text-neutral-500 text-sm mb-0.5">{card.hook}</p>
                <p className="text-primary font-semibold text-[15px]">{card.label}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-neutral-300 group-hover:text-primary transition-colors">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
