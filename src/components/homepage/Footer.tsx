'use client'

import Image from 'next/image'
import Link from 'next/link'

const COLUMNS = [
  {
    title: 'Treatments',
    links: [
      { label: 'Weight Loss', href: '/weight-loss' },
      { label: 'Hair Loss', href: '/hair-loss' },
      { label: 'Erectile Dysfunction', href: '/erectile-dysfunction' },
      { label: 'Testosterone', href: '/testosterone' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Clinicians', href: '/clinicians' },
      { label: 'Careers', href: '/careers' },
    ],
  },
]

const FOOTER_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Telehealth Consent', href: '/telehealth-consent' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Sitemap', href: '/sitemap' },
]

export function Footer() {
  return (
    <footer className="bg-[#0d3d3a] pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/forbes-health-logo-white.svg"
            alt="Forbes Health"
            width={152}
            height={20}
            className="h-5 w-auto"
          />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-white/40 text-[12px] uppercase tracking-[0.1em] mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 text-[14px] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-white/40 text-[13px] hover:text-white/60 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-white/30 text-[12px]">
              © {new Date().getFullYear()} Forbes Health
            </p>
          </div>

          <p className="text-white/25 text-[11px] leading-relaxed mt-6">
            Forbes Health provides access to telehealth consultations and prescription medications. All treatments are prescribed by independently licensed healthcare providers. Forbes Health does not provide medical advice, diagnosis, or treatment directly. Individual results may vary. Not all patients will be prescribed medication.
          </p>
        </div>
      </div>
    </footer>
  )
}
