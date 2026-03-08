'use client'

export function ClinicalTrust() {
  return (
    <section className="bg-surface-cream py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-neutral-900 text-headline-lg mb-3">
              Clinician-reviewed. <em className="not-italic text-primary">Forbes-backed.</em>
            </h2>
            <p className="text-neutral-500 text-body leading-relaxed mb-6">
              Every NAD+ protocol is reviewed by a board-certified physician before it ships.
              Every biomarker panel is processed by a CLIA-certified lab.
            </p>
            <button
              type="button"
              className="text-primary text-[15px] font-medium hover:underline"
            >
              Learn more
            </button>
          </div>

          {/* Photo collage mock */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-2 h-[280px]">
              <div className="rounded-xl bg-[#E8F2EE]" />
              <div className="rounded-xl bg-[#EDE9E1] relative">
                {/* Board reviewed badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-card flex flex-col items-center justify-center">
                  <span className="text-[8px] font-bold text-neutral-800 uppercase leading-none">BOARD</span>
                  <span className="text-[10px] font-semibold text-primary leading-none">MD</span>
                  <span className="text-[8px] font-bold text-neutral-800 uppercase leading-none">REVIEWED</span>
                </div>
                {/* CLIA badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-card flex flex-col items-center justify-center rotate-45 rounded-md">
                  <div className="-rotate-45 text-center">
                    <span className="text-[7px] font-bold text-neutral-800 uppercase block leading-none">CLIA</span>
                    <span className="text-[7px] text-neutral-500 block leading-none">certified</span>
                    <span className="text-[7px] font-bold text-neutral-800 uppercase block leading-none">LABS</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#EAE4F0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
