"use client"

import { useEffect, useState } from "react"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear from you. Let's discuss how we can bring your
              ideas to life with modern web technologies.
            </p>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-lg font-serif font-bold text-foreground">Email</div>
              <div className="text-sm text-muted-foreground">Quick Response</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <div className="text-lg font-serif font-bold text-foreground">Message</div>
              <div className="text-sm text-muted-foreground">Detailed Discussion</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-lg font-serif font-bold text-foreground">Call</div>
              <div className="text-sm text-muted-foreground">Direct Communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
