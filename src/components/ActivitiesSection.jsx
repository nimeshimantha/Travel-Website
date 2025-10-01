const activities = [
  {
    title: 'Bird Watching Sri Lanka',
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Kandy to Ella Train',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Kite Surfing Sri Lanka',
    img: 'https://images.unsplash.com/photo-1468418143726-4fe77a14d53e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Madu River Boat Safari',
    img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Scuba Diving Sri Lanka',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Sri Lanka Hiking',
    img: 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Sri Lanka Hot Air Balloon',
    img: 'https://images.unsplash.com/photo-1508264165352-258a6c62e2d0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Sri Lanka Safari',
    img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ActivitiesSection() {
  return (
    <section className="container py-16">
      <h2 className="section-title">Best Activities to do in Sri Lanka</h2>
      <p className="mt-4 max-w-4xl text-lg leading-8">
        Discover the best activities in Sri Lanka, including exploring ancient temples, climb
        <a className="text-emerald-700 font-semibold"> Sigiriya Lions Rock</a>, enjoying wildlife safaris in Yala, Udawalawa and
        <a className="text-emerald-700 font-semibold"> Minneriya national park</a>, surfing in Arugam Bay, hiking in the Central Highlands,
        and relaxing on pristine beaches like Unawatuna and Mirissa.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {activities.map((a) => (
          <article key={a.title} className="">
            <div className="aspect-[4/3] overflow-hidden rounded shadow-sm">
              <img src={a.img} alt={a.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="mt-3 text-center text-sky-600 font-semibold">{a.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
