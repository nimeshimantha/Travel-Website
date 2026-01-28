import { Link } from 'react-router-dom'
import heroImg from "../assets/ourland/sigirya.jpg";

export default function Tours() {
  return (
    <main className="container py-10 md:py-16">

      <section className="container py-16">
      <p className="text-center text-sm text-pink-600">• Go where your passion takes you</p>
      <h1 className="mt-2 text-center text-4xl md:text-5xl font-serif font-semibold">Find your journey</h1>
      <p className="text-center text-2xl font-serif">Adventure Meets Luxury in Every Destination</p>
      <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-8 text-slate-700">
        Exotic locations, wild adventures, romantic escapes, or off the beaten track: which path will you choose to explore our paradise isle?
        We offer you many to pick from. And, as there is much to see and do in Sri Lanka, tours to suit your specific interests and duration of stay can be tailor-made too.
      </p>
    </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Left image */}
        <div className="order-2 lg:order-1">
          <img
            src={heroImg}
            alt="Sigiriya rock with misty forest"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Magical Memories,
            <br />
            Bespoke experiences
          </h1>

          <div className="mt-4 space-y-4 text-slate-600 text-base leading-7">
            <p>
              Set out on a journey where every moment is crafted with care. Our team
              believes travel should do more than tick sights off a list—it should
              leave stories you’ll tell long after you return. With an eye for
              detail, we design one‑of‑a‑kind itineraries that reveal Sri Lanka’s
              vibrant culture, breathtaking landscapes, and hidden corners.
            </p>
            <p>
              By understanding your interests and pace, we create trips that feel
              personal and effortless—from golden beaches and ancient temples to
              rainforests and bustling markets. Bring your wanderlust; we’ll handle
              the rest and shape an experience that’s made just for you.
            </p>
          </div>

          <div className="mt-6">
            <Link to="/plantrip" className="btn-red rounded-full px-5 py-2.5 text-sm md:text-base">
              PLAN YOUR TRIP TO SRI LANKA 
              <span className="ml-2" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom stats */}
      <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="text-2xl md:text-3xl font-semibold">
          65,610 km²
          <div className="mt-1 text-sm md:text-base text-slate-500 font-normal">Area</div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          09
          <div className="mt-1 text-sm md:text-base text-slate-500 font-normal">Provinces</div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          1000+
          <div className="mt-1 text-sm md:text-base text-slate-500 font-normal">Places to visit</div>
        </div>
      </div>
    </main>
  );
}
