import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // Validate minimal shape
    if (typeof body !== 'object') throw new Error('Invalid JSON')
    return NextResponse.json({ ok: true, imported: Object.keys(body) })
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Invalid' }, { status: 400 })
  }
}
