import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Experiences from './pages/Experiences'
import Tours from './pages/Tours'
import Contact from './pages/Contact'
import PlanTrip from './pages/PlanTrip'
import TuorPackages from './pages/TuorPackages'

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
          <Route path="/tuorpackages" element={<TuorPackages />} />
          <Route path="/tuorpackage" element={<TuorPackages />} />
          <Route path="/tourpackages" element={<TuorPackages />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}