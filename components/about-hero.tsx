"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  GraduationCap,
  Calendar,
  Heart,
  Rocket,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    window.open("/Cherag_Saxena_Resume.pdf", "_blank");
  };

  return (
    <section className="pt-24 pb-29 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={cn(
              "space-y-8",
              isVisible ? "animate-fade-in-up" : "opacity-0",
            )}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Builder by instinct. Problem-solver by habit. Designer at heart.
                Developer by choice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">
                    Indore, India
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <GraduationCap className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Education</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    B.Tech (Hons.) <br/> Computer Engineering (Software Engineering)
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Experience</div>
                  <div className="text-sm text-muted-foreground">2+ Years</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <Download className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Resume</div>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-sm text-primary hover:text-accent p-0 h-auto"
                  >
                    <a
                      href="/Cherag_Saxena_Resume.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            <style>{`
              @keyframes pulse-dot {
                0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
                50% { box-shadow: 0 0 0 5px hsl(var(--primary) / 0); }
              }
              
              .dot-available {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: hsl(var(--primary));
                animation: pulse-dot 2s ease-in-out infinite;
              }
            `}</style>

            <div
              className="relative w-full max-w-md mx-auto"
              style={{ position: "relative", padding: "30px" }}
            >
              {/* Photo Frame (outer + inner for layered frame look) */}
              <div
                style={{
                  borderRadius: "40px",
                  padding: "8px",
                  width: "320px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  boxShadow:
                    "inset 0 0 0 6px rgba(255,255,255,0.02), 0 6px 30px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, #EEF2FF, #E6F1FB)",
                    border: "1.5px solid rgba(175,169,236,0.4)",
                    overflow: "hidden",
                    width: "300px",
                    height: "380px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/cherag.png"
                    alt="Cherag Saxena - Software Engineer"
                    fill
                    sizes="300px"
                    priority
                    referrerPolicy="no-referrer"
                    className="object-cover object-top"
                  />
                  {/* Name overlay at bottom */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(20,18,40,0.7))",
                      padding: "14px 18px",
                    }}
                  >
                    <p style={{ color: "#fff", fontWeight: 500, margin: 0 }}>
                      Cherag Saxena
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "12px",
                        margin: 0,
                      }}
                    >
                      Indore, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Available to hire badge */}
              <div
                className="absolute z-20 whitespace-nowrap rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 dark:bg-white/5 dark:border-white/10"
                style={{ top: 50, right: 5 }}
              >
                <div
                  className="h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-100/40 dark:ring-green-900/40"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Available to hire
                  </p>
                </div>
              </div>

              {/* Building badge */}
              <div
                className="absolute z-20 whitespace-nowrap rounded-2xl px-5 py-2 flex items-center gap-3 shadow-md bg-white/10 backdrop-blur-md border border-white/20 dark:bg-white/5 dark:border-white/10"
                style={{ top: 140, left: -64 }}
              >
                <Rocket className="h-4 w-4 text-accent" aria-hidden />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Currently building
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Code Mentor AI
                  </p>
                </div>
              </div>

              {/* AI and integration badge */}
              <div
                className="absolute z-20 whitespace-nowrap rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 dark:bg-white/5 dark:border-white/10"
                style={{ top: 200, right: -70 }}
              >
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Focus
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    ⚡ Wired for AI & Integration
                  </p>
                </div>
              </div>

              {/* MERN badge */}
              <div
                className="absolute z-20 whitespace-nowrap rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 dark:bg-white/5 dark:border-white/10"
                style={{
                  bottom: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Database className="h-4 w-4 text-violet-600" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    MERN Stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
