import React from 'react'
import Logo from '../assets/shape-30.logo.png'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RxDividerVertical } from "react-icons/rx";


const Footer = () => {
  return (
    <footer className='bg-[#1D1C1D] w-full flex justify-center absolute bottom-0'>
        <div className='lg:w-[1280px] lg:mx-16 mx-2 px-5 py-7 flex flex-col justify-center'>
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
                <p className='flex items-center gap-2'><CiMail size={20} /> hello@skillbirdge.com</p>
                <p className='flex items-center gap-2'><FaPhoneAlt />  +91813232309</p>
                <p className='flex items-center gap-2'><FaMapMarkerAlt /> Somewhere in the World</p>
            </div>
            <hr className='border-gray-100 my-6' />
            <div className='border-[1px] md:flex justify-between border-gray-100 mt-7 md:p-2 p-5 place-items-center md:rounded-full rounded-2xl'>
                <div className='flex relative gap-2 md:-top-0 -top-10 w-fit'>
                    <div className='rounded-full w-fit p-2 bg-[#CBFE33]'><TiSocialFacebook size={25} /></div>
                    <div className='rounded-full w-fit p-2 bg-[#CBFE33]'><TiSocialTwitter size={25} /></div>
                    <div className='rounded-full w-fit p-2 bg-[#CBFE33]'><TiSocialLinkedin size={25} /></div>
                </div>
                <div className='md:-mt-0 -mt-5 md:mb-0 mb-4'>
                    <p className='text-md text-gray-100'>YourBank All Rights Reserved</p>
                </div>
                <div className=''>
                    <p className='text-md text-gray-100 flex items-center px-2'><a href="#" className='hover:text-[#CBFE33]'>Privacy Policy</a> <RxDividerVertical size={30} /> <a href="#" className='hover:text-[#CBFE33]'>Terms of Service</a></p>
                </div>
                    
            </div>
        </div>
    </footer>
  )
}

export default Footer