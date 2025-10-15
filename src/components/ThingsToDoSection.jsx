function Marker({ x, y, n = 1, highlight = false }) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full ${
        highlight ? 'bg-red-500' : 'bg-sky-900'
      } text-white h-8 w-8 text-xs font-bold shadow`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {n}
    </div>
  )
}

export default function ThingsToDoSection() {
  return (
    <section className="container py-20">
      <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
        {/* Left: Title + paragraph */}
        <div>
          <h2 className="text-6xl font-extrabold leading-none">Things<br />To Do</h2>
          <p className="mt-2 text-2xl tracking-wide">in Sri Lanka</p>
          <p className="mt-8 max-w-xl text-slate-700 leading-8">
            We want to share Sri Lanka's extraordinarily diverse and authentic story with the rest of the world. We
            want to help you discover the many thousands of different ways in which you can fall in love with our home
            and plan the perfect trip; local experts, local perspective and all the best tips on where to eat, what to do,
            who to meet, how to get there and where to make your next favourite memory.
          </p>
        </div>

        {/* Center: Map with markers */}
        <div className="relative mx-auto w-full max-w-lg">
          <img
            src="src/assets/sri-lanka-provinces-and-capital-map.jpg"
            alt="Sri Lanka map"
            className="w-full rounded-2xl shadow-lg"
          />
          <Marker x={28} y={20} n={10} />
          <Marker x={35} y={32} n={19} />
          <Marker x={55} y={35} n={13} />
          <Marker x={60} y={40} n={14} />
          <Marker x={28} y={55} n={1} highlight />
          <Marker x={32} y={60} n={2} />
          <Marker x={42} y={80} n={4} />
          <Marker x={50} y={70} n={6} />
          <Marker x={78} y={82} n={5} />
          <Marker x={84} y={62} n={11} />
          <Marker x={70} y={50} n={8} />
        </div>

        {/* Right: Feature card */}
        <article className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)]">
          <img
            src="src\assets\471485-Kandy-Sri-Lanka.webp"
            alt="Dalada Maligawa"
            className="h-72 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-extrabold">Dalada Maligawa</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">The Temple of the Sacred Tooth Relic</p>
            <p className="mt-4 text-slate-700 leading-7 line-clamp-3">
              Located in Kandy, Sri Lanka, it is the highly revered Buddhist temple that houses the sacred tooth relic of Lord Buddha.
            </p>
            <a href="#" className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100">→</a>
          </div>
        </article>
      </div>
    </section>
  )
}
