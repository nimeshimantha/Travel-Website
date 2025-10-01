const packages = [
  {
    title: 'Sri Lanka 14 Days Wellness and Ayurveda Tour Itinerary',
    img: 'https://images.unsplash.com/photo-1533035350251-aa8b8e208d0a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '14 Days Sri Lanka Adventure and Nature Tour',
    img: 'https://images.unsplash.com/photo-1526779248011-028b3a8aa6a2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '14 Days Sri Lanka Beach Explorer',
    img: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '14 Days Sri Lanka Cultural Tour',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function TourPackagesSection() {
  return (
    <section className="container py-16">
      <h2 className="section-title">Best Tour Packages in Sri Lanka</h2>
      <p className="mt-4 max-w-4xl text-lg leading-8">
        The best tour packages in Sri Lanka include cultural heritage tours, wildlife safaris, beach holidays,
        and scenic train journeys. Explore ancient cities, national parks, coastal resorts, and tea plantations
        for a diverse and memorable travel experience.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p) => (
          <article key={p.title} className="">
            <div className="aspect-[4/3] overflow-hidden rounded shadow-sm">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="mt-3 text-center text-sky-600 font-semibold">{p.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
