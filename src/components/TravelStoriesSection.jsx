const stories = [
  {
    title: 'Beach Holidays',
    kicker: 'Discover Sri Lanka’s Golden Coast',
    desc:
      'Go beyond sun, sand and surf! Dive, snorkel, paddle and explore the golden beaches and enticing waters around the island...',
    img: 'src/assets/travelstories/BeachStory.avif',
    featured: true,
  },
  {
    title: 'Back Packing',
    kicker: 'Rough it out in Ceylon',
    img: 'src/assets/travelstories/Backpackstory.jpg',
  },
  {
    title: 'History and Culture',
    kicker: 'Rich History and Richer Culture',
    img: 'src/assets/travelstories/historyStory.jpg',
  },
  {
    title: 'Misty Mountains',
    kicker: 'Rolling hills of tea and jungle',
    img: 'src/assets/travelstories/mountainstory.jpg',
  },
  {
    title: 'Safaris',
    kicker: 'The wild side of Sri Lanka',
    img: 'src/assets/travelstories/safaristory.jpg',
  },
]

function ArrowLink() {
  return (
    <a href="#" className="inline-flex items-center gap-2 font-semibold">
      <span>Find out more</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
      </svg>
    </a>
  )
}

function Card({ item, compact }) {
  return (
    <article className="flex h-full flex-col rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,.06)]">
      <div className={`overflow-hidden rounded-2xl w-full ${compact ? 'h-44 md:h-48 lg:h-52' : 'h-64 md:h-96 lg:h-[480px]'}`}> 
        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-extrabold tracking-wide ${compact ? 'text-xl line-clamp-1' : 'text-2xl'}`}>{item.title}</h3>
        {item.kicker && (
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.kicker}</p>
        )}
        {!compact && item.desc && (
          <p className="mt-4 text-slate-700 leading-7">{item.desc}</p>
        )}
        <div className="mt-4 pt-2 mt-auto">
          <ArrowLink />
        </div>
      </div>
    </article>
  )
}

export default function TravelStoriesSection() {
  const [feature, ...rest] = stories
  return (
    <section className="container py-16">
      <h2 className="section-title">Travel Stories</h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-4 items-stretch">
        {/* Featured large card on left spanning two rows */}
        <div className="lg:col-span-2">
          <Card item={feature} compact={false} />
        </div>

        {/* Right column grid of 4 compact cards in two columns */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
          {rest.slice(0, 4).map((item) => (
            <Card key={item.title} item={item} compact={true} />
          ))}
        </div>
      </div>
    </section>
  )
}
