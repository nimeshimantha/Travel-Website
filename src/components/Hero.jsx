import { Link } from 'react-router-dom'
import heroImg from '../assets/Hero Image.webp'

export default function Hero() {
  return (
    <section className="relative min-h-svh w-full">
      <img
        src={heroImg}
        alt="Sri Lanka World Heritage"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative container flex min-h-svh items-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight">
            Where Dreams Take Flight
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl opacity-90">
            Your Home, Your Journey, Your Hospitality Haven
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/destinations" className="btn-blue">See destinations</Link>
            <Link to="/tours" className="btn-secondary">View tours</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
