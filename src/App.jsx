import React from 'react'
import Nav from './components/nav.jsx'
import Footer from './components/Footer.jsx'
import OpenAccount from './components/OpenAccount.jsx'
import Hero from './components/hero.jsx'
import Testimonials from './components/Testimonials.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Testimonials />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default App