import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-4">System Design & Architecture</h1>
        <p className="text-muted-foreground mb-6">Selected case studies and high-level architecture diagrams demonstrating scalable design choices.</p>

        <section className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Real-Time Chat — High Level Architecture</h2>
          <div className="border rounded p-4">
            <Image src="/placeholder-a8a9o.webp" alt="architecture diagram" width={1200} height={600} className="w-full h-auto rounded" />
            <ul className="list-disc list-inside mt-4 text-muted-foreground">
              <li>Socket.IO cluster behind NGINX with sticky sessions for websockets.</li>
              <li>Redis used for pub/sub, presence, and horizontal sync between nodes.</li>
              <li>Postgres (or MongoDB) for durable message history, paginated API for clients.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Analytics Backend</h2>
          <div className="border rounded p-4">
            <p className="text-muted-foreground">Use background workers for heavy aggregations, cursor-based pagination on APIs, and caching layers with Redis.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
