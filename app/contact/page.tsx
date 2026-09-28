import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactCTA } from "@/components/contact-cta"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <section className="py-12 sm:py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
