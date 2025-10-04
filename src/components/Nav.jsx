import React, {useState} from 'react'
import Logo from '../assets/shape-30.logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Nav = () => {

    const burgerStyle = "md:hidden mx-5 -mt-6 p-4 w-full mt-4 ease-in-out duration-500 rounded-2xl text-white bg-[#1D1C1D] shadow-md shadow-[#969b86] items-center"

    const [burger, setBurger] = useState(false)

    const openNav = () => {
        setBurger(!burger)
    }

    const [toggle, setToggle] = useState(0)

    const toggleLeft = () => {
        setToggle(0)
    }
    const toggleRight = () => {
        setToggle(1)
    }

  return (
    <header className='fixed w-full z-100 flex flex-col items-center opacity-95 xl:px-16 px-5'>
        <div className='xl:w-[1280px] lg:w-full md:w-full w-full lg:px-16 px-5 text-white bg-[#1D1C1D] shadow-lg shadow-[#969b86] lg:my-5 mt-10 flex justify-between md:py-4 py-4 rounded-[70px] items-center'>
            <div className='flex items-center'>
                <img src={Logo} className='w-5 h-5' alt="Logo" />
                <h1 className='text-xl'>YourBanK</h1>
            </div>
            <ul className='md:flex gap-5 hidden'>
                <li className='bg-[#262727] py-2 px-3 rounded-3xl'><a href="#">Home</a></li>
                <li className='bg-[#262727] py-2 px-3 rounded-3xl'><a href="#">Careers</a></li>
                <li className='bg-[#262727] py-2 px-3 rounded-3xl'><a href="#">About</a></li>
                <li className='bg-[#262727] py-2 px-3 rounded-3xl'><a href="#">Security</a></li>
            </ul>

            <div className={`hidden md:flex space-x-8 md:space-x-2`}>
              <div
                onClick={(toggleLeft)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                <a href="#">Sign Up</a>
              </div>

              <div
                onClick={(toggleRight)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 1 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                <a href="#">Login</a>
              </div>
            </div>

            <div onClick={openNav} className='bg-[#CBFE33] cursor-pointer md:hidden rounded-4xl py-2 px-5'>
                <div className={`transition-transform duration-300 ${burger ? 'rotate-90' : 'rotate-0'}`}>
                    {burger ? <FaTimes color='black' size={20} /> : <HiMenuAlt3 color='black' size={20} />}
                </div>
            </div>
        </div>

        <div className={`transition-all duration-900 overflow-hidden ${!burger ? "max-h-0 opacity-0  w-full" : `max-h-96  flex flex-col items-center opacity-100 ${burgerStyle}`}`}>
            <ul className='flex flex-col items-center p-4 space-y-2 '>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'  data-aos="fade-right"><a href="#">Home</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'  data-aos="fade-right"><a href="#">Careers</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'  data-aos="fade-right"><a href="#">About</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'  data-aos="fade-right"><a href="#">Security</a></li>
            </ul>

            <div className={`flex font-semibold space-x-5 justify-center`}>
              <div
                data-aos="fade-right"
                onClick={(toggleLeft)}
                className={`relative w-fit h-fit text-center py-2 px-5 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                <a href="#">Sign Up</a>
              </div>

              <div
                data-aos="fade-left"
                onClick={(toggleRight)}
                className={`relative w-fit h-fit text-center py-2 px-5 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 1 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                <a href="#">Login</a>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Nav