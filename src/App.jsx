import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Stats from './components/Stats'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Stats />
        <WhyChoose />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
