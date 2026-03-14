'use client'

const TICKER_ITEMS = [
  { headline: 'Licensed Clinicians', sub: 'Board-certified MDs' },
  { headline: '100% Online', sub: 'No office visits required' },
  { headline: 'HIPAA Compliant', sub: 'End-to-end encryption' },
  { headline: 'HSA/FSA Eligible', sub: 'Use pre-tax dollars' },
  { headline: 'Cancel Anytime', sub: 'No contracts. No calls.' },
  { headline: 'Free Delivery', sub: 'Shipped to your door' },
  { headline: 'Clear Pricing', sub: 'No hidden fees' },
  { headline: '$0 Due Until Prescribed', sub: 'Pay only if approved' },
  { headline: '12,000+ Patients', sub: 'Backed by Forbes Health' },
  { headline: '87+ Biomarkers', sub: 'Tested 2x per year' },
]


export function TrustTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="relative z-10">
      {/* Stat-bar marquee */}
      <div className="py-[22px] overflow-hidden border-y border-border">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 12s linear infinite',
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="inline-flex flex-col justify-center items-start px-6 md:px-9 border-r border-border"
            >
              <span className="text-[14px] font-semibold leading-[1.2] text-neutral-900">
                {item.headline}
              </span>
              <span className="text-[12px] font-normal leading-[1.3] mt-[2px] text-neutral-500">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
