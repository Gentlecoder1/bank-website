import React from 'react'
import Abstract from '../assets/Abstract-Design-course.png'
import Career from '../assets/career-image.png'

const hero = () => {
  return (
    <div className='w-full flex mx-auto justify-center relative my-7'>
        {/* Parent container with background image positioned at top-right */}
        <div 
          style={{ 
            backgroundImage: `url(${Abstract})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'right top', 
            backgroundSize: '250px' 
          }} 
          className='xl:w-[1279px] md:w-full bg-[#1D1C1D] lg:mx-16 mx-5 border-2 border-gray-100 md:rounded-2xl rounded-3xl p-8 md:p-7 lg:p-12 flex flex-col-reverse md:relative items-center md:items-start'
        >

          {/* Text div - Mobile: centered & stacked below image, Desktop: top-left overlap */}
          <div className="text-center md:text-left xl:w-[55%] lg:w-[58%] md:w-[65%] md:absolute md:left-8 md:mt-6 lg:mt-0 lg:top-12 lg:left-12 md:z-20 md:p-8 lg:p-14 p-6 bg-[#191919] rounded-3xl md:rounded-tr-none md:rounded-bl-none relative -top-12 md:-top-0 z-10">
            <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              Welcome to <span className="text-[#92B92C]">YourBank</span> Careers!
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Join our team and embark on a rewarding journey in the banking industry.
              At YourBank, we are committed to fostering a culture of excellence and 
              providing opportunities for professional growth. With a focus on innovation, 
              customer service, and integrity, we strive to make a positive impact in the 
              lives of our customers and communities. Join us today and be a part of our 
              mission to shape the future of banking.
            </p>
          </div>

          {/* Image div - Mobile: top of stack, Desktop: right side with extended height */}
          <div className="w-full md:w-[57%] md:ml-auto">
            <img 
              src={Career} 
              alt="YourBank Careers"
              className="w-full md:h-[450px] lg:h-[480px] object-cover grayscale hover:grayscale-0 transition duration-500 rounded-2xl"
            />
          </div>
        </div>
 
    </div>
  )
}

export default hero

