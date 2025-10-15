import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
const Home = lazy(() => import('./pages/Home.jsx'))
const Career = lazy(() => import('./pages/Career.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Security = lazy(() => import('./pages/Security.jsx'))
const SignUp = lazy(() => import('./pages/SignUp.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
import { ClipLoader } from "react-spinners";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div className="p-8 h-[100vh] flex items-center justify-center text-center"><ClipLoader size={58} className='m-auto' /></div>}>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Career' element={<Career />} />
            <Route path='/About' element={<About />} />
            <Route path='/Security' element={<Security />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App