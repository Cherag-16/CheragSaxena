"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Linkedin, Twitter, Phone, Share2, Copy, Check, MessageSquare, Send } from "lucide-react"

interface ShareButtonsProps {
  title: string
  slug: string
  excerpt?: string
}

export function ShareButtons({ title, slug, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // Construct current page share URL
  const baseUrl = typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || "")
  const shareUrl = `${baseUrl}/blog/${slug}`
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* LinkedIn Dropdown with Post vs Chat choices */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-border hover:border-primary">
            <Linkedin className="h-3.5 w-3.5 text-primary" />
            <span>LinkedIn</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuItem asChild>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer text-xs"
            >
              <Send className="h-3.5 w-3.5 text-primary" />
              <span>Share in LinkedIn Post</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://www.linkedin.com/messaging/thread/new/?text=${encodeURIComponent(`Check out this engineering article: ${title} - ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer text-xs"
            >
              <MessageSquare className="h-3.5 w-3.5 text-accent" />
              <span>Send in LinkedIn Chat</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Twitter / X */}
      <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-border hover:border-primary" asChild>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-3.5 w-3.5 text-primary" />
          <span>X / Twitter</span>
        </a>
      </Button>

      {/* WhatsApp */}
      <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-border hover:border-primary" asChild>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title}: ${shareUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="h-3.5 w-3.5 text-primary" />
          <span>WhatsApp</span>
        </a>
      </Button>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="h-8 text-xs gap-1.5 border-border hover:border-primary"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary font-medium">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Copy Link</span>
          </>
        )}
      </Button>
    </div>
  )
}
