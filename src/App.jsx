// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import Aos from 'aos'
// import aos css
import 'aos/dist/aos.css'

const App = () => {

  Aos.init({
    duration: 1000,
    offset: 100,
  })
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
      <Footer />

    </>
  )
}

export default App