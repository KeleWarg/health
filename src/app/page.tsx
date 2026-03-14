'use client'

import * as React from 'react'
import { Nav } from '@/components/homepage/Nav'
import { Hero } from '@/components/homepage/Hero'
import { TrustTicker } from '@/components/homepage/TrustTicker'
import { ProductSection } from '@/components/homepage/ProductSection'
import { OutcomeStats } from '@/components/homepage/OutcomeStats'
import { ExpertTeam } from '@/components/homepage/ExpertTeam'
import { WhyForbesHealth } from '@/components/homepage/WhyForbesHealth'
import { Faq } from '@/components/homepage/Faq'
import { Footer } from '@/components/homepage/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { PageTransition } from '@/components/PageTransition'


const NAD_DATA = {
  id: 'nad',
  eyebrow: 'Prescription Weight Loss',
  h2: 'Lose weight ',
  h2Accent: 'without fighting your body.',
  h3: '',
  body: "GLP-1s like semaglutide work by reducing your appetite at the source. No willpower required. Prescribed by our clinicians and shipped to your door every month.",
  checklistTitle: 'Everything you need—included:',
  checklist: [
    'Prescription to fast, effective GLP-1',
    '1:1 physician guidance',
    '24/7 support',
    'Weight loss guarantee',
    'Fast & discreet shipping',
  ],
  quizHref: 'https://peptides-fpe5.vercel.app/',
  quizText: 'Learn about GLP-1 treatment',
  legal: '',
  carousel: [
    { goalLabel: 'Goal', goalValue: 'Restore energy', markerName: 'NAD+', markerLabel: 'Cellular Energy', bullets: ['Mitochondrial support', 'Sustained daily energy'], gradientFrom: '#c8ddd7', gradientTo: '#8ebfb4' },
    { goalLabel: 'Goal', goalValue: 'Strengthen immunity', markerName: 'IL-6', markerLabel: 'Immune Marker', bullets: ['Reduce chronic inflammation', 'Improve immune response'], gradientFrom: '#d4cfe8', gradientTo: '#a89fc4' },
    { goalLabel: 'Goal', goalValue: 'Faster recovery', markerName: 'CRP', markerLabel: 'Recovery Marker', bullets: ['Reduce soreness', 'Bounce back faster'], gradientFrom: '#d9e8d4', gradientTo: '#9fc4a8' },
    { goalLabel: 'Goal', goalValue: 'Mental clarity', markerName: 'BDNF', markerLabel: 'Brain Health', bullets: ['Sharper focus', 'Reduced brain fog'], gradientFrom: '#e8dfd4', gradientTo: '#c4b09f' },
  ],
  heroImage: '/semaglutide-vial.png',
  heroImageAlt: 'Woman feeling confident in activewear',
  heroImageClassName: 'bg-[#edf5f2]',
  collageVideos: [
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_440017363_Video_4K_Preview.mp4',
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_196522896_Video_4K_Preview.mp4',
    'https://pub-2f75537729e74145a7fc2b8d6fcc519e.r2.dev/AdobeStock_245344941_Video_4K_Preview.mp4',
  ],
  collageImages: { 0: '/Step - 1.png', 1: '/AdobeStock_1628807632.jpeg' },
  blendBottom: '#f2ece6',
}

const HAIR_LOSS_DATA = {
  id: 'hair-loss',
  eyebrow: 'Prescription Hair Restoration',
  h2: 'Thicker, fuller hair — ',
  h2Accent: 'backed by science.',
  h3: '',
  body: "Clinician-prescribed treatments like finasteride and minoxidil target hair loss at the root. Personalized to your pattern, shipped monthly.",
  checklistTitle: 'Everything you need—included:',
  checklist: [
    'Prescription finasteride or minoxidil',
    '1:1 physician guidance',
    'Ongoing progress tracking',
    'Results guarantee',
    'Fast & discreet shipping',
  ],
  quizHref: 'https://peptides-fpe5.vercel.app/',
  quizText: 'Coming Soon...',
  legal: '',
  carousel: [],
  heroImage: '/hair-loss-generated.png',
  heroImageAlt: 'Hair restoration treatment',
  heroImageClassName: 'bg-hero-gradient',
  collageVideos: ['placeholder'],
  collageImages: { 0: '/AdobeStock_326985142.jpeg', 1: '/AdobeStock_530041768.jpeg' },
  className: '!bg-[#f2ece6]',
}

const ED_DATA = {
  id: 'ed',
  eyebrow: 'Erectile Dysfunction Treatment',
  h2: 'Confidence when ',
  h2Accent: 'it matters most.',
  h3: '',
  body: "FDA-approved treatments like sildenafil and tadalafil, prescribed by our clinicians after an online consultation. Discreet packaging, delivered to your door.",
  checklistTitle: '',
  checklist: [],
  quizHref: 'https://peptides-fpe5.vercel.app/',
  quizText: 'Coming Soon...',
  legal: '',
  carousel: [],
  heroImage: '/AdobeStock_601493709 (1) 1.png',
  heroImageAlt: 'Man taking supplement pill',
  heroFullWidth: true,
  heroOffset: '32px',
  collageVideos: [],
  collageImages: {},
  sectionDark: true,
  sectionBackground: 'linear-gradient(135deg, #1a2019 0%, #2e3528 60%, #434d38 100%)',
  accentColor: '#DAAF55',
  flushBottom: true,
  className: '!pt-10 sm:!pt-14 !pb-0',
}

const TESTOSTERONE_DATA = {
  id: 'testosterone',
  eyebrow: 'Testosterone Replacement Therapy',
  h2: 'Reclaim your energy, ',
  h2Accent: 'drive, and strength.',
  h3: '',
  body: "Clinician-supervised TRT designed to restore optimal testosterone levels. Personalized dosing, ongoing monitoring, and monthly delivery.",
  checklistTitle: '',
  checklist: [],
  quizHref: 'https://peptides-fpe5.vercel.app/',
  quizText: 'Coming Soon...',
  legal: '',
  carousel: [],
  heroImage: '/AdobeStock_114822960 1.png',
  heroImageAlt: 'Testosterone replacement therapy',
  heroObjectPosition: 'center center',
  heroFullWidth: true,
  collageVideos: [],
  collageImages: {},
  sectionDark: true,
  sectionBackground: 'linear-gradient(135deg, #1a2019 0%, #2e3528 60%, #434d38 100%)',
  accentColor: '#DAAF55',
  flushBottom: true,
  className: '!pt-10 sm:!pt-14 !pb-0',
}


export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />
        <Hero />
        <ScrollReveal><ProductSection {...NAD_DATA} /></ScrollReveal>
        <ScrollReveal><ProductSection {...HAIR_LOSS_DATA} reversed /></ScrollReveal>
        <ScrollReveal><ProductSection {...ED_DATA} /></ScrollReveal>
        <ScrollReveal><ProductSection {...TESTOSTERONE_DATA} reversed /></ScrollReveal>
        <ScrollReveal><OutcomeStats /></ScrollReveal>
        <ScrollReveal><ExpertTeam /></ScrollReveal>
        <ScrollReveal><WhyForbesHealth /></ScrollReveal>
        <ScrollReveal><TrustTicker /></ScrollReveal>
        <ScrollReveal><Faq /></ScrollReveal>
        <ScrollReveal><Footer /></ScrollReveal>
      </div>
    </PageTransition>
  )
}
