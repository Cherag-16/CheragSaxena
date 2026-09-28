# Portfolio Modernization - Quick Reference Guide

## 🎯 Quick Start

### Running the Project
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Color System

### CSS Variables (Use these in your components)
```css
/* Backgrounds */
--background: #0f172a        /* Main background */
--card: #1e293b              /* Card backgrounds */
--muted: #334155             /* Neutral/muted areas */

/* Text */
--foreground: #f1f5f9        /* Main text */
--muted-foreground: #cbd5e1  /* Secondary text */

/* Accent Colors */
--primary: #3b82f6           /* Electric Blue */
--accent: #10b981            /* Emerald Green */
--secondary: #10b981         /* Also Emerald */

/* Interactive */
--border: #334155            /* Border color */
--input: #1e293b             /* Input background */
--ring: #3b82f6              /* Focus ring */
```

### Using in Tailwind
```tsx
<div className="bg-background text-foreground border border-border">
  <button className="bg-primary text-primary-foreground hover:bg-primary/90">
    Primary Button
  </button>
  <button className="bg-accent text-accent-foreground hover:bg-accent/90">
    Accent Button
  </button>
</div>
```

---

## 🎬 Animation Quick Reference

### Basic Scroll Reveal
```tsx
import { ScrollReveal } from '@/components/scroll-reveal'

<ScrollReveal direction="up">
  <h2>This reveals on scroll</h2>
</ScrollReveal>
```

### Staggered Animations
```tsx
import { StaggerContainer, StaggerItem } from '@/components/scroll-reveal'

<StaggerContainer staggerDelay={0.15}>
  {items.map((item) => (
    <StaggerItem key={item.id} direction="up">
      {item.content}
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Framer Motion Basics
```tsx
import { motion } from 'framer-motion'

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>

// Appear animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Viewport animation
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Animates when in view
</motion.div>
```

---

## 💎 Glassmorphism Classes

### Available Classes
```tsx
// Glass effect (lighter blur)
<div className="glass">
  Frosted glass appearance
</div>

// Glass card (enhanced opacity)
<div className="glass-card">
  More opaque glass effect
</div>

// With borders
<div className="glass border border-border/30">
  With subtle border
</div>
```

### Manual Implementation
```tsx
<div className="
  bg-card/70 
  backdrop-filter 
  backdrop-blur-xl 
  border border-border/30
  hover:border-primary/50
  transition-all duration-300
">
  Custom glass effect
</div>
```

---

## 📱 Responsive Utilities

### Tailwind Breakpoints
```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (extra large)
```

### Common Patterns
```tsx
// Text size responsive
<h1 className="text-2xl sm:text-3xl lg:text-5xl">
  Responsive heading
</h1>

// Grid responsive
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* 1 col on mobile, 2 on tablet, 4 on desktop */}
</div>

// Hide/Show responsive
<div className="hidden md:block">
  Desktop only
</div>
<div className="md:hidden">
  Mobile only
</div>
```

---

## 🔍 SEO Best Practices

### Adding Page Metadata
```tsx
export const metadata: Metadata = {
  title: 'Page Title - Cherag Saxena',
  description: 'Page description under 160 characters',
  keywords: 'relevant, keywords, here',
  openGraph: {
    type: 'website',
    title: 'Open Graph Title',
    description: 'OG Description',
    images: [{ url: 'image-url', width: 1200, height: 630 }],
  },
}
```

### Schema Markup
```tsx
// In your page component
import { jsonLd } from '@/lib/schema'

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  )
}
```

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descriptive alt text for SEO"
  width={800}
  height={600}
  priority={true} // For above-fold images
/>
```

---

## 🛠️ Common Tasks

### Adding a New Animated Section
```tsx
'use client'

import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { motion } from 'framer-motion'

export function NewSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background animation (optional) */}
      <motion.div className="absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Section Title
          </h2>
        </ScrollReveal>

        {/* Content Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.id} direction="up">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-lg"
              >
                {/* Item content */}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
```

### Styling Patterns
```tsx
/* Cards with glass effect */
className="glass-card border border-border/30 hover:border-primary/50 
           transition-all duration-300 hover:shadow-xl"

/* Buttons */
className="bg-gradient-to-r from-primary to-accent hover:shadow-lg 
           hover:shadow-primary/40 text-primary-foreground 
           transition-all duration-300 animate-pulse-glow"

/* Text effects */
className="gradient-text"  // Gradient text from primary to accent
```

---

## 🚀 Performance Tips

### 1. Image Optimization
- Always use Next.js Image component
- Add `alt` text for SEO
- Use `priority` for above-fold images
- Set explicit width/height

### 2. Animation Performance
- Use `GPU-accelerated` properties (transform, opacity)
- Avoid animating layout properties
- Use `will-change` CSS for heavy animations
- Reduce animation count on mobile

### 3. Code Splitting
- Use `'use client'` at component level
- Lazy load heavy components
- Use dynamic imports for optional features

### 4. Bundle Size
- Tree-shake unused dependencies
- Check bundle with `next/bundle-analyzer`
- Remove unused CSS

---

## 🐛 Troubleshooting

### Issue: Animations not showing
**Solution**: Check if component is inside a motion div and viewport settings

### Issue: Glass effect looks wrong
**Solution**: Verify `backdrop-filter` is supported (add fallback background color)

### Issue: Mobile layout broken
**Solution**: Check responsive classes, test with `sm:` and `md:` breakpoints

### Issue: SEO not improving
**Solution**: Check robots.txt, sitemap.xml, and metadata in layout.tsx

---

## 📊 File Structure Overview

```
components/
├── navigation.tsx              # Main nav with glassmorphism
├── hero-section.tsx           # Animated hero
├── featured-projects.tsx      # Scroll-reveal projects
├── stats-section.tsx          # Animated stats
├── call-to-action.tsx         # CTA with animations
├── testimonials.tsx           # Scrolling testimonials
├── footer.tsx                 # Responsive footer with animations
└── scroll-reveal.tsx          # Animation components

app/
├── layout.tsx                 # Root layout with metadata
├── globals.css                # Global styles & animations
├── robots.ts                  # SEO robots configuration
└── sitemap.ts                 # Dynamic sitemap

lib/
├── schema.ts                  # Schema markup
└── utils.ts                   # Utility functions
```

---

## 🔗 Useful Commands

```bash
# Development with Turbopack
pnpm dev

# Build
pnpm build

# Type check
pnpm type-check

# Lint
pnpm lint

# Test
pnpm test

# Format (with Prettier)
pnpm format

# Clean cache
pnpm clean

# Install packages
pnpm add package-name
pnpm add -D dev-package-name
```

---

## 📖 Documentation Links

- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/
- **Next.js**: https://nextjs.org/docs
- **Web.dev**: https://web.dev/

---

## ✅ Pre-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Check lighthouse scores
- [ ] Verify meta tags in layout.tsx
- [ ] Check robots.txt and sitemap
- [ ] Test animations on low-end devices
- [ ] Verify all links work
- [ ] Check form submissions
- [ ] Test theme toggle
- [ ] Verify images load correctly
- [ ] Check social media links

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Status**: Production Ready ✅
