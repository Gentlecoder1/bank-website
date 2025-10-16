import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <div style={{ backgroundImage: `url(${Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '200px' }} className='p-8 lg:p-10 xl:p-15 text-white xl:w-[1280px] lg:w-full md:w-full md:flex justify-between md:text-left text-center lg:mx-16 mx-5 border border-[#262626] rounded-3xl items-center' data-aos="fade-up">
            <div className='lg:max-w-[600px] md:max-w-[500px]' data-aos="fade-up" data-aos-delay="100">
                <h1 className='mb-3 text-[28px] font-[500]'>Start you financial journey with <b className='text-[#CBFE33]'>YourBank today!</b></h1>
                <p className='mb-3 md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>

            <Link
              to="/SignUp"
              onMouseEnter={() => import('../pages/SignUp.jsx')}
              className='bg-[#CBFE33] w-fit h-fit text-black rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 md:ml-auto mt-3 md:mt-0'
              data-aos="fade-up"
            >
              Open Account
            </Link>
        </div>
    </div>
  )
}

export default OpenAccount