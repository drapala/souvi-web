'use client'

import React from 'react'
import { PrivacyBanner } from '@/components/PrivacyBanner'

// Landing Page Components
import { PromoBanner } from '@/components/landing/PromoBanner'
import { Hero } from '@/components/landing/Hero'
import { SocialProof } from '@/components/landing/SocialProof'
import { ShowcaseGrid } from '@/components/landing/ShowcaseGrid'
import { FeaturesShowcase } from '@/components/landing/FeaturesShowcase'
import { ValueAudience } from '@/components/landing/ValueAudience'
import { AuthenticReviews } from '@/components/landing/AuthenticReviews'
import { FAQ } from '@/components/landing/FAQ'


import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* <PromoBanner /> - Moved to Hero */}
      <Hero />
      <SocialProof />
      <ShowcaseGrid />
      <FeaturesShowcase />
      <ValueAudience />
      <AuthenticReviews />
      <FAQ />


      <Footer />

      {/* Privacy */}
      <PrivacyBanner />
    </main>
  )
}