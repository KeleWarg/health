'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const GOAL_OPTIONS = [
  { value: 'general_wellness', label: 'General Wellness' },
  { value: 'anti_aging', label: 'Anti-Aging' },
  { value: 'energy', label: 'Boost Energy' },
  { value: 'skin', label: 'Brighten Skin' },
  { value: 'immune', label: 'Immune Support' },
  { value: 'detox', label: 'Detoxification' },
  { value: 'antioxidant', label: 'Antioxidant Benefits' },
]

const CDN = 'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev'

const VIDEO_SRC = `${CDN}/AdobeStock_301343733.mov`

export function PeptideJourney() {
  const router = useRouter()
  const [selected, setSelected] = React.useState('')
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  const handleSelect = (value: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setSelected(value)
    timerRef.current = setTimeout(() => {
      router.push(`/peptides?goal=${value}`)
    }, 500)
  }

  return (
    <section className="relative bg-surface-cream py-16 sm:py-24 lg:h-[840px] lg:flex lg:items-center overflow-hidden">
      {/* Floating bottle — outside container, right edge */}
      <img
        src="/NAD+.png"
        alt=""
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%) rotate(10deg)',
          height: '55%',
          filter: 'drop-shadow(-12px 12px 32px rgba(0,0,0,0.25))',
          animation: 'float-gentle 4s ease-in-out infinite',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:h-[680px]">
          {/* Left — video */}
          <div className="hidden lg:flex lg:w-[45%] h-full">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-100">
              <video
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — quiz first question */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-4">
              NAD+ Vitality Index
            </p>

            <h2 className="text-headline-md sm:text-display lg:text-display-md text-neutral-900 mb-3">
              Discover your{' '}
              <span className="text-primary">Vitality Index</span>
            </h2>

            <p className="text-body text-neutral-500 mb-6 max-w-[480px]">
              Looking for more energy, sharper focus, or just want your body to feel
              like it&rsquo;s working for you again? Your Vitality Index starts here.
            </p>

            <p className="text-body font-medium text-neutral-800 mb-4">
              Each answer shapes your Vitality Index. There are no wrong responses.
            </p>

            {/* Goal option cards */}
            <div>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {GOAL_OPTIONS.map((opt, i) => {
                  const isSelected = selected === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={cn(
                        'flex items-center gap-3 w-full bg-surface border rounded-lg text-left',
                        'cursor-pointer transition-all duration-200 flex-shrink-0',
                        isSelected
                          ? 'border-primary bg-[#F2F6F5] shadow-sm'
                          : 'border-[#E8E8E8] hover:border-primary hover:bg-[#F2F6F5]',
                      )}
                      style={{ height: '56px', paddingLeft: '16px', paddingRight: '16px' }}
                    >
                      <div
                        className={cn(
                          'flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold transition-colors duration-200',
                          isSelected
                            ? 'bg-primary text-white'
                            : 'bg-[#F2F2F2] text-neutral-500',
                        )}
                        style={{ width: '28px', height: '28px' }}
                      >
                        {LETTERS[i]}
                      </div>
                      <span className="text-sm sm:text-base" style={{ color: '#1B2A4A' }}>
                        {opt.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <p className="mt-4" style={{ fontSize: '13px', fontWeight: 300, color: '#9CA3AF' }}>
              This helps your clinician build the right protocol — and your Vitality Index.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
