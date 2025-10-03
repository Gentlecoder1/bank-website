import React, { useEffect } from 'react'
import Abstract from '../assets/Abstract-Design-CTA.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const OpenAccount = () => {

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      offset: 50,
      delay: 0,
      disable: false
    });
  }, [])

  return (
    <div className='w-full flex mx-auto justify-center relative my-7'>
        <div style={{ backgroundImage: `url(${Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '150px' }} className='p-8 text-white xl:w-[1280px] lg:w-full md:w-full md:flex md:text-left text-center justify-between lg:mx-16 mx-5 border-[1px] border-gray-400 rounded-3xl items-center md:space-x-8' data-aos="fade-up">
            <div className='lg:max-w-[700px] md:max-w-[500px]' data-aos="fade-up" data-aos-delay="100">
                <h1 className='mb-3 text-2xl'>Start you financial journey with <b className='text-[#CBFE33]'>YourBank today!</b></h1>
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>

            <button className='bg-[#CBFE33] w-fit h-fit text-black md:rounded-2xl rounded-full px-4 py-2 mt-3 transition-all duration-300 transform hover:scale-105' data-aos="fade-up" data-aos-delay="200">Open Account</button>
        </div>
    </div>
  )
}

export default OpenAccount