import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-black text-white font-body">
        <Hero />
        <Capabilities />
      </main>
    </MotionConfig>
  )
}
