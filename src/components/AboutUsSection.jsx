export default function AboutUsSection() {
  return (
    <section className="container py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: Big stacked typography */}
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            SRI LANKA IS BACK!
          </p>
          <p className="mt-4 text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none">LOVE SRI</p>
          <p className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none">LANKA</p>
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold">Sri Lanka bags Gold – Wanderlust Awards</h3>
          <p className="mt-6 text-lg leading-8">
            Sri Lanka named “<em>Most Desirable Island in the World</em>” by Wanderlust UK
          </p>
          <p className="mt-6 text-lg leading-8">
            Sri Lanka has been voted the Most Desirable Island in the World at the
            <a className="text-emerald-700 font-semibold"> Wanderlust Reader Travel Awards 2024</a> in the UK. Considered one of the most thrilling
            turnarounds, Sri Lanka has risen from eighth place last year to claim the Gold award reaffirming the island’s captivating
            appeal and diverse offerings, as recognized by over 200,000 passionate travelers who voted for their favorite destinations.
          </p>

          <a href="#about" className="mt-10 inline-flex items-center gap-2 font-semibold uppercase tracking-wide">
            About Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
