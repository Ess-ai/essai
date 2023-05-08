import { Footer, Header } from '../components'
import AppRouter from '../router/router'

function App() {
  return (
    <>
      <Header/>
      <main className="space-y-20 mb-40">
        <AppRouter />
      </main>
      <Footer/>
    </>
  )
}

export default App
