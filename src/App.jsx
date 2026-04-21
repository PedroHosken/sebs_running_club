import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Community from './components/Community'
import Join from './components/Join'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Community />
        <Join />
      </main>
      <Footer />
    </>
  )
}
