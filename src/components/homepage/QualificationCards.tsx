'use client'

import Link from 'next/link'

const CARDS = [
  {
    eyebrow: 'NAD+ Therapy',
    h2: "Feel like you're running on empty?",
    sub: "Most people accept fatigue, brain fog, and slow recovery as normal. They're not. They're signals — and they're measurable.",
    primaryCta: 'Take the Quiz →',
    primaryHref: '/peptides',
    secondaryCta: 'Do I have low vitality?',
    secondaryHref: '/peptides?entry=qualify',
    gradient: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)',
  },
  {
    eyebrow: 'Biomarker Testing',
    h2: "Something feels off. Your labs say you're fine.",
    sub: "Standard blood panels miss 80% of what matters. 87 markers gives you the full picture — including the ones your doctor never ordered.",
    primaryCta: 'Take the Quiz →',
    primaryHref: '/biomarkers',
    secondaryCta: 'Why do I feel this way?',
    secondaryHref: '/biomarkers?entry=qualify',
    gradient: 'linear-gradient(135deg, #1e2a3a 0%, #0f1926 100%)',
  },
]

export function QualificationCards() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-4">
        {CARDS.map((card) => (
          <div
            key={card.eyebrow}
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden"
            style={{ background: card.gradient }}
          >
            {/* Dashed arc detail */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.08]">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <circle cx="200" cy="0" r="160" stroke="white" strokeWidth="1" strokeDasharray="6 4" />
              </svg>
            </div>

            <p className="text-white/50 text-[13px] uppercase tracking-[0.1em] mb-3">{card.eyebrow}</p>
            <h2 className="text-white text-headline-sm sm:text-headline-md mb-3 max-w-[480px]">{card.h2}</h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-[520px]">{card.sub}</p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href={card.primaryHref}
                className="inline-flex items-center justify-center bg-white text-neutral-900 font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                {card.primaryCta}
              </Link>
              <Link
                href={card.secondaryHref}
                className="text-white/70 text-[15px] font-medium py-3 px-1 hover:text-white transition-colors"
              >
                {card.secondaryCta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
