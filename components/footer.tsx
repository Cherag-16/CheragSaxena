"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -bottom-64 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          {/* Brand */}
          <StaggerItem direction="up">
            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/"
                  className="flex items-center space-x-2 font-serif font-bold text-base sm:text-lg text-primary hover:text-accent transition-colors w-fit"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    CS
                  </div>
                  <span>Cherag Saxena</span>
                </Link>
              </motion.div>
              <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                Full Stack Developer passionate about creating innovative web
                solutions and building the future through code.
              </p>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem direction="up">
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-foreground text-sm">
                Quick Links
              </h3>
              <div className="space-y-1.5">
                {["About", "Skills", "Portfolio", "Experience"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block text-xs text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>{" "}
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Services */}
          <StaggerItem direction="up">
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-foreground text-sm">
                Services
              </h3>
              <div className="space-y-1.5">
                {[
                  "Web Development",
                  "Full Stack Solutions",
                  "AI & SaaS Development",
                  "Backend Development",
                ].map((service) => (
                  <motion.div
                    key={service}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem direction="up">
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-foreground text-sm">
                Get In Touch
              </h3>
              <div className="space-y-1.5">
                <motion.a
                  href="mailto:cheragsaxena16@gmail.com"
                  className="flex items-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="h-3 w-3 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="truncate">cheragsaxena16@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+918871582449"
                  className="flex items-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="h-3 w-3 flex-shrink-0 group-hover:animate-pulse" />
                  <span>+91-8871582449</span>
                </motion.a>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span>Indore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-1 pt-1">
                {[
                  { href: "https://github.com/cherag-16", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/cherag-saxena-36415a2b8/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:cheragsaxena16@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="w-7 h-7 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        <Icon className="h-3.5 w-3.5" />
                        <span className="sr-only">{label}</span>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-border/30 mt-4 sm:mt-6 pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} Cherag Saxena. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors rounded-full" />
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary absolute inset-0 m-auto group-hover:animate-bounce" />
              <span className="sr-only">Back to top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}