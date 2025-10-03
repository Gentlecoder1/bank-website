import React, {useState, useRef, useEffect} from 'react'
import checkIcon from '../assets/check-icon.png'
import homeAbstract from '../assets/home-abstract.png'
import home2Abstract from '../assets/home2-abstract.png'
import Homehero from '../assets/home-hero.svg'
import Save from '../assets/save-acc.svg'
import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import OpenAccount from '../components/OpenAccount.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Faqs from '../components/Faqs.jsx'

const Home = () => {

  
  const [toggle, setToggle] = useState(0)

  const toggleLeft = () => {
    setToggle(0)
  }

  const toggleRight = () => {
      setToggle(1)
  }

    // individual
    const individualFeatures = [
        {
            title: "Checking Accounts",
            body: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
        },
        {
            title: "Saving Accounts",
            body: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
        },
        {
            title: "Loans and Mortgages",
            body: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
        }
    ];

    // business
    const businessFeatures = [
        {
            title: "Business Accounts",
            body: "Manage your company’s cash flow with ease through tailored business accounts designed for entrepreneurs and enterprises."
        },
        {
            title: "Merchant Services",
            body: "Expand your sales capabilities with our payment processing, POS systems, and secure online transaction options."
        },
        {
            title: "Commercial Loans",
            body: "Fuel your business growth with our flexible commercial loans, available for working capital, expansion, and investments."
        }
    ];

   const data = toggle === 0 ? individualFeatures : businessFeatures;


  return (
    <div className=' mx-auto' style={{ backgroundImage: `url(${homeAbstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '50%' }}>
        <Nav />

        <div className='xl:w-[1280px] lg:w-full md:w-full flex flex-col mx-auto justify-center relative pt-40'>
            <div className='text-white md:flex md:text-left text-center gap-20 mx-5'>

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

            <div className='space-y-4'>
                <div className='p-8 space-y-5 md:space-y-0 md:space-x-10 md:flex justify-between md:text-left text-center text-white'>
                    <div className='xl:max-w-[700px] md:max-w-[500px] space-y-3'>
                    <h1 className='text-3xl font-bold'>Our <b className='text-[#CBFE33]'>Features</b></h1>
                    <p className='text-gray-300 text-sm'>Experience a host of powerful features of YourBanK, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
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

                <div className="lg:flex text-white px-5 lg:px-15 gap-2 lg:gap-14 space-y-7 lg:space-y-0 lg:items-stretch">
                    {data.map((feature, index) => (
                    <div
                        key={index}
                        className="space-y-3 px-2 lg:flex flex-col text-center items-center flex-1"
                    >
                        <img src={Save} alt="Save-Icon" />
                        <h1 className="text-xl font-bold">{feature.title}</h1>
                        <p className="text-sm text-gray-300">{feature.body}</p>

                        {/* Separator between cards (mobile & desktop) */}
                        {index < data.length - 1 && (
                        <>
                            <div className="w-full h-[1px] bg-gray-400 opacity-45 lg:hidden"></div>
                            <div className="hidden lg:block w-2 border-2 border-gray-400 opacity-45 mx-2"></div>
                        </>
                        )}
                    </div>
                    ))}
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