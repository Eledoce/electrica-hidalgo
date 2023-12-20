import { useEffect } from 'react'
import Home from './Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div>
      <Home />
    </div>
  )
}
