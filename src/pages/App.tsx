import { Footer, Header } from '../components'
import AppRouter from '../router/router'
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <>
      <Header/>
      <main className="space-y-20 mb-10">
        <AppRouter />
      </main>
      <Footer/>
    </>
  )
}

export default App
