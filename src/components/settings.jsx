import React, { useEffect, useState } from 'react';

export default function Settings({ settings, setSettings }) {
  const [providers, setProviders] = useState([]);
  useEffect(()=>{ fetch('/api/providers').then(r=>r.json()).then(d=>setProviders(d.providers||[])); },[]);

  return (
    <div className="panel">
      <div className="row">
        <label>Provider</label>
        <select value={settings.provider} onChange={e=>setSettings(p=>({...p, provider:e.target.value}))}>
          {providers.map(p=> <option key={p.id} value={p.id}>{p.label}</option>)}
        </select>
      </div>
      <div className="row">
        <label>Model</label>
        <input value={settings.model} onChange={e=>setSettings(p=>({...p, model:e.target.value}))} placeholder="Kosongkan untuk default" />
      </div>
      <div className="row">
        <label>Temperature</label>
        <input type="range" min="0" max="1" step="0.1" value={settings.temperature} onChange={e=>setSettings(p=>({...p, temperature:+e.target.value}))} />
        <span>{settings.temperature.toFixed(1)}</span>
      </div>
      <div className="row">
        <label>System Prompt</label>
        <textarea rows={5} value={settings.systemPrompt} onChange={e=>setSettings(p=>({...p, systemPrompt:e.target.value}))} />
      </div>
      <div className="row">
        <label><input type="checkbox" checked={settings.useRag} onChange={e=>setSettings(p=>({...p, useRag:e.target.checked}))} /> Gunakan RAG (dokumen unggahan)</label>
      </div>
    </div>
  );
}