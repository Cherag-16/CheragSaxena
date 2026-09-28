import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ResearchSection } from "@/components/research-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BookOpen, Cpu, Code2, Award, ArrowRight, ExternalLink, FileText, Layers, Terminal } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Patents | Cherag Saxena - Software Engineer",
  description: "Explore Cherag Saxena's research contributions, including a filed Indian Patent for AI Raag-Guided Melody Generation and an accepted Wiley book chapter on human-AI learning systems.",
  keywords: ["Indian Patent", "AI Research", "Web Audio API", "Groq AI", "Wiley Scrivener", "Cherag Saxena Research", "Software Engineering Research"],
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navigation />
      
      <main className="pt-24 pb-16 flex-1">
        {/* Research Page Header */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-3.5 py-1 text-xs border-primary/40 text-primary uppercase tracking-widest font-mono">
              <Award className="h-3.5 w-3.5 mr-1.5 inline-block text-accent" />
              Academic &amp; Industrial Intellectual Property
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-foreground">
              Research &amp; Patent Innovations
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Advancing the state of the art in <span className="text-primary font-semibold">Generative AI</span>, <span className="text-accent font-semibold">Audio DSP Synthesis</span>, and <span className="text-foreground font-semibold">Cognitive Learning Architecture</span>. Bridging formal research with production-grade engineering.
            </p>
          </div>
        </section>

        {/* Main Research Cards */}
        <ResearchSection />

        {/* Technical Deep Dive Architecture Section */}
        <section className="py-16 bg-muted/20 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Architectural Breakdown
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Detailed system designs behind the patent-filed audio engine and publication framework.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Patent System Architecture */}
              <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-md flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <CardTitle className="font-serif text-xl">Patent Architecture: Dhun AI Engine</CardTitle>
                  </div>
                  <CardDescription>
                    Cloud-Based AI Raag-Guided Lyric-to-Melody Generation System (Indian Patent No. 202621056495 • Published: July 3, 2026)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="bg-background/80 p-4 rounded-lg border border-border/40 font-mono text-xs space-y-2">
                    <div className="text-primary font-bold flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5" /> Pipeline Workflow
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-foreground/80">
                      <li>Linguistic Parsing via Groq AI (Hindi &amp; Sanskrit cadence analysis)</li>
                      <li>Raag Frequency Matrix Calculation (Swar &amp; Aaroh/Avroh mapping)</li>
                      <li>Web Audio API Oscillator Node Synthesis with custom ADSR envelopes</li>
                      <li>Real-time Audio Buffer streaming with &lt;15ms latency</li>
                    </ol>
                  </div>

                  <p className="leading-relaxed">
                    This patent solves the challenge of combining strict rules of Indian Classical music theory (Raag swara matrices and microtonal intervals) with generative AI text models. The system converts raw lyrical input into melodically aligned digital synthesis buffers in real-time.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">Groq AI LPU</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Web Audio API</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Next.js 15 App Router</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Tone.js DSP</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Publication Architecture */}
              <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-md flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    <CardTitle className="font-serif text-xl">Publication: CodeMentorAI Framework</CardTitle>
                  </div>
                  <CardDescription>
                    Neurological Mode in AI-Powered Collaborative Learning (Wiley Scrivener Publishing)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="bg-background/80 p-4 rounded-lg border border-border/40 font-mono text-xs space-y-2">
                    <div className="text-accent font-bold flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5" /> Dual-LLM Pipeline
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-foreground/80">
                      <li>Code AST Analysis &amp; Static Bug Detection Engine</li>
                      <li>Evaluator LLM: Identifies cognitive gaps without giving immediate solutions</li>
                      <li>Socratic Mentor LLM: Generates step-by-step guided prompts</li>
                      <li>Adaptive Learning Path Generator storing vector embeddings</li>
                    </ol>
                  </div>

                  <p className="leading-relaxed">
                    Our accepted research chapter proposes a novel human-computer interaction framework aimed at breaking "tutorial hell". By modulating AI feedback depth according to developer problem-solving state, the system boosts long-term comprehension and retention by up to 40%.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">Dual-LLM Pipeline</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Socratic Prompting</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">AST Parser</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">MERN Stack</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom CTA to Contact/Resume */}
            <div className="text-center pt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-md">
                <Link
                  href="/contact?subject=Research%20%26%20Patent%20Collaboration&message=Hello%20Cherag%2C%0A%0AI%20would%20like%20to%20discuss%20a%20research%20topic%2C%20patent%20project%2C%20or%20technical%20collaboration%20opportunity%20with%20you.%0A%0ABest%20regards%2C"
                  className="flex items-center gap-2"
                >
                  Discuss Research &amp; Collaboration
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
