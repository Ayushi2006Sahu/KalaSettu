import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import PerformanceHightliht from '../components/PerformanceHighlight'
import WhyChooseUs from '../components/whychooseus'
import Testimonals from '../components/Testimonals'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
         <Services /> 
         <About/>
          <PerformanceHightliht/>
          <WhyChooseUs/>
          <Testimonals/>
          <Footer/>
    </div>
  )
}

export default Home