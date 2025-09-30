import React, {useState} from 'react'
import Quote from '../assets/quote-Icon.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {

  const [toggle, setToggle] = useState(0)
  
  const toggleLeft = () => {
      setToggle(0)
  }

  const toggleRight = () => {
      setToggle(1)
  }

  return (
    <div  className='w-full flex mx-auto justify-center relative my-7'>
        <div className='text-white xl:w-[1280px] lg:w-full md:w-full w-full lg:mx-16 mx-5 p-6'>
          <div className='space-y-5 md:space-y-0 md:space-x-10 md:flex justify-between md:text-left text-center'>
            <div className='xl:max-w-[700px] md:max-w-[500px] md:space-y-3'>
              <h1 className='text-3xl font-bold'>Our <b className='text-[#CBFE33]'>Testimonials</b></h1>
              <p className='text-gray-300'>Discoverhow YourBanK has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
            </div>

            <div className={`rounded-full m-auto border-[1px] border-gray-500 flex px-3 py-2 w-fit h-fit space-x-8 md:space-x-2`}>
              <div
                onClick={(toggleLeft)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                For Individuals
              </div>

              <div
                onClick={(toggleRight)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 1 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                For Business
              </div>
            </div>
          </div>

          <div className='flex items-center'>
            <button className='hidden md:block rounded-full w-fit h-fit border-[1px] border-gray-400 p-2'><GoArrowLeft size={20} color='#CBFE33' /></button>

            <div className='mt-8 mb-6 text-sm relative mx-auto flex overflow-x-hidden md:max-w-[85%] md:border-0 border-[1px] border-gray-500 rounded-xl'>
              {/* Fade overlay for left and right edges - Equal fade width */}
              <div className='absolute inset-0 pointer-events-none z-10 [background:linear-gradient(to_right,#191919_0%,transparent_20%,transparent_80%,#191919_100%)]'></div>
              


              <div className='space-y-4 px-7 lg:max-w-1/3 md:max-w-1/2 max-w-[100%] flex flex-col flex-shrink-0 p-5 text-center'>

                <div className='flex space-x-5 w-full mx-auto items-center'>
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                  <img src={Quote} alt="Quote" />
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                </div>

                <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>

                <p className='text-xl text-[#CBFE33]'>John D</p>
              </div>

              <div className='space-y-4 px-7 lg:max-w-1/3 md:max-w-1/2 max-w-[100%] flex flex-col flex-shrink-0 p-5 text-center'>

                <div className='flex space-x-5 w-full mx-auto items-center'>
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                  <img src={Quote} alt="Quote" />
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                </div>

                <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>

                <p className='text-xl text-[#CBFE33]'>John D</p>
              </div>

              <div className='space-y-4 px-7 lg:max-w-1/3 md:max-w-1/2 max-w-[100%] flex flex-col flex-shrink-0 p-5 text-center'>

                <div className='flex space-x-5 w-full mx-auto items-center'>
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                  <img src={Quote} alt="Quote" />
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                </div>

                <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>

                <p className='text-xl text-[#CBFE33]'>John D</p>
              </div>
              <div className='space-y-4 px-7 lg:max-w-1/3 md:max-w-1/2 max-w-[100%] flex flex-col flex-shrink-0 p-5 text-center'>

                <div className='flex space-x-5 w-full mx-auto items-center'>
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                  <img src={Quote} alt="Quote" />
                  <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                </div>

                <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>

                <p className='text-xl text-[#CBFE33]'>John D</p>
              </div>

            </div>

            <button className='hidden md:block rounded-full w-fit h-fit border-[1px] border-gray-400 p-2'><GoArrowRight size={20} color='#CBFE33' /></button>
          </div>


          <div className='flex gap-3 justify-center md:hidden'>
            <button className='rounded-full bg-[#353335] border-[1px] border-gray-400 p-2'><GoArrowLeft size={20} color='#CBFE33' /></button>
            <button className='rounded-full bg-[#353335] border-[1px] border-gray-400 p-2'><GoArrowRight size={20} color='#CBFE33' /></button>
          </div>
        </div>
    </div>
  )
}

export default Testimonials