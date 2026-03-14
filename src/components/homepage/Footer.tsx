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
    <footer className="relative pt-14 pb-8" style={{ background: 'linear-gradient(135deg, #1a5c4e 0%, #0d3d3a 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/forbes-health-logo-white.svg"
            alt="Forbes Health"
            width={152}
            height={20}
            className="h-5 w-auto"
          />
        </div>

        {/* Compliance disclosures */}
        <div className="space-y-4 mb-12">
          <p className="text-white/25 text-[11px] leading-relaxed">
            *The assessment made available on the Forbes Health website does not create a doctor-patient relationship between the individual completing the assessment and Forbes Health. A partner network of US-licensed doctors that adhere to rigorous medical protocols designed for patient safety has established exclusionary criteria to determine if an individual does not qualify for GLP-1s. The answers an individual provides to the assessment consequently determine if the individual is screened out of eligibility for GLP-1 medication, and a licensed clinician will meet with an individual after checkout to determine if they qualify for a prescription. Licensed clinicians retain the decision to prescribe compounded GLP-1s to patients.
          </p>
          <p className="text-white/25 text-[11px] leading-relaxed">
            All claims and benefits on this website refer to self-reported data from GLP-1 customers on a treatment plan that includes compounded GLP-1 medications and consultations with medical professionals. Customers reported their weight on their initial medical intake questionnaire every 3–4 weeks thereafter. Results from compounded medications found on the platform may vary and be affected by an individual&apos;s adherence to the program and their clinician&apos;s recommendations. Compounded GLP-1s are produced in FDA-regulated facilities. Although these facilities are highly regulated, the medications are not FDA-approved or evaluated for safety, efficacy, or quality. The decision to use compounded drugs is guided by the licensed provider&apos;s medical judgment, which is informed by a telehealth consultation and medical history.
          </p>
          <p className="text-white/25 text-[11px] leading-relaxed">
            We encourage all prospective users of compounded medications to speak with their provider about the specific risks and benefits that may come with the use of compounded medication. Forbes Health does not produce compounded medications, and individuals may receive medication that looks different than what is portrayed on the website.
          </p>

          <p className="text-white/25 text-[11px] leading-relaxed">
            <span className="text-white/30 font-medium">Pharmacy Providers</span> — We are partnered with multiple USA certified pharmacies to bring the best product and overall experience to our membership. Our team meets regularly with pharmacies to discuss any product shortages, shipping delays, and get updated reports on their medication testing.
          </p>

          <p className="text-white/25 text-[11px] leading-relaxed">
            *Results vary based on starting weight and program adherence. Inches lost from hips, waist, chest, thighs and arms in the first month. Patients exercised daily and ate a reduced-calorie diet. Their fat loss is not typical. Results may vary. Medication prescriptions are at the discretion of medical providers and may not be suitable for everyone. Patients typically result in 1–2 lbs per week weight loss after 4 weeks, involving a healthy diet and exercise changes. Consult a healthcare professional before using medication or starting any weight loss program. *Based on the average weight loss as reported by patients without diabetes who reached and maintained a dose of 2.4 mg/week of GLP-1 treatment, along with a reduced-calorie diet and increased physical activity.
          </p>

          <p className="text-white/25 text-[11px] leading-relaxed">
            Medication is included in the cost of the Forbes Health Program. Wegovy® is FDA-approved for weight loss. Ozempic® is FDA-approved for type 2 diabetes treatment but may be prescribed for weight loss. The trademarks, service marks, trade names (Wegovy®, Ozempic®), and products displayed on this Internet site are protected and belong to their respective owners. Medical treatment is provided by partner affiliated P.C.s and affiliated networks for medical professional corporations and associations. No data, photos, claims or any other information is associated with results derived from clinical trials, studies or public information and is always representative of Forbes Health patient experience.
          </p>
        </div>

        {/* Link columns */}
        <div className="border-t border-white/[0.08] pt-10">
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
        </div>

        {/* Bottom bar */}
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
