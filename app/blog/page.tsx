import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
