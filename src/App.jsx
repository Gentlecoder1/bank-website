import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Career from './pages/Career.jsx'
import About from './pages/About.jsx'
import Security from './pages/Security.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import { ClipLoader } from "react-spinners";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Career' element={<Career />} />
          <Route path='/About' element={<About />} />
          <Route path='/Security' element={<Security />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App