"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Award, Brain, Zap, Lock, Radio, Code2, BookOpen } from "lucide-react"

const certificationIcons: { [key: string]: any } = {
  cloud: Cloud,
  award: Award,
  brain: Brain,
  zap: Zap,
  security: Lock,
  iot: Radio,
  code: Code2,
  learning: BookOpen,
}

const certificationCategories = {
  fullstack: {
    title: "Full Stack & Web Development",
    icon: "code",
    certifications: [
      {
        title: "3-Week Web Development Internship",
        issuer: "VGT (under MSME, India)",
        date: "Jan-Feb 2025",
        description: "Practical exposure to full web stack development; hands-on projects and industry workflows.",
        verified: true,
        icon: "code",
        status: "Certified",
        id: "VGT-2025",
      },
      {
        title: "Web Dev Internship Completion",
        issuer: "My Job Grow + Techfest IIT Bombay",
        date: "Jan 2025",
        description: "Advanced projects with exceptional performance and mentor feedback.",
        verified: true,
        icon: "award",
        status: "Certified",
        id: "MJG-2025",
      },
      {
        title: "Web Dev Course Completion",
        issuer: "My Job Grow",
        date: "Dec 2024",
        description: "15-hour hands-on web development course covering modern front-end and back-end basics.",
        verified: true,
        icon: "code",
        status: "Completed",
        id: "MJG-2024",
      },
    ],
  },
  frontend: {
    title: "Frontend & JavaScript Ecosystem (DevTown Series)",
    icon: "code",
    certifications: [
      {
        title: "Instagram Auth Clone (7 days)",
        issuer: "DevTown",
        date: "2024",
        description: "Node.js, Express and JavaScript-focused hands-on 7-day project (Instagram Auth clone).",
        verified: true,
        icon: "code",
        status: "Completed",
        id: "DT-2024-001",
      },
      {
        title: "Amazon Clone (7 days)",
        issuer: "DevTown / Google DSC",
        date: "2024",
        description: "HTML, CSS and JS mini-project building an Amazon-like storefront.",
        verified: true,
        icon: "code",
        status: "Completed",
        id: "DT-2024-002",
      },
      {
        title: "JS & React Bootcamp",
        issuer: "DevTown / GDSC GIET",
        date: "2024",
        description: "Comprehensive React.js bootcamp (A–Z) covering component patterns and state management.",
        verified: true,
        icon: "zap",
        status: "Certified",
        id: "DT-2024-003",
      },
      {
        title: "Intro to C++ and DSA",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Foundations of data structures and algorithms using C++.",
        verified: true,
        icon: "code",
        status: "Completed",
        id: "DT-2024-004",
      },
      {
        title: "Deep Learning & Deployment",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Deep learning fundamentals and web deployment workflows.",
        verified: true,
        icon: "brain",
        status: "Certified",
        id: "DT-2024-005",
      },
    ],
  },
  cloud: {
    title: "Cloud & Cybersecurity",
    icon: "cloud",
    certifications: [
      {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft (Certiport)",
        date: "June 2025",
        description: "Score: 900/1000 — Verification ID: Cx35-Dw8X",
        verified: true,
        icon: "cloud",
        status: "Certified",
        id: "Cx35-Dw8X",
      },
      {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training & Certification",
        date: "July 2025",
        description: "Core AWS cloud concepts and services (completed July 05, 2025).",
        verified: true,
        icon: "cloud",
        status: "Foundational",
        id: "AWS-2025",
      },
      {
        title: "Getting Started with Amazon Location Service",
        issuer: "AWS Training & Certification",
        date: "July 2025",
        description: "Foundational knowledge of Amazon Location Service (completed July 04, 2025).",
        verified: true,
        icon: "cloud",
        status: "Completed",
        id: "AWS-LOC-2025",
      },
      {
        title: "Cybersecurity Certificate",
        issuer: "SheKunj + Skill India",
        date: "June 2025",
        description: "Intro to Cybersecurity (Gov. of India-backed program).",
        verified: true,
        icon: "security",
        status: "Completed",
        id: "SK-2025",
      },
    ],
  },
  aiml: {
    title: "AI/ML & Emerging Tech",
    icon: "brain",
    certifications: [
      {
        title: "UAS Bootcamp 4.0 – AI/ML for Drones",
        issuer: "IIT Indore + MeitY",
        date: "2024",
        description: "40+ hours on communication, navigation, and AI for UAVs",
        verified: true,
        icon: "brain",
        status: "Certified",
        id: "UAS-2024",
      },
      {
        title: "GenAI Powered Data Analytics",
        issuer: "Forage (Tata Collaboration)",
        date: "2025",
        description: "Hands-on simulation: EDA, risk profiling, AI delinquency prediction, business reporting.",
        verified: true,
        icon: "brain",
        status: "Completed",
        id: "Forage-2025",
      },
      {
        title: "Introduction to Generative AI Concepts",
        issuer: "Microsoft Learn",
        date: "June 29, 2025",
        description: "Foundational GenAI principles and applications.",
        verified: true,
        icon: "brain",
        status: "Foundational",
        id: "ML-2025",
      },
      {
        title: "Oracle Cloud Infrastructure – AI Foundations",
        issuer: "Oracle University",
        date: "2025",
        description: "Certified Foundations Associate (valid through Aug 2027); AI in Oracle Cloud.",
        verified: true,
        icon: "brain",
        status: "Certified",
        id: "Oracle-AI-2025",
      },
      {
        title: "Deep Learning & Web Deployment",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "ML fundamentals + full-stack deployment training",
        verified: true,
        icon: "brain",
        status: "Certified",
        id: "DT-DL-2024",
      },
    ],
  },
  security: {
    title: "Cybersecurity & Others",
    icon: "security",
    certifications: [
      {
        title: "Cybersecurity Certificate",
        issuer: "SheKunj + Skill India",
        date: "June 2025",
        description: "Intro to Cybersecurity, Gov. of India-backed",
        verified: true,
        icon: "security",
        status: "Completed",
        id: "SK-Cyber-2025",
      },
      {
        title: "Python Workshop",
        issuer: "S Edutech",
        date: "June 2024",
        description: "Introductory programming workshop",
        verified: true,
        icon: "code",
        status: "Completed",
        id: "SE-2024",
      },
    ],
  },
  iot: {
    title: "IoT, Cross-Platform & Hardware",
    icon: "iot",
    certifications: [
      {
        title: "Winter School: Zero to IoT Hero",
        issuer: "SAGE University, Indore",
        date: "Mar 2025",
        description: "Two-week bootcamp on IoT systems.",
        verified: true,
        icon: "iot",
        status: "Certified",
        id: "SAGE-IoT-2025",
      },
      {
        title: "Robo Race Participant",
        issuer: "SAGE Euphoria 2024",
        date: "April 2024",
        description: "Robotics competition participation.",
        verified: true,
        icon: "iot",
        status: "Completed",
        id: "SAGE-Robo-2024",
      },
      {
        title: "Google Flutter – Intermediate",
        issuer: "Infosys Springboard",
        date: "July 5, 2025",
        description: "Intermediate-level Flutter development.",
        verified: true,
        icon: "code",
        status: "Certified",
        id: "IS-Flutter-2025",
      },
    ],
  },
  events: {
    title: "Events, Symposiums & Soft Skills",
    icon: "award",
    certifications: [
      {
        title: "IIT Symposium 2.0",
        issuer: "IIT Indore",
        date: "2024-2025",
        description: "Knowledge exchange and speaker engagement.",
        verified: true,
        icon: "award",
        status: "Completed",
        id: "IIT-Sym-2025",
      },
      {
        title: "Startup Spark 2024",
        issuer: "SAGE University",
        date: "2024",
        description: "Participated in entrepreneurship & innovation summit.",
        verified: true,
        icon: "award",
        status: "Completed",
        id: "SAGE-Spark-2024",
      },
      {
        title: "Appreciation Awards (x3)",
        issuer: "DevTown",
        date: "Feb 2024",
        description: "For community contributions and support.",
        verified: true,
        icon: "award",
        status: "Completed",
        id: "DT-Awards-2024",
      },
      {
        title: "Expert Session – Java Programming",
        issuer: "SAGE University, Indore",
        date: "May 7, 2024",
        description: "Industry-oriented Java session.",
        verified: true,
        icon: "learning",
        status: "Completed",
        id: "SAGE-Java-2024",
      },
      {
        title: "Expert Session – Python Programming",
        issuer: "SAGE University, Indore",
        date: "May 8, 2024",
        description: "Industry-oriented Python session.",
        verified: true,
        icon: "learning",
        status: "Completed",
        id: "SAGE-Python-2024",
      },
    ],
  },
}

