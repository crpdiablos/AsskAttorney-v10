'use client'
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <html><body>
      <div style={{maxWidth:720,margin:'48px auto',padding:'16px',border:'1px solid #eee',borderRadius:12}}>
        <h1>Something tripped on a gavel</h1>
        <p>We hit an error. Try again or go back to the Arena.</p>
        <pre style={{whiteSpace:'pre-wrap',opacity:.7}}>{error?.message}</pre>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </body></html>
  )
}
