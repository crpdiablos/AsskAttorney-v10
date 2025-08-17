import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory IP rate limiter (dev/demo only)
const buckets = new Map<string, { ts: number, count: number }>()

function rateLimit(ip: string, limit = 60, windowMs = 60000) {
  const now = Date.now()
  const b = buckets.get(ip) || { ts: now, count: 0 }
  if (now - b.ts > windowMs) { b.ts = now; b.count = 0 }
  b.count++
  buckets.set(ip, b)
  return b.count <= limit
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Basic rate limit
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'anon'
  if (!rateLimit(String(ip))) {
    return new NextResponse('Rate limit exceeded', { status: 429 })
  }

  // Security headers
  res.headers.set('Referrer-Policy', 'no-referrer')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-XSS-Protection', '0')
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  res.headers.set('Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self' data:; media-src 'self'; frame-ancestors 'none';"
  )

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
