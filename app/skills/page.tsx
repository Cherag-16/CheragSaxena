import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsHero } from "@/components/skills-hero"
import { TechStack } from "@/components/tech-stack"
import { ProfessionalSkills } from "@/components/professional-skills"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkillsHero />
        <TechStack />
        <ProfessionalSkills />
      </main>
      <Footer />
    </div>
  )
}
