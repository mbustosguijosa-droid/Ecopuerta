import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Works from './components/Works'
import Workshop from './components/Workshop'
import Materials from './components/Materials'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main className="bg-black text-white font-body">
        <Hero />
        <Capabilities />
        <Works />
        <Workshop />
        <Materials />
        <Quote />
      </main>
      <Footer />
    </MotionConfig>
  )
}
