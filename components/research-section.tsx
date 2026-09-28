"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, ShieldCheck, Award, ExternalLink, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function ResearchSection() {
  const researchItems = [
    {
      type: "Research Paper",
      id: "In Progress",
      status: "In Development",
      title: "A Hybrid LLM and Static Analysis Framework for Automated Business Rule Mining from Legacy C++ Systems",
      description:
        "Currently developing the research paper and framework for automated business-rule extraction from legacy C++ systems using LLMs and static analysis.",
      icon: FileText,
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/30",
      details: [
        "Developing automated business-rule extraction methodologies.",
        "Combining static analysis with LLM inference for high accuracy.",
        "Targeting legacy C++ system modernization and documentation."
      ]
    },
    {
      type: "Indian Patent",
      id: "No. 202621056495",
      status: "Published (July 3, 2026)",
      title: "Cloud-Based AI Raag-Guided Lyric-to-Melody Generation",
      description:
        "Developed a proprietary architecture for mapping linguistic structures to musical frequencies using Groq AI and Web Audio API.",
      icon: ShieldCheck,
      badgeColor: "bg-primary/10 text-primary border-primary/30",
      details: [
        "Architected real-time emotion-to-raag mapping with classical Indian music constraints.",
        "Implemented DSP-based Web Audio oscillator synthesis with low-latency execution.",
        "Engineered Groq AI integration for Hindi lyric parsing and structural cadence detection."
      ]
    },
    {
      type: "Academic Publication",
      publisher: "Wiley Scrivener Publishing",
      status: "Accepted (Expected Dec 2025)",
      title: "Neurological Mode in AI-Powered Collaborative Learning",
      description:
        "Research on human-AI interaction models for educational accessibility, integrated into the CodeMentorAI platform.",
      icon: BookOpen,
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
      details: [
        "Investigated cognitive load reductions during interactive code debugging sessions.",
        "Designed context-aware dual-LLM feedback loops to prevent tutorial hell.",
        "Validated accessibility framework on diverse developer learning paths."
      ]
    }
  ];

  return (
    <section id="research" className="py-12 bg-background border-t border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <Badge variant="outline" className="px-3 py-1 text-xs border-primary/40 text-primary uppercase tracking-widest font-mono">
            <Award className="h-3.5 w-3.5 mr-1.5 inline-block text-accent" />
            Patents &amp; Research Publications
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
            Research &amp; IP Portfolio
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Pioneering research-to-product engineering bridging artificial intelligence, audio synthesis, and cognitive learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full border-border/50 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge className={item.badgeColor}>
                        <Icon className="h-3.5 w-3.5 mr-1" />
                        {item.type}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md border border-border/40">
                        {item.id || item.publisher}
                      </span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <div className="text-xs text-accent font-semibold font-mono">
                      Status: {item.status}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border/40">
                      <div className="text-xs font-semibold text-foreground/90 uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-primary" />
                        Technical Engineering Focus
                      </div>
                      <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="leading-snug">
                            <span className="text-foreground/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
