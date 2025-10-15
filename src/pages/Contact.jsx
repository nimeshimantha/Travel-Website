import { countries } from "../data/countries";

export default function Contact() {
  return (
    <main className="container py-24">
      <h1 className="section-title text-center">Contact us</h1>
      <form className="mt-6 grid max-w-xl gap-4 mx-auto">
        <input className="input" placeholder="Your name" />
        <input type="email" className="input" placeholder="Email" />
        <select className="input" name="country" id="country" aria-label="Your country" defaultValue="">
          <option value="" disabled>
            Your country
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <textarea className="input min-h-32" placeholder="Message" />
  <button className="btn-blue w-fit mx-auto">Send</button>
      </form>
    </main>
  )
}
