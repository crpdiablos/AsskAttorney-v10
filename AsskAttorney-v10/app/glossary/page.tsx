'use client'
import React,{useState} from 'react'
const TERMS=[{term:'Objection',def:'Formal protest to testimony or evidence.'},{term:'Hearsay',def:'Out-of-court statement offered for the truth.'},{term:'Foundation',def:'Basis to show evidence is what it claims.'},{term:'Relief',def:'Order you want the court to make.'}]
export default function Glossary(){ const [q,setQ]=useState(''); const list=TERMS.filter(t=>t.term.toLowerCase().includes(q.toLowerCase()))
  return(<div><h1>Glossary & Study</h1><input placeholder="Search…" value={q} onChange={e=>setQ(e.target.value)}/><ul>{list.map((t,i)=>(<li key={i}><strong>{t.term}:</strong> {t.def}</li>))}</ul><p style={{opacity:.7}}>Educational only.</p></div>)}
