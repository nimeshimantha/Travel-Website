export default function WhyTravelSection() {
  const items = [
    {
      title: 'Professional Staff and Driver Guides',
      text:
        "Our travel agents and drivers are friendly and professional. You will get the best ideas and tour plans get the best experience in Sri Lanka.",
    },
    {
      title: 'Custom Made Private Tours',
      text:
        'We do our best to get your tour ideas and make the best private tour itinerary to full fill your idea. 100% custom tour plans give you the best experience.',
    },
    {
      title: '24/7 Online Service',
      text:
        'Our friendly Tour operator staff ready to help you anytime of the day. We have really good online chat service, It makes so easy to you to plan whole tour without even a single call :).',
    },
  ]
  return (
    <section className="container py-20">
      <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold">Why Travel with Sri Lanka Travel and Tourism</h2>
      <div className="mx-auto mt-10 max-w-4xl space-y-10">
        {items.map((it, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold">{it.title}</h3>
            <p className="mt-3 text-slate-700 leading-8">{it.text}</p>
            {i < items.length - 1 && <div className="mx-auto mt-8 w-6 border-t border-slate-300" />}
          </div>
        ))}
      </div>
    </section>
  )
}
