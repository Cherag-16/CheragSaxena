"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Coffee, Briefcase, Star, Trophy, Zap, Target } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Star,
    number: 8.20,
    suffix: "",
    label: "Current CGPA",
    description: "Sage University • Academic Honors",
    decimals: 2,
    color: "text-primary",
  },
  {
    icon: Code,
    number: 15,
    suffix: "+",
    label: "Software Projects",
    description: "Full-stack web & AI audio applications",
    color: "text-accent",
  },
  {
    icon: Briefcase,
    number: 4,
    suffix: "",
    label: "Production Internships",
    description: "VGT, Techfest IITB & Dhee Coding Lab",
    color: "text-primary",
  },
  {
    icon: Target,
    number: 100,
    suffix: "%",
    label: "SDLC & Code Quality",
    description: "Modular architecture & performance tuning",
    color: "text-accent",
  },
]

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
  decimals = 0,
}: { value: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(() => (decimals > 0 ? (0).toFixed(decimals) : "0"))
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

      const current = Number((progress * value).toFixed(decimals))
      setCount(decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current)))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <motion.div
      ref={ref}
      className="text-2xl sm:text-3xl font-serif font-bold gradient-text"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      viewport={{ once: true }}
    >
      {count}
      {suffix}
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="pt-4 pb-10 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
            Achievements & Milestones
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            A snapshot of my journey in technology, showcasing the dedication and passion that drives my work.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <StaggerItem key={stat.label} direction="up">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border/30 hover:border-primary/50 glass-card h-full">
                    <CardContent className="p-4 text-center space-y-2.5 h-full flex flex-col justify-center">
                      <motion.div
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all mx-auto ${stat.color}`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.div>

                      <div className="space-y-1">
                        <div className={stat.color}>
                          <AnimatedNumber
                            value={stat.number}
                            suffix={stat.suffix}
                            decimals={stat.decimals || 0}
                          />
                        </div>
                        <h3 className="font-serif font-semibold text-foreground text-xs sm:text-sm">
                          {stat.label}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {stat.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}