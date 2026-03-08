'use client'

import * as React from 'react'
import Link from 'next/link'

const TEAL = '#2A6B5A'

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#999999', cta: 'See Your Full Vitality Report' }
  if (bmi < 25) return { label: 'Normal', color: TEAL, cta: "See What Your BMI Isn't Telling You" }
  if (bmi < 30) return { label: 'Overweight', color: '#D4A843', cta: "Find Out What's Driving This" }
  if (bmi < 35) return { label: 'Obese I', color: '#B08A30', cta: 'See Your Full Vitality Report' }
  if (bmi < 40) return { label: 'Obese II', color: '#B07060', cta: 'See Your Full Vitality Report' }
  return { label: 'Obese III', color: '#B07060', cta: 'See Your Full Vitality Report' }
}

function calcBmi(feet: number, inches: number, weight: number): number {
  const total = feet * 12 + inches
  if (total <= 0 || weight <= 0) return 0
  return (weight * 703) / (total * total)
}

function calcBmiMetric(cm: number, kg: number): number {
  const m = cm / 100
  if (m <= 0 || kg <= 0) return 0
  return kg / (m * m)
}

function bmiToPercent(bmi: number): number {
  const clamped = Math.max(15, Math.min(42, bmi))
  return ((clamped - 15) / (42 - 15)) * 100
}

const SEGMENTS = [
  { minBmi: 15, maxBmi: 18.5, color: 'rgba(153,153,153,0.25)' },
  { minBmi: 18.5, maxBmi: 25, color: 'rgba(42,107,90,0.20)' },
  { minBmi: 25, maxBmi: 30, color: 'rgba(212,168,67,0.22)' },
  { minBmi: 30, maxBmi: 35, color: 'rgba(176,138,48,0.22)' },
  { minBmi: 35, maxBmi: 42, color: 'rgba(176,112,96,0.22)' },
]

const THRESHOLDS = [
  { value: 18.5, label: '18.5' },
  { value: 25, label: '25' },
  { value: 30, label: '30' },
  { value: 35, label: '35' },
  { value: 40, label: '40+' },
]

type UnitSystem = 'imperial' | 'metric'

const inputClass =
  'flex-1 bg-transparent px-4 py-3 text-base outline-none placeholder:text-neutral-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'

