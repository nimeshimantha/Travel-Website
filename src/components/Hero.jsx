import { useState } from 'react'

export default function Hero() {
  const [src, setSrc] = useState('/hero.jpg')
  const fallback = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop'
  return (
    <section className="relative min-h-svh w-full">
      <img
        src={src}
        alt="Sri Lanka landscape with traveler raising hands"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setSrc(fallback)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      <div className="relative container flex min-h-svh items-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight">
            Where Dreams Take Flight
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl opacity-90">
            Your Home, Your Journey, Your Hospitality Haven
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#destinations" className="btn-primary">See destinations</a>
            <a href="#tours" className="btn-secondary">View tours</a>
          </div>
        </div>
      </div>
    </section>
  )
}
