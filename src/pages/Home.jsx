import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import ActivitiesSection from '../components/ActivitiesSection'
import TourPackagesSection from '../components/TourPackagesSection'
import AboutUsSection from '../components/AboutUsSection'
import TravelStoriesSection from '../components/TravelStoriesSection'
import OurIslandSection from '../components/OurIslandSection'
import ThingsToDoSection from '../components/ThingsToDoSection'
import WhyTravelSection from '../components/WhyTravelSection'
import HowItWorksSection from '../components/HowItWorksSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <IntroSection />
      <ActivitiesSection />
      <TourPackagesSection />
      <TravelStoriesSection />
      <OurIslandSection />
  <HowItWorksSection />
      <ThingsToDoSection />
      <WhyTravelSection />
    </main>
  )
}
