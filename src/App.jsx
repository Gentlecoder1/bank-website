import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Career from './pages/Career.jsx'
import About from './pages/About.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Career' element={<Career />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App