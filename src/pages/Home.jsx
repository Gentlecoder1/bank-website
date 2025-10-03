import React, {useState, useRef, useEffect} from 'react'
import checkIcon from '../assets/check-icon.png'
import homeAbstract from '../assets/home-abstract.png'
import home2Abstract from '../assets/home2-abstract.png'
import Homehero from '../assets/home-hero.svg'
import Save from '../assets/save-acc.svg'
import Loan from '../assets/loan.svg'
import Check from '../assets/check-acc.svg'
import Abstract from '../assets/Abstract-Design-CTA.png'
import Abstract2 from '../assets/Abstract2.png'
import Case1 from '../assets/case1.png'
import Case2 from '../assets/case2.png'
import Case3 from '../assets/case3.png'
import Case4 from '../assets/case4.png'
import Case5 from '../assets/case5.png'
import Case6 from '../assets/case6.png'
import Case7 from '../assets/case7.png'
import Case8 from '../assets/case8.png'
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
            image: Check,
            title: "Checking Accounts",
            body: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
        },
        {
            image: Save,
            title: "Saving Accounts",
            body: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
        },
        {
            image: Loan,
            title: "Loans and Mortgages",
            body: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
        }
    ];

    // business
    const businessFeatures = [
        {
            image: Check,
            title: "Business Accounts",
            body: "Manage your company’s cash flow with ease through tailored business accounts designed for entrepreneurs and enterprises."
        },
        {
            image: Save,
            title: "Merchant Services",
            body: "Expand your sales capabilities with our payment processing, POS systems, and secure online transaction options."
        },
        {
            image: Loan,
            title: "Commercial Loans",
            body: "Fuel your business growth with our flexible commercial loans, available for working capital, expansion, and investments."
        }
    ];

   const data = toggle === 0 ? individualFeatures : businessFeatures;

   const individualCases = [
    {
        image: Case5,
        text: 'Managing Personal Finances'
    },
    {
        image: Case6,
        text: 'Saving for the Future'
    },
    {
        image: Case7,
        text: 'Homeownership'
    },
    {
        image: Case8,
        text: 'Education Funding'
    }
   ]

   const businessCases = [
    {
        image: Case1,
        text: 'Startups and Entrepreneurs'
    },
    {
        image: Case2,
        text: 'Cash Flow Management'
    },
    {
        image: Case3,
        text: 'Business Expansion'
    },
    {
        image: Case4,
        text: 'Payment Solutions'
    }
   ]


  return (
    <div className=' mx-auto' style={{ backgroundImage: `url(${homeAbstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '50%' }}>
        <Nav />

        <div className='xl:w-[1280px] lg:w-full md:w-full px-5 md:px-15 flex flex-col mx-auto justify-center relative pt-40'>
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
        
                    <button className='bg-[#CBFE33] w-fit h-fit text-black md:rounded-full rounded-full px-4 py-2 mt-3 transition-all duration-300 transform hover:scale-105'>Open Account</button>
                </div>
                
                <div className='md:w-[50%] w-[100%]' style={{ backgroundImage: `url(${home2Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '50%'}}>
                    <div className='w-full'>
                        <img src={Homehero} className='w-full h-full' alt="hero" />
                    </div>
                </div>
            </div>

            <div className='space-y-4 my-14'>
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

                <div className="md:flex text-white gap-2 md:gap-14 space-y-7 md:space-y-0 md:items-stretch">
                    {data.map((feature, index) => (
                    <>
                        <div key={`feature-${index}`} className="space-y-3 px-2 flex flex-col text-center items-center flex-1">
                            <img src={feature.image} alt="Icon" />
                            <h1 className="text-xl font-bold">{feature.title}</h1>
                            <p className="text-sm text-gray-300">{feature.body}</p>
                        </div>

                        {/* line between cards */}
                        {index < data.length - 1 && (
                        <>
                            {/* Mobile horizontal line */}
                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch"></div>
                        </>
                        )}
                    </>
                    ))}
                </div>
            </div>

            <div className='space-y-8 my-14 text-white'>
                <div className='text-center lg:text-left space-y-3'>
                    <h1 className='text-3xl font-bold text-[#CBFE33]'>Use Cases</h1>
                    <p className='text-gray-300 text-sm'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                
                <div className='lg:flex lg:gap-16'>
                    <div style={{ backgroundImage: `url(${Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}} className='lg:w-[50%] rounded-xl p-5 grid grid-cols-2 gap-4 bg-[#1F1F1E]'>
                        {individualCases.map((individual) => (
                            <div className='flex flex-col items-center justify-center rounded-xl p-4 border-[1px] border-gray-500 bg-[#1D1C1D]'>
                                <img src={individual.image} alt="" />
                                <p className='text-center'>{individual.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='lg:w-[50%] mt-10 lg:mt-0 flex flex-col items-center lg:block space-y-2'>
                        <div className='space-y-3 text-center lg:text-left'>
                            <h1 className='text-xl font-bold'>For Individuals</h1>
                            <p className='text-gray-300 text-sm'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                        </div>

                        <div className='lg:flex space-y-2 p-6'>
                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>78%</h1>
                                <p className='text-gray-300 text-sm'>Secure Retirement Planning</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch"></div>

                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>63%</h1>
                                <p className='text-gray-300 text-sm'>Manageable Debt Consolidation</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch"></div>

                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>91%</h1>
                                <p className='text-gray-300 text-sm'>Reducing financial burdens</p>
                            </div>
                        </div>

                        <button className='text-sm font-bold border border-gray-600 rounded-full py-2 px-4 mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-[#CBFE33] hover:text-black'>
                            Load more
                        </button>
                    </div>
                </div>

                <div className='mt-10 lg:flex flex-row-reverse lg:gap-16'>
                    <div style={{ backgroundImage: `url(${Abstract2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '30%'}} className='lg:w-[50%] rounded-xl p-5 grid grid-cols-2 gap-4 bg-[#1F1F1E]'>
                        {businessCases.map((business) => (
                            <div className='flex flex-col items-center justify-center rounded-xl p-4 border-[1px] border-gray-500 bg-[#1D1C1D]'>
                                <img src={business.image} alt="" />
                                <p className='text-center'>{business.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='lg:w-[50%] mt-10 lg:mt-0 flex flex-col items-center lg:block space-y-2'>
                        <div className='space-y-3 text-center lg:text-left'>
                            <h1 className='text-xl font-bold'>For Business</h1>
                            <p className='text-gray-300 text-sm'> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                        </div>

                        <div className='lg:flex space-y-2 p-6'>
                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>65%</h1>
                                <p className='text-gray-300 text-sm'>Cash Flow Management</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch"></div>

                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>70%</h1>
                                <p className='text-gray-300 text-sm'>Drive Business Expansion</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch"></div>

                            <div className='text-center space-y-2 p-6'>
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>45%</h1>
                                <p className='text-gray-300 text-sm'>Streamline payroll processing</p>
                            </div>
                        </div>

                        <button className='text-sm font-bold border border-gray-600 rounded-full py-2 px-4 mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-[#CBFE33] hover:text-black'>
                            Load more
                        </button>
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