import Navbar from '../Navbar'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Message sent!')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Contact us</h1>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-xl">
          <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Name" className="bg-black/40 border border-white/10 rounded px-3 py-2" />
          <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="bg-black/40 border border-white/10 rounded px-3 py-2" />
          <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="md:col-span-2 bg-black/40 border border-white/10 rounded px-3 py-2" />
          <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Message" rows="5" className="md:col-span-2 bg-black/40 border border-white/10 rounded px-3 py-2" />
          <button className="md:col-span-2 py-2 rounded bg-white text-black font-medium hover:bg-gray-100">Send</button>
          {status && <p className="md:col-span-2 text-white/80">{status}</p>}
        </form>
      </div>
    </div>
  )
}
