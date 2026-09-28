"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { cn } from "@/lib/utils"

export function PortfolioHero() {
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
              My{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my journey in full-stack development, from simple web applications to
              complex MERN stack solutions.
            </p>
          </div>
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto",
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
            )}
          >
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 p-6 rounded-lg bg-card border border-border">
          <div className="text-center">
            <div className="text-2xl font-serif font-bold text-primary">MERN</div>
            <div className="text-sm text-muted-foreground">Primary Stack</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-serif font-bold text-accent">Full Stack</div>
            <div className="text-sm text-muted-foreground">Development</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-serif font-bold text-primary">Cloud Ready</div>
            <div className="text-sm text-muted-foreground">Deployment</div>
          </div>
        </div>
      </div>

    </section>
  )
}
