import React, {useState} from 'react'
import Logo from '../assets/shape-30.logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const burgerStyle = "md:hidden mx-5 -mt-6 p-4 w-full mt-4 ease-in-out duration-500 rounded-2xl text-white bg-[#1D1C1D]/70 backdrop-blur-md shadow-md shadow-[#969b86] items-center max-h-96 flex flex-col"

    const [burger, setBurger] = useState(false)

    const openNav = () => {
        setBurger(!burger)
    }

    const [toggle, setToggle] = useState(0)

  // derive active link from current pathname so direct navigation highlights the correct toggle
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : ''
  const isHomeActive = pathname.includes('/home')
  const isCareerActive = pathname.includes('/career')
  const isAboutActive = pathname.includes('/about')
  const isSecurityActive = pathname.includes('/security')

  const isSignUpActive = pathname.includes('/signup')
  const isLoginActive = pathname.includes('/login')

  return (
    <header className='fixed w-full z-100 flex flex-col items-center xl:px-16 px-5'>
        <div
            className='xl:w-[1280px] lg:w-full md:w-full w-full lg:px-16 px-5 text-white bg-[#1D1C1D]/70 backdrop-blur-md shadow-lg shadow-[#969b86] lg:my-5 mt-6 flex justify-between md:py-4 py-4 rounded-[70px] items-center'
        >
            <div className='flex items-center'>
                <img src={Logo} className='w-5 h-5' alt="Logo" />
                <h1 className='text-xl'>YourBanK</h1>
            </div>
            <ul className='md:flex space-x-10 hidden items-center'>
                <li><NavLink className={({isActive}) => isActive ? 'bg-[#262727] py-2 px-5 rounded-3xl' : 'bg-none'} to="/Home">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'bg-[#262727] py-2 px-5 rounded-3xl' : 'bg-none'} to="/Career">Careers</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'bg-[#262727] py-2 px-5 rounded-3xl' : 'bg-none'} to="/About">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'bg-[#262727] py-2 px-5 rounded-3xl' : 'bg-none'} to="/Security">Security</NavLink></li>
            </ul>

            <div className={`hidden md:flex space-x-8 md:space-x-4`}>
              <NavLink to="/SignUp" className={({isActive}) => `relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#CaFE33] text-black' : 'bg-none'}`}>Sign Up</NavLink>

              <NavLink to="/Login" className={({isActive}) => `relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#CAFE33] text-black' : 'bg-none'}`}>Login</NavLink>
            </div>

            <div onClick={openNav} className='bg-[#CAFE33] cursor-pointer md:hidden rounded-4xl py-2 px-5'>
                <div className={`transition-transform duration-300 ${burger ? 'rotate-90' : 'rotate-0'}`}>
                    {burger ? <FaTimes color='black' size={20} /> : <HiMenuAlt3 color='black' size={20} />}
                </div>
            </div>
        </div>

        {/* mobile */}
        <div className={`transition-all duration-900 overflow-hidden ${!burger ? "max-h-0  w-full" : `${burgerStyle}`}`}>
            <ul className='flex flex-col items-center p-4 space-y-4 '>
              <li className='w-full text-center'>
                <NavLink onClick={() => setBurger(false)} to="/Home" className={({isActive}) => isActive ? 'bg-[#262727] w-[150px] inline-block py-2 px-10 rounded-3xl' : 'w-[150px] inline-block py-2 px-10'}>Home</NavLink>
              </li>
              <li className='w-full text-center'>
                <NavLink onClick={() => setBurger(false)} to="/Career" className={({isActive}) => isActive ? 'bg-[#262727] w-[150px] inline-block py-2 px-10 rounded-3xl' : 'w-[150px] inline-block py-2 px-10'}>Careers</NavLink>
              </li>
              <li className='w-full text-center'>
                <NavLink onClick={() => setBurger(false)} to="/About" className={({isActive}) => isActive ? 'bg-[#262727] w-[150px] inline-block py-2 px-10 rounded-3xl' : 'w-[150px] inline-block py-2 px-10'}>About</NavLink>
              </li>
              <li className='w-full text-center'>
                <NavLink onClick={() => setBurger(false)} to="/Security" className={({isActive}) => isActive ? 'bg-[#262727] w-[150px] inline-block py-2 px-10 rounded-3xl' : 'w-[150px] inline-block py-2 px-10'}>Security</NavLink>
              </li>
            </ul>

            <div className={`flex font-semibold space-x-5 justify-center`}>
              <NavLink onClick={() => setBurger(false)} to="/SignUp" className={({isActive}) => isActive ? 'bg-[#CAFE33] py-2 px-6 rounded-3xl text-black' : 'py-2 px-6'}>Sign Up</NavLink>
              
              <NavLink onClick={() => setBurger(false)} to="/Login" className={({isActive}) => isActive ? 'bg-[#CAFE33] py-2 px-6 rounded-3xl text-black' : 'py-2 px-6'}>Login</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Nav