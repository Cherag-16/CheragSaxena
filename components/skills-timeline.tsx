import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code, Award, Briefcase } from "lucide-react"

const timelineEvents = [
  {
    year: "2025",
    title: "Advanced Certifications & Internships",
    description: "Completed multiple advanced certifications in AI/ML, Cloud Computing, and Full Stack Development",
    icon: Award,
    type: "certification",
    achievements: ["Microsoft Azure Fundamentals", "AWS Cloud Practitioner", "GenAI Data Analytics"],
  },
  {
    year: "2024",
    title: "Full Stack Development Journey",
    description: "Intensive learning and project development in MERN stack with multiple live deployments",
    icon: Code,
    type: "development",
    achievements: ["15+ Projects Built", "MERN Stack Mastery", "DevTown Community Recognition"],
  },
  {
    year: "2024",
    title: "Professional Experience",
    description: "Gained practical industry experience through internships and collaborative projects",
    icon: Briefcase,
    type: "experience",
    achievements: ["2 Technical Internships", "Industry Exposure", "Team Collaboration"],
  },
  {
    year: "2023",
    title: "Academic Excellence",
    description: "Started B.Tech journey with outstanding academic performance and recognition",
    icon: Award,
    type: "academic",
    achievements: ["Best Excellence Award", "8.20 CGPA", "Top 10% Class Rank"],
  },
]

export function SkillsTimeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Learning Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my continuous learning, skill development, and professional growth in technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                return (
                  <div key={event.year + '-' + index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1 border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-serif font-bold text-xl text-foreground">{event.title}</h3>
                            <Badge variant="outline" className="text-primary border-primary">
                              {event.year}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{event.year}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Key Achievements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.achievements.map((achievement) => (
                              <Badge key={achievement} variant="secondary" className="text-xs">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
