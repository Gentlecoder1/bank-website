import React from 'react'
import security from '../assets/security-hero-image.png'
import protect1 from '../assets/case1.png'
import protect2 from '../assets/case2.png'
import protect3 from '../assets/case3.png'
import protect4 from '../assets/case4.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Faqs from '../components/Faqs.jsx'
import Footer from '../components/Footer.jsx'

const Security = () => {

    const heroText = "At YourBank, we understand the importance of keeping you financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, security is our utmost priority."

   const protect = [
    {
      image: protect1,
      title: "Secure Online Banking Platform",
      description: "Our online banking platform is built with multiple layers of security to safeguard you infomation. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transaction."
    },
    {
      image: protect2,
      title: "Multi-Factor Authentication",
      description: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account."
    },
    {
      image: protect3,
      title: "Fraud Monitoring",
      description: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind."
    },
    {
      image: protect4,
      title: "Secure Mobile Banking",
      description: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."
    }
  ]



  return (
    <div className='flex flex-col items-center'>
        <Nav />

        <div className='xl:w-[1280px] lg:mx-8 lg:px-8 mx-5 relative pt-25'>

            <Hero start='Your Security is' next='Our Top Priority' text={heroText} image={security} />

            <div className='my-10 space-y-10 text-white mt-[5rem]'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">                  
                    <h1 className='text-[28px] font-[500]'>How We<b className='text-[rgb(203,254,51)]'> Protect You</b></h1>
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>At YourBank, we prioritize the security of you financial information. Our state-of-the_art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                </div>

                <div className='md:grid grid-cols-2 gap-5 md:rounded-t-4xl md:rounded-b-2xl md:bg-[#1C1C1C] md:pt-8 md:px-9 lg:pt-9 lg:px-11 space-y-3 md:space-y-0 md:h-[460px] lg:h-[400px] md:mb-[10rem] lg:mb-[8rem]'>
                        {protect.map((you, i) => (
                            <div key={i} className='rounded-2xl border border-[#262626] space-y-3 bg-[#1C1C1C] p-6' data-aos="fade-up">
                                <div className='space-x-3 items-center flex'>
                                    <img src={you.image} alt="" />
                                    <h1 className='text-[20px] font-[500]'>{you.title}</h1>
                                </div>
                                <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300] text-left'>{you.description}</p>
                            </div>
                        ))}
                </div>
            </div>
            
        </div>

        <Faqs />
        <Footer />
    </div>
  )
}

export default Security