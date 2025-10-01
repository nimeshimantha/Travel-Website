export default function Contact() {
  return (
    <main className="container py-24">
      <h1 className="section-title">Contact us</h1>
      <form className="mt-6 grid max-w-xl gap-4">
        <input className="input" placeholder="Your name" />
        <input type="email" className="input" placeholder="Email" />
        <textarea className="input min-h-32" placeholder="Message" />
        <button className="btn-primary w-fit">Send</button>
      </form>
    </main>
  )
}
