import Navbar from '../Navbar'
import { useEffect, useState } from 'react'

export default function Admin() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products`)
      const data = await res.json()
      setProducts(Array.isArray(data) ? data : [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Admin dashboard</h1>
        {loading ? (
          <p className="text-white/70">Loading...</p>
        ) : (
          <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="text-left text-white/70">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">In stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-4 py-3">{p.title}</td>
                    <td className="px-4 py-3">{p.category}</td>
                    <td className="px-4 py-3">${p.price}</td>
                    <td className="px-4 py-3">{p.in_stock ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-4 py-6 text-white/70">No products yet. Add documents in the database.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
