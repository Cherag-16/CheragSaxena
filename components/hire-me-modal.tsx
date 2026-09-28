"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Briefcase,
  Sparkles,
  Send,
  Copy,
  Check,
  ExternalLink,
  Building2,
  User,
  Mail,
  Calendar,
  Code,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export type RoleType = "fulltime" | "internship" | "contract" | "consultation";

interface RoleOption {
  id: RoleType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  roleTitle: string;
  badge: string;
  generateMessage: (name: string, company: string) => string;
  generateSubject: (company: string) => string;
}

const roleOptions: RoleOption[] = [
  {
    id: "fulltime",
    label: "Full-Time Role",
    icon: Briefcase,
    roleTitle: "Software Engineer (SDE / Full-Stack)",
    badge: "Actively Available",
    generateSubject: (company) =>
      company ? `Opportunity: Software Engineer Role at ${company}` : "Opportunity: Software Engineer (SWE) Role",
    generateMessage: (name, company) =>
      `Hi Cherag,

I came across your portfolio and was thoroughly impressed by your background in B.Tech (Hons.) Computer Engineering, your published Indian Patent in AI Audio DSP, and your production internship achievements.

We have an open Software Engineer / Full-Stack Engineer opportunity at ${company || "[Company Name]"} and would love to connect for an introductory conversation regarding this role.

Looking forward to speaking with you!

Best regards,
${name || "[Your Name]"}`.trim(),
  },
  {
    id: "internship",
    label: "Internship",
    icon: GraduationCap,
    roleTitle: "Software Engineering Intern",
    badge: "Open for SDE Internships",
    generateSubject: (company) =>
      company ? `Internship Inquiry: Software Engineer Intern at ${company}` : "Internship Inquiry: Software Engineer Intern",
    generateMessage: (name, company) =>
      `Hi Cherag,

We reviewed your technical projects and were very impressed with your work in Next.js 15, MERN stack, database query optimization, and your 900/1000 Microsoft Azure certification.

We have an exciting software engineering internship opening at ${company || "[Company Name]"} and would like to invite you to discuss our upcoming technical projects.

Best regards,
${name || "[Your Name]"}`.trim(),
  },
  {
    id: "contract",
    label: "Contract / Project",
    icon: Code,
    roleTitle: "Full-Stack Web & MVP Development",
    badge: "High-Throughput Delivery",
    generateSubject: (company) =>
      company ? `Project Collaboration / Contract Work with ${company}` : "Project Collaboration / Contract Development",
    generateMessage: (name, company) =>
      `Hi Cherag,

We have a web application project at ${company || "[Our Organization]"} requiring expertise in scalable full-stack architecture, clean UI design, and fast execution.

Given your hands-on production experience in reducing latencies and building responsive modern web applications, we would love to review project scope, milestones, and deliverables with you.

Best regards,
${name || "[Your Name]"}`.trim(),
  },
  {
    id: "consultation",
    label: "AI Consultation",
    icon: Lightbulb,
    roleTitle: "AI & System Architecture Advisory",
    badge: "Patent & Research Expertise",
    generateSubject: (company) =>
      company ? `Technical Consultation Inquiry from ${company}` : "Technical Consultation Inquiry",
    generateMessage: (name, company) =>
      `Hi Cherag,

I would love to schedule a technical consultation regarding your work on generative AI systems, real-time Web Audio DSP pipelines, and academic research in cognitive learning models.

Please let me know your availability for a brief call to discuss our technical architecture.

Best regards,
${name || "[Your Name]"}`.trim(),
  },
];

interface HireMeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialRole?: RoleType;
}

