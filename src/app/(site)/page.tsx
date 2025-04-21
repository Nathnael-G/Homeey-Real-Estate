import AboutUs from '@/components/about-us'
import { ModeToggle } from '@/components/darkmode'
import Deals from '@/components/deals'
import Featured from '@/components/featured'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Newsletter from '@/components/newsletter'
import Offering from '@/components/offering'
import PropertyTypes from '@/components/proprerty-types'
import Score from '@/components/score'
import Testimonials from '@/components/testimonials'
import React from 'react'

function Hoomey() {
  return (
    <div>Hoomey
      <ModeToggle />
      <Nav />
      <Hero />
      <PropertyTypes />
      <Deals />
      <AboutUs />
      <Offering />
      <Score />
      <Testimonials />
      <Featured />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Hoomey