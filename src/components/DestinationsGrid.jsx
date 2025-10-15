const items = [
  {
    title: 'Anuradhapura',
    img: 'src/assets/destination/Anuradhapura.jpg',
    excerpt:
      'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura...',
  },
  {
    title: 'Arugam Bay',
    img: 'src/assets/destination/Arugam Bay.jpeg',
    excerpt:
      "Unspoilt beaches and magnificent waves: it's the ultimate ‘hangout’ for surfers and...",
  },
  {
    title: 'Bentota',
    img: 'src/assets/destination/Bentota.webp',
    excerpt:
      'With a mix of beautiful beaches, watersports and buzzing streets that attract...',
  },
  {
    title: 'Colombo',
    img: 'src/assets/destination/Colombo.jpg',
    excerpt:
      'A hotspot full of diverse attractions from upscale shopping malls to busy...',
  },
  {
    title: 'Dambulla',
    img: 'src/assets/destination/Dambulla.jpg',
    excerpt:
      'One of the main tourist attractions in Dambulla is the sacred cave...',
  },
  {
    title: 'Ella',
    img: 'src/assets/destination/Ella.webp',
    excerpt:
      'Majestic waterfalls, hidden caves, breathtaking vistas across the mountains: Ella is a...',
  },
  {
    title: 'Galle',
    img: 'src/assets/destination/Galle.webp',
    excerpt:
      'In this Southern capital natural and cultural diversity thrives, and history lives...',
  },
  {
    title: 'Habarana',
    img: 'src/assets/destination/Habarana.jpg',
    excerpt:
      'Strategically placed on the primary route to the North and East of...',
  },
  {
    title: 'Hatton',
    img: 'src/assets/destination/Hatton.jpg',
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
