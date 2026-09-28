"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error("Copy failed", e)
    }
  }

  return (
    <Button size="sm" variant="ghost" onClick={handleCopy} className="flex items-center gap-2">
      <Copy className="h-4 w-4" />
      {copied ? "Copied" : "Copy"}
    </Button>
  )
}
