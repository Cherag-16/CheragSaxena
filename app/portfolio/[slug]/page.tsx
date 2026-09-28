import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Code2,
  Zap,
} from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Params) {
  const slug = (await params).slug;
  const projects = projectsData as any as any[];
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Navigation />
      <main>
        {/* Back Link */}
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 pt-24 md:pt-20">
          <div className="sticky top-20 z-30 w-fit">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>
          </div>
        </div>

        {/* Hero Section with Project Image */}
        <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl pb-12">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            {project.images?.[0] ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                width={1600}
                height={900}
                className="w-full h-48 sm:h-64 md:h-96 lg:h-[500px] object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-48 sm:h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute left-4 sm:left-6 md:left-8 bottom-4 sm:bottom-6 md:bottom-8 text-white space-y-4 max-w-3xl pr-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground font-mono text-xs">
                  {project.category || "Software Engineering Project"}
                </Badge>
                {project.featured && (
                  <Badge className="bg-emerald-100 text-emerald-950 font-bold border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-500/50 text-xs px-2.5 py-0.5 shadow-sm">
                    Featured
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-white/90 drop-shadow-lg max-w-2xl leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveLink && (
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md gap-2" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Launch Live Application
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md gap-2" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.intro || project.shortDescription}
                </p>
              </CardContent>
            </Card>

            {/* Problem Statement / Challenge */}
            {project.problem && (
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card backdrop-blur-sm shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-xl flex items-center gap-2 text-foreground">
                      <Code2 className="h-5 w-5 text-primary" />
                      Challenge
                    </CardTitle>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10 text-xs">
                      Problem Statement
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {project.problem}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Solution */}
            {project.solution && (
              <Card className="border-accent/30 bg-gradient-to-br from-accent/5 via-card to-card backdrop-blur-sm shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-xl flex items-center gap-2 text-foreground">
                      <Zap className="h-5 w-5 text-accent" />
                      Solution
                    </CardTitle>
                    <Badge variant="outline" className="border-accent/40 text-accent bg-accent/10 text-xs">
                      System Architecture
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Technical Highlights */}
            {project.challenges && project.challenges.length > 0 && (
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">
                    Technical Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.challenges.map(
                      (challenge: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary flex-shrink-0 text-sm font-semibold mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed pt-0.5">
                            {challenge}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Project Details */}
          <aside className="space-y-6">
            {/* Key Information */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.role && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      My Role
                    </p>
                    <p className="text-foreground font-medium">
                      {project.role}
                    </p>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      <Calendar className="h-3 w-3" /> Duration
                    </p>
                    <p className="text-foreground font-medium">
                      {project.duration}
                    </p>
                  </div>
                )}

                {project.team && (
                  <div>
                    <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      <Users className="h-3 w-3" /> Team
                    </p>
                    <p className="text-foreground font-medium">
                      {project.team}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-accent" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary bg-primary/5 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  Project Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.repo ? (
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                    </a>
                  </Button>
                ) : (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-md border border-border/40">
                    <Github className="h-4 w-4 shrink-0" />
                    <span>GitHub Repo is Private</span>
                  </div>
                )}

                {project.liveLink ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Live demo not available
                  </p>
                )}
              </CardContent>
            </Card>
          </aside>
        </section>


      </main>
      <Footer />
    </div>
  );
}
