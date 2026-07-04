import HeroSection from './components/HeroSection'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import MapSection from './components/map/MapSection'
import FiguresSection from './components/figures/FiguresSection'
import VideoSection from './components/videos/VideoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <FiguresSection />
      <VideoSection />
      <MapSection />
      <Footer />
    </div>
  )
}
