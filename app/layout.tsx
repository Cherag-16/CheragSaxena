import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/google-analytics"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Cherag Saxena — Software Engineer | Full-Stack, AI & Cloud Architect",
    template: "%s | Cherag Saxena — Software Engineer",
  },
  description:
    "Cherag Saxena is a Software Engineer, Full-Stack Developer, and final-year B.Tech (Hons.) Computer Engineering student at SAGE University, Indore. Patent Co-Inventor (Indian Patent No. 202621056495), Wiley book author, and Azure Certified Engineer specialized in Next.js, MERN Stack, Cloud Architecture, and Generative AI systems.",
  keywords: [
    "Cherag Saxena",
    "Cherag",
    "Cherag Saxena Portfolio",
    "Cherag Saxena Software Engineer",
    "Cherag Saxena SAGE University",
    "Cherag Saxena Indore",
    "Cherag Saxena Full Stack",
    "Cherag Saxena GitHub",
    "Cherag Saxena LinkedIn",
    "Cherag Saxena Patent",
    "Cherag Saxena NativelyAI",
    "Cherag Saxena Dhun AI",
    "Software Engineer",
    "sofftware engineer",
    "Full-Stack Engineer",
    "full stack developer",
    "web developer",
    "frontend developer",
    "best student award",
    "sage university indore",
    "sage university",
    "B.Tech Computer Engineering Software Engineering",
    "MERN Stack Developer",
    "Next.js 15 Developer",
    "React Developer",
    "Node.js Engineer",
    "TypeScript Developer",
    "Azure Certified Architect",
    "ai patent",
    "author",
    "Cloud-Based AI Raag-Guided Lyric-to-Melody Generation",
    "indian patent filled",
    "Indian Patent Inventor 202621056495",
    "Neurological Mode in AI-Powered Collaborative Learning chapter",
    "Generative AI Engineer",
    "Web Audio API Synthesis",
    "Vishal Global Tech",
    "Techfest IIT Bombay Intern",
    "AI Resume Builder",
    "AI Resume Builder — AI-Powered ATS Resume SaaS",
    "ATS Resume SaaS",
    "Dhee Coding Lab Intern",
    "Full Stack AI Developer",
    "Portfolio Website",
    "Cherag Saxena Vercel",
    "cheragsaxena.vercel.app",
    "SaaS Developer India",
  ],
  authors: [{ name: "Cherag Saxena", url: "https://cheragsaxena.vercel.app" }],
  creator: "Cherag Saxena",
  publisher: "Cherag Saxena",
  generator: "Next.js 15",
  applicationName: "Cherag Saxena Portfolio",
  metadataBase: new URL("https://cheragsaxena.vercel.app"),
  alternates: {
    canonical: "https://cheragsaxena.vercel.app",
  },
  category: "technology",
  classification: "Portfolio, Software Engineering, Web Development, AI Engineering",
  openGraph: {
    type: "profile",
    firstName: "Cherag",
    lastName: "Saxena",
    username: "cheragsaxena",
    gender: "male",
    locale: "en_US",
    url: "https://cheragsaxena.vercel.app",
    title: "Cherag Saxena — Software Engineer | Full-Stack & AI Systems Architect",
    description:
      "Official portfolio of Cherag Saxena: Final-year B.Tech (Hons.) Computer Engineering student, Indian Patent Inventor, Wiley Book Author, Azure Certified, and Full-Stack MERN & Next.js Engineer.",
    siteName: "Cherag Saxena — Official Portfolio",
    images: [
      {
        url: "https://cheragsaxena.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cherag Saxena — Software Engineer Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherag Saxena — Software Engineer | Full-Stack & AI Systems",
    description:
      "Explore projects, research publications, patent details, and engineering case studies by Cherag Saxena (B.Tech Software Engineering, SAGE University).",
    creator: "@cheragsaxena",
    site: "@cheragsaxena",
    images: ["https://cheragsaxena.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "cherag-saxena-verified",
    "msvalidate.01": "cherag-saxena-bing-verified",
    "theme-color": "#ffffff",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://cheragsaxena.vercel.app/#person",
        name: "Cherag Saxena",
        givenName: "Cherag",
        familyName: "Saxena",
        additionalName: "Cherag S.",
        jobTitle: "Software Engineer",
        description:
          "Final Year B.Tech (Hons.) Computer Engineering (Software Engineering) student at SAGE University Indore, Indian Patent Co-Inventor (202621056495), Wiley book chapter author, and Full-Stack / AI Systems Engineer.",
        url: "https://cheragsaxena.vercel.app",
        image: "https://cheragsaxena.vercel.app/cherag.jpg",
        email: "mailto:cheragsaxena1607@gmail.com",
        telephone: "+91-9893976865",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/cherag-16",
          "https://www.linkedin.com/in/cherag-saxena",
          "https://leetcode.com/u/Cherag_Saxena_16/",
          "https://www.codechef.com/users/cheragsaxena16",
          "https://8nfhxwjl86263gq6xpco0ci5h.nativelyai.app/",
          "https://cheragsaxena.vercel.app",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "SAGE University, Indore",
          url: "https://sageuniversity.in",
        },
        knowsAbout: [
          "Software Engineering",
          "Full Stack Web Development",
          "Generative AI",
          "Next.js 15",
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "SQL Server",
          "PostgreSQL",
          "Azure Cloud (AZ-900)",
          "Web Audio API & DSP Audio Synthesis",
          "System Design & Microservices",
          "Machine Learning & Scikit-Learn",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
            credentialCategory: "Certification",
            recognizedBy: {
              "@type": "Organization",
              name: "Microsoft",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "B.Tech (Hons.) Computer Engineering (Software Engineering)",
            credentialCategory: "Degree",
            recognizedBy: {
              "@type": "CollegeOrUniversity",
              name: "SAGE University, Indore",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Lablab.ai × NativelyAI AI Factory Hackathon Certificate",
            credentialCategory: "Hackathon Award",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cheragsaxena.vercel.app/#website",
        url: "https://cheragsaxena.vercel.app",
        name: "Cherag Saxena — Software Engineer Portfolio",
        description:
          "The official personal website and engineering portfolio of Cherag Saxena.",
        publisher: {
          "@id": "https://cheragsaxena.vercel.app/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://cheragsaxena.vercel.app/#webpage",
        url: "https://cheragsaxena.vercel.app",
        name: "Cherag Saxena — Software Engineer | Full-Stack, AI & Cloud Architect",
        isPartOf: {
          "@id": "https://cheragsaxena.vercel.app/#website",
        },
        about: {
          "@id": "https://cheragsaxena.vercel.app/#person",
        },
        mainEntity: {
          "@id": "https://cheragsaxena.vercel.app/#person",
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="canonical" href="https://cheragsaxena.vercel.app" />
        <link rel="me" href="https://github.com/cherag-16" />
        <link rel="me" href="https://www.linkedin.com/in/cherag-saxena" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-serif: ${montserrat.variable};
  color-scheme: light dark;
}
        `}</style>
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
