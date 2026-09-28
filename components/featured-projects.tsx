"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { motion } from "framer-motion";

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  role: string;
  techStack: string[];
  challenges: string[];
  solution?: string;
  images?: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  comingSoon?: boolean;
  liveLink?: string;
  date?: string;
  status?: string;
};

const featuredProjects = ((projectsData as unknown as Project[]) || []).filter(
  (p) => p.featured,
);

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleProjectClick = () => {
    sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString());
  };

  return (
    <section className="pt-1 pb-9 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Explore some of my best work. Click a project to view details in the
            portfolio.
          </p>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8"
        >
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug || project.title} direction="up">
              <Link
                onClick={handleProjectClick}
                href={`/portfolio/${project.slug}`}
                className="block h-full group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card
                    className="group overflow-hidden border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg glass-card cursor-pointer h-full flex flex-col"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative overflow-hidden">
                      {project.comingSoon && (
                        <div className="absolute top-2 right-2 z-10 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full coming-soon-badge">
                          🚧 Coming Soon
                        </div>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden relative"
                      >
                        <Image
                          src={project.images?.[0] || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={400}
                          className="w-full h-36 object-cover transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        {project.comingSoon && (
                          <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader className="flex-1 pb-2 pt-3 px-4">
                      <CardTitle className="font-serif text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3 px-4 pb-4 flex-1 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-[10px] sm:text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                        {project.comingSoon ? "🚧 Coming Soon" : "Explore Case Study"}{" "}
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" className="text-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button
              asChild
              size="default"
              variant="outline"
              className="border-primary/50 text-primary hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-primary-foreground glass transition-all duration-300 px-6 text-sm"
            >
              <Link
                href="/portfolio"
                className="flex items-center text-primary"
              >
                View All Projects
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
