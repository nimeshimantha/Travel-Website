import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/tours', label: 'Tours' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-slate-900 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide">
          <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          <span>Sri Lanka Travels</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-black/5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-sky-600 transition ${isActive ? 'text-sky-600' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <ul className="container py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block py-1 hover:text-sky-600 ${isActive ? 'text-sky-600' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
