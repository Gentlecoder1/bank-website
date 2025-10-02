import React from 'react'
import Nav from './components/nav.jsx'
import Footer from './components/Footer.jsx'
import OpenAccount from './components/OpenAccount.jsx'
import Hero from './components/hero.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faqs from './components/Faqs.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Faqs />
      <Testimonials />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default App