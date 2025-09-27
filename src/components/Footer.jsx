import React from 'react'
import Logo from '../assets/shape-30.logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#1D1C1D] w-full flex justify-center'>
        <div className='w-full lg:mx-16 mx-2 px-5 py-7 flex flex-col justify-center'>
            <div className=''>
                <div className='flex justify-center items-center mt-3'>
                    <img src={Logo} alt="logo" />
                    <h1 className='text-white text-xl'>YourBanK</h1>
                </div>
                <ul className='flex justify-center gap-5 my-6'>
                    <li className='text-white hover:text-[#CBFE33]'><a href="#">Home</a></li>
                    <li className='text-white hover:text-[#CBFE33]'><a href="#">Careers</a></li>
                    <li className='text-white hover:text-[#CBFE33]'><a href="#">About</a></li>
                    <li className='text-white hover:text-[#CBFE33]'><a href="#">Security</a></li>
                </ul>
            </div>
            <hr className='border-gray-100 mb-6' />
            <div className='flex space-x-7 space-y-5 sm:space-y-0 flex-wrap items-center justify-center text-white text-md'>
                <p>hello@skillbirdge.com</p>
                <p>+91813232309</p>
                <p>Somewhere in the World</p>
            </div>
            <hr className='border-gray-100 my-6' />
            <div className='border-2 border-gray-100 rounded-2xl'>
                <div>
                    <div className='rounded-full p-2 bg-[#CBFE33]'></div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer