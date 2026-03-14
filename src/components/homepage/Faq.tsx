'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/ScrollReveal'

const FAQS = [
  { q: 'How does the online consultation work?', a: 'Complete a short health questionnaire online. It takes about 5 minutes. A board-certified clinician reviews your responses and prescribes treatment if appropriate. No video call required.' },
  { q: 'Are these real FDA-approved medications?', a: 'Yes. We prescribe FDA-approved medications and FDA-regulated compounded formulations when medically appropriate. All medications are dispensed from licensed U.S. pharmacies.' },
  { q: "What if I'm not prescribed treatment?", a: "You won't be charged. You only pay if a clinician writes your prescription and you choose to fill it." },
  { q: 'How fast is shipping?', a: 'Most orders ship within 1 to 2 business days and arrive in 3 to 5 business days. All shipments arrive in plain, discreet packaging with tracking.' },
  { q: 'Do I need insurance?', a: "No. We don't process insurance directly. All pricing is transparent and upfront." },
  { q: 'Can I use my HSA or FSA?', a: 'Yes. All Forbes Health treatments are HSA/FSA eligible. You can use your pre-tax health savings to pay for your plan.' },
  { q: 'How do I cancel or pause my plan?', a: 'Cancel or pause anytime from your account. No phone calls, no cancellation fees, no contracts.' },
  { q: 'What states do you serve?', a: 'Forbes Health is available in most U.S. states. Your clinician will be licensed in your state. Availability may vary by treatment.' },
  { q: 'Can I get multiple treatments at once?', a: 'Yes. You can be prescribed treatments across multiple categories. Your care team manages everything in one place.' },
  { q: 'Is my information private?', a: 'All health data is protected with HIPAA-compliant encryption. Your information is never shared or sold. Packaging is plain with no branding.' },
]


export function Faq() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null)

  return (
    <section className="bg-surface pt-16 sm:pt-24 pb-[88px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="lg:w-[75%] mx-auto text-center mb-10">
          <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Common Questions</p>
          <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md font-semibold sm:font-medium">
            Everything you want to know {' '}<em className="not-italic text-primary">before you start.</em>
          </h2>
        </div>

        <div className="divide-y divide-border">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={i * 60}>
            <div>
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
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
