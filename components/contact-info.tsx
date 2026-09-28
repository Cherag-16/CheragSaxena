import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Clock, CheckCircle2, ArrowUpRight } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6 flex flex-col justify-between h-full">
      {/* Quick Direct Communication Card */}
      <Card className="border-border/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-xl font-bold text-foreground flex items-center justify-between">
            <span>Direct Channels</span>
            <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">Active</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {/* Email */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Email Address</p>
                <p className="text-foreground font-semibold text-xs sm:text-sm">cheragsaxena16@gmail.com</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1" asChild>
              <a href="mailto:cheragsaxena16@gmail.com" target="_blank" rel="noopener noreferrer">
                Mail <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-accent/10 text-accent">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Mobile / WhatsApp</p>
                <p className="text-foreground font-semibold text-xs sm:text-sm">+91-8871582449</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1" asChild>
              <a href="tel:+918871582449">
                Call <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Location &amp; Work Model</p>
                <p className="text-foreground font-semibold text-xs sm:text-sm">Indore, MP, India • Remote &amp; On-site</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Developer Networks */}
      <Card className="border-border/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="font-serif text-xl font-bold text-foreground">
            Professional &amp; Developer Links
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">GitHub Profile</p>
                <p className="text-xs text-muted-foreground font-mono">@cherag-16</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1" asChild>
              <a href="https://github.com/cherag-16" target="_blank" rel="noopener noreferrer">
                Visit <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/40">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm">LinkedIn Network</p>
                <p className="text-xs text-muted-foreground font-mono">in/cherag-saxena</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1" asChild>
              <a href="https://www.linkedin.com/in/cherag-saxena-36415a2b8/" target="_blank" rel="noopener noreferrer">
                Connect <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Availability Banner */}
      <Card className="border-primary/40 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/20 text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Current Hiring Status</p>
              <p className="text-xs text-muted-foreground">Available for Full-Time SWE Roles, Internships &amp; Contracts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
