import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Target, Clock, Lightbulb, Zap } from "lucide-react"

const professionalSkills = [
  {
    category: "Communication",
    icon: MessageSquare,
    skills: [
      { name: "Technical Communication", level: 85 },
      { name: "Team Collaboration", level: 95 },
      { name: "Client Interaction", level: 80 },
      { name: "Presentation Skills", level: 90 },
    ],
  },
  {
    category: "Leadership",
    icon: Users,
    skills: [
      { name: "Project Management", level: 85 },
      { name: "Team Coordination", level: 85 },
      { name: "Mentoring", level: 90 },
      { name: "Decision Making", level: 80 },
    ],
  },
  {
    category: "Problem Solving",
    icon: Lightbulb,
    skills: [
      { name: "Analytical Thinking", level: 90 },
      { name: "Creative Solutions", level: 85 },
      { name: "Debugging", level: 88 },
      { name: "System Design", level: 75 },
    ],
  },
  {
    category: "Productivity",
    icon: Zap,
    skills: [
      { name: "Time Management", level: 85 },
      { name: "Agile Methodology", level: 80 },
      { name: "Task Prioritization", level: 88 },
      { name: "Continuous Learning", level: 95 },
    ],
  },
]


export function ProfessionalSkills() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Professional Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soft skills and professional competencies developed through internships, projects, and continuous learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalSkills.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.category}
                  className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-foreground flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
