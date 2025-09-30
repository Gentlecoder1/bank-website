import React, {useState, useRef} from 'react'
import Quote from '../assets/quote-Icon.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

  const [toggle, setToggle] = useState(0)
  const sliderRef = useRef(null);
  
  const toggleLeft = () => {
      setToggle(0)
  }

  const toggleRight = () => {
      setToggle(1)
  }

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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

          <div className='flex items-center justify-center'>
            <button 
              onClick={goToPrev}
              className='hidden md:block rounded-full w-fit h-fit border-[1px] border-gray-400 bg-[#353335] p-2 cursor-pointer hover:bg-gray-500 mr-4'
            >
              <GoArrowLeft size={20} color='#CBFE33' />
            </button>

            <div className='mt-8 mb-6 text-sm relative w-full max-w-6xl mx-auto overflow-hidden'>
              {/* Fade overlay for left and right edges */}
              <div className='absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#191919] from-0% via-transparent via-15% to-85% to-[#191919]'></div>

              <div className='slider-container'>
                <Slider ref={sliderRef} {...settings}>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>
                  <div className='px-4'>
                    <div className='space-y-4 p-5 text-center border border-gray-500 rounded-xl bg-[#191919] mx-2'>
                      <div className='flex space-x-5 w-full mx-auto items-center'>
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                        <img src={Quote} alt="Quote" />
                        <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                      </div>
                      <p>I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                      <p className='text-xl text-[#CBFE33]'>John D</p>
                    </div>
                  </div>

                  
                </Slider>
              </div>
            </div>

            <button 
              onClick={goToNext}
              className='hidden md:block rounded-full w-fit h-fit border-[1px] border-gray-400 bg-[#353335] p-2 cursor-pointer hover:bg-gray-500 ml-4'
            >
              <GoArrowRight size={20} color='#CBFE33' />
            </button>
          </div>

          {/* mobile view buttons */}
          <div className='flex gap-3 justify-center md:hidden'>
            <button 
              onClick={goToPrev}
              className='rounded-full bg-[#353335] border-[1px] border-gray-400 p-2 cursor-pointer hover:bg-gray-500'
            >
              <GoArrowLeft size={20} color='#CBFE33' />
            </button>
            <button 
              onClick={goToNext}
              className='rounded-full bg-[#353335] border-[1px] border-gray-400 p-2 cursor-pointer hover:bg-gray-500'
            >
              <GoArrowRight size={20} color='#CBFE33' />
            </button>
          </div>
        </div>
    </div>
  )
}


// const data = [
//   {
//     testimony: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
//     name: 'Sara T'
//   },
//   {
//     testimony: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
//     name: 'John D'
//   },
//   {
//     testimony: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
//     name: 'Emily G'
//   },
//   {
//     testimony: '',
//     name: ''
//   }
// ]

export default Testimonials