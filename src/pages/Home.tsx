import React from 'react'
import { Preview, Features, CallToAction, Testimonials } from '../components'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
        <Hero/>
        <Preview/>
        <Features/>
        <CallToAction/>
        <Testimonials/>
    </>
  )
}

export default Home