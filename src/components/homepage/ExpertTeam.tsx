'use client'

import * as React from 'react'
import Image from 'next/image'

const DOCTORS = [
  { name: 'Dr Anant Vinjamoori', title: 'Superpower Chief Longevity Officer, Harvard MD & MBA', image: '/AdobeStock_608751415.jpeg' },
  { name: 'Dr Leigh Erin Connealy', title: 'Clinician & Founder of The Centre for New Medicine', image: '/AdobeStock_307669822.jpeg' },
  { name: 'Dr Abe Malkin', title: 'Founder & Medical Director of Concierge MD', image: '/AdobeStock_406504478.jpeg' },
  { name: 'Dr Robert Lufkin', title: 'UCLA Medical Professor, NYT Bestselling Author', image: '/AdobeStock_1682131487.jpeg' },
]

export function ExpertTeam() {
  return (
    <section id="team" className="bg-surface py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="lg:w-[50%] mb-10">
          <p className="text-primary text-[13px] font-medium uppercase tracking-[0.1em] mb-3">Advisory Board</p>
          <h2 className="text-neutral-900 text-headline-md sm:text-display lg:text-display-md font-medium mb-4">
            The standard of care starts with <em className="not-italic text-primary">the people who set it.</em>
          </h2>
          <p className="text-neutral-500 text-body leading-relaxed">
            Forbes Vitals protocols are developed and reviewed by a medical advisory board of board-certified physicians and researchers who have spent careers at the intersection of longevity, performance, and clinical medicine.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {DOCTORS.map((doc) => (
            <div key={doc.name} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-cream">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-16">
                  <div className="h-[52px]">
                    <p className="text-white font-semibold text-[15px] leading-snug">{doc.name}</p>
                    <p className="text-white/60 text-[13px] leading-snug mt-0.5 line-clamp-2">{doc.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
