// Google Analytics 4 (GA4) Integration & Event Tracking Helper

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-7BG5C2FLSG"

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

// Log page views (URL change)
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Log generic custom event
export const trackEvent = ({
  action,
  category,
  label,
  value,
  params = {},
}: {
  action: string
  category?: string
  label?: string
  value?: number
  params?: Record<string, any>
}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...params,
    })
  }
}

// Specific event helpers
export const trackProjectClick = (projectTitle: string, slug: string) => {
  trackEvent({
    action: "view_project",
    category: "Portfolio",
    label: projectTitle,
    params: { project_slug: slug },
  })
}

export const trackResumeDownload = () => {
  trackEvent({
    action: "download_resume",
    category: "Engagement",
    label: "Cherag Saxena Resume PDF",
  })
}

export const trackContactFormSubmit = (method: string = "form") => {
  trackEvent({
    action: "submit_contact_form",
    category: "Leads",
    label: method,
  })
}

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent({
    action: "click_social_profile",
    category: "Outbound",
    label: platform,
    params: { destination_url: url },
  })
}
