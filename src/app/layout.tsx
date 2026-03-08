import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forbes Vitals — Clinician-Led Health Programs',
  description: 'Two clinician-led programs designed to help you feel better, age slower, and understand what\'s really going on inside your body.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <head />
      <body className="font-sans bg-surface">{children}</body>
    </html>
  )
}
