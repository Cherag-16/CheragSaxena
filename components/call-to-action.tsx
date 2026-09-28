"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download, Zap, Rocket, Shield } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="pt-4 pb-12 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 -left-96 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-96 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal
          direction="up"
          className="max-w-4xl mx-auto text-center space-y-8 mb-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking internship and freelancing opportunities.
              Let's collaborate and create innovative solutions that make a
              difference in the digital world.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 text-primary-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow transition-all duration-300"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group w-full sm:w-auto px-8 py-6 text-lg font-semibold border-primary/50 text-primary hover:!border-primary hover:!bg-primary/10 hover:!text-primary glass transition-all duration-300"
              >
                <a
                  href="/Cherag_Saxena_Resume.pdf"
                  download
                  className="flex items-center justify-center group-hover:!text-primary"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:!text-primary" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto"
        >
          <StaggerItem direction="up">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center space-y-3 p-6 rounded-lg glass-card border border-border/20 group hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all mx-auto"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Zap className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="text-xl sm:text-2xl font-serif font-bold gradient-text">
                Fast Response
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                I typically respond within 24 hours
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center space-y-3 p-6 rounded-lg glass-card border border-border/20 group hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all mx-auto"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Rocket className="h-6 w-6 text-accent" />
              </motion.div>
              <div className="text-xl sm:text-2xl font-serif font-bold gradient-text">
                Quality Work
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Committed to delivering excellence
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center space-y-3 p-6 rounded-lg glass-card border border-border/20 group hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all mx-auto"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Shield className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="text-xl sm:text-2xl font-serif font-bold gradient-text">
                Full Support
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Ongoing support and maintenance
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
