import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Experiences from './pages/Experiences'
import Tours from './pages/Tours'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="mt-24 border-t border-black/10 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Travel Haven — demo site
      </footer>
    </BrowserRouter>
  )
}