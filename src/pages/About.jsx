import Navbar from '../Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-4">About us</h1>
        <p className="text-white/80 leading-relaxed">
          We are building the next generation commerce experience blending 3D visuals with a seamless checkout. Our mission is to make shopping delightful, immersive, and trustworthy.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Innovation', desc: 'We push boundaries with 3D and modern fintech.' },
            { title: 'Trust', desc: 'Security and privacy are at our core.' },
            { title: 'Speed', desc: 'Fast delivery and responsive support.' },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
