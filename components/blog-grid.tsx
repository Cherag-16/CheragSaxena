"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import blogs from "@/data/blogs.json"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, Search, Sparkles, Clock, Calendar } from "lucide-react"

export function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => {
    const cats = new Set<string>()
    blogs.forEach((p) => {
      if (p.category) cats.add(p.category)
    })
    return ["All", ...Array.from(cats)]
  }, [])

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase()
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <section className="pt-28 pb-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs border-primary/40 text-primary uppercase tracking-widest font-mono inline-flex items-center gap-1.5"
          >
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            Engineering Writing &amp; Research Case Studies
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Technical Articles &amp; Insights
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            In-depth reflections and architectural breakdowns on full-stack web engineering, Indian Patent innovations,
            multi-language paradigms, and cognitive AI systems.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-card/60 backdrop-blur-sm border-border/60 text-sm rounded-full shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-muted/20 rounded-2xl border border-border/40 max-w-xl mx-auto">
            <p className="text-lg font-medium text-foreground">No articles match your search</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="text-xs font-semibold text-primary underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-border/60 hover:border-primary/50 bg-card/60 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="w-full h-48 overflow-hidden bg-muted relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={350}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-background/90 backdrop-blur-md text-primary text-[10px] font-mono border-border/40 shadow-xs">
                          {post.category}
                        </Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground text-[10px] font-semibold border-none shadow-xs flex items-center gap-1">
                            <Sparkles className="h-2.5 w-2.5" /> Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <h2 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 mt-auto">
                    <span className="font-mono flex items-center gap-1">
                      <Clock className="h-3 w-3 inline text-muted-foreground/70" />
                      {post.readTime}
                    </span>
                    <span className="text-primary font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
