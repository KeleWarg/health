'use client'

const STATS = [
  {
    num: '87',
    label: 'biomarkers tested',
    desc: 'Your annual physical covers 14 on a good day. We test 87 — including the hormonal, metabolic, and inflammatory markers that explain how you actually feel.',
  },
  {
    num: '92%',
    label: 'feel measurably better',
    desc: 'Within 90 days of starting their protocol, 92% of Forbes Vitals patients report a meaningful, measurable improvement in energy, recovery, or mental clarity.',
  },
  {
    num: '$0',
    label: 'due until approved',
    desc: "A clinician reviews your profile before you're charged anything. If treatment isn't right for you, you owe nothing. No fine print, no exceptions.",
  },
  {
    num: '24hr',
    label: 'to clinician review',
    desc: 'From the moment you complete your quiz to the moment a physician reviews your protocol — most patients hear back within one business day.',
  },
]

export function WhyForbesVitals() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-white text-headline-lg mb-3">
          Why people choose <em className="not-italic text-[#5BBAA3]">Forbes Vitals.</em>
        </h2>
        <p className="text-white/60 text-body mb-12 max-w-[560px]">
          Not because it&apos;s the cheapest option. Because it&apos;s the one backed by the name that&apos;s spent decades holding health companies accountable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.num}
              className="rounded-xl p-6 border border-white/[0.08] bg-white/[0.04]"
            >
              <p className="text-[#5BBAA3] text-[36px] font-semibold leading-none mb-1">{stat.num}</p>
              <p className="text-white font-medium text-[15px] mb-2">{stat.label}</p>
              <p className="text-white/50 text-[14px] leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
