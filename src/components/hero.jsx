import React from 'react'
import Abstract from '../assets/Abstract-Design-course.png'
import Career from '../assets/career-image.png'

const hero = () => {
  return (
    <div className='w-full flex mx-auto justify-center relative my-7'>
            <div style={{ backgroundImage: `url(${Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '250px' }} className='bg-[#1D1C1D] p-8 text-white xl:w-[1280px] md:flex md:text-left text-center justify-between lg:mx-16 mx-5 border-2 border-gray-100 md:rounded-2xl rounded-3xl items-center'>
                <div>
                    <img src={Career} className='md:flex flex-row-reversed w-full md:rounded-2xl rounded-3xl' alt="" />
                    <div className='p-4 bg-[#191919] md:text-left text-center md:-mb-0 -mb-10 rounded-3xl relative md:-top-0 -top-12'>
                        <h1 className='mb-3 text-4xl'>Welcome to <b className='text-[#92B92C]'>YourBank </b> Careers!</h1>
                        <p className='text-[18px]'>Join our team and embark on a rewarding journey in the banking industry. At YourBanK, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default hero