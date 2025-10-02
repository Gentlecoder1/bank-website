import React from 'react'
import checkIcon from '../assets/check-icon.png'
import homeAbstract from '../assets/home-abstract.png'
import home2Abstract from '../assets/home2-abstract.png'
import Homehero from '../assets/home-hero.svg'
import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import OpenAccount from '../components/OpenAccount.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Faqs from '../components/Faqs.jsx'

const Home = () => {
  return (
    <div className=' mx-auto' style={{ backgroundImage: `url(${homeAbstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '50%' }}>
        <Nav />

        <div className='xl:w-[1280px] lg:w-full md:w-full flex mx-auto justify-center relative pt-40'>
            <div className='p-8 text-white md:flex md:text-left text-center gap-20 mx-5'>

                <div className='space-y-4 md:space-y-14 w-[100%] md:w-[50%] mb-20 flex flex-col items-center md:block'>
                    <div className='bg-[#262727] rounded-full px-5 py-3 flex gap-1 items-center justify-center w-fit'>
                        <img src={checkIcon} className='w-7 h-7' alt="checked" />
                        <p>No LLC Required, No Credit Check</p>
                    </div>

                    <div className='space-y-3'>
                        <h1 className='mb-3 text-4xl'>Welcome to YourBanK Empowering Your <b className='text-[#CBFE33]'>Financial Journey</b></h1>
                        <p className='mb-3'>A YourBanK, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                    </div>
        
                    <button className='bg-[#CBFE33] w-fit h-fit text-black md:rounded-full rounded-full px-4 py-2 mt-3 hover:scale-105'>Open Account</button>
                </div>
                
                <div className='md:w-[50%] w-[100%]' style={{ backgroundImage: `url(${home2Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '50%'}}>
                    <div className='w-full'>
                        <img src={Homehero} className='w-full h-full' alt="hero" />
                    </div>
                </div>
            </div>
        </div>

        <Faqs />
        <Testimonials />
        <OpenAccount />
        <Footer />
    </div>
  )
}

export default Home