import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function SocialIcon({ label, href, children }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* CTA banner */}
      <div className="bg-sky-500 text-white">
        <div className="container flex flex-col gap-4 items-center justify-between py-8 md:flex-row">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Plan Your <span className="italic">Sri Lanka Holiday Tour</span> With Us
          </h3>
          <Link
            to="/tours"
            className="inline-flex items-center rounded-lg bg-white text-sky-700 font-semibold px-4 py-2 shadow hover:bg-slate-100"
          >
            Find Tour Packages
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-900 text-slate-200">
        <div className="container grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold">Sri Lanka Travel</h4>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Sri Lanka tourism offers a vibrant mix of culture, nature, and adventure. As a travel agent, we provide
              tailored itineraries, ensuring you experience the island's best.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link to="/"><img className="h-20 w-full object-cover rounded" src="src\assets\footerimg\sigirya rock.png"/></Link>
              <Link to="/"><img className="h-20 w-full object-cover rounded" src="src\assets\footerimg\yala.jpg"/></Link>
              <Link to="/"><img className="h-20 w-full object-cover rounded" src="src\assets\footerimg\hikkaduwa.jpg"/></Link>
              <Link to="/"><img className="h-20 w-full object-cover rounded" src="src\assets\footerimg\wildlifesl.jpg"/></Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold">Sri Lanka Travel</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Copyright</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Refund</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Tour Packages</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="#">Map</a></li>
                <li><a href="#">Climate</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Facts</a></li>
                <li><a href="#">Visa</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">Advertising</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold">Social Media</h4>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Follow us to get the latest news about Tour packages and offers via our social media.
            </p>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Get in the social swing and connect with best travel agent in Sri Lanka to explore this beautiful island.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <SocialIcon label="Facebook" href="#"><FaFacebookF /></SocialIcon>
              <SocialIcon label="Instagram" href="#"><FaInstagram /></SocialIcon>
              <SocialIcon label="X" href="#"><FaXTwitter /></SocialIcon>
              <SocialIcon label="LinkedIn" href="#"><FaLinkedinIn /></SocialIcon>
              <SocialIcon label="YouTube" href="#"><FaYoutube /></SocialIcon>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold">Sri Lanka Travels</h4>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Sri Lanka is one of the leading romantic destinations in the whole world.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#">Best time to visit Sri Lanka 2025</a></li>
              <li><a href="#">Things to do in Sri Lanka 2025</a></li>
            </ul>
            <h5 className="mt-6 font-semibold">Useful Links</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><a href="#">Elephant Orphanage Sri Lanka</a></li>
              <li><a href="#">Sri Lanka Safari Tours</a></li>
              <li><a href="#">Sri Lanka Whale Watching</a></li>
              <li><a href="#">Sri Lanka Yala Park</a></li>
              <li><a href="#">Sri Lanka Colombo</a></li>
              <li><a href="#">Sri Lanka Two Week Itinerary</a></li>
              <li><a href="#">Culture of Sri Lanka</a></li>
              <li><a href="#">Ceylon Nuwaraeliya</a></li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              <p>+94 777 483 111</p>
              <p>info@srilankatravels.com</p>
            </div>
          </div>
        </div>

        <div className="container border-t border-white/10 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} — Sri Lanka Travels. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
