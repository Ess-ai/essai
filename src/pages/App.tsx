import { useState } from 'react'
import { Features, Header, Preview } from '../components'
import Hero from '../components/Hero'

function App() {
  return (
    <>
      <Header/>
      <main className="space-y-40 mb-40">
        <Hero/>
        <Features/>
        <Preview/>
      </main>
    </>
  )
}

export default App
