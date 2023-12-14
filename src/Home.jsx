import Header from './partials/Header'
import HeroHome from './partials/HeroHome'
import Testimonials from './partials/Testimonials'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <Testimonials />
      </main>
    </div>
  )
}
