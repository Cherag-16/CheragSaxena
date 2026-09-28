"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HireMeModal } from "@/components/hire-me-modal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Skills", href: "/skills" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        scrolled ? "glass shadow-lg bg-background/80" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 font-serif font-bold text-xl text-primary hover:text-accent transition-colors duration-300 group"
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold group-hover:shadow-lg group-hover:shadow-primary/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                CS
              </motion.div>
              <span className="hidden sm:inline">Cherag Saxena</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ scaleX: pathname === item.href ? 1 : 0 }}
                    animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-primary/20 hover:text-primary transition-all duration-300 relative group"
              >
                <Sun className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute group-hover:rotate-0 group-hover:scale-100" />
                <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Button 
  variant="outline" 
  size="sm" 
  asChild
  className="transition-all duration-300 glass border-primary/30 text-primary hover:!bg-primary/10 hover:!border-primary hover:!text-primary group"
>
  <a href="/Cherag_Saxena_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center group-hover:!text-primary">
    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce group-hover:!text-primary" />
    Resume
  </a>
</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsHireModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 text-primary-foreground transition-all duration-300 animate-pulse-glow cursor-pointer"
                >
                  Hire Me
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/20"
            >
              <Sun className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Moon className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
            {mounted && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] glass"
                >
                  <motion.div
                    className="flex flex-col space-y-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, staggerChildren: 0.05 }}
                  >
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg block",
                            pathname === item.href
                              ? "text-primary bg-primary/10 glass-card"
                              : "text-muted-foreground hover:text-primary hover:bg-muted/50",
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      className="border-t border-border/40 pt-4 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Button 
  variant="outline" 
  asChild 
  className="group w-full justify-start glass border-primary/30 text-primary hover:!border-primary hover:!bg-primary/10 hover:!text-primary"
>
  <a href="/Cherag_Saxena_Resume.pdf" download className="flex items-center w-full group-hover:!text-primary">
    <Download className="h-4 w-4 mr-2 group-hover:!text-primary" />
    Download Resume
  </a>
</Button>
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          setIsHireModalOpen(true);
                        }}
                        className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                      >
                        Hire Me
                      </Button>
                    </motion.div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            )}
            {!mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </nav>
      <HireMeModal isOpen={isHireModalOpen} onOpenChange={setIsHireModalOpen} />
    </header>
  );
}