function CustomSelect({ value, onChange, placeholder, options, label }: {
  value: string
  onChange: (v: string) => void
  placeholder: string
  options: { value: string; label: string }[]
  label: string
}) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  React.useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={label}
        className="w-full flex items-center justify-between rounded-[10px] min-h-[48px] px-4 py-3 border-[1.5px] border-border bg-transparent text-base transition-colors hover:border-primary/40"
        style={{ color: selected ? '#1A1A2E' : '#9CA3AF' }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-neutral-400" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-30 top-full left-0 right-0 mt-1 rounded-xl border border-border bg-surface shadow-card-hover max-h-[200px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              className="w-full text-left px-4 py-2.5 text-[15px] text-neutral-800 hover:bg-primary/[0.06] transition-colors first:rounded-t-xl last:rounded-b-xl"
              style={{ fontWeight: opt.value === value ? 600 : 400, color: opt.value === value ? TEAL : undefined }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function BmiCalculator() {
  const [units, setUnits] = React.useState<UnitSystem>('imperial')
  const [feet, setFeet] = React.useState('')
  const [inches, setInches] = React.useState('')
  const [weightLbs, setWeightLbs] = React.useState('')
  const [heightCm, setHeightCm] = React.useState('')
  const [weightKg, setWeightKg] = React.useState('')

  const handleUnitSwitch = (newUnit: UnitSystem) => {
    if (newUnit === units) return
    if (newUnit === 'metric') {
      const ft = parseInt(feet, 10)
      const inc = parseInt(inches, 10)
      if (!isNaN(ft) && !isNaN(inc)) setHeightCm(String(Math.round((ft * 12 + inc) * 2.54)))
      const lbs = parseInt(weightLbs, 10)
      if (!isNaN(lbs) && lbs > 0) setWeightKg(String(Math.round(lbs * 0.453592)))
    } else {
      const cm = parseInt(heightCm, 10)
      if (!isNaN(cm) && cm > 0) {
        const total = Math.round(cm / 2.54)
        setFeet(String(Math.floor(total / 12)))
        setInches(String(total % 12))
      }
      const kg = parseInt(weightKg, 10)
      if (!isNaN(kg) && kg > 0) setWeightLbs(String(Math.round(kg * 2.20462)))
    }
    setUnits(newUnit)
  }

  const feetNum = parseInt(feet, 10)
  const inchesNum = parseInt(inches, 10)
  const lbsNum = parseInt(weightLbs, 10)
  const cmNum = parseInt(heightCm, 10)
  const kgNum = parseFloat(weightKg)

  const hasHeight = units === 'imperial' ? !isNaN(feetNum) && !isNaN(inchesNum) : !isNaN(cmNum) && cmNum >= 90
  const hasWeight = units === 'imperial' ? !isNaN(lbsNum) && lbsNum >= 80 : !isNaN(kgNum) && kgNum >= 36
  const hasBmi = hasHeight && hasWeight

  const bmi = hasBmi
    ? units === 'imperial' ? calcBmi(feetNum, inchesNum, lbsNum) : calcBmiMetric(cmNum, kgNum)
    : 0
  const cat = hasBmi ? getBmiCategory(bmi) : null
  const dotPct = hasBmi ? bmiToPercent(bmi) : 0

  return (
    <section id="how-it-works" className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
          {/* Left — header */}
          <div className="lg:w-[33%] flex-shrink-0">
            <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Quick Health Check</p>
            <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md font-medium mb-3">
              What&apos;s your BMI <em className="not-italic text-primary">not telling you?</em>
            </h2>
            <p className="text-neutral-500 text-body">
              BMI determines how your body metabolizes treatment. Your clinician uses it alongside height and weight to calibrate the right protocol dosage.
            </p>
          </div>

          {/* Right — calculator */}
          <div className="lg:w-[50%] lg:ml-auto min-w-0">
            {/* Question label + unit toggle */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-headline-sm font-semibold text-neutral-900">
                Enter your height and weight
              </p>
              <div className="inline-flex rounded-full p-0.5" style={{ backgroundColor: 'rgba(26,26,46,0.06)' }}>
                {([['imperial', 'ft / lbs'], ['metric', 'cm / kg']] as const).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleUnitSwitch(val)}
                    className="rounded-full px-3 py-1 transition-all duration-200"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: units === val ? '#FFFFFF' : '#888888',
                      backgroundColor: units === val ? TEAL : 'transparent',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Height inputs */}
            {units === 'imperial' ? (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <CustomSelect
                  value={feet}
                  onChange={setFeet}
                  placeholder="Feet"
                  label="Feet"
                  options={[3, 4, 5, 6, 7].map((f) => ({ value: String(f), label: `${f} ft` }))}
                />
                <CustomSelect
                  value={inches}
                  onChange={setInches}
                  placeholder="Inches"
                  label="Inches"
                  options={Array.from({ length: 12 }, (_, i) => ({ value: String(i), label: `${i} in` }))}
                />
              </div>
            ) : (
              <div className="mb-4">
                <div className="flex items-center rounded-[10px] min-h-[48px] border-[1.5px] border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-focus transition-colors">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={90}
                    max={250}
                    placeholder="Height"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className={inputClass}
                  />
                  <span className="pr-4 text-[14px] font-medium text-neutral-400 select-none">cm</span>
                </div>
              </div>
            )}

            {/* Weight input */}
            <div className="mb-6">
              <div className="flex items-center rounded-[10px] min-h-[48px] border-[1.5px] border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-focus transition-colors">
                <input
                  type="number"
                  inputMode="numeric"
                  min={units === 'imperial' ? 80 : 36}
                  max={units === 'imperial' ? 600 : 272}
                  placeholder="Weight"
                  value={units === 'imperial' ? weightLbs : weightKg}
                  onChange={(e) => units === 'imperial' ? setWeightLbs(e.target.value) : setWeightKg(e.target.value)}
                  className={inputClass}
                />
                <span className="pr-4 text-[14px] font-medium text-neutral-400 select-none">
                  {units === 'imperial' ? 'lbs' : 'kg'}
                </span>
              </div>
            </div>

            {/* Live BMI display */}
            <div
              className="rounded-xl p-5 mb-4 transition-all duration-300"
              style={{ backgroundColor: 'rgba(26,26,46,0.03)', border: '1px solid rgba(26,26,46,0.06)' }}
            >
              <p className="text-[13px] font-medium text-neutral-400 mb-3" style={{ letterSpacing: '0.03em' }}>
                Your BMI
              </p>

              <div className="flex items-baseline justify-between mb-4">
                <span
                  className="font-bold transition-all duration-200"
                  style={{ fontSize: '36px', lineHeight: 1, color: hasBmi ? (cat?.color ?? TEAL) : '#D1D5DB' }}
                >
                  {hasBmi ? bmi.toFixed(1) : '—'}
                </span>
                {hasBmi && cat && (
                  <span className="text-[14px] font-semibold" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                )}
              </div>

              {/* Segmented bar */}
              <div className="relative mb-1.5">
                <div className="flex h-[6px] rounded-full overflow-hidden">
                  {SEGMENTS.map((seg) => {
                    const left = bmiToPercent(seg.minBmi)
                    const right = bmiToPercent(seg.maxBmi)
                    return <div key={seg.minBmi} style={{ width: `${right - left}%`, backgroundColor: seg.color }} />
                  })}
                </div>
                <div
                  className="absolute top-1/2 transition-all duration-150 ease-out"
                  style={{ left: `${dotPct}%`, opacity: hasBmi ? 1 : 0, transform: 'translateX(-50%) translateY(-50%)' }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: cat?.color ?? TEAL, boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
                  />
                </div>
              </div>

              {/* Threshold labels */}
              <div className="relative h-4 mb-3">
                {THRESHOLDS.map((t) => (
                  <span
                    key={t.label}
                    className="absolute text-[11px] -translate-x-1/2"
                    style={{ left: `${bmiToPercent(t.value)}%`, color: '#AAAAAA' }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Contextual copy + CTA */}
              {hasBmi && cat && (
                <div className="transition-opacity duration-200">
                  <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
                    {bmi < 18.5
                      ? `A BMI of ${bmi.toFixed(1)} suggests your body may be under-resourced. Low NAD+ levels are common in underweight individuals.`
                      : bmi < 25
                        ? `A BMI of ${bmi.toFixed(1)} is within the healthy range — but BMI doesn't capture metabolic health, hormone balance, or inflammation.`
                        : `A BMI of ${bmi.toFixed(1)} often correlates with reduced NAD+ levels and elevated inflammatory markers that go undetected in standard panels.`
                    }
                  </p>
                  <Link
                    href={`/peptides?bmi=${bmi.toFixed(1)}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    {cat.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            <p className="text-neutral-500 text-[12px] leading-relaxed">
              BMI is one factor in your Vitality Index. Your clinician considers the full picture when setting your dosage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
