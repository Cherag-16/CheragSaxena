"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceHero } from "@/components/experience-hero"
import { InternshipDetails } from "@/components/internship-details"
import { Users, MessageSquare, Target, Clock, Lightbulb, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const workValues = [
  {
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve existing skills",
    icon: Target,
  },
  {
    title: "Quality Focus",
    description: "Committed to delivering high-quality code and exceptional user experiences",
    icon: Zap,
  },
  {
    title: "Team Player",
    description: "Collaborative approach to problem-solving and knowledge sharing",
    icon: Users,
  },
  {
    title: "Time Management",
    description: "Efficient project delivery while maintaining code quality and standards",
    icon: Clock,
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ExperienceHero />
        <InternshipDetails />
        {/* Work Values */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">Work Values & Approach</h3>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workValues.map((value) => {
                const Icon = value.icon
                return (
                  <StaggerItem key={value.title} direction="up">
                    <Card
                      className="text-center border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm group hover:scale-105 transition-transform duration-300 h-full"
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4 h-full">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-serif font-semibold text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>
        {/* Career Goals */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <Card className="border-border bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground">Career Goals & Aspirations</h3>
                  <div className="max-w-3xl mx-auto space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I'm actively seeking <span className="font-semibold text-primary">internship opportunities</span> and{' '}
                      <span className="font-semibold text-accent">freelancing projects</span> where I can contribute to
                      innovative solutions while continuing to grow as a full-stack developer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Badge className="bg-primary text-primary-foreground">Full Stack Development</Badge>
                      <Badge className="bg-accent text-accent-foreground">MERN Stack</Badge>
                      <Badge variant="outline" className="border-primary text-primary">
                        Cloud Technologies
                      </Badge>
                      <Badge variant="outline" className="border-accent text-accent">
                        AI/ML Integration
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
