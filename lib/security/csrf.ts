import crypto from 'crypto'

export function makeToken(secret: string, ts?: number) {
  const t = ts || Math.floor(Date.now() / 1000)
  const payload = `${t}.${crypto.randomBytes(8).toString('hex')}`
  const h = crypto.createHmac('sha256', secret).update(payload).digest('hex')
  return `${payload}.${h}`
}

export function verifyToken(token: string, secret: string, maxAgeSec = 3600) {
  try {
    const [tsHex, rand, sig] = token.split('.')
    const payload = `${tsHex}.${rand}`
    const check = crypto.createHmac('sha256', secret).update(payload).digest('hex')
    if (check !== sig) return false
    const ts = parseInt(tsHex, 10)
    const now = Math.floor(Date.now()/1000)
    return now - ts <= maxAgeSec
  } catch { return false }
}
