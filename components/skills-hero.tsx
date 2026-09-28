"use client"

import { useEffect, useState } from "react"
import { Code, Database, Cloud, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

const skillCategories = [
  { icon: Code, label: "Frontend", count: "7+" },
  { icon: Database, label: "Backend", count: "8+" },
  { icon: Cloud, label: "Cloud", count: "5+" },
  { icon: Smartphone, label: "Mobile", count: "3+" },
]

export function SkillsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies, frameworks, and tools that I use to build exceptional
              digital experiences.
            </p>
          </div>

          <div
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.label}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-foreground">{category.count}</div>
                  <div className="text-sm text-muted-foreground">{category.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
