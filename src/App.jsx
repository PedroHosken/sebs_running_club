import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Routes from './components/Routes'
import Culture from './components/Culture'
import Join from './components/Join'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Routes />
        <Culture />
        <Join />
      </main>
      <Footer />
    </>
  )
}
