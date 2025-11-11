import Navbar from '../Navbar'
import { useEffect, useState } from 'react'

export default function Categories() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/categories`)
        if (!res.ok) throw new Error('Failed to load categories')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Categories</h1>
        {loading && <p className="text-white/70">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.slug} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="text-white/70 text-sm mt-1">{c.description}</p>
            </div>
          ))}
          {!loading && items.length === 0 && (
            <div className="text-white/70">No categories yet. Add some in the database.</div>
          )}
        </div>
      </div>
    </div>
  )
}
