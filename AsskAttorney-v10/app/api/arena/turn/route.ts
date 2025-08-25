import { NextRequest, NextResponse } from 'next/server'
function cowboy(){ return 'Yeehaw—cite your rule and ride on.' }
function heuristicOpponent(user: string, bias: string) {
  const base = ['Objection: relevance.', 'Lacks foundation.', 'Speculation.', 'Hearsay.']
  const pick = base[Math.floor(Math.random()*base.length)]
  const jab = bias==='strict' ? 'Procedural defect—missing notice.' : 'Equity disfavors delay.'
  return `${pick} ${jab}`
}
function heuristicJudge(user: string, bias: string) {
  if (bias==='strict') return 'Counsel, narrow your request. What rule supports this?'
  if (bias==='lenient') return 'I understand the concern. Address opposing counsel briefly.'
  return (Math.random()<0.2 ? cowboy() : 'Please proceed. Keep it concise.')
}
function heuristicWitness(user: string) {
  const lines = ['I don’t recall.', 'Yes, on that date I signed.', 'No, I did not see that.']
  return lines[Math.floor(Math.random()*lines.length)]
}
function coach(user: string) { return 'State relief + cite one rule. Not legal advice.' }
export async function POST(req: NextRequest) {
  // Optional CSRF check (can be enforced in prod)
  try {
    const hdr = req.headers.get('x-csrf') || ''
    const cookie = req.headers.get('cookie') || ''
    const match = /aa_csrf=([^;]+)/.exec(cookie)
    if (match && hdr && match[1] !== hdr) {
      return NextResponse.json({ error: 'CSRF mismatch' }, { status: 403 })
    }
  } catch {}

  const { text } = await req.json()
  const bias = Math.random() < 0.33 ? 'strict' : (Math.random()<0.5 ? 'lenient' : 'neutral')
  const oppTeam = Math.random() < 0.25
  const opponent = heuristicOpponent(text, bias) + (oppTeam ? ' | Co-counsel: Additionally, asked and answered.' : '')
  const judge = heuristicJudge(text, bias)
  const witness = heuristicWitness(text)
  const delta = (bias==='lenient' ? +5 : bias==='strict' ? -5 : 0) + (String(text).toLowerCase().includes('rule')? +7 : -2)
  return NextResponse.json({ opp: opponent, judge, witness, coach: coach(text), delta })
}
