"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, MapPin, Award } from "lucide-react"

const experiences = [
  {
    role: "Web Developer Trainee",
    company: "Vishal Global Tech (VGT)",
    companyColor: "text-slate-900 dark:text-slate-100 font-bold",
    period: "June 2026",
    duration: "1 month",
    location: "Greater Noida West, UP",
    type: "Web Development Department",
    description: "Web Developer Trainee position (Reg. UDYAM-UP-28-0108839). Architecting client web portals, B2B platforms, and SQL data schemas under corporate standards.",
    achievements: [
      "Issued official offer letter for Web Developer Trainee position in Greater Noida West.",
      "Architected web portals across vishalglobaltech.com, indelhincr.com, and offers.indelhincr.com.",
      "Maintained full-stack web modules, REST API handlers, and SQL data schemas."
    ],
    technologies: ["JavaScript", "HTML5/CSS3", "SQL Server", "REST APIs", "Web Systems"],
    color: "from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950",
  },
  {
    role: "Web development and designing intern",
    company: "Vishal Global Tech (VGT)",
    companyColor: "text-slate-900 dark:text-slate-100 font-bold",
    period: "20 Jan 2025 – 06 Feb 2025",
    duration: "3 weeks",
    location: "Greater Noida West, UP",
    type: "Production Web Development",
    description: "Engineered core modules and optimized SQL Server database for live web application (indelhincr.com), adhering to full Software Development Life Cycle (SDLC) methodologies.",
    achievements: [
      "Followed end-to-end SDLC: Planning, Requirements Analysis, Design, Coding, Testing, Deployment, and Maintenance.",
      "Demonstrated proficiency in Website Designing (HTML5/CSS3), Website Development (JavaScript & Web API), and SQL Server.",
      "Achieved 99.9% cross-device compatibility and optimized database query latency for live traffic."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Web API", "SQL Server", "Responsive Design"],
    color: "from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950",
  },
  {
    role: "Full Stack MERN & ML Intern",
    company: "Techfest IIT Bombay × My Job Grow",
    companyColor: "text-purple-700 dark:text-purple-300 font-bold",
    period: "Oct 2024 – Nov 2024",
    duration: "2 months",
    location: "Remote / Hybrid",
    type: "MERN & ML Hybrid Program",
    description: "Engineered full-stack MERN capstone projects and applied Machine Learning fundamentals (data preprocessing, model building & evaluation with Python and Scikit-Learn).",
    achievements: [
      "Built and deployed Track My Expenses full-stack web app with real-time balance calculations.",
      "Developed ML models and data preprocessing pipelines with Python and Scikit-Learn.",
      "Optimized state management using Redux, eliminating prop drilling and reducing re-renders by 40%."
    ],
    technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Python", "Scikit-Learn", "Redux"],
    color: "from-purple-500 to-pink-500",
  },
  {
    role: "Software Engineer & R&D Researcher",
    company: "SAGE University R&D Club & Academic Projects",
    companyColor: "text-amber-600 dark:text-amber-400 font-bold",
    period: "2024 - Present",
    duration: "Ongoing",
    location: "Indore / Remote",
    type: "R&D Club Member",
    description: "Active member of SAGE University R&D Club. Pioneering patent-filed AI audio synthesis architecture (Dhun AI) and dual-LLM tools (Code Mentor AI).",
    achievements: [
      "Published Indian Patent No. 202621056495 (July 3, 2026) for AI Raag-Guided Melody Generation.",
      "Active core contributor and research member at SAGE University Research & Development (R&D) Club.",
      "Authored accepted book chapter with Wiley Scrivener Publishing.",
      "Engineered full-stack applications with Next.js 15, Groq AI, Web Audio API, and Supabase."
    ],
    technologies: ["Next.js 15", "TypeScript", "Groq AI", "Web Audio API", "Tone.js", "Supabase", "Azure"],
    color: "from-amber-500 via-primary to-indigo-500",
  },
]

export function ExperienceTimeline() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Experience & <span className="gradient-text">Professional Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From internships to self-directed projects, building expertise in modern web development
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-background`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Mobile timeline dot */}
                <div className="flex md:hidden">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                </div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <ScrollReveal
                    direction={index % 2 === 0 ? "right" : "left"}
                    delay={index * 0.1}
                  >
                    <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full group">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-1">
                              {exp.role}
                            </h3>
                            <p className={`text-sm sm:text-base ${exp.companyColor || "text-primary font-bold"}`}>{exp.company}</p>
                          </div>
                          <Badge className="bg-primary/20 text-primary border-primary/30 whitespace-nowrap text-xs sm:text-sm w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Meta info */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1 ml-4">
                            {exp.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm text-muted-foreground list-disc">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-primary/30 text-primary bg-primary/5 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
