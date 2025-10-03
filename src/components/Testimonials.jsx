import React, {useState, useRef, useEffect} from 'react'
import Quote from '../assets/quote-Icon.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {

  const [toggle, setToggle] = useState(0)
  
  const [slidesToShow, setSlidesToShow] = useState(3)
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   Aos.init({
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     once: false,
  //     mirror: false,
  //     offset: 50,
  //     delay: 0,
  //     disable: false,
  //     startEvent: 'DOMContentLoaded'
  //   });
  // }, [])

  // // Refresh AOS when toggle state changes
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (typeof Aos !== 'undefined') {
  //       Aos.refresh();
  //     }
  //   }, 300);
  //   return () => clearTimeout(timer);
  // }, [toggle])

  // Custom hook to detect screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1); // Mobile
      } else if (width < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };

    // Set initial value
    updateSlidesToShow();

    // Add event listener
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);
  
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
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: false,
    centerMode: slidesToShow === 1,
    centerPadding: slidesToShow === 1 ? '20px' : '0px',
  };

  const testimonials = [
    {
      text: "I recently started my own business, and YourBanK has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
      name: "John D"
    },
    {
      text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
      name: "Sara T"
    },
    {
      text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      name: "Emily G"
    },
    {
      text: "Banking with YourBank feels like having a financial expert in my pocket. Their tools are intuitive and make managing my money effortless.",
      name: "Mike R"
    },
    {
      text: "YourBank has completely transformed how I handle my finances. Their user-friendly app and quick support team make every transaction effortless.",
      name: "Lisa K"
    }
  ];

  return (
    <div className='w-full flex mx-auto justify-center relative my-7'>
        <div className='text-white xl:w-[1280px] lg:w-full md:w-full w-full lg:mx-16 mx-5 p-6'>
          <div className='space-y-5 md:space-y-0 md:space-x-10 md:flex justify-between md:text-left text-center'>
            <div className='xl:max-w-[700px] md:max-w-[500px] space-y-3'>
              <h1 className='text-3xl font-bold'>Our <b className='text-[#CBFE33]'>Testimonials</b></h1>
              <p className='text-gray-300 text-sm'>Discoverhow YourBanK has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
            </div>

            <div className={`rounded-full m-auto border-[1px] border-gray-500 flex px-3 py-2 w-fit h-fit space-x-8 md:space-x-2`}>
              <div
                onClick={toggleLeft}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                For Individuals
              </div>

              <div
                onClick={toggleRight}
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
              {/* Fade overlay for left and right edges - Equal fade width */}
              <div className='absolute inset-0 pointer-events-none z-10 [background:linear-gradient(to_right,#191919_0%,transparent_25%,transparent_75%,#191919_100%)]'></div>

              <div className='slider-container'>
                <Slider ref={sliderRef} {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className='px-4 h-full'>
                      <div className={`testimonial-card h-[320px] w-full p-5 text-center border border-gray-500 md:border-0 rounded-xl bg-[#191919] flex flex-col justify-between ${
                        slidesToShow === 1 ? 'md:max-w-full max-w-[500px] mx-auto' : 'mx-2'
                      }`}>
                        <div className='flex-grow flex flex-col justify-center'>
                          <div className='flex space-x-5 w-full mx-auto items-center mb-4'>
                            <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                            <img src={Quote} alt="Quote" />
                            <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                          </div>
                          <p className='text-sm leading-relaxed flex-grow flex items-center justify-center text-center px-2'>
                            {testimonial.text}
                          </p>
                        </div>
                        <p className='text-xl text-[#CBFE33] mt-4 flex-shrink-0'>
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  ))}
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

export default Testimonials