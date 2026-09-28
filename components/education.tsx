import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from "lucide-react"

export function Education() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="outline" className="px-3 py-1 text-xs border-primary/40 text-primary font-mono uppercase tracking-wider">
            Academic Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Academic foundation and honors specialization in Software Engineering.
          </p>
        </div>

        <Card className="border-border/60 hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-sm shadow-md">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="font-serif text-xl sm:text-2xl text-foreground font-bold">
                    B.Tech (Hons.) Computer Engineering
                  </CardTitle>
                  <p className="text-sm sm:text-base text-primary font-semibold mt-1">
                    Specialization in Software Engineering • Sage University, Indore
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5 text-xs font-medium">
                      Final Year Student (2023 – 2027)
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border border-primary/20 font-semibold text-xs">
                      CGPA: 8.20
                    </Badge>
                  </div>
                </div>
              </div>

              <Badge variant="outline" className="flex items-center gap-1.5 w-fit font-mono text-xs self-start md:self-center">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>2023 – 2027</span>
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-xl border border-border/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Academic Distinction</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Awarded <span className="text-foreground font-semibold">First Year Best Academic Excellence Award</span> for top scholastic ranking.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Honors &amp; Research Track</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Honors specialization in Software Systems, Cloud Computing, and AI Systems Design.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
