import React from 'react'
import Abstract from '../assets/Abstract-Design-course.png'

const hero = (props) => {
  return (
    <div className='w-full flex mx-auto justify-center relative my-7'>
        
        <div 
          data-aos="fade-up"
          style={{ 
            backgroundImage: `url(${Abstract})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'right top', 
            backgroundSize: '250px' 
          }} 
          className='w-full bg-[#1D1C1D] border border-[#262626] rounded-3xl rounded-8xl p-6 flex flex-col-reverse md:relative items-center md:items-start'
        >

          <div className="text-center md:text-left xl:w-[55%] lg:w-[58%] md:w-[65%] md:absolute md:left-4 md:mt-6 lg:mt-0 lg:top-6 lg:left-6 md:z-20 md:p-8 xl:p-14 lg:p-8 p-6 bg-[#191919] rounded-3xl md:rounded-tr-none md:rounded-bl-none relative -mb-10 md:-mb-0 -top-12 md:-top-0 z-10" data-aos="fade-up">
            <p className='md:text-[16px] text-[14px] font-[500] text-white'>{props.greet}</p>
            <h1 className="text-white text-[24px] md:text-[30px] font-bold mb-4">
              {props.start} <span className="text-[#CBFE33]">{props.next}</span> {props.last}
            </h1>
            <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>
              {props.text}
            </p>
          </div>


          <div className="w-full md:w-[57%] md:ml-auto">
            <img 
              data-aos="fade-up"
              src={props.image} 
              alt="YourBank Careers"
              className="w-full md:h-[450px] lg:h-[480px] object-cover grayscale hover:grayscale-0 transition duration-500 rounded-2xl"
            />
          </div>
        </div>
 
    </div>
  )
}

export default hero

