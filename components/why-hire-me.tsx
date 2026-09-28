"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  BookOpen,
  Briefcase,
  Trophy,
  Award,
  Rocket,
  GraduationCap,
  Cpu,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Indian Patent Holder",
    description: "Co-inventor of Indian Patent No. 202621056495 — Cloud-Based AI Raag-Guided Lyric-to-Melody Generation",
    color: "text-amber-500",
    bg: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Wiley Scrivener Academic Book Chapter on Neurological Mode in AI-Powered Collaborative Learning",
    color: "text-blue-500",
    bg: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Briefcase,
    title: "4 Production Internships",
    description: "Vishal Global Tech (×2), Techfest IIT Bombay × My Job Grow, and Dhee Coding Lab Bengaluru",
    color: "text-emerald-500",
    bg: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description: "Lablab.ai × NativelyAI AI Factory Global Hackathon — Certificate of Completion",
    color: "text-purple-500",
    bg: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Award,
    title: "Azure Certified",
    description: "Microsoft Certified: Azure Fundamentals (AZ-900) — Cloud Architecture & Services",
    color: "text-cyan-500",
    bg: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    icon: Rocket,
    title: "SaaS Builder",
    description: "Currently building AI Resume Builder — a production-grade ATS Resume SaaS platform",
    color: "text-rose-500",
    bg: "from-rose-500/20 to-rose-600/10",
  },
];

export function WhyHireMe() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-10 space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs border-primary/40 text-primary uppercase tracking-widest font-mono"
          >
            <Cpu className="h-3.5 w-3.5 mr-1.5 inline-block text-accent" />
            Why Hire Me
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
            What Sets Me <span className="gradient-text">Apart</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A unique combination of research, patents, production experience,
            and hands-on engineering that most candidates simply don't have.
          </p>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title} direction="up">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <Card className="h-full glass-card border-border/30 hover:border-primary/50 transition-all duration-300 premium-glow group">
                    <CardContent className="p-5 space-y-3">
                      <motion.div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.bg} group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </motion.div>
                      <h3 className="font-serif font-bold text-foreground text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