const mainCredentials = new Set(["Cx35-Dw8X", "AWS-2025", "IIT-Sym-2025", "UAS-2024", "MJG-2025"])

export function CertificationShowcase() {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: typeof Award } = {
      cloud: Cloud,
      award: Award,
      brain: Brain,
      zap: Zap,
      security: Lock,
      iot: Radio,
      code: Code2,
      learning: BookOpen,
    }
    return iconMap[iconName] || Award
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Certified":
        return "bg-primary/15 text-primary border-primary/30"
      case "Foundational":
        return "bg-accent/15 text-accent border-accent/30"
      case "Completed":
        return "bg-muted text-foreground border-border"
      default:
        return "bg-primary/15 text-primary"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-10 w-10 text-primary drop-shadow" />
            <h2 className="text-4xl font-serif font-bold text-primary drop-shadow">Credential Wall</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-primary">33+</span> verified certifications across multiple domains, showcasing continuous learning and expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Credential Wall Grid - Main Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.values(certificationCategories)
              .flatMap((category) => category.certifications)
              .filter((cert: any) => {
                const mainCerts = ["Cx35-Dw8X", "AWS-2025", "IIT-Sym-2025", "UAS-2024", "MJG-2025"]
                return mainCerts.includes(cert.id)
              })
              .map(
              (cert: any, index: number) => {
                const IconComponent = getIconComponent(cert.icon)
                return (
                  <div
                    key={cert.id}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <Card className="border-none shadow-lg bg-gradient-to-br from-white via-white/95 to-primary/5 dark:from-slate-900 dark:via-slate-900/95 dark:to-primary/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col">
                      {/* Icon Section */}
                      <div className="pt-8 px-6 pb-4 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex justify-center items-center min-h-[120px]">
                        <div className="bg-gradient-to-br from-primary to-primary/70 p-6 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 px-6 py-6 flex flex-col">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(cert.status)}`}>
                            {cert.status}
                          </Badge>
                          {cert.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary font-medium">
                              <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>
                              Verified
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-lg text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>

                        {/* Issuer */}
                        <p className="text-sm text-muted-foreground font-medium mb-1">
                          {cert.issuer}
                        </p>

                        {/* Date */}
                        <p className="text-xs text-muted-foreground mb-4">
                          {cert.date}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                          {cert.description}
                        </p>

                        {/* ID Footer - Hidden */}
                      </div>
                    </Card>
                  </div>
                )
              },
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
