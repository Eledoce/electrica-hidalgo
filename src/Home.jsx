import Footer from './partials/Footer'
import Header from './partials/Header'
import HeroHome from './partials/HeroHome'
import Stock from './partials/Stock'
import Testimonials from './partials/Testimonials'
import Maps from './partials/Maps'
import ContactCard from './partials/ContactCard'
import Features from './partials/Features'
import WhatsappButton from './components/WhatsappButton'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <WhatsappButton />
        <HeroHome />
        <Features />
        <Stock />
        <Testimonials />
        <Maps />
        <ContactCard />
        <Footer />
      </main>
    </div>
  )
}
