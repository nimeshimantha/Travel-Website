const activities = [
  {
    title: 'Bird Watching Sri Lanka',
    img: 'src/assets/activities/Bird.jpg',
  },
  {
    title: 'Kandy to Ella Train',
    img: 'src/assets/activities/the-train-trip-from-ella.jpg',
  },
  {
    title: 'Kite Surfing Sri Lanka',
    img: 'src/assets/activities/Kite surf.webp',
  },
  {
    title: 'Madu River Boat Safari',
    img: 'src/assets/activities/madu river safari.jpg',
  },
  {
    title: 'Scuba Diving Sri Lanka',
    img: 'src/assets/activities/scuba diving.jpg',
  },
  {
    title: 'Sri Lanka Hiking',
    img: 'src/assets/activities/Hiking.jpg',
  },
  {
    title: 'Sri Lanka Hot Air Balloon',
    img: 'src/assets/activities/Hot_Air_Balloon.jpg',
  },
  {
    title: 'Sri Lanka Safari',
    img: 'src/assets/activities/safari-in-Sri-Lanka.jpg',
  },
]

export default function ActivitiesSection() {
  return (
    <section className="container py-16">
      <h2 className="section-title">Best Activities to do in Sri Lanka</h2>
      <p className="mt-4 max-w-4xl text-lg leading-8">
  Discover the best activities in Sri Lanka, including exploring ancient temples, climb
  <a className="text-sky-700 font-semibold"> Sigiriya Lions Rock</a>, enjoying wildlife safaris in Yala, Udawalawa and
  <a className="text-sky-700 font-semibold"> Minneriya national park</a>, surfing in Arugam Bay, hiking in the Central Highlands,
        and relaxing on pristine beaches like Unawatuna and Mirissa.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {activities.map((a) => (
          <article key={a.title} className="">
            <div className="aspect-[4/3] overflow-hidden rounded shadow-sm">
              <img src={a.img} alt={a.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="mt-3 text-center text-black font-semibold">{a.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
