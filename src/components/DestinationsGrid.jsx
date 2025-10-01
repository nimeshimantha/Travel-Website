const items = [
  {
    title: 'Anuradhapura',
    img: 'https://images.unsplash.com/photo-1580130663888-82d356f4f39b?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura...',
  },
  {
    title: 'Arugam Bay',
    img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ad2?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      "Unspoilt beaches and magnificent waves: it's the ultimate ‘hangout’ for surfers and...",
  },
  {
    title: 'Bentota',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'With a mix of beautiful beaches, watersports and buzzing streets that attract...',
  },
  {
    title: 'Colombo',
    img: 'https://images.unsplash.com/photo-1593085512475-1b4a5bc9c1c6?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'A hotspot full of diverse attractions from upscale shopping malls to busy...',
  },
  {
    title: 'Dambulla',
    img: 'https://images.unsplash.com/photo-1604908554001-4e38cf143e90?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'One of the main tourist attractions in Dambulla is the sacred cave...',
  },
  {
    title: 'Ella',
    img: 'https://images.unsplash.com/photo-1584984734618-040a6f2b575a?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'Majestic waterfalls, hidden caves, breathtaking vistas across the mountains: Ella is a...',
  },
  {
    title: 'Galle',
    img: 'https://images.unsplash.com/photo-1597848212624-9410f5e5c0af?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'In this Southern capital natural and cultural diversity thrives, and history lives...',
  },
  {
    title: 'Habarana',
    img: 'https://images.unsplash.com/photo-1603791452906-b15e9f3f9b59?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'Strategically placed on the primary route to the North and East of...',
  },
  {
    title: 'Hatton',
    img: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1600&auto=format&fit=crop',
    excerpt:
      'The legacy of colonial plantations, traditions and lifestyles live on here, in...',
  },
]

function Dot() {
  return <span className="inline-block h-2 w-2 rounded-full bg-pink-500 align-middle mr-2" />
}

function Card({ item }) {
  return (
    <article className="overflow-hidden rounded bg-white shadow-[0_6px_24px_rgba(0,0,0,.06)]">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-10">
        <h3 className="font-serif text-3xl md:text-4xl">{item.title}</h3>
        <p className="mt-6 text-slate-700">
          <Dot />
          <span className="font-medium">Destinations</span>
        </p>
        <p className="mt-6 text-slate-700 leading-8">{item.excerpt}</p>
        <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-olive-700">
          Read More
          <span>▸</span>
        </a>
      </div>
    </article>
  )
}

export default function DestinationsGrid() {
  return (
    <section className="container py-10">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} item={it} />
        ))}
      </div>
    </section>
  )
}
