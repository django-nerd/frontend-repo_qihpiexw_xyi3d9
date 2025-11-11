import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, Home, Layers, CreditCard, Info, Phone, LayoutDashboard } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/categories', label: 'Categories', icon: Layers },
  { to: '/payment', label: 'Payment', icon: CreditCard },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Phone },
  { to: '/admin', label: 'Admin', icon: LayoutDashboard },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <ShoppingCart className="w-5 h-5" />
          <span>E-Comm 3D</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
              }
              onClick={() => setOpen(false)}
            >
              <Icon className="w-4 h-4" /> {label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block text-sm font-medium ${isActive ? 'text-black' : 'text-gray-700'}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
