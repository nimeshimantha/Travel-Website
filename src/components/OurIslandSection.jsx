const leftCategories = [
  { title: 'Popular Beaches', img: 'src/assets/ourland/beaches.jpg' },
  { title: 'Wildlife & Nature', img: 'src/assets/ourland/wildlife.jpg' },
  { title: 'Adventure', img: 'src/assets/ourland/adventuresl.jpg' },
]

const rightCategories = [
  { title: 'History & Culture', img: 'src/assets/ourland/history.jpg' },
  { title: 'Lesser Travelled', img: 'src/assets/ourland/sigirya.jpg' },
  { title: 'Gastronomy', img: 'src/assets/ourland/sl-food.webp' },
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

import mapImg from '../assets/large-detailed-tourist-map-of-sri-lanka.jpg'

export default function OurIslandSection() {
  return (
    <section className="container py-20">
      <p className="text-center text-sm text-pink-600">
        • Places, people, pleasures – all yours to discover.
      </p>
      <h2 className="mt-2 text-center text-4xl md:text-5xl font-serif font-semibold">Our Island</h2>
      <p className="text-center text-2xl font-serif">Sri Lanka</p>
      <p className="mt-4 text-center font-semibold text-olive-700">
        <a href="#" className="text-sky-700">View All Experiences ▸</a>
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
          <img src={mapImg} alt="Sri Lanka map detailed" className="max-w-md w-full rounded" />
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
