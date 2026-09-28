"use client"

import { useEffect, useState } from "react"
import { PenTool, BookOpen, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function BlogHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and experiences from my journey in full-stack development, emerging
              technologies, and the ever-evolving world of web development.
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
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-serif font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Articles Written</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-serif font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Topics Covered</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-serif font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">New Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
