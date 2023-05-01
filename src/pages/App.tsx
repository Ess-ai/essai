import { useState } from 'react'
import { Features, Footer, Header, Preview, Testimonials } from '../components'
import Hero from '../components/Hero'

function App() {
  return (
    <>
      <Header/>
      <main className="space-y-20 mb-40">
        <Hero/>
        <Preview/>
        <Features/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  )
}

export default App
