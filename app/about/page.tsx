"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
