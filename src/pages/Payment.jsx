import Navbar from '../Navbar'
import { useState } from 'react'

export default function Payment() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(49.99)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePay = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ title: 'Sample', quantity: 1, price: amount }], total: amount, currency: 'USD', customer_email: email })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Payment failed')
      setStatus('Payment successful!')
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 max-w-md mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Payment</h1>
        <form onSubmit={handlePay} className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full bg-black/40 border border-white/10 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Amount</label>
            <input value={amount} onChange={(e)=>setAmount(parseFloat(e.target.value)||0)} type="number" step="0.01" min="0" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2" />
          </div>
          <button disabled={loading} className="w-full py-2 rounded bg-white text-black font-medium hover:bg-gray-100 disabled:opacity-50">
            {loading ? 'Processing...' : 'Pay now'}
          </button>
          {status && <p className="text-sm text-center text-white/80">{status}</p>}
        </form>
      </div>
    </div>
  )
}
