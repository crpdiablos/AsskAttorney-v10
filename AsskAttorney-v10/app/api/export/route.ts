import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const bytes = Buffer.from(JSON.stringify(body, null, 2))
  return new Response(bytes, { headers: { 'Content-Type':'application/json', 'Content-Disposition':'attachment; filename="asskattorney-export.json"' } })
}
