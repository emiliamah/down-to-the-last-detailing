import { useState } from "react"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Booking from "./components/Booking"
import "./App.css"

function App() {
  const [selectedService, setSelectedService] = useState(null)

  function handleBook(service) {
    setSelectedService(service)
    window.scrollTo(0, 0)
  }

  function handleBack() {
    setSelectedService(null)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Header />

      {selectedService ? (
        <Booking service={selectedService} onBack={handleBack} />
      ) : (
        <>
          <Hero />
          <Services onBook={handleBook} />
        </>
      )}

      <Footer />
    </>
  )
}

export default App