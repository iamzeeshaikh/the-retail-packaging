/**
 * Quote request endpoint (Vercel Node function).
 *
 * The site itself is fully static; this is the only server-side surface.
 * It validates every field, enforces upload limits, rate-limits by IP and
 * emails the request. No credential ever reaches the client bundle.
 */
import { Buffer } from 'node:buffer'
import crypto from 'node:crypto'
import nodemailer from 'nodemailer'
import Busboy from 'busboy'

export const config = { api: { bodyParser: false } }

const MAX_FILES = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024
const MAX_TOTAL_BYTES = 25 * 1024 * 1024
const MAX_FIELD_LEN = 4000

// Extension + magic-number pairs we accept. Anything executable is rejected.
const ALLOWED_EXT = new Set(['pdf', 'ai', 'eps', 'svg', 'png', 'jpg', 'jpeg', 'webp', 'zip'])
const MIME_BY_EXT = {
  pdf: 'application/pdf', ai: 'application/postscript', eps: 'application/postscript',
  svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
  webp: 'image/webp', zip: 'application/zip',
}

/* ---------------- rate limiting ---------------- */
// In-memory window. Serverless instances are short-lived, so this throttles
// bursts rather than acting as a durable quota — good enough to stop flooding.
const hits = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 6

function rateLimited(ip) {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  list.push(now)
  hits.set(ip, list)
  if (hits.size > 5000) hits.clear() // crude memory guard
  return list.length > MAX_PER_WINDOW
}

/* ---------------- helpers ---------------- */
const clean = (v, max = 300) =>
  String(v ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, max)

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  )

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)

function safeName(original) {
  const ext = (original.split('.').pop() || '').toLowerCase()
  const stem = original
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60) || 'artwork'
  return { stem, ext, name: `${stem}-${crypto.randomBytes(4).toString('hex')}.${ext}` }
}

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const fields = {}
    const files = []
    let total = 0
    let aborted = null

    const bb = Busboy({
      headers: req.headers,
      limits: { fileSize: MAX_FILE_BYTES, files: MAX_FILES, fields: 40, fieldSize: MAX_FIELD_LEN },
    })

    bb.on('field', (name, val) => {
      fields[name] = clean(val, MAX_FIELD_LEN)
    })

    bb.on('file', (_name, stream, info) => {
      const { ext, name } = safeName(info.filename || 'artwork')
      if (!ALLOWED_EXT.has(ext)) {
        stream.resume()
        return
      }
      const chunks = []
      let size = 0
      stream.on('data', (d) => {
        size += d.length
        total += d.length
        if (total <= MAX_TOTAL_BYTES) chunks.push(d)
      })
      stream.on('limit', () => {
        aborted = 'One of the files is larger than 10 MB.'
      })
      stream.on('end', () => {
        if (!aborted && size > 0 && total <= MAX_TOTAL_BYTES) {
          files.push({ filename: name, content: Buffer.concat(chunks), contentType: MIME_BY_EXT[ext] })
        }
      })
    })

    bb.on('error', reject)
    bb.on('close', () => (aborted ? reject(new Error(aborted)) : resolve({ fields, files })))
    req.pipe(bb)
  })
}

/* ---------------- handler ---------------- */
export default async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  // Same-origin check — a lightweight CSRF guard for a cookieless endpoint.
  const origin = req.headers.origin || ''
  const host = req.headers.host || ''
  if (origin && !origin.endsWith(host)) {
    return res.status(403).json({ ok: false, error: 'Request blocked.' })
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again shortly.' })
  }

  let fields = {}
  let files = []
  try {
    const parsed = await parseMultipart(req)
    fields = parsed.fields
    files = parsed.files
  } catch (err) {
    return res.status(400).json({ ok: false, error: err.message || 'We could not read that submission.' })
  }

  // Honeypot — silently accept so bots do not learn they were caught.
  if (fields.company_url) return res.status(200).json({ ok: true, ref: 'ok' })

  // Submitted impossibly fast? Almost certainly automated.
  const started = Number(fields.started_at || 0)
  if (started && Date.now() - started < 1500) {
    return res.status(200).json({ ok: true, ref: 'ok' })
  }

  const name = clean(fields.name, 120)
  const email = clean(fields.email, 180)
  const phone = clean(fields.phone, 40)
  const message = clean(fields.message, MAX_FIELD_LEN)

  const errors = []
  if (name.length < 2) errors.push('name')
  if (!isEmail(email)) errors.push('email')
  if (phone.replace(/\D/g, '').length < 7) errors.push('phone')
  if (message.length < 10) errors.push('message')
  if (errors.length) {
    return res.status(422).json({ ok: false, error: `Please check these fields: ${errors.join(', ')}.`, fields: errors })
  }

  const ref = `TRP-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`

  const optional = [
    ['Product', fields.product], ['Quantity', fields.quantity],
    ['Dimensions', fields.dimensions], ['Unit', fields.unit],
    ['Material', fields.material], ['Printing', fields.printing],
    ['Finish', fields.finish], ['Required date', fields.required_date],
    ['Configuration', fields.configuration],
    ['Source', fields.form_source], ['Page', fields.page_url],
  ].filter(([, v]) => v)

  const rows = optional
    .map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0;color:#55524b">${escapeHtml(k)}</th><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`)
    .join('')

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#14161a;line-height:1.6">
      <h2 style="font-size:18px;margin:0 0 4px">New quote request — ${escapeHtml(ref)}</h2>
      <p style="margin:0 0 16px;color:#55524b;font-size:14px">via theretailpackaging.com</p>
      <table style="font-size:14px;border-collapse:collapse">
        <tr><th align="left" style="padding:4px 12px 4px 0;color:#55524b">Name</th><td style="padding:4px 0">${escapeHtml(name)}</td></tr>
        <tr><th align="left" style="padding:4px 12px 4px 0;color:#55524b">Email</th><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><th align="left" style="padding:4px 12px 4px 0;color:#55524b">Phone</th><td style="padding:4px 0">${escapeHtml(phone)}</td></tr>
        ${rows}
      </table>
      <h3 style="font-size:15px;margin:20px 0 6px">Project details</h3>
      <p style="white-space:pre-wrap;font-size:14px;background:#faf8f4;border:1px solid #e8e4dc;border-radius:6px;padding:12px">${escapeHtml(message)}</p>
      <p style="font-size:13px;color:#7a7568">${files.length} file(s) attached.</p>
    </div>`

  const text =
    `New quote request ${ref}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n` +
    optional.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nDetails:\n${message}\n\nAttachments: ${files.length}`

  const {
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
    QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL, SMTP_SECURE,
  } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !QUOTE_TO_EMAIL) {
    // Fail loudly in logs, politely to the visitor.
    console.error('[quote] SMTP not configured — set SMTP_* and QUOTE_TO_EMAIL', { ref })
    return res.status(503).json({
      ok: false,
      error: 'Our quote inbox is not reachable right now. Please email quotes@theretailpackaging.com.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: String(SMTP_SECURE || 'false') === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"The Retail Packaging" <${QUOTE_FROM_EMAIL || SMTP_USER}>`,
      to: QUOTE_TO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `Quote request ${ref} — ${fields.product || 'custom packaging'}`,
      text,
      html,
      attachments: files,
    })

    return res.status(200).json({ ok: true, ref })
  } catch (err) {
    console.error('[quote] send failed', { ref, error: err.message })
    return res.status(502).json({
      ok: false,
      error: 'We could not send that just now. Please email quotes@theretailpackaging.com.',
    })
  }
}
