'use client'

import * as React from 'react'

const INSTITUTIONS = ['Johns Hopkins', 'Mayo Clinic', 'Stanford Medicine', 'Cleveland Clinic']

const DOCTORS = [
  { name: 'Dr. Sarah Chen, MD', specialty: 'Endocrinology & Longevity', bg: '#E8F2EE' },
  { name: 'Dr. Marcus Reid, MD', specialty: 'Internal Medicine', bg: '#EDE9E1' },
  { name: 'Dr. Priya Nair, MD', specialty: 'Preventive Health', bg: '#EAE4F0' },
  { name: 'Dr. James Liu, MD', specialty: 'Cardiovascular Medicine', bg: '#E4EAE8' },
  { name: 'Dr. Aisha Osei, PhD', specialty: 'Metabolic Research', bg: '#F0EBE4' },
]

export function ExpertTeam() {
  return (
    <section id="team" className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-neutral-900 text-headline-lg mb-3">
          Built in collaboration with <em className="not-italic text-primary">industry experts.</em>
        </h2>
        <p className="text-neutral-500 text-body mb-8 max-w-[560px]">
          Our protocols are built on clinically reviewed frameworks developed in partnership with leading physicians, researchers, and specialists.
        </p>

        {/* Institution strip */}
        <div className="flex items-center gap-6 flex-wrap mb-10">
          {INSTITUTIONS.map((name) => (
            <span key={name} className="text-neutral-800 text-sm font-semibold opacity-30">
              {name}
            </span>
          ))}
        </div>

        {/* Doctor cards carousel */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DOCTORS.map((doc) => (
            <div key={doc.name} className="flex-shrink-0 w-[210px] snap-start">
              <div
                className="h-[260px] rounded-xl mb-3 relative overflow-hidden"
                style={{ backgroundColor: doc.bg }}
              >
                {/* Credential badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path d="M8 1l2 3h3l-2 3 1 3-4-1-4 1 1-3-2-3h3l2-3z" stroke="#2A6B5A" strokeWidth="1" fill="#2A6B5A" fillOpacity="0.1" />
                  </svg>
                  <div>
                    <p className="text-[11px] font-medium text-neutral-800 leading-tight truncate">{doc.name.split(',')[0]}</p>
                    <p className="text-[10px] text-neutral-500">Board Certified</p>
                  </div>
                </div>
              </div>
              <p className="text-neutral-900 font-semibold text-[14px]">{doc.name}</p>
              <p className="text-primary text-[13px] underline decoration-primary/30">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
