'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'NAD+ Therapy', href: '#nad' },
  { label: 'Biomarker Testing', href: '#biomarkers' },

  { label: 'Our Team', href: '#team' },
]

interface NavProps {
  onGetStarted?: () => void
}

export function Nav({ onGetStarted }: NavProps) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0 relative h-6" aria-label="Forbes Health">
          <img
            src="/forbes-health-logo-white.svg"
            alt="Forbes Health"
            className={cn(
              'h-6 w-auto absolute left-0 transition-opacity duration-300',
              scrolled ? 'opacity-0' : 'opacity-100',
            )}
          />
          <img
            src="/forbes-health-logo-dark.svg"
            alt="Forbes Health"
            className={cn(
              'h-6 w-auto transition-opacity duration-300',
              scrolled ? 'opacity-100' : 'opacity-0',
            )}
          />
        </Link>


        <button
          type="button"
          onClick={onGetStarted}
          className={cn(
            'text-[13px] font-medium px-5 py-2 rounded-lg transition-all duration-300',
            scrolled
              ? 'bg-primary text-white hover:bg-primary-light'
              : 'bg-white text-neutral-900 hover:bg-white/90',
          )}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}
