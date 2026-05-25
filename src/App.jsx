import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <div>
            <h1 className='text-red-600'>GTA VI</h1>
      </div>
    </main>
  )
}

export default App
