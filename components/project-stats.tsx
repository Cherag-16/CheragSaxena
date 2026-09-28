"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Star, Users } from "lucide-react"

const stats = [
  {
    icon: Code,
    number: 15,
    suffix: "+",
    label: "Projects Completed",
    description: "Full-stack applications built and deployed",
    color: "text-primary",
  },
  {
    icon: Globe,
    number: 100,
    suffix: "%",
    label: "Live Deployment",
    description: "All projects are live and accessible",
    color: "text-accent",
  },
  {
    icon: Star,
    number: 5,
    suffix: "+",
    label: "Technologies",
    description: "Different tech stacks mastered",
    color: "text-primary",
  },
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    label: "Code Commits",
    description: "Lines of code written and committed",
    color: "text-accent",
  },
]

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-serif font-bold">
      {count}
      {suffix}
    </div>
  )
}

export function ProjectStats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Project Statistics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my dedication to building quality software and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors ${stat.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <div className={stat.color}>
                      <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
