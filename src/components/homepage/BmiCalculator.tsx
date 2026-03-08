'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return {
    label: 'Underweight',
    cta: 'See Your Full Vitality Report',
    color: '#3B6FA0',
    insight: (b: string) => `A BMI of ${b} suggests your body may be under-resourced. Low NAD+ levels are common in underweight individuals and can affect energy and immune function. Your biomarkers would tell us more.`,
  }
  if (bmi < 25) return {
    label: 'Healthy Range',
    cta: "See What Your BMI Isn't Telling You",
    color: '#2A6B5A',
    insight: (b: string) => `A BMI of ${b} is within the healthy range — but BMI doesn't capture metabolic health, hormone balance, or inflammation. 80% of people in a 'healthy' BMI range have at least one out-of-range biomarker.`,
  }
  if (bmi < 30) return {
    label: 'Worth Investigating',
    cta: "Find Out What's Driving This",
    color: '#D4A843',
    insight: (b: string) => `A BMI of ${b} often correlates with reduced NAD+ levels, elevated inflammatory markers, and hormonal shifts that go undetected in standard panels. A full biomarker picture would show exactly what's driving this.`,
  }
  return {
    label: 'High Risk Zone',
    cta: 'See Your Full Vitality Report',
    color: '#C83C3C',
    insight: (b: string) => `A BMI of ${b} is associated with significantly depleted NAD+ and elevated metabolic and cardiovascular markers. This is exactly the range where clinician-guided intervention makes the largest measurable difference.`,
  }
}

export function BmiCalculator() {
  const [ft, setFt] = React.useState('')
  const [inches, setInches] = React.useState('')
  const [lbs, setLbs] = React.useState('')
  const [age, setAge] = React.useState('')

  const totalInches = (parseInt(ft) || 0) * 12 + (parseInt(inches) || 0)
  const weight = parseInt(lbs) || 0
  const ageNum = parseInt(age) || 0
  const isValid = totalInches > 0 && weight > 0 && ageNum > 0
  const bmi = isValid ? (weight / (totalInches ** 2)) * 703 : 0
  const bmiStr = bmi.toFixed(1)
  const cat = isValid ? getBmiCategory(bmi) : null

  const barPct = isValid ? Math.min(Math.max(((bmi - 12) / (42 - 12)) * 100, 2), 98) : 0

  const inputClass = 'w-full rounded-lg px-4 py-3 min-h-[48px] text-body text-neutral-800 bg-surface-cream border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus transition-colors'

  return (
    <section id="how-it-works" className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Quick Health Check</p>
        <h2 className="text-neutral-900 text-headline-lg mb-3">
          What&apos;s your BMI <em className="not-italic text-primary">not telling you?</em>
        </h2>
        <p className="text-neutral-500 text-body mb-8">
          Enter a few numbers and see why one metric was never the whole story.
        </p>

        <div className="grid grid-cols-4 gap-3 mb-8">
          <div>
            <label className="text-[13px] text-neutral-500 mb-1.5 block">Height (ft)</label>
            <input
              type="number"
              placeholder="5"
              min="3"
              max="8"
              value={ft}
              onChange={(e) => setFt(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[13px] text-neutral-500 mb-1.5 block">Height (in)</label>
            <input
              type="number"
              placeholder="10"
              min="0"
              max="11"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[13px] text-neutral-500 mb-1.5 block">Weight (lbs)</label>
            <input
              type="number"
              placeholder="170"
              min="50"
              max="600"
              value={lbs}
              onChange={(e) => setLbs(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[13px] text-neutral-500 mb-1.5 block">Age (yrs)</label>
            <input
              type="number"
              placeholder="35"
              min="18"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Result */}
        {isValid && cat && (
          <div
            className="rounded-xl p-6 sm:p-8 animate-fade-in-up"
            style={{ background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' }}
          >
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-white text-[40px] font-semibold leading-none">{bmiStr}</span>
              <span
                className="text-[13px] font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: cat.color + '30', color: cat.color === '#2A6B5A' ? '#5BBAA3' : cat.color }}
              >
                {cat.label}
              </span>
            </div>

            {/* BMI gauge bar */}
            <div className="mt-5 mb-2">
              <div className="relative h-2 rounded-full overflow-hidden bg-white/10">
                <div
                  className="absolute left-0 top-0 h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${barPct}%`,
                    background: cat.color,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[11px] text-white/40">
                <span>Under</span>
                <span>Normal</span>
                <span>Over</span>
                <span>Obese</span>
              </div>
            </div>

            <p className="text-white/70 text-[15px] leading-relaxed mt-5 mb-6">
              {cat.insight(bmiStr)}
            </p>

            <Link
              href={`/peptides?bmi=${bmiStr}&age=${age}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              {cat.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}

        <p className="text-neutral-500 text-[12px] leading-relaxed mt-4">
          BMI is one indicator among many. Forbes Vitals looks at 87 markers — because one number was never the whole story.
        </p>
      </div>
    </section>
  )
}