export function HireMeModal({
  isOpen,
  onOpenChange,
  initialRole = "fulltime",
}: HireMeModalProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [selectedRole, setSelectedRole] = useState<RoleType>(initialRole);
  const [senderName, setSenderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [timeline, setTimeline] = useState("Immediate");
  const [customSubject, setCustomSubject] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [hasManuallyEditedMessage, setHasManuallyEditedMessage] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state when role or initial inputs change
  useEffect(() => {
    const currentOption = roleOptions.find((r) => r.id === selectedRole) || roleOptions[0];
    setCustomSubject(currentOption.generateSubject(companyName));
    if (!hasManuallyEditedMessage) {
      setCustomMessage(currentOption.generateMessage(senderName, companyName));
    }
  }, [selectedRole, senderName, companyName, hasManuallyEditedMessage]);

  const handleRoleSelect = (roleId: RoleType) => {
    setSelectedRole(roleId);
    const option = roleOptions.find((r) => r.id === roleId);
    if (option) {
      setCustomSubject(option.generateSubject(companyName));
      setCustomMessage(option.generateMessage(senderName, companyName));
      setHasManuallyEditedMessage(false);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(
      `Subject: ${customSubject}\n\n${customMessage}\n\nSender Email: ${senderEmail || "Not provided"}`
    );
    setCopied(true);
    toast({
      title: "Message Copied to Clipboard",
      description: "You can paste this directly into your email client or LinkedIn message.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenInContactPage = () => {
    onOpenChange(false);
    const params = new URLSearchParams({
      type: "hire",
      role: selectedRole,
      subject: customSubject,
      message: customMessage,
      name: senderName,
      company: companyName,
      email: senderEmail,
    });
    router.push(`/contact?${params.toString()}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!senderEmail.trim()) {
      toast({
        title: "Work Email Required",
        description: "Please provide your email address so Cherag can get back to you.",
        variant: "destructive",
      });
      return;
    }

    if (!customMessage.trim()) {
      toast({
        title: "Message Required",
        description: "Please write a brief description of the opportunity.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: senderName.trim() || (companyName ? `Representative from ${companyName}` : "Recruiter / Client"),
      email: senderEmail.trim(),
      subject: `[Hiring Inquiry - ${selectedRole.toUpperCase()}] ${customSubject}`,
      message: `Timeline / Start: ${timeline}\nCompany / Organization: ${companyName || "N/A"}\n\n${customMessage}`,
    };

    try {
      // 1. Send via local Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Fallback attempt via EmailJS if credentials exist in public env
      const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
        try {
          const emailjs = await import("@emailjs/browser");
          await (emailjs as any).send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, payload, EMAILJS_PUBLIC_KEY);
        } catch (emailJsErr) {
          console.warn("Client EmailJS backup forward warning:", emailJsErr);
        }
      }

      toast({
        title: "✓ Inquiry Sent Successfully!",
        description: `Thank you ${senderName || ""}! Cherag has received your customized inquiry and will respond within 24 hours.`,
        duration: 7000,
      });

      onOpenChange(false);
      // Reset form
      setSenderName("");
      setCompanyName("");
      setSenderEmail("");
      setHasManuallyEditedMessage(false);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
      toast({
        title: "Submission Issue",
        description: "There was an issue sending your message. You can copy the message or use the full contact form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeOption = roleOptions.find((r) => r.id === selectedRole) || roleOptions[0];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[92vh] overflow-y-auto p-0 gap-0 border-border/80 bg-background/95 backdrop-blur-xl shadow-2xl rounded-2xl">
        {/* Header Banner */}
        <div className="p-6 pb-4 border-b border-border/40 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent">
          <DialogHeader className="space-y-2 text-left">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="outline" className="px-3 py-0.5 text-xs border-primary/40 text-primary font-mono flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                Direct Hiring Portal
              </Badge>
              <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                ⚡ Response within 24 hours
              </span>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Hire <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cherag Saxena</span>
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Select an engagement type below to generate an instant, customized inquiry tailored to Cherag's background, patent, and skill set.
            </DialogDescription>
          </DialogHeader>

          {/* Role Presets Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
            {roleOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedRole === opt.id;
              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => handleRoleSelect(opt.id)}
                  className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/15 text-primary shadow-sm font-semibold ring-1 ring-primary/40"
                      : "border-border/50 bg-card/60 text-muted-foreground hover:border-primary/40 hover:bg-muted/40"
                  }`}
                >
                  <Icon className={`h-4 w-4 mb-1.5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs font-medium leading-tight">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs bg-muted/40 px-3.5 py-2 rounded-lg border border-border/40">
            <span className="font-semibold text-foreground flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              Role Focus:
            </span>
            <span className="text-primary font-mono font-medium">{activeOption.roleTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="hire-name" className="text-xs font-medium flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-muted-foreground" /> Your Name
              </Label>
              <Input
                id="hire-name"
                placeholder="e.g. Sarah Jenkins"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="h-9 text-sm bg-card/50"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hire-company" className="text-xs font-medium flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" /> Company / Organization
              </Label>
              <Input
                id="hire-company"
                placeholder="e.g. Acme Technologies"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="h-9 text-sm bg-card/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="hire-email" className="text-xs font-medium flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-primary" /> Work Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="hire-email"
                type="email"
                required
                placeholder="you@company.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="h-9 text-sm bg-card/50"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hire-timeline" className="text-xs font-medium flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Expected Timeline
              </Label>
              <select
                id="hire-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-card/50 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="Immediate">Immediate / Within 2 Weeks</option>
                <option value="Next Month">Next Month</option>
                <option value="Upcoming Quarter">Upcoming Quarter (Summer/Fall)</option>
                <option value="Flexible">Flexible / Exploring</option>
              </select>
            </div>
          </div>

          {/* Dynamic Subject Field */}
          <div className="space-y-1.5">
            <Label htmlFor="hire-subject" className="text-xs font-medium">
              Subject Line
            </Label>
            <Input
              id="hire-subject"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              className="h-9 text-sm font-mono text-xs bg-card/50"
            />
          </div>

          {/* Dynamic Message Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="hire-message" className="text-xs font-medium flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Customized Message Preview
              </Label>
              <span className="text-[10px] text-muted-foreground">
                {hasManuallyEditedMessage ? "Custom edited" : "Auto-customized by template"}
              </span>
            </div>
            <Textarea
              id="hire-message"
              rows={5}
              value={customMessage}
              onChange={(e) => {
                setCustomMessage(e.target.value);
                setHasManuallyEditedMessage(true);
              }}
              className="text-xs sm:text-sm font-sans bg-card/50 leading-relaxed resize-y"
              placeholder="Your message to Cherag..."
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-border/40">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopyMessage}
                className="text-xs h-9 flex-1 sm:flex-none"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" /> : <Copy className="h-3.5 w-3.5 mr-1.5" />}
                {copied ? "Copied!" : "Copy Pitch"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleOpenInContactPage}
                className="text-xs h-9 text-muted-foreground hover:text-foreground flex-1 sm:flex-none"
              >
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                Full Form
              </Button>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 text-primary-foreground text-sm font-semibold h-9 px-6 transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Inquiry Directly
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
