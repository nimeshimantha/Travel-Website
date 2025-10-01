const leftCategories = [
  { title: 'Popular Beaches', img: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?q=80&w=500&auto=format&fit=crop' },
  { title: 'Wildlife & Nature', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=500&auto=format&fit=crop' },
  { title: 'Adventure', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop' },
]

const rightCategories = [
  { title: 'History & Culture', img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=500&auto=format&fit=crop' },
  { title: 'Lesser Travelled', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=500&auto=format&fit=crop' },
  { title: 'Gastronomy', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=500&auto=format&fit=crop' },
]

function Chip({ img, title, align = 'left' }) {
  return (
    <a href="#" className={`group relative flex items-center gap-5 rounded-[2rem] bg-slate-100/80 p-5 backdrop-blur transition hover:bg-slate-200 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <span className="relative inline-grid place-items-center">
        <img src={img} alt="" className="h-28 w-28 rounded-full object-cover" />
        <span className="absolute inset-0 rounded-full border-2 border-pink-400 border-dashed" />
      </span>
      <span className="text-lg md:text-xl font-medium">{title}</span>
    </a>
  )
}

export default function OurIslandSection() {
  return (
    <section className="container py-20">
      <p className="text-center text-sm text-pink-600">
        • Places, people, pleasures – all yours to discover.
      </p>
      <h2 className="mt-2 text-center text-4xl md:text-5xl font-serif font-semibold">Our Island</h2>
      <p className="text-center text-2xl font-serif">Sri Lanka</p>
      <p className="mt-4 text-center font-semibold text-olive-700">
        <a href="#" className="text-emerald-700">View All Experiences ▸</a>
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:items-center">
        {/* Left column chips */}
        <div className="space-y-6">
          {leftCategories.map((c) => (
            <Chip key={c.title} img={c.img} title={c.title} />
          ))}
        </div>

        {/* Center map image */}
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800&auto=format&fit=crop" alt="Sri Lanka map stylized" className="max-w-md w-full" />
        </div>

        {/* Right column chips (mirrored) */}
        <div className="space-y-6">
          {rightCategories.map((c) => (
            <Chip key={c.title} img={c.img} title={c.title} align="right" />
          ))}
        </div>
      </div>
    </section>
  )
}
