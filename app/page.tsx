import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ResearchSection } from "@/components/research-section"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { FeaturedProjects } from "@/components/featured-projects"
import { CallToAction } from "@/components/call-to-action"
import { WhyHireMe } from "@/components/why-hire-me"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider max-w-5xl mx-auto" />
        <ResearchSection />
        <div className="section-divider max-w-5xl mx-auto" />
        <StatsSection />
        <div className="section-divider max-w-5xl mx-auto" />
        <FeaturedProjects />
        <div className="section-divider max-w-5xl mx-auto" />
        <WhyHireMe />
        <div className="section-divider max-w-5xl mx-auto" />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
