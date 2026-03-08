'use client'

import * as React from 'react'
import { Nav } from '@/components/homepage/Nav'
import { Hero } from '@/components/homepage/Hero'
import { NavCards } from '@/components/homepage/NavCards'
import { TrustTicker } from '@/components/homepage/TrustTicker'
import { ProductSection } from '@/components/homepage/ProductSection'
import { BmiCalculator } from '@/components/homepage/BmiCalculator'
import { OutcomeStats } from '@/components/homepage/OutcomeStats'
// QualificationCards now embedded inside OutcomeStats
import { ExpertTeam } from '@/components/homepage/ExpertTeam'
import { PeptideJourney } from '@/components/homepage/PeptideJourney'
import { ClinicalTrust } from '@/components/homepage/ClinicalTrust'
import { CmoTrust } from '@/components/homepage/CmoTrust'
import { WhyForbesVitals } from '@/components/homepage/WhyForbesVitals'
import { Faq } from '@/components/homepage/Faq'
import { Footer } from '@/components/homepage/Footer'
import { StickyQuizTray } from '@/components/homepage/StickyQuizTray'

const NAD_DATA = {
  id: 'nad',
  eyebrow: 'Clinician-Prescribed NAD+ Therapy',
  h2: 'What if your body could feel ',
  h2Accent: 'ten years younger?',
  h3: 'A clinician-guided protocol built around your biology.',
  body: "The difference between people who age well and people who don't usually comes down to what they addressed before they had to. NAD+ is one of the few things science can measure, restore, and track.",
  checklistTitle: 'Everything you need — included:',
  checklist: [
    'Prescription to clinician-prescribed NAD+ therapy',
    '1:1 physician guidance throughout your protocol',
    'Dosing personalized as your body responds',
    'Free refills shipped on time, every month',
    '$0 due until your clinician approves',
  ],
  checklistImage: '/vitalsrx.png',
  quizHref: '/peptides',
  learnHref: '/nad',
  legal: 'Prescriptions are issued only after an online consultation with an independent licensed provider. Compounded medications are dispensed by state-licensed pharmacies but are not FDA-approved.',
  carousel: [
    { goalLabel: 'Goal', goalValue: 'Restore energy', markerName: 'NAD+', markerLabel: 'Cellular Energy', bullets: ['Mitochondrial support', 'Sustained daily energy'], gradientFrom: '#c8ddd7', gradientTo: '#8ebfb4' },
    { goalLabel: 'Goal', goalValue: 'Strengthen immunity', markerName: 'IL-6', markerLabel: 'Immune Marker', bullets: ['Reduce chronic inflammation', 'Improve immune response'], gradientFrom: '#d4cfe8', gradientTo: '#a89fc4' },
    { goalLabel: 'Goal', goalValue: 'Faster recovery', markerName: 'CRP', markerLabel: 'Recovery Marker', bullets: ['Reduce soreness', 'Bounce back faster'], gradientFrom: '#d9e8d4', gradientTo: '#9fc4a8' },
    { goalLabel: 'Goal', goalValue: 'Mental clarity', markerName: 'BDNF', markerLabel: 'Brain Health', bullets: ['Sharper focus', 'Reduced brain fog'], gradientFrom: '#e8dfd4', gradientTo: '#c4b09f' },
  ],
  heroImage: '/vitalsrx.png',
  heroImageAlt: 'Woman holding VitalsRX NAD+ vial',
  collageVideos: [
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_440017363_Video_4K_Preview.mp4',
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_196522896_Video_4K_Preview.mp4',
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_245344941_Video_4K_Preview.mp4',
  ],
}

const BIOMARKER_DATA = {
  id: 'biomarkers',
  eyebrow: 'Comprehensive Biomarker Testing',
  h2: 'The most empowering thing you can do for your health ',
  h2Accent: 'takes one blood draw.',
  h3: '87 markers. The test your annual physical was never designed to give you.',
  body: "Metabolic, hormonal, cardiovascular, thyroid, and inflammatory — the markers that explain how you feel, why you feel it, and what you can do about it. One test gives you the full picture.",
  checklistTitle: "One test. Answers you've never had:",
  checklist: [
    "87 biomarkers across 5 categories your physical doesn't cover",
    'Your BioIQ score — one number showing what to prioritize',
    'A health signal map showing exactly where to focus',
    'Clinician-reviewed results with actionable next steps',
    'HSA/FSA eligible — $1.09/day for 87 markers',
  ],
  quizHref: '/biomarkers',
  learnHref: '/biomarkers-info',
  legal: 'Biomarker testing provided by CLIA-certified laboratories. Results reviewed by board-certified clinicians.',
  carousel: [
    { goalLabel: 'Category', goalValue: 'Metabolic', markerName: 'HbA1c', markerLabel: 'Blood Sugar Control', bullets: ['Insulin sensitivity', 'Long-term glucose trends'], gradientFrom: '#c8ddd7', gradientTo: '#7aab99' },
    { goalLabel: 'Category', goalValue: 'Hormonal', markerName: '23 ng/dL', markerLabel: 'Free Testosterone', bullets: ['Energy & libido', 'Muscle & mood balance'], gradientFrom: '#e8d4d9', gradientTo: '#c49fa8' },
    { goalLabel: 'Category', goalValue: 'Cardiovascular', markerName: 'Lp(a)', markerLabel: 'Heart Risk Marker', bullets: ['Genetic cardiac risk', 'Cholesterol subtype analysis'], gradientFrom: '#d4d9e8', gradientTo: '#9fa8c4' },
    { goalLabel: 'Category', goalValue: 'Thyroid', markerName: 'TSH', markerLabel: 'Thyroid Function', bullets: ['Weight & fatigue link', 'T3/T4 conversion'], gradientFrom: '#e8e4c8', gradientTo: '#c4b87a' },
    { goalLabel: 'Category', goalValue: 'Inflammatory', markerName: 'hs-CRP', markerLabel: 'Inflammation Level', bullets: ['Silent inflammation', 'Longevity risk signal'], gradientFrom: '#dce8d4', gradientTo: '#a8c49f' },
  ],
  heroImage: '/Step - 5.png',
  heroImageAlt: 'Woman feeling energized outdoors',
  secondaryImage: '/adult walk.png',
  checklistImage: '/vitalsrx.png',
  checklistButtonText: 'Get your BioIQ',
  checklistBackground: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 60%, #6b3d22 100%)',
}

export default function HomePage() {
  const [trayOpen, setTrayOpen] = React.useState(false)

  return (
    <div className="min-h-screen">
      <Nav onGetStarted={() => setTrayOpen(true)} />
      <Hero />
      <NavCards />
      <TrustTicker />
      <ProductSection {...NAD_DATA} />
      <ProductSection {...BIOMARKER_DATA} reversed />
      <BmiCalculator />
      <OutcomeStats />
      <ExpertTeam />
      <PeptideJourney />
      {/* <ClinicalTrust /> */}
      {/* <CmoTrust /> */}
      <WhyForbesVitals />
      <TrustTicker />
      <Faq />
      <Footer />
      <StickyQuizTray open={trayOpen} onToggle={() => setTrayOpen((o) => !o)} />
    </div>
  )
}
