"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import projectsData from "@/data/projects.json"
const projects = ((projectsData as unknown) as any[]) || []

const categories = ["All", "Fullstack", "Frontend"]

export function ProjectsGrid() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    // Restore scroll position when returning to this page
    const savedScrollPos = sessionStorage.getItem("portfolioScrollPos")
    if (savedScrollPos) {
      window.scrollTo(0, parseInt(savedScrollPos))
      sessionStorage.removeItem("portfolioScrollPos")
    }
  }, [])

  const handleProjectClick = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString())
  }

  const filteredProjects = projects.filter((project: any) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Fullstack') {
      return (
        project.fullstack === true
      )
    }
    if (selectedCategory === 'Frontend') {
      // Treat as frontend when not explicitly marked fullstack
      const isFull = project.fullstack === true
      return (
        !isFull && (
          (project.technologies?.includes('React')) ||
          (project.techStack?.includes('React'))
        )
      )
    }
    return true
  })

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of web applications, showcasing expertise in modern technologies and best practices.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              onClick={() => {
                handleProjectClick()
                router.push(`/portfolio/${project.slug}`)
              }}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm cursor-pointer flex flex-col justify-between"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div>
                <div className="relative overflow-hidden">
                  <div className="block relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.images?.[0] || project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="text-lg font-bold text-primary/80">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {project.githubUrl ? (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => e.stopPropagation()}
                        asChild
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2 z-10">
                    {project.featured && (
                      <Badge className="bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold dark:bg-emerald-950/90 dark:text-emerald-300 dark:border-emerald-600/50 shadow-sm text-xs px-2.5 py-0.5">
                        <Star className="h-3 w-3 mr-1 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
                        Featured
                      </Badge>
                    )}
                    {project.comingSoon && (
                      <Badge className="bg-amber-500/90 text-white border-amber-600 font-bold dark:bg-amber-600/90 dark:text-white dark:border-amber-500 shadow-sm text-xs px-2.5 py-0.5 coming-soon-badge">
                        🚧 Coming Soon
                      </Badge>
                    )}
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline">
                        {project.category || ((project.fullstack === true || project.techStack?.includes('Express.js') || project.technologies?.includes('Node.js')) ? 'Fullstack' : 'Frontend')}
                      </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{project.date || '—'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>
                </CardContent>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between border-t border-border/40 pt-3">
                  <span className="text-xs font-medium text-primary group-hover:underline">
                    {project.comingSoon ? '🚀 Coming Soon' : 'Explore Case Study →'}
                  </span>
                  {project.githubUrl ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0"
                      title="View GitHub Repo"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <span className="text-[11px] text-muted-foreground font-mono bg-muted/40 px-2 py-0.5 rounded border border-border/40" title="Source code is in a private repository">
                      Private Repo
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Link to all projects on GitHub */}
        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <a href="https://github.com/cherag-16" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>View all projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
