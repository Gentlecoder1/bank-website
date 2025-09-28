import React, {useState} from 'react'
import Logo from '../assets/shape-30.logo.png'
import Burger from '../assets/Icon.burger.png'

const Nav = () => {

    const burgerStyle = "md:hidden mx-5 -mt-6 p-4 ease-in-out duration-500 rounded-2xl text-white bg-[#1D1C1D] shadow-md shadow-orange-200"

    const [burger, setBurger] = useState(false)

    const openNav = () => {
        setBurger(!burger)
    }

  return (
    <header className='sticky lg:w-[1280px] z-10 mx-auto flex flex-col'>
        <div className='text-white bg-[#1D1C1D] shadow-lg shadow-orange-200 lg:my-5 my-10 mx-5 flex justify-between px-5 md:py-4 py-3 rounded-[70px] items-center'>
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
            <div className='md:flex font-semibold hidden gap-4'>
                <a href="#"><div className='py-2 px-3'>Sign up</div></a>
                <a href="#"><div className='bg-[#CBFE33] text-black hover:bg-[#c3dd75] py-2 px-5 rounded-3xl'>Login</div></a>
            </div>
            <div onClick={openNav} className='bg-[#CBFE33] cursor-pointer hover:bg-[#c3dd75] md:hidden rounded-4xl py-2 px-5'>
                <img src={Burger} alt="Burger-Icon" />
            </div>
        </div>

        <div className={!burger ? "hidden" : burgerStyle}>
            <ul className='p-4 space-y-2'>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'><a href="#">Home</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'><a href="#">Careers</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'><a href="#">About</a></li>
                <li className='bg-[#262727] w-fit py-2 px-10 rounded-3xl'><a href="#">Security</a></li>
            </ul>
            <div className='flex font-semibold space-x-7 justify-center'>
                <a href="#"><div className='py-2 px-3'>Sign up</div></a>
                <a href="#"><div className='bg-[#CBFE33] text-black hover:bg-[#c3dd75] py-2 px-5 rounded-3xl'>Login</div></a>
            </div>
        </div>
    </header>
  )
}

export default Nav