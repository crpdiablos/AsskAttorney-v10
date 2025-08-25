'use client'
import React,{useEffect,useState} from 'react'
export default function Journal(){ const [entries,setEntries]=useState<any[]>([]); useEffect(()=>{ setEntries(JSON.parse(localStorage.getItem('aa_journal')||'[]')) },[])
  return(<div><h1>Case Journal & Replays</h1>{entries.length? <ul>{entries.map((e,i)=>(<li key={i}><strong>{e.title}</strong> — {e.date}<pre>{e.notes}</pre></li>))}</ul> : <p>No entries yet.</p>}</div>)}
