export default function IntroSection() {
  const images = [
    'https://images.unsplash.com/photo-1591549761827-8ea7f6f389e7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529356466277-5a9a8fcf1fda?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section className="container py-16">
      {/* Image strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Sri Lanka" className="h-44 w-full object-cover rounded" />
        ))}
      </div>

      {/* Content */}
      <div className="mt-10">
        <h2 className="section-title">Sri Lanka Travel and Tourism</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8">
          <a href="#" className="text-emerald-700 font-semibold">Sri Lanka Travel and Tourism</a> offers diverse experiences,
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
          <img src="/travel-sketch.svg" alt="Travel sketch" className="max-w-md w-full" />
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
            <a className="btn-green" href="#">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
