import blogs from "@/data/blogs.json"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar, Sparkles, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypePrism from "rehype-prism-plus"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShareButtons } from "@/components/share-buttons"

export async function generateStaticParams() {
  return (blogs as any[]).map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = (blogs as any[]).find((p) => p.slug === slug)
  if (!post) {
    return { title: "Article Not Found | Cherag Saxena" }
  }
  return {
    title: `${post.title} | Cherag Saxena`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // First try JSON-based posts
  const jsonPost = (blogs as any[]).find((p) => p.slug === slug)
  if (jsonPost) {
    const post = jsonPost
    const rawContent = (post as any).content || post.excerpt

    // Process markdown content for rich rendering
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypePrism)
      .use(rehypeStringify)
      .process(rawContent)

    const htmlContent = String(processedContent)

    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navigation />

        <main className="pt-28 pb-20 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-6 space-y-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to All Articles
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground pt-1">
                <span className="font-mono flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full font-mono text-xs font-semibold">
                  {post.category || "Software Engineering"}
                </span>
              </div>
            </div>

            {post.image && (
              <div className="w-full rounded-2xl overflow-hidden mb-10 border border-border/50 shadow-xl bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 sm:h-[420px] object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Article Body */}
            <article className="prose dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md leading-relaxed text-foreground/90">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>

            {/* Author Attribution Card */}
            <div className="mt-14 p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-serif text-2xl font-bold shrink-0 shadow-md">
                CS
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <h3 className="font-serif font-bold text-lg text-foreground">Cherag Saxena</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    Author &amp; Engineer
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Final-year B.Tech (Hons.) Computer Engineering student at SAGE University, co-inventor of Indian Patent
                  No. 202621056495, Wiley Scrivener author, and Microsoft Certified Azure Fundamentals (AZ-900). Passionate
                  about building scalable systems, AI DSP audio synthesis, and production web applications.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <Button size="sm" asChild className="text-xs bg-primary hover:bg-primary/90">
                    <Link href="/contact?type=hire">
                      <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                      Work With Cherag
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="text-xs">
                    <Link href="/portfolio">View Projects</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Post footer actions */}
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to All Articles
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Share Article
                </span>
                <ShareButtons title={post.title} slug={slug} excerpt={post.excerpt} />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  // Fallback: markdown files under data/blog/*.md
  const blogDir = path.join(process.cwd(), "data", "blog")
  if (!fs.existsSync(blogDir)) return notFound()
  const candidates = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"))
  const match = candidates.find((f) => f.includes(slug))
  if (!match) return notFound()
  const raw = fs.readFileSync(path.join(blogDir, match), "utf-8")
  const { data, content } = matter(raw)
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content)

  const html = String(file)

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <article>
          <h1 className="text-3xl font-serif font-bold mb-2 break-words">{data.title}</h1>
          <div className="text-sm text-muted-foreground mb-6">
            {data.date} • {data.tags?.join(", ")}
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Share Article
            </div>
            <ShareButtons title={data.title} slug={slug} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
