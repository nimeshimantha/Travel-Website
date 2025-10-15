import { useState } from "react";
import { countries } from "../data/countries";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "f4f1db96-6d0e-4478-90af-2af1fb80f153");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form submitted successfully");
        event.target.reset();
      } else {
        setResult("Error sending form. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    }
  };
  return (
    <main className="container py-24">
      <h1 className="section-title text-center">Contact us</h1>
      <form onSubmit={onSubmit} className="mt-6 grid max-w-xl gap-4 mx-auto">
        <input className="input" name="name" placeholder="Your name" required />
        <input type="email" name="email" className="input" placeholder="Email" required />
        <select className="input" name="country" id="country" aria-label="Your country" defaultValue="" required>
          <option value="" disabled>
            Your country
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <textarea className="input min-h-32" name="message" placeholder="Message" required />
        <button type="submit" className="btn-blue w-fit mx-auto">Send</button>
        {result && <span className="mx-auto text-sm text-slate-600">{result}</span>}
      </form>
    </main>
  )
}
