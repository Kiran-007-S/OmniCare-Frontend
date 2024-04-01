import React from 'react'
import HeroSection from './HeroSection'
import StepCheck from './StepCheck'
import AboutSection from './AboutSection'
import DoctorSection from './DoctorSection'

function Home() {
  return (
    <section>
        <HeroSection/>
        <StepCheck/>
        <AboutSection/>
        <DoctorSection/>
    </section>
  )
}

export default Home