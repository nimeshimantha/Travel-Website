const items = [
  {
    title: 'Anuradhapura',
    img: 'src/assets/destination/Anuradhapura.jpg',
    description: 'Ancient city of sacred stupas, serene lakes, and timeless ruins.',
    excerpt:
      'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura...',
  },
  {
    title: 'Arugam Bay',
    img: 'src/assets/destination/Arugam Bay.jpeg',
    description: 'Laid-back surf haven with golden sands and warm turquoise waters.',
    excerpt:
      "Unspoilt beaches and magnificent waves: it's the ultimate ‘hangout’ for surfers and...",
  },
  {
    title: 'Bentota',
    img: 'src/assets/destination/Bentota.webp',
    description: 'Beach escapes, lagoon cruises, and palm-fringed coastlines.',
    excerpt:
      'With a mix of beautiful beaches, watersports and buzzing streets that attract...',
  },
  {
    title: 'Colombo',
    img: 'src/assets/destination/Colombo.jpg',
    description: 'Vibrant capital where heritage, food, and city life collide.',
    excerpt:
      'A hotspot full of diverse attractions from upscale shopping malls to busy...',
  },
  {
    title: 'Dambulla',
    img: 'src/assets/destination/Dambulla.jpg',
    description: 'Golden cave temples and panoramic views over the plains.',
    excerpt:
      'One of the main tourist attractions in Dambulla is the sacred cave...',
  },
  {
    title: 'Ella',
    img: 'src/assets/destination/Ella.webp',
    description: 'Misty hills, tea trails, and iconic train journeys.',
    excerpt:
      'Majestic waterfalls, hidden caves, breathtaking vistas across the mountains: Ella is a...',
  },
  {
    title: 'Galle',
    img: 'src/assets/destination/Galle.webp',
    description: 'Historic fort city with cobblestone streets and ocean views.',
    excerpt:
      'In this Southern capital natural and cultural diversity thrives, and history lives...',
  },
  {
    title: 'Habarana',
    img: 'src/assets/destination/Habarana.jpg',
    description: 'Safari gateway with forests, lakes, and wildlife encounters.',
    excerpt:
      'Strategically placed on the primary route to the North and East of...',
  },
  {
    title: 'Hatton',
    img: 'src/assets/destination/Hatton.jpg',
    description: 'Tea country charm and highland hikes to breathtaking peaks.',
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
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
      </div>
    </article>
  )
}

export default function Experiences() {
  return (
    <section className="container py-16">
      <p className="text-center text-sm text-pink-600">
        <Dot /> Things to do in Sri Lanka
      </p>
      <h1 className="mt-2 text-center text-4xl md:text-5xl font-serif font-semibold">Experiences</h1>
      <p className="text-center text-2xl font-serif">Journey Beyond Boundaries</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white shadow-sm"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-900"
          >
            2
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-900"
          >
            3
          </button>
          <span className="px-2 text-gray-400">...</span>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-900"
          >
            10
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white"
            aria-label="Next page"
          >
            →
          </button>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-center text-sm font-semibold uppercase tracking-wide text-blue-400"
        >
          View All Holiday Packages from Sri Lanka <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}


