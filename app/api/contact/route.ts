import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { promises as fs } from "fs"
import path from "path"

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const EMAIL_TO = process.env.EMAIL_TO || "cheragsaxena16@gmail.com"
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER || `no-reply@localhost`

async function sendMail({ from, subject, html, text, replyTo }: { from: string; subject: string; html: string; text: string; replyTo?: string }) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration is not set in environment variables")
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
  
  const info = await transporter.sendMail({
    from,
    to: EMAIL_TO,
    subject,
    text,
    html,
    replyTo,
  })

  return info
}

async function sendWithSendGrid({ fromEmail, fromName, subject, html, text, replyToEmail, replyToName }: { fromEmail: string; fromName?: string; subject: string; html: string; text: string; replyToEmail?: string; replyToName?: string }) {
  if (!SENDGRID_API_KEY) throw new Error("SENDGRID_API_KEY not configured")

  const personalizations: any = [{ to: [{ email: EMAIL_TO }], subject }]

  const body: any = {
    personalizations,
    from: { email: fromEmail, name: fromName || "Website" },
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html },
    ],
  }

  if (replyToEmail) {
    body.reply_to = { email: replyToEmail, name: replyToName || undefined }
  }

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`SendGrid error: ${res.status} ${errText}`)
  }

  return { status: "queued" }
}

export async function POST(request: NextRequest) {
  try {
    let raw = ""
    try {
      raw = await request.text()
      console.log("Received raw body:", raw);
    } catch (t) {
      raw = ""
    }

    if (!raw || raw.trim().length === 0) {
      console.warn("Empty body received at /api/contact")
      return NextResponse.json({ error: "Empty request body" }, { status: 400 })
    }

    let body: any = undefined
    try {
      body = JSON.parse(raw)
    } catch (jsonErr) {
      try {
        const params = new URLSearchParams(raw)
        body = Object.fromEntries(params.entries())
      } catch (urlErr) {
        console.warn("Failed to parse request body at /api/contact. raw:", raw)
        return NextResponse.json({ error: "Invalid request body format" }, { status: 400 })
      }
    }

    const { name, email, subject, message } = body || {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const html = `
      <p>You have a new contact form submission on your website:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
      <p>Received at: ${new Date().toISOString()}</p>
    `

    const text = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}\n\nReceived at: ${new Date().toISOString()}`
    try {
      const storePath = path.join(process.cwd(), "data", "contacts.json")
      let existing: any[] = []
      try {
        const raw = await fs.readFile(storePath, "utf-8")
        existing = JSON.parse(raw)
      } catch (e) {
        existing = []
      }

      const entry = { name, email, subject, message, receivedAt: new Date().toISOString() }
      existing.unshift(entry)
      await fs.writeFile(storePath, JSON.stringify(existing, null, 2), "utf-8")
    } catch (fsErr) {
      console.error("Failed to persist contact message (audit):", fsErr)
    }

    try {
      const emailSubject = `[Website] ${name} — ${subject}`
      if (SENDGRID_API_KEY) {
        await sendWithSendGrid({ fromEmail: EMAIL_FROM, fromName: 'Website', replyToEmail: email, replyToName: name, subject: emailSubject, html, text })
      } else {
        await sendMail({ from: EMAIL_FROM, subject: emailSubject, html, text, replyTo: `${name} <${email}>` })
      }

      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
    } catch (sendErr) {
      console.error("Email send failed:", sendErr)
      try {
        const storePath = path.join(process.cwd(), "data", "contacts.json")
        let existing: any[] = []
        try {
          const raw = await fs.readFile(storePath, "utf-8")
          existing = JSON.parse(raw)
        } catch (e) {
          existing = []
        }
        const entry = { name, email, subject, message, receivedAt: new Date().toISOString(), error: String(sendErr) }
        existing.unshift(entry)
        await fs.writeFile(storePath, JSON.stringify(existing, null, 2), "utf-8")
      } catch (fsErr) {
        console.error("Failed to persist after send error:", fsErr)
      }

      return NextResponse.json({ success: false, error: "Failed to send email, saved locally" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}

export async function GET() {
  const storePath = path.join(process.cwd(), "data", "contacts.json")

  try {
    const raw = await fs.readFile(storePath, "utf-8")
    const entries = JSON.parse(raw)
    return NextResponse.json({ stored: entries }, { status: 200 })
  } catch (e) {
    const info = {
      message: "This endpoint accepts POST requests with JSON payload: { name, email, subject, message }.",
      test: "Use POST to submit the contact form. Provide a JSON body with name, email, subject and message fields.",
    }
    return NextResponse.json(info, { status: 200 })
  }
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, OPTIONS",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
