import React, {useState, useRef, useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GoArrowUpRight } from "react-icons/go";
import checkIcon from '../assets/check-Icon.png'
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
import Testimonials from '../components/Testimonials.jsx'
import OpenAccount from '../components/OpenAccount.jsx'
import Faqs from '../components/Faqs.jsx'

const Home = () => {
  const [toggle, setToggle] = useState(0)
  const [click, setClick] = useState(0)

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

  // Refresh AOS when toggle state changes
  useEffect(() => {
    setTimeout(() => {
      Aos.refreshHard();
    }, 100);
  }, [toggle])

  // Refresh AOS when click state changes for features section
  useEffect(() => {
    setTimeout(() => {
      Aos.refreshHard(); // Use refreshHard for dynamic content
    }, 150);
  }, [click])

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

   const online = [
        {
            title: '24/7 Account Access',
            text: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'
        },
        {
            title: 'Mobile Banking App',
            text: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'
        },
        {
            title: 'Secure Transactions',
            text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'
        },
        {
            title: 'Bill Pay and Transfers',
            text: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'
        },
   ]

   const financial = [
        {
            title: "Budgeting & Expense Tracking",
            text: "Take control of your finances with built-in budgeting tools. Track your income, expenses, and set spending limits to stay on top of your goals."
        },
        {
            title: "Savings Goals",
            text: "Plan for the future with customizable savings goals. Whether it’s a vacation, emergency fund, or new home, our tools help you track progress along the way."
        },
        {
            title: "Investment Insights",
            text: "Grow your wealth with personalized investment recommendations and market insights designed to match your risk tolerance and long-term objectives."
        },
        {
            title: "Credit Score Monitoring",
            text: "Stay informed about your credit health with real-time credit score monitoring, alerts for changes, and tips to improve your financial profile."
        }
   ];

   const support = [
        {
            title: "24/7 Live Chat",
            text: "Connect instantly with our customer care team through live chat support, available around the clock to answer your questions."
        },
        {
            title: "Dedicated Phone Line",
            text: "Speak directly with a support representative via our toll-free customer service hotline for personalized assistance."
        },
        {
            title: "Email Support",
            text: "Submit your queries via email and receive detailed responses from our support specialists within one business day."
        },
        {
            title: "Help Center & FAQs",
            text: "Access a comprehensive library of articles, tutorials, and FAQs to quickly find answers and solutions on your own."
        }
   ];

   const datasets = [online, financial, support];
   const datum = datasets[click];

  return (
    <div className='mx-auto' style={{ backgroundImage: `url(${homeAbstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '50%' }}>

        <div className='w-full flex flex-col mx-auto items-center relative pt-25'>
            {/* hero */}
            <div className='text-white md:flex md:text-left text-center gap-20 py-8 xl:w-[1280px] lg:w-full md:w-full w-full mx-5'>

                <div className='space-y-4 md:space-y-14 w-[100%] md:w-[50%] mb-20 flex flex-col items-center md:block p-6' data-aos="fade-up">
                    <div className='bg-[#262727] rounded-full px-5 py-2 flex gap-1 items-center justify-center w-fit'>
                        <img src={checkIcon} className='w-7 h-7' alt="checked" />
                        <p className='sm:text-sm text-[12px]'>No LLC Required, No Credit Check</p>
                    </div>

                    <div className='space-y-3'>
                        <h1 className='mb-3 text-2xl sm:text-3xl lg:text-4xl font-[500]'>Welcome to YourBanK Empowering Your <b className='text-[#CBFE33]'>Financial Journey</b></h1>
                        <p className='mb-3 md:text-[18px] text-[16px] font-[300] text-[#B3B3B3]'>A YourBanK, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                    </div>
                    <a className='transition-all duration-300 transform hover:scale-105 flex items-center mx-auto md:mx-0 mt-3 md:mt-0 w-fit'href="/SignUp">
                        <button className='bg-[#CBFE33] w-fit h-fit text-black rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105' data-aos="fade-up">Open Account</button>
                    </a>
                </div>
              
                <div className='md:w-[50%] w-[100%] p-6' style={{ backgroundImage: `url(${home2Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '50%'}} data-aos="fade-up">
                    <div className='w-full'>
                        <img src={Homehero} className='w-full h-full' alt="hero" data-aos="fade-up" data-aos-delay="200" />
                    </div>
                </div>
            </div>
            
            {/* product */}
            <div className='py-8 mb-10 space-y-8 xl:w-[1280px] lg:w-full md:w-full w-full mx-5'>
                <div className='px-6 sm:px-8 space-y-5 md:space-y-0 md:space-x-5 md:flex justify-between items-center md:text-left text-center text-white'>
                    <div className='xl:max-w-[700px] lg:max-w-[500px] md:max-w-[400px] space-y-3' data-aos="fade-up">
                        <h1 className='text-3xl font-bold'>Our <b className='text-[#CBFE33]'>Products</b></h1>
                        <p className='mb-3 md:text-[17px] text-[15px] font-[300] text-[#B3B3B3]'>Experience a host of powerful features of YourBanK, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                    </div>

                    <div className={`rounded-full mx-auto md:mx-0 md:ml-auto border border-[#CBFE33] flex px-3 py-2 w-fit h-fit space-x-8 md:space-x-0 lg:space-x-2 text-[15px] `} data-aos="fade-up">
                        <div
                            onClick={() => setToggle(0)}
                            className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
                        >
                            For Individuals
                        </div>

                        <div
                            onClick={() => setToggle(1)}
                            className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 1 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
                        >
                            For Business
                        </div>
                    </div>
                </div>

                <div className="md:flex text-white gap-2 md:gap-14 space-y-7 md:space-y-0 md:items-stretch px-6 sm:px-8">
                    {data.map((feature, index) => (
                        <React.Fragment key={`feature-${toggle}-${index}`}>

                            <div className="flex px-2">
                                <div className="space-y-3 flex flex-col text-center items-center pr-4 pb-4 md:pb-0" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <img src={feature.image} alt="Icon" />
                                    <h1 className="text-xl font-bold">{feature.title}</h1>
                                    <p className="mb-3 md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]">{feature.body}</p>
                                </div>
                            </div>

                            {/* lines */}
                            {index < data.length - 1 && (
                                <>
                                    {/* Desktop vertical lines */}
                                    <div className="hidden md:flex w-2 items-center justify-center" data-aos="fade-up" data-aos-delay={index * 100 + 50}>
                                        <div className="w-[1px] h-full line-dashed-y" />
                                    </div>

                                    {/* Mobile horizontal lines */}
                                    <div className="md:hidden w-full" data-aos="fade-up" data-aos-delay={index * 100 + 50}>
                                        <div className="h-[1px] w-full line-dashed-x my-4" />
                                    </div>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* use cases */}
            <div className='py-6 mb-4 space-y-8 text-white xl:w-[1280px] lg:w-full md:w-full w-full mx-5'>
                <div className='text-center lg:text-left space-y-3 px-6 sm:px-8' data-aos="fade-up">
                    <h1 className='text-3xl font-bold text-[#CBFE33]'>Use Cases</h1>
                    <p className='md:text-[18px] text-[16px] font-[300] text-[#B3B3B3]'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                
                <div className='lg:flex lg:gap-16 px-6 sm:px-8'>
                    <div style={{ backgroundImage: `url(${Abstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '30%'}} className='lg:w-[50%] rounded-xl p-5 grid grid-cols-2 gap-4 bg-[#1F1F1E]' data-aos="fade-up">
                        {individualCases.map((individual) => (
                            <div className='flex flex-col items-center justify-center rounded-xl p-4 border border-[#262626] bg-[#1D1C1D]' data-aos="fade-up">
                                <img src={individual.image} alt="" />
                                <p className='text-center md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>{individual.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='lg:w-[50%] mt-10 lg:mt-0 flex flex-col items-center lg:block space-y-2'>
                        <div className='space-y-3 text-center lg:text-left' data-aos="fade-up">
                            <h1 className='text-xl font-bold'>For Individuals</h1>
                            <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                        </div>

                        <div className='lg:flex space-y-2 p-6'>
                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>78%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Secure Retirement Planning</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden" data-aos="fade-up"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch" data-aos="fade-up"></div>

                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>63%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Manageable Debt Consolidation</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden" data-aos="fade-up"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch" data-aos="fade-up"></div>

                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>91%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Reducing financial burdens</p>
                            </div>
                        </div>
                        
                        <div className='transition-all duration-300 transform hover:scale-105 flex items-center w-fit'>
                            <button className='text-sm font-bold border border-gray-600 rounded-full py-2 px-4 mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-[#CBFE33] hover:text-black' data-aos="fade-up">
                            Load more
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-10 lg:flex flex-row-reverse lg:gap-16 px-6 sm:px-8'>
                    <div style={{ backgroundImage: `url(${Abstract2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', backgroundSize: '30%'}} className='lg:w-[50%] rounded-xl p-5 grid grid-cols-2 gap-4 bg-[#1F1F1E]' data-aos="fade-up">
                        {businessCases.map((business) => (
                            <div className='flex flex-col items-center justify-center rounded-xl p-4 border border-[#262626] bg-[#1D1C1D]' data-aos="fade-up">
                                <img src={business.image} alt="" />
                                <p className='text-center md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>{business.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='lg:w-[50%] mt-10 lg:mt-0 flex flex-col items-center lg:block space-y-2'>
                        <div className='space-y-3 text-center lg:text-left' >
                            <h1 className='text-xl font-bold' data-aos="fade-up">For Business</h1>
                            <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' data-aos="fade-up"> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                        </div>

                        <div className='lg:flex space-y-2 p-6'>
                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>65%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Cash Flow Management</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden" data-aos="fade-up"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch" data-aos="fade-up"></div>

                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>70%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Drive Business Expansion</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-400 opacity-45 md:hidden" data-aos="fade-up"></div>
                            {/* Desktop vertical line */}
                            <div className="hidden md:block w-[1px] bg-gray-400 opacity-45 self-stretch" data-aos="fade-up"></div>

                            <div className='text-center space-y-2 p-6' data-aos="fade-up">
                                <h1 className='text-4xl font-bold text-[#CBFE33]'>45%</h1>
                                <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Streamline payroll processing</p>
                            </div>
                        </div>

                        <div className='transition-all duration-300 transform hover:scale-105 flex items-center w-fit'>
                            <button className='text-sm font-bold border border-gray-600 rounded-full py-2 px-4 mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-[#CBFE33] hover:text-black' data-aos="fade-up">
                                Load more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* features */}
            <div className='py-16 space-y-8 text-white xl:w-[1280px] lg:w-full md:w-full w-full mx-5'>
                <div className='text-center lg:text-left xl:max-w-[700px] lg:max-w-[500px] space-y-3 px-6 sm:px-8' data-aos="fade-up">
                    <h1 className='text-3xl font-bold'><b className='text-[#CBFE33]'>Our</b> Features</h1>
                    <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                </div>

                <div className='lg:flex gap-6 space-y-4 px-6 sm:px-8'>
                    <div className='lg::w-[20%] p-6 lg:p-7 xl:p-10 bg-[#1D1C1D] rounded-2xl flex lg:flex-col sm:justify-center whitespace-nowrap overflow-auto scrollbar-hide space-x-5 lg:space-y-5 h-fit'>
                        
                        <div className='transition-all duration-300 transform hover:scale-105 flex items-center w-full'>
                            <div onClick={() => setClick(0)} className={`text-center w-full border cursor-pointer rounded-full text-sm px-3 py-2 ${click === 0 ? 'border-[#CBFE33] text-[#CBFE33]' : 'border-gray-400'}`} data-aos="fade-up">Online Banking</div>
                        </div>    

                        <div className='transition-all duration-300 transform hover:scale-105 flex items-center w-full'>
                            <div onClick={() => setClick(1)} className={`text-center w-full border cursor-pointer rounded-full text-sm px-3 py-2 ${click === 1 ? 'border-[#CBFE33] text-[#CBFE33]' : 'border-gray-400'}`} data-aos="fade-up">Financial Tools</div>
                        </div>    

                        <div className='transition-all duration-300 transform hover:scale-105 flex items-center w-full'>
                            <div onClick={() => setClick(2)} className={`text-center w-full border cursor-pointer rounded-full text-sm px-3 py-2 ${click === 2 ? 'border-[#CBFE33] text-[#CBFE33]' : 'border-gray-400'}`} data-aos="fade-up">Customer Support</div>
                        </div>    
                    </div>

                    <div className='lg:grid grid-cols-2 gap-5 lg:w-[80%] space-y-5 lg:space-y-0'>
                        {datum.map((service, index) => (
                            <div className='transition-all duration-300 transform hover:scale-105 flex items-center'>
                                <div key={`service-${click}-${index}`} className='bg-[#1D1C1D] rounded-xl p-8 space-y-6 h-full' data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className='flex justify-between items-center' data-aos="fade-up">
                                        <h1 className='font-bold'>{service.title}</h1>
                                        <GoArrowUpRight size={20} color='#CBFE33' />
                                    </div>
                                    <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' data-aos="fade-up">{service.text}</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>

        <Faqs />
        <Testimonials />
        <OpenAccount />
    </div>
  )
}

export default Home