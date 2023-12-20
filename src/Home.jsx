import Footer from './partials/Footer'
import Header from './partials/Header'
import HeroHome from './partials/HeroHome'
import Testimonials from './partials/Testimonials'
import Maps from './partials/Maps'
import ContactCard from './partials/ContactCard'
import Features from './partials/Features'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <Features />
        <Testimonials />
        <Maps />
        <ContactCard />
        <Footer />
      </main>
    </div>
  )
}
