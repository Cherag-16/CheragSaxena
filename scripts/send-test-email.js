/*
 Simple SMTP test script using nodemailer.
 Run with: node scripts/send-test-email.js
 It will read SMTP configuration from process.env (load your .env.local first or set env vars manually).
*/

const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

async function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8')
    content.split(/\r?\n/).forEach(line => {
      const m = line.match(/^\s*([A-Z0-9_]+)=(.*)$/)
      if (m) {
        process.env[m[1]] = m[2]
      }
    })
  }
}

async function main() {
  await loadEnv()

  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '0')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.EMAIL_TO || 'cheragsaxena16@gmail.com'
  const from = process.env.EMAIL_FROM || user || `no-reply@localhost`

  if (!host || !port || !user || !pass) {
    console.error('SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in .env.local')
    process.exit(1)
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject: 'Test Email from cherag-portfolio (SMTP test)',
      text: `This is a test email sent at ${new Date().toISOString()}`,
    })

    console.log('Test email sent:', info.response || info)
  } catch (err) {
    console.error('Failed to send test email:', err)
    process.exit(2)
  }
}

main()
