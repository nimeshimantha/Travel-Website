import classicImg from '../assets/destination/Dambulla.jpg'
import heritageImg from '../assets/destination/Anuradhapura.jpg'
import safariImg from '../assets/destination/Habarana.jpg'
import beachImg from '../assets/destination/Bentota.webp'

const packages = [
	{
		title: 'Classic Mini Tour',
		description: 'Perfect for a quick escape - Colombo, Kandy, Dambulla, Sigiriya & Anuradhapura.',
		image: classicImg,
	},
	{
		title: 'Best of Sri Lanka',
		description: 'A week of heritage, wildlife, tea country, and cultural highlights discovery journey.',
		image: heritageImg,
	},
	{
		title: 'Scenic Sri Lanka',
		description: 'From Sigiriya rock fortress to Yala National Park and breathtaking hill country.',
		image: safariImg,
	},
	{
		title: 'Ultimate Sri Lanka',
		description: 'The complete island adventure - temples, safaris, beaches, and more.',
		image: beachImg,
	},
]

export default function TuorPackages() {
	return (
		<main className="container py-10 md:py-16">
			<section className="py-8 md:py-12">
				<p className="text-sm text-slate-500">Top Destination</p>
				<h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold">
					Featured Tour Packages
				</h1>

				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{packages.map((item) => (
						<article key={item.title} className="rounded-2xl bg-sky-50 shadow-sm overflow-hidden">
							<div className="aspect-[4/3]">
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-6 text-center">
								<h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
								<p className="mt-2 text-sm text-slate-600 leading-6">{item.description}</p>
								<button
									type="button"
									className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white"
								>
									Book Now
								</button>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 flex justify-center">
					<button
						type="button"
						className="rounded-full bg-slate-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
					>
						View All
					</button>
				</div>
			</section>
		</main>
	)
}
