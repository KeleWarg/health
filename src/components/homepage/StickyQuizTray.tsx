'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface StickyQuizTrayProps {
  open: boolean
  onToggle: () => void
}

const JOURNEYS = [
  {
    label: 'NAD+ Vitality Index',
    desc: '3 min · Peptide therapy quiz',
    href: 'https://peptides-fpe5.vercel.app/',
  },
  {
    label: 'Biomarker BioIQ',
    desc: '3 min · 87-marker panel quiz',
    href: 'https://biomarker-topaz.vercel.app/biomarkers',
  },
]

export function StickyQuizTray({ open, onToggle }: StickyQuizTrayProps) {
  React.useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle()
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open, onToggle])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-[2px] animate-fade-in"
          onClick={onToggle}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-[70] flex flex-col items-center pointer-events-none md:hidden">
        {/* Journey cards */}
        {open && (
          <div className="pointer-events-auto mb-3 space-y-2 w-full max-w-[320px] px-4">
            <p className="text-center text-white/60 text-[11px] uppercase tracking-[0.12em] mb-2">
              Choose Your Journey
            </p>
            {JOURNEYS.map((j, i) => (
              <Link
                key={j.label}
                href={j.href}
                className="block bg-white rounded-xl p-4 shadow-card-hover hover:shadow-lg transition-all animate-tray-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="text-neutral-900 font-semibold text-[15px]">{j.label}</p>
                <p className="text-neutral-500 text-[13px]">{j.desc}</p>
              </Link>
            ))}
          </div>
        )}

        {/* Gradient fade tray + button */}
        <div
          className="pointer-events-auto w-full px-4 pb-[env(safe-area-inset-bottom,8px)] pt-8 flex flex-col items-center gap-1.5"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,61,58,0) 0%, rgba(13,61,58,0.85) 40%, rgba(13,61,58,0.97) 100%)',
          }}
        >
          <button
            type="button"
            onClick={onToggle}
            className="btn-primary w-full inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-neutral-100 active:bg-neutral-200"
          >
            Take the Quiz
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={cn('transition-transform duration-300', open ? 'rotate-45' : 'rotate-0')}
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-white/50 text-[11px] pb-1">
            Powered by Forbes Vitals
          </p>
        </div>
      </div>
    </>
  )
}
