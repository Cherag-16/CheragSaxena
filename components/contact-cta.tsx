"use client"

import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export function ContactCTA() {
  const handleDownloadResume = () => {
    window.open('/Cherag_Saxena_Resume.pdf', '_blank')
  }

  const handleScheduleCall = () => {
    // Open an external scheduling link if provided, otherwise open a mailto fallback
    const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL
    if (calendly) {
      window.open(calendly, "_blank")
      return
    }

    const subject = encodeURIComponent("Schedule a Call")
    const body = encodeURIComponent(
      "Hi Cherag,%0D%0A%0D%0AI'd like to schedule a call to discuss a project. Please let me know your availability.%0D%0A%0D%0AThanks,"
    )
    window.location.href = `mailto:cheragsaxena16@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ready to Work{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you have a project in mind, need a developer for your team, or just want to connect, I'm here to
              help bring your ideas to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <a href="/Cherag_Saxena_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScheduleCall}
              className="px-8 py-6 text-lg font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-primary">Fast Response</div>
              <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-accent">Quality Work</div>
              <p className="text-sm text-muted-foreground">Committed to delivering excellence</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-primary">Full Support</div>
              <p className="text-sm text-muted-foreground">Ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
