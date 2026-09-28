"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Heart,
  Target,
  Zap,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  ShieldCheck,
  Rocket,
  Compass,
  CheckCircle2
} from "lucide-react";

const coreValues = [
  {
    icon: Code,
    title: "Clean System Architecture",
    description:
      "Designing modular, maintainable, and scalable software systems with robust data structures and API patterns.",
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description:
      "Optimizing SQL queries, reducing frontend re-renders by 40%, and delivering sub-15ms DSP audio buffers.",
  },
  {
    icon: Target,
    title: "Applied Innovation",
    description:
      "Translating complex Generative AI algorithms into patent-filed (Indian Patent) and book-published software.",
  },
  {
    icon: Heart,
    title: "Production Craftsmanship",
    description:
      "Deep dedication to user experience, cross-browser stability, and resilient production deployments.",
  },
];

const journeyMilestones = [
  {
    year: "2023 – 2027",
    title: "Academic Excellence & Software Engineering Foundations",
    subtitle: "Sage University, Indore",
    icon: GraduationCap,
    badge: "8.20 CGPA • Class Rank Top 10%",
    color: "border-blue-500/40 bg-blue-500/5 text-blue-500",
    points: [
      "Specializing in B.Tech (Hons.) Computer Engineering (Software Engineering).",
      "Awarded First Year Best Academic Excellence Award for top scholastic ranking.",
      "Mastered Data Structures, Operating Systems, DBMS, System Design, and Cloud Architecture.",
    ],
  },
  {
    year: "2024 – 2025",
    title: "Production Engineering & Full-Stack Internships",
    subtitle: "Vishal Global Tech & My Job Grow (IIT Bombay Techfest)",
    icon: Briefcase,
    badge: "3 Production Internships",
    color: "border-primary/40 bg-primary/5 text-primary",
    points: [
      "Engineered live B2B platforms (indelhincr.com) and optimized SQL Server database query execution.",
      "Built full-stack MERN applications, implementing Redux to cut re-renders by 40%.",
      "Awarded 'Outstanding Achievement' honors for peer code reviews and sprint delivery velocity.",
    ],
  },
  {
    year: "2025 – 2026",
    title: "Patent Innovation & Academic Research",
    subtitle: "Dhun AI & Code Mentor AI",
    icon: ShieldCheck,
    badge: "1 Patent Published (July 3, 2026) • 1 Wiley Book Chapter",
    color: "border-purple-500/40 bg-purple-500/5 text-purple-500",
    points: [
      "Published Indian Patent No. 202621056495 (July 3, 2026) for Cloud-Based AI Raag-Guided Lyric-to-Melody Generation.",
      "Active research member of the SAGE University Research & Development (R&D) Club.",
      "Authored accepted research chapter with Wiley Scrivener Publishing on neurological modes in AI learning.",
      "Integrated Web Audio API synthesis engines and Groq AI LPU acceleration.",
    ],
  },
  {
    year: "2026 – Present",
    title: "Cloud Mastery & Industry Readiness",
    subtitle: "Microsoft Certified & Full-Stack SWE Candidate",
    icon: Rocket,
    badge: "Azure AZ-900 (900/1000) • 33+ Credentials",
    color: "border-amber-500/40 bg-amber-500/5 text-amber-500",
    points: [
      "Certified in Microsoft Azure Fundamentals (AZ-900) with a 900/1000 score.",
      "Completed 33+ verified certifications spanning Cloud, Web Architecture, and Machine Learning.",
      "Actively seeking full-time Software Engineer (SWE) and Full-Stack Engineer roles.",
    ],
  },
];

export function AboutStory() {
  return (
    <div className="space-y-20 py-12">
      {/* SECTION 1: ABOUT ME */}
      <section id="about-me" className="bg-muted/20 py-12 border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-3.5 py-1 text-xs border-primary/40 text-primary font-mono uppercase tracking-widest">
              <Compass className="h-3.5 w-3.5 mr-1.5 inline-block text-accent" />
              Who I Am
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Software Engineer, Full-Stack Developer, and AI Systems Innovator.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bio Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span className="font-semibold text-foreground">Cherag Saxena</span>, a final-year <span className="font-semibold text-primary">B.Tech (Hons.) Computer Engineering (Software Engineering)</span> student at Sage University, Indore. I specialize in designing and engineering high-throughput full-stack web applications, real-time DSP audio synthesis engines, and context-aware Generative AI systems.
              </p>
              <p>
                My passion lies at the intersection of <span className="font-semibold text-foreground">clean system architecture</span> and <span className="font-semibold text-foreground">practical problem-solving</span>. Whether it's optimizing SQL Server query execution for live B2B applications, architecting responsive Next.js 15 frontends, or filing patents for AI music synthesis, I bring an analytical and engineering-first mindset to every project.
              </p>
              <p>
                Backed by my <span className="font-semibold text-accent">Microsoft Certified: Azure Fundamentals (AZ-900)</span> credential (Score: 900/1000) and 33+ verified certifications, I am driven to build scalable software that delivers high performance and seamless user experiences.
              </p>
            </div>

            {/* Quick At-a-Glance Card */}
            <div className="lg:col-span-5">
              <Card className="border-border/60 bg-card/60 backdrop-blur-sm shadow-md">
                <CardContent className="p-6 space-y-4 text-sm">
                  <h3 className="font-serif font-bold text-foreground text-base border-b border-border/40 pb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" /> At A Glance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Degree</p>
                        <p className="text-muted-foreground">B.Tech (Hons.) Computer Engineering (Software Engineering)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Intellectual Property</p>
                        <p className="text-muted-foreground">1 Indian Patent Published (July 3, 2026) + 1 Wiley Book Chapter</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Industry Experience</p>
                        <p className="text-muted-foreground">3 Production Internships (VGT Trainee, VGT Full-Stack &amp; Techfest IITB)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-xs uppercase tracking-wider">Core Tech</p>
                        <p className="text-muted-foreground">Next.js 15, React, Node.js, MongoDB, Express.js, Azure</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values / Philosophy Grid */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground text-center">
              Engineering Mindset &amp; Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="border-border/60 hover:border-primary/50 bg-card/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-serif font-bold text-lg text-foreground">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MY JOURNEY */}
      <section id="my-journey" className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-3.5 py-1 text-xs border-accent/40 text-accent font-mono uppercase tracking-widest">
              <Rocket className="h-3.5 w-3.5 mr-1.5 inline-block text-primary" />
              Evolution &amp; Milestones
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              My Journey
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              How academic discipline, production internships, and deep research shaped my path as a Software Engineer.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative border-l-2 border-border/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {journeyMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-10 h-10 rounded-full border-2 border-background bg-card flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <Card className="border-border/60 hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-sm shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                            {milestone.year}
                          </span>
                          <h3 className="font-serif font-bold text-xl text-foreground mt-0.5">
                            {milestone.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                            {milestone.subtitle}
                          </p>
                        </div>

                        <Badge variant="secondary" className={`font-mono text-xs w-fit ${milestone.color}`}>
                          {milestone.badge}
                        </Badge>
                      </div>

                      <ul className="space-y-2 text-sm text-muted-foreground pt-1">
                        {milestone.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
