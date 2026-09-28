"use client";

import { useState } from "react";
import { ExternalLink, Trophy, Cpu, Users, Lightbulb } from "lucide-react";

const filterButtons = [
  "All",
  "Cloud",
  "AI/ML",
  "Web Dev",
  "Competition",
] as const;
type FilterOption = (typeof filterButtons)[number];

type CredentialCard = {
  id: string;
  name: string;
  issuer: string;
  category: "Cloud" | "AI/ML" | "Web Dev" | "Competition";
  date: string;
  impact: string;
  verifyUrl?: string;
  logoBg: string;
  logoText: string;
  featured?: boolean;
};

const credentialCards: CredentialCard[] = [
  {
    id: "natively-ai-factory-hackathon",
    name: "AI Factory Hackathon — AI/ML API Solution",
    issuer: "Lablab.ai × NativelyAI",
    category: "Competition",
    date: "Aug, 2026 · ID: CMSR96WA301EPS601VLQJ7N22",
    impact:
      "Awarded Certificate of Completion by NativelyAI Founder Pawel Czech for successfully submitting an AI/ML API solution.",
    logoBg: "#0B0F19",
    logoText: "NV",
  },
  {
    id: "azure-fundamentals",
    name: "Azure Fundamentals",
    issuer: "Microsoft · Certiport",
    category: "Cloud",
    date: "June 27, 2025 · ID: Cx35-Dw8X",
    impact:
      "Scored 900/1000 — top percentile. Covers cloud concepts, Azure services, security & pricing.",
    verifyUrl: "https://verify.certiport.com",
    logoBg: "#0078D4",
    logoText: "MS",
  },
  {
    id: "oci-ai-foundations-associate",
    name: "OCI AI Foundations Associate",
    issuer: "Oracle University",
    category: "AI/ML",
    date: "Aug 21, 2025 · Valid till 2027",
    impact: "Validates ML models, AI services & OCI infrastructure knowledge.",
    logoBg: "#F80000",
    logoText: "OC",
  },
  {
    id: "cloud-practitioner-essentials",
    name: "Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "Cloud",
    date: "July 5, 2025",
    impact: "Core AWS architecture, S3, EC2, IAM & billing fundamentals.",
    logoBg: "#FF9900",
    logoText: "AWS",
  },
  {
    id: "ai-ml-virtual-internship",
    name: "AI-ML Virtual Internship",
    issuer: "Google × AICTE × EduSkills",
    category: "AI/ML",
    date: "Jul – Sep 2025 · 10 weeks",
    impact:
      "Govt-backed AI/ML internship supported by Google for Developers India Edu Program.",
    verifyUrl:
      "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=ef973d9cd740a09ec3376d5ac90deb0d",
    logoBg: "#4285F4",
    logoText: "G",
  },
  {
    id: "web-dev-internship-mjg",
    name: "Web Dev Internship",
    issuer: "My Job Grow × IIT Bombay Techfest",
    category: "Web Dev",
    date: "Jan 2025 · ID: MJG1124WEBD184",
    impact:
      "Built & deployed real-world projects rated outstanding. Collab with Asia's largest tech festival.",
    logoBg: "#003366",
    logoText: "IIT",
  },
  {
    id: "uas-bootcamp-4-ai-ml",
    name: "UAS Bootcamp 4.0 – AI/ML for Drones",
    issuer: "IIT Indore × MeitY",
    category: "AI/ML",
    date: "May 2024 · 40+ hours",
    impact:
      "Govt ministry + IIT program on drone communication, navigation & AI systems.",
    logoBg: "#003366",
    logoText: "IIT",
  },
  {
    id: "genai-data-analytics-simulation",
    name: "GenAI Data Analytics Simulation",
    issuer: "TATA / Forage",
    category: "AI/ML",
    date: "July 6, 2025 · ID: dHQWonD2XByGBFqBv",
    impact:
      "AI-driven risk profiling, delinquency prediction & business data storytelling.",
    logoBg: "#1C2B6E",
    logoText: "TT",
  },
  {
    id: "google-flutter-intermediate",
    name: "Google Flutter – Intermediate",
    issuer: "Infosys Springboard",
    category: "Web Dev",
    date: "July 5, 2025",
    impact:
      "Intermediate Flutter & Dart — UI components, state management & deployment.",
    verifyUrl: "https://verify.onwingspan.com/",
    logoBg: "#007CC2",
    logoText: "IN",
  },
  {
    id: "xto10x-hackathon-edition-3",
    name: "xto10x Hackathon Edition #3",
    issuer: "Masai School",
    category: "Competition",
    date: "2025 · Signed by Co-Founder & CTO",
    impact:
      "Exceptional skills and problem-solving recognised by Nrupul Dev, CTO of Masai.",
    logoBg: "#111111",
    logoText: "M",
  },
  {
    id: "web-dev-trainee-vgt",
    name: "Web Developer Trainee Internship",
    issuer: "Vishal Global Tech · Reg. UDYAM-UP-28-0108839",
    category: "Web Dev",
    date: "June 2026 · Gaur City Mall, Greater Noida West",
    impact:
      "Web Developer Trainee position offer letter. Maintained B2B systems indelhincr.com and client portals.",
    logoBg: "#0ea5e9",
    logoText: "VGT",
  },
  {
    id: "web-dev-internship-vgt",
    name: "Web Dev Internship",
    issuer: "Vishal Global Tech · MSME Registered",
    category: "Web Dev",
    date: "Jan 20 – Feb 06, 2025 · ID: WEBDEVJAN06FEB20C0047",
    impact:
      "Full web dev internship at MSME-registered company with verified certificate.",
    verifyUrl: "https://vishalglobaltech.com/WEBDEVJAN06FEB20C0047.html",
    logoBg: "#1a1a1a",
    logoText: "VGT",
  },
];

