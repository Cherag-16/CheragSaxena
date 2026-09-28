import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectStats } from "@/components/project-stats"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectStats />
  <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
