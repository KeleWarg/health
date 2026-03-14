import type { Metadata } from 'next'
import '@/styles/globals.css'
import { DisableLinks } from '@/components/DisableLinks'

export const metadata: Metadata = {
  title: 'Forbes Health — Clinician-Led Health Programs',
  description: 'Clinician-led treatments for weight loss, hair loss, ED, and testosterone — prescribed online and shipped to your door.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-surface">
        <DisableLinks />
        {children}
      </body>
    </html>
  )
}