const recognitionCards = [
  {
    icon: Lightbulb,
    iconColor: "text-amber-500",
    title: "Member — R&D Club",
    org: "SAGE University · Research & Development",
    tags: ["R&D Club", "Research Member"],
    description:
      "Active core member of SAGE University Research & Development Club. Contributing to patent filing, AI audio synthesis, and academic literature.",
  },
  {
    icon: Trophy,
    iconColor: "text-primary",
    title: "Best Excellence Award",
    org: "Sage University · 2024",
    tags: ["Academic", "First year honours"],
    description:
      "First year academic honours — top-performing student recognition from Sage University, Indore.",
  },
  {
    icon: Cpu,
    iconColor: "text-accent",
    title: "IoT Winter School",
    org: "SAGE University · Mar 3–14, 2025",
    tags: ["Hardware", "2 weeks"],
    description:
      '"From Zero to IoT Hero" — 2-week intensive by The SAGE Group on IoT mastery.',
  },
  {
    icon: Users,
    iconColor: "text-primary",
    title: "DevTown Community Awards ×3",
    org: "DevTown · 2024",
    tags: ["Community", "Leadership"],
    description:
      "3 formal certificates of appreciation for continuous support in growing the DevTown community.",
  },
];

const categoryStyles: Record<CredentialCard["category"], string> = {
  Cloud: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
  "AI/ML":
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
  "Web Dev":
    "bg-primary/10 text-primary dark:bg-primary/20 border border-primary/20",
  Competition:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200",
};

const stats = [
  { label: "Certifications", value: "33+" },
  { label: "Internships", value: "3" },
  { label: "IIT Programs", value: "2" },
  { label: "Big Tech Badges", value: "3" },
];

export function Achievements() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredCards =
    activeFilter === "All"
      ? credentialCards
      : credentialCards.filter((card) => card.category === activeFilter);

  return (
    <section className="pt-4 pb-10 bg-background text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Industry Credentials heading ── */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 mb-2">
            Industry Credentials
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
            Industry Credentials
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Verified certifications, internships, and technology milestones for
            professional growth.
          </p>
        </div>

        {/* ── Stats + filter bar ── */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50 dark:border-slate-700/80 dark:bg-slate-900/70 p-3 shadow-sm mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-inner border border-slate-200 dark:bg-slate-950/70 dark:border-slate-700">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                >
                  <span className="font-semibold">{stat.value}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <span className="h-3 w-px bg-slate-300 dark:bg-slate-600" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {filterButtons.map((button) => {
                const isActive = activeFilter === button;
                return (
                  <button
                    key={button}
                    type="button"
                    onClick={() => setActiveFilter(button)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      isActive
                        ? "border-slate-300 bg-slate-100 text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    {button}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Credential cards grid ── */}
        <div
          key={activeFilter}
          className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mb-3 animate-fade-in-up"
        >
          {filteredCards.map((card) => (
            <article
              key={card.id}
              className={`rounded-xl border bg-white p-3.5 shadow-sm transition-all duration-300 ease-out dark:bg-slate-800 dark:border-slate-700 ${
                card.featured
                  ? "border-2 border-blue-500"
                  : "border-gray-200 dark:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryStyles[card.category]}`}
                >
                  {card.category}
                </span>
                {card.verifyUrl && (
                  <a
                    href={card.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <div className="mt-3 flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: card.logoBg }}
                >
                  {card.logoText}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground break-words leading-snug">
                    {card.name}
                  </h3>
                  <p className="text-xs text-muted-foreground break-words">{card.issuer}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{card.date}</p>
              <div className="mt-3 border-t border-slate-200 pt-3 text-xs leading-5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                {card.impact}
              </div>
            </article>
          ))}
        </div>

        {/* ── Footer note ── */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-xs text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-0">
          <p>
            Part of 33+ verified certifications — DevTown bootcamps, AWS
            modules, Microsoft Learn badges & more
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="my-8 h-px bg-slate-200 dark:bg-slate-700" />

        {/* ── College & Community heading ── */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 mb-2">
            College & Community Recognition
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
            College & Community Recognition
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Academic honours and community impact at Sage University & beyond.
          </p>
        </div>

        {/* ── Recognition cards ── */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {recognitionCards.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition dark:bg-slate-800 dark:border-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 ${item.iconColor} dark:bg-slate-900 flex-shrink-0`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{item.org}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* ── Bottom note ── */}
        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-xs text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300">
          &amp; 4+ more — SAGE University expert sessions and recognised by IIT
          Indore
        </div>
      </div>
    </section>
  );
}
