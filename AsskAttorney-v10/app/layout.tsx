import ErrorBoundary from './ErrorBoundary'
export const metadata = { title: 'AsskAttorney v10', description: 'Courtroom Infinity Simulator (educational only)' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
        <ErrorBoundary>
    <header style={{display:'flex',justifyContent:'space-between',padding:'12px',borderBottom:'1px solid #ccc'}}>
      <a href="/">⚖️ Infinity Simulator</a>
      <nav style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
        <a href="/simulate">Arena</a><a href="/trainer">Trainer</a><a href="/glossary">Glossary</a>
        <a href="/journal">Journal</a><a href="/campaign">Campaign</a><a href="/settings">Settings</a><a href="/faq">FAQ</a>
      </nav>
    </header>
    <main style={{maxWidth:'920px',margin:'24px auto',padding:'0 12px'}}>{children}</main>
    <footer style={{textAlign:'center',fontSize:'12px',opacity:0.7,margin:'36px 0'}}>Educational simulation. Not legal advice.</footer>
        </ErrorBoundary>
  </body></html>)
}
