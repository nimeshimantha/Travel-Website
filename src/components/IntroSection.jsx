import { useRef } from 'react'

export default function IntroSection() {
  const scrollerRef = useRef(null)
  const scrollBy = (delta) => scrollerRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  const journeys = [
    { title: 'Join a', subtitle: 'Group', img: 'src/assets/Intro/Group.webp' },
    { title: 'Sri Lanka', subtitle: 'with Hotel', img: 'src/assets/Intro/Hotel.jpeg' },
    { title: 'Authentic', subtitle: 'Ceylon', img: 'src/assets/Intro/Authentic.png' },
    { title: 'Adventurous', subtitle: 'Spirit', img: 'src/assets/Intro/Adventure.jpg' },
    { title: 'Barefoot', subtitle: 'Luxury', img: 'src/assets/Intro/Luxery1.jpg' },
  ]
  return (
    <section className="container py-16">
      {/* Journeys header */}
      <p className="text-center text-sm text-pink-600">• The paths are many — you choose.</p>
      <h2 className="mt-2 text-center text-4xl md:text-5xl font-serif font-semibold">What’s your journey?</h2>
      <p className="text-center text-2xl font-serif">Your adventure. Your way.</p>

      {/* Horizontal circular cards with arrows */}
      <div className="relative mt-8">
        <button aria-label="scroll left" onClick={() => scrollBy(-350)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-12 w-12 place-items-center rounded-full border border-olive-300 bg-white/80 shadow hover:bg-white">
          ←
        </button>
        <div ref={scrollerRef} className="flex gap-12 overflow-x-auto px-12 md:px-20 scroll-smooth">
          {journeys.map((j, idx) => (
            <div key={idx} className="shrink-0 text-center">
              <div className="relative inline-grid place-items-center">
                <img src={j.img} alt="" className="h-40 w-40 rounded-full object-cover" />
                <span className={`absolute inset-0 rounded-full border-2 ${idx === 2 ? 'border-pink-400' : 'border-lime-700'} border-dashed`} />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full border-4 border-white bg-white/90 grid place-items-center">
                  <span className="h-6 w-6 rounded-full bg-slate-200" />
                </span>
              </div>
              <div className="mt-6">
                <div className="font-semibold">{j.title}</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">{j.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <button aria-label="scroll right" onClick={() => scrollBy(350)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-12 w-12 place-items-center rounded-full border border-olive-300 bg-white/80 shadow hover:bg-white">
          →
        </button>
      </div>

      {/* Content */}
      <div className="mt-10">
        <h2 className="section-title">Sri Lanka Travel and Tourism</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8">
          <a href="#" className="text-sky-700 font-semibold">Sri Lanka Travel and Tourism</a> offers diverse experiences,
          from exploring ancient ruins and lush tea plantations to enjoying pristine beaches and vibrant wildlife.
          Discover rich cultural heritage, scenic landscapes, and warm hospitality on your unforgettable journey.
        </p>

        <h3 className="mt-10 text-3xl font-bold">Best Sri Lanka Travel and Tourism Tour Operator</h3>
        <p className="mt-3 tracking-wide text-sm font-semibold">SRI LANKA LUXURY HOLIDAY TOURS & ITINERARY PACKAGES</p>

        <p className="mt-6 max-w-5xl text-lg leading-8">
          <strong>Sri Lanka Travel and Tourism</strong> is one of the leading romantic destinations in the whole world.
          The land of serendipity brings spiritual tranquility and a chance to rediscover oneself.
          The beauty of this tiny island is simply breath‑taking.
        </p>
      </div>

      {/* Callouts row with illustration and buttons */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <img src="src/assets/Travel Sketch Map.jpg" alt="Travel sketch" className="max-w-md w-full" />
        </div>
        <div>
          <p className="text-lg leading-8 max-w-2xl">
            Known for its enchanting ancient ruins, endless soft‑sanded beaches, imposing mountains, colourful
            festivals, tempting water sports, dense wildlife, diverse ethnic groups and warm hospitality from
            local residents, Sri Lanka is bound to make you come back again.
          </p>
          <p className="mt-6 text-lg leading-8 max-w-2xl">
            Sri Lanka Travel and Tourism brings all of this for you right under your fingertips so you can
            discover the serene island for yourself. — Best time to visit Sri Lanka 2025
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl">
            <a className="btn-blue" href="#">Find a Hotel</a>
            <a className="btn-amber" href="#">Tour Package</a>
            <a className="btn-red" href="#">Car & Driver</a>
            <a className="btn-blue" href="#">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
