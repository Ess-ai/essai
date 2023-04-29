import { useState } from 'react'
import { Header } from '../components'
import Hero from '../components/Hero'

function App() {
  return (
    <>
      <Header/>
      <main className="space-y-40 mb-40">
        <Hero/>
      </main>
    </>
  )
}

export default App
