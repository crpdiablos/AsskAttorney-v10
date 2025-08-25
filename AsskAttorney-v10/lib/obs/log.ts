export function logEvent(event: string, data?: any) {
  if (process.env.NEXT_PUBLIC_LOGGING !== 'on') return
  // eslint-disable-next-line no-console
  console.log('[obs]', event, data || '')
}
