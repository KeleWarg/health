'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'NAD+ Therapy', href: '#nad' },
  { label: 'Biomarker Testing', href: '#biomarkers' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Team', href: '#team' },
]

interface NavProps {
  onGetStarted: () => void
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
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Forbes%20Health.png"
            alt="Forbes Vitals"
            width={170}
            height={40}
            priority
            className="h-6 w-auto transition-all duration-500"
            style={!scrolled ? { filter: 'brightness(0) invert(1)' } : undefined}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-[13px] px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap',
                scrolled
                  ? 'text-neutral-500 hover:text-neutral-800 hover:bg-black/[0.04]'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.08]',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

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
