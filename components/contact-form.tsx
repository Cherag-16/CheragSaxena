"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, CheckCircle, AlertCircle, Sparkles, Briefcase, GraduationCap, Code, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const contactPresets = [
  {
    id: "fulltime",
    label: "Full-Time Role",
    icon: Briefcase,
    subject: "Opportunity: Full-Time Software Engineer Role",
    message: "Hi Cherag,\n\nI came across your portfolio and was impressed by your B.Tech (Hons.) Computer Engineering background, Indian Patent in AI Audio DSP, and production engineering internships. We have an open Software Engineer / Full-Stack Engineer position and would love to discuss this opportunity with you.\n\nBest regards,\n[Your Name]",
  },
  {
    id: "internship",
    label: "Internship",
    icon: GraduationCap,
    subject: "Internship Inquiry: Software Engineer Intern",
    message: "Hi Cherag,\n\nWe reviewed your technical projects and were very impressed with your work in Next.js 15, MERN stack, database query optimization, and Azure AZ-900 certification. We have an engineering internship opening and would love to connect.\n\nBest regards,\n[Your Name]",
  },
  {
    id: "contract",
    label: "Contract / Freelance",
    icon: Code,
    subject: "Project Collaboration / Contract Development",
    message: "Hi Cherag,\n\nWe have a web application project requiring expertise in scalable full-stack architecture, clean UI design, and fast execution. We'd love to review project scope, milestones, and timeline with you.\n\nBest regards,\n[Your Name]",
  },
  {
    id: "consultation",
    label: "AI Consultation",
    icon: Lightbulb,
    subject: "Technical Consultation: AI & System Architecture",
    message: "Hi Cherag,\n\nI would love to schedule a technical consultation regarding your work on generative AI systems, real-time Web Audio DSP pipelines, and academic research in cognitive learning models.\n\nBest regards,\n[Your Name]",
  },
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const subjectParam = searchParams.get("subject")
    const messageParam = searchParams.get("message")
    const nameParam = searchParams.get("name")
    const emailParam = searchParams.get("email")

    if (subjectParam || messageParam || nameParam || emailParam) {
      setFormData((prev) => ({
        ...prev,
        name: nameParam || prev.name,
        email: emailParam || prev.email,
        subject: subjectParam || prev.subject,
        message: messageParam || prev.message,
      }))
    }
  }, [searchParams])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
        try {
          const emailjs = await import("@emailjs/browser")
          const forwarded = { ...formData }
          await (emailjs as any).send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, forwarded, EMAILJS_PUBLIC_KEY)

          setSubmitStatus("success")
          setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I'll review it and get back to you within 24 hours.`)
          
          // Clear the form
          setFormData({ name: "", email: "", subject: "", message: "" })

          toast({
            title: "✓ Message Sent Successfully",
            description: `Thank you for reaching out! I'll respond to ${formData.email} soon.`,
            duration: 6000,
          })

          // Also forward to server API
          try {
            await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(forwarded),
            })
          } catch (err) {
            console.warn("Server forward failed:", err)
          }

          return
        } catch (emailJsErr) {
          console.warn("EmailJS failed, trying server API:", emailJsErr)
        }
      }

      // Fallback to server API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const payload = await res.json()

      if (!res.ok) {
        throw new Error(payload?.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I'll review it and get back to you within 24 hours.`)
      setFormData({ name: "", email: "", subject: "", message: "" })

      toast({
        title: "✓ Message Sent Successfully",
        description: `Thank you for reaching out! I'll respond to ${formData.email} soon.`,
        duration: 6000,
      })
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.")
      
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or email cheragsaxena16@gmail.com",
        variant: "destructive",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-border/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg h-full">
      <CardHeader className="pb-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="font-serif text-2xl sm:text-3xl text-foreground">Send A Message</CardTitle>
          {searchParams.get("type") === "hire" && (
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              Hiring Inquiry Mode
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Have an engineering opportunity, consulting inquiry, or technical question? Send a message directly to my inbox.
        </p>

        {/* Quick Fill Customized Message Chips */}
        <div className="pt-2 border-t border-border/40 space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Auto-Fill Customized Message:
            </span>
            <span className="text-[11px] text-muted-foreground/70">Click preset to load</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {contactPresets.map((preset) => {
              const Icon = preset.icon
              const isCurrent = formData.subject === preset.subject
              return (
                <button
                  type="button"
                  key={preset.id}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      subject: preset.subject,
                      message: preset.message,
                    }))
                    toast({
                      title: `Loaded ${preset.label} Preset`,
                      description: "Customized subject and message template filled in below.",
                    })
                  }}
                  className={`text-xs px-2.5 py-1 rounded-md border inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? "border-primary bg-primary/15 text-primary font-medium shadow-xs ring-1 ring-primary/40"
                      : "border-border/50 bg-background/50 hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {preset.label}
                </button>
              )
            })}
          </div>
        </div>
      </CardHeader>
      <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Alert className="border-primary/30 bg-primary/10 text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription className="ml-2">{submitMessage}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Alert className="border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="ml-2">{submitMessage}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, questions, or how I can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground space-y-1 pt-4 border-t border-border/30">
                <p className="font-medium text-foreground">Response Time</p>
                <p>I typically respond within <span className="text-primary font-semibold">24 hours</span></p>
                <p>Email: <span className="text-primary font-semibold">cheragsaxena16@gmail.com</span></p>
              </div>
            </form>
          </CardContent>
        </Card>
  )
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading contact form...</div>}>
      <ContactFormInner />
    </Suspense>
  )
}
