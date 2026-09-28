"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "All", count: 12 },
  { name: "React", count: 4 },
  { name: "Node.js", count: 3 },
  { name: "Web Development", count: 5 },
  { name: "Career Tips", count: 2 },
  { name: "Tutorials", count: 6 },
]

export function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Browse by Category</h2>
          <p className="text-muted-foreground">
            Explore articles organized by topics and technologies I'm passionate about.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className="relative"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
