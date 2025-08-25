'use client'
import React,{useState} from 'react'
export default function Simulate(){ const [text,setText]=useState('Your Honor, I request a continuance due to late disclosure…'); const [log,setLog]=useState<string[]>([]); const [prob,setProb]=useState(50)
  async function randomize(){ const r=await fetch('/api/arena/random'); const d=await r.json(); setText(d.seed) }
  async function send(){ const res=await fetch('/api/arena/turn',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text})}); const data=await res.json(); setLog(l=>[...l,'YOU: '+text,'OPP: '+data.opp,'JUDGE: '+data.judge,'WITNESS: '+data.witness,'COACH: '+(data.coach||'')]); setProb(Math.max(0,Math.min(100,prob+(data.delta||0)))); setText('') }
  return(<div><h1>Simulation Arena</h1><div>Win Meter: {prob}%</div><button onClick={randomize}>🎲 Random Scenario</button><br/><textarea value={text} onChange={e=>setText(e.target.value)} rows={4} style={{width:'100%'}}/><br/><button onClick={send}>Send Turn</button><div style={{marginTop:'12px'}}>{log.map((r,i)=>(<div key={i} style={{padding:'6px',borderBottom:'1px solid #eee'}}>{r}</div>))}</div></div>)}
