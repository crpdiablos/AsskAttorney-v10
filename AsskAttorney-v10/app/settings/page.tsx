'use client'
import React, { useEffect, useState } from 'react'
export default function Settings(){
  const [contrast,setContrast]=useState(false); const [slow,setSlow]=useState(false); const [captions,setCaptions]=useState(true); const [voice,setVoice]=useState(false)
  const [cowboy,setCowboy]=useState(false); const [storage,setStorage]=useState('local')
  useEffect(()=>{ const s=JSON.parse(localStorage.getItem('aa_settings')||'{}'); setContrast(!!s.contrast); setSlow(!!s.slow); setCaptions(s.captions!==false); setVoice(!!s.voice); setCowboy(!!s.cowboy); setStorage(s.storage||'local') },[])
  useEffect(()=>{ localStorage.setItem('aa_settings', JSON.stringify({contrast:contrast, slow:slow, captions:captions, voice:voice, cowboy:cowboy, storage:storage})) },[contrast,slow,captions,voice,cowboy,storage])
  return (<div><h1>Settings</h1>
    <label><input type="checkbox" checked={contrast} onChange={e=>setContrast(e.target.checked)} /> High Contrast</label><br/>
    <label><input type="checkbox" checked={slow} onChange={e=>setSlow(e.target.checked)} /> Slow Mode (longer timers)</label><br/>
    <label><input type="checkbox" checked={captions} onChange={e=>setCaptions(e.target.checked)} /> Captions for Voice</label><br/>
    <label><input type="checkbox" checked={voice} onChange={e=>setVoice(e.target.checked)} /> Enable Voice I/O</label><br/>
    <hr/><h2>Fun Sprinkles</h2>
    <label><input type="checkbox" checked={cowboy} onChange={e=>setCowboy(e.target.checked)} /> Cowboy Judge Skin 🤠</label><br/>
    <label>Cloud Storage
      <select value={storage} onChange={e=>setStorage(e.target.value)}><option value="local">Local Only</option><option value="s3">S3 (stub)</option><option value="gdrive">Google Drive (stub)</option></select>
    </label>
  </div>)
}
