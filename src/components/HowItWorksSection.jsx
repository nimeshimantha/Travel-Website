import circleImg from "../assets/Travel and Tuorism.jpg";
function Step({ title, text }) {
  return (
    <div className="space-y-2">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-lg leading-8 text-slate-700">{text}</p>
    </div>
  )
}

export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Dreaming',
      text: 'Dream on the best destination in 2025 that indulge in fantasies that is greatly desired.',
    },
    {
      title: 'Send Enquiry & Receive Itinerary',
      text: 'Jot down and remit your holiday tour details and receive the proposed Sri Lanka tour itinerary.',
    },
    {
      title: 'Get ready to fly',
      text: 'Fly to the dreamt destination Sri Lanka and explore.',
    },
    {
      title: 'Experience and share',
      text: 'Share your great travel experience and the most interesting travel stories with us.',
    },
  ]
  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold">How Sri Lanka Travel & Tourism Holiday Package Planning Works?</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left: landscape image */}
        <div className="relative mx-auto max-w-xl">
          <img
            src={circleImg}
            alt="Sri Lanka scenery"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Right: steps */}
        <div className="space-y-8">
          {steps.map((s) => (
            <Step key={s.title} title={s.title} text={s.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
