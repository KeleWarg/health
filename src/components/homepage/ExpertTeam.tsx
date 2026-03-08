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
      <div className="max-w-[1280px] mx-auto">
        <div className="lg:w-[50%] mb-10">
          <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md mb-4">
            The standard of care starts with <em className="not-italic text-primary">the people who set it.</em>
          </h2>
          <p className="text-neutral-500 text-body leading-relaxed">
            Forbes Vitals protocols are developed and reviewed by a medical advisory board of board-certified physicians and researchers who have spent careers at the intersection of longevity, performance, and clinical medicine.
          </p>
        </div>

        {/* Doctor cards carousel */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DOCTORS.map((doc) => (
            <div key={doc.name} className="flex-shrink-0 w-[315px] snap-start">
              <div
                className="h-[312px] rounded-xl mb-3 relative overflow-hidden"
                style={{ backgroundColor: doc.bg }}
              >
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
