'use client'

const ITEMS = [
  {
    title: 'A clinician who reviews your profile — not a checkbox',
    desc: 'Every prescription is a medical decision made by a real, board-certified physician who reads your results before approving anything.',
  },
  {
    title: 'Unlimited access to your care team',
    desc: 'Message anytime. Video calls same-day. No queues, no gatekeeping — just direct access to the people managing your care.',
  },
  {
    title: 'A protocol that evolves with you',
    desc: 'Dosing and recommendations adjust based on how your body actually responds — not a one-size-fits-all starting point.',
  },
  {
    title: "You don't pay unless your doctor says yes",
    desc: "$0 due until your clinician approves your protocol. If it's not right for you, you owe nothing.",
  },
]

export function ExpertCare() {
  return (
    <section className="bg-surface-cream py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Mock app screen */}
          <div className="rounded-xl border border-border bg-white p-6 shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[13px] text-neutral-500 font-medium tracking-wide">Forbes Vitals</span>
              <div className="ml-auto w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[12px] font-semibold">
                KC
              </div>
            </div>
            <div className="text-center mb-5">
              <p className="text-neutral-500 text-[12px] uppercase tracking-wider mb-1">Your BioIQ Score</p>
              <p className="text-neutral-900 text-[48px] font-semibold leading-none">74<span className="text-neutral-400 text-[20px]">/100</span></p>
            </div>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {Array.from({ length: 20 }).map((_, i) => {
                let color = 'bg-neutral-100'
                if (i < 4) color = 'bg-primary'
                else if (i < 12) color = 'bg-green'
                else if (i < 14) color = 'bg-amber'
                return <div key={i} className={`w-full aspect-square rounded-md ${color}`} />
              })}
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-primary" /> Optimal</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-green" /> In Range</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber" /> Out of Range</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-neutral-100" /> Pending</span>
            </div>
            <div className="flex gap-1 mt-5 border-t border-border pt-4">
              {['Biomarkers', 'Protocol', 'Tracking', 'Activity'].map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 text-[12px] py-1.5 rounded-md transition-colors ${
                    i === 0 ? 'bg-primary/[0.06] text-primary font-medium' : 'text-neutral-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h2 className="text-neutral-900 text-headline-lg mb-8">
              Expert care, built in from <em className="not-italic text-primary">day one.</em>
            </h2>
            <div className="space-y-0 divide-y divide-border">
              {ITEMS.map((item) => (
                <div key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <p className="text-neutral-900 font-semibold text-[15px] mb-1.5">{item.title}</p>
                  <p className="text-neutral-500 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
