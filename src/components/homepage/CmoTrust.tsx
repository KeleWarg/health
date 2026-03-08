'use client'

import Link from 'next/link'

export function CmoTrust() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-8 items-start">
            <div>
              <h2 className="text-neutral-900 text-headline-sm sm:text-headline-md mb-3">
                Products you can trust. <em className="not-italic text-primary">Science you can verify.</em>
              </h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed mb-6">
                Our NAD+ therapy and biomarker panels are built on peer-reviewed science and reviewed by
                board-certified physicians. If a clinician doesn&apos;t approve your protocol, you pay nothing.
              </p>
              <Link
                href="/peptides"
                className="btn-primary btn-continue inline-flex items-center justify-center gap-2"
              >
                Take the Quiz
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Doctor card */}
            <div className="flex-shrink-0 w-[160px]">
              <div className="rounded-xl bg-[#E4EAE8] h-[200px] relative overflow-hidden mb-3">
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path d="M8 1l2 3h3l-2 3 1 3-4-1-4 1 1-3-2-3h3l2-3z" stroke="#2A6B5A" strokeWidth="1" fill="#2A6B5A" fillOpacity="0.1" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-800 leading-tight">Dr. James Liu, MD</p>
                    <p className="text-[9px] text-neutral-500">Chief Medical Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-neutral-500 text-[12px] leading-relaxed mt-8 border-t border-border pt-6">
            Forbes Vitals products require an online consultation with a licensed healthcare provider who will
            determine if treatment is appropriate. Results may vary. Biomarker testing is not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  )
}
