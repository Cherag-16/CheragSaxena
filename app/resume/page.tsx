import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Eye, Share2, Check } from "lucide-react"
import Link from "next/link"

export default function ResumeDownloadPage() {
  const resumeOptions = [
    {
      title: "PDF Format",
      description: "Professional resume in PDF format, ready to send to employers",
      action: "Download PDF",
      icon: FileText,
      link: "/resume.pdf",
    },
    {
      title: "View Online",
      description: "View your resume directly in the browser without downloading",
      action: "View Now",
      icon: Eye,
      link: "#preview",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center space-y-6">
              <Badge className="mx-auto">Resume & CV</Badge>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                Download My <span className="gradient-text">Resume</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get my professional resume in your preferred format. I'm open to opportunities in full-stack development, internships, and freelance projects.
              </p>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeOptions.map((option) => {
                const Icon = option.icon
                return (
                  <Card
                    key={option.title}
                    className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                        <Check className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardTitle className="font-serif text-xl text-foreground">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 group/btn relative overflow-hidden"
                      >
                        <a href={option.link} download={option.link === "/resume.pdf"}>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {option.action === "Download PDF" && <Download className="h-4 w-4" />}
                            {option.action === "View Now" && <Eye className="h-4 w-4" />}
                            {option.action}
                          </span>
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Resume Preview */}
        <section id="preview" className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8 text-center">Resume Preview</h2>

            {/* Embed PDF or show info */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8">
              <div className="text-center space-y-6">
                <FileText className="h-16 w-16 text-primary mx-auto opacity-50" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Cherag Saxena - Full Stack Developer</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional resume showcasing 30+ certifications, full-stack development expertise, and proven project delivery.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-left space-y-2 bg-background/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">Resume includes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Professional summary and career objectives
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> 30+ technical certifications across multiple domains
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> 3+ internship and work experience details
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Technical skills: MERN stack, Cloud, AI/ML
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> 15+ completed projects with technologies used
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Education details and academic achievements
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Downloadable in PDF format
                      </li>
                    </ul>
                  </div>
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume (PDF)
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-3xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Want to Work Together?
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm actively looking for internships, freelance opportunities, and full-time positions. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">
                    Send Me a Message
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://linkedin.com/in/cheragsaxena" target="_blank" rel="noopener noreferrer">
                    <Share2 className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
