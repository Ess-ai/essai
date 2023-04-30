import { useState } from 'react'
import { Features, Header, Preview } from '../components'
import Hero from '../components/Hero'

function App() {
  return (
    <>
      <Header/>
      <main className="space-y-20 mb-40">
        <Hero/>
        <Preview/>
        <Features/>
      </main>
    </>
  )
}

export default App
