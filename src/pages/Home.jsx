import Spline from '@splinetool/react-spline'
import Navbar from '../Navbar'
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative h-[90vh] pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-4">
              <Sparkles className="w-4 h-4" /> Fintech x Commerce
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              Shop the future with a touch of 3D
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Explore premium products with immersive visuals and a seamless checkout.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/categories" className="px-5 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Browse Categories <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#features" className="px-5 py-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section id="features" className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <Feature icon={ShieldCheck} title="Secure Payments" desc="Bank-grade encryption keeps your purchases safe." />
          <Feature icon={Truck} title="Fast Delivery" desc="Get your items delivered swiftly worldwide." />
          <Feature icon={Sparkles} title="Premium Quality" desc="Only top-rated products make the cut." />
        </div>
      </section>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <Icon className="w-6 h-6 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/70 text-sm mt-1">{desc}</p>
    </div>
  )
}
