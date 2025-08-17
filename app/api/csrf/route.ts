import { NextResponse } from 'next/server'
import { makeToken } from '@/lib/security/csrf'

export async function GET() {
  const secret = process.env.CSRF_SECRET || 'dev-secret'
  const token = makeToken(secret)
  const res = NextResponse.json({ token })
  res.headers.set('Set-Cookie', `aa_csrf=${token}; Path=/; HttpOnly; SameSite=Lax`)
  return res
}
