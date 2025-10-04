import react from 'react'
import Value1 from '../assets/value1.png'
import Value2 from '../assets/value2.png'
import Value3 from '../assets/value3.png'
import Value4 from '../assets/value4.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import OpenAccount from '../components/OpenAccount.jsx'
import Faqs from '../components/Faqs.jsx'


const Career = () => {

    const values = [
        {
            topic: "Integrity",
            text: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
        },
        {
            topic: "Customer Centricity",
            text: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
        },
        {
            topic: "Collaboration",
            text: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
        },
        {
            topic: "Innovation",
            text: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
        }
    ]

    const benefits = [
        {
            image: Value1,
            topic: "Competitive Compensation",
            text: "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
        },
        {
            image: Value2,
            topic: "Health and Wllness",
            text: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
        },
        {
            image: Value3,
            topic: "Retirement Planning",
            text: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
        },
        {
            image: Value4,
            topic: "Work-Life Balance",
            text: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
        }
    ]

  return (
    <div className='flex flex-col items-center'>
        <Nav />

        <div className='xl:w-[1279px]  lg:mx-16 mx-5 flex flex-col justify-center relative pt-25'>

            <Hero />

            <div className='my-10 space-y-10 text-white'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[38px] font-[500]'><b className='text-[#CBFE33]'>Our</b> Values</h1>
                    <p className='text-[#B3B3B3] text-[16px] font-[300]'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                </div>

                <div className='md:grid md:grid-cols-2 gap-[50px] md:space-y-0 space-y-8'>
                    {values.map((value) => (   
                        <div className='px-3 space-y-3 border-l-2 border-[#CBFE33]' data-aos="fade-up">
                            <h1 className='text-[30px] font-[500] text-[#4C4C4D]'>{value.topic}</h1>
                            <p className='text-[14px] text-[#B3B3B3]'>{value.text}</p>
                        </div>
                    ))}
                    
                </div>
            </div>


            <div className='my-10 space-y-10 text-white'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[38px] font-[500]'><b className='text-[#CBFE33]'>Our</b> Benefits</h1>
                    <p className='text-[#B3B3B3] text-[16px] font-[300]'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                </div>
                
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Vertical line */}
                        <div className="hidden lg:block absolute w-[1px] h-full line-dashed-y"></div>
                        {/* Horizontal line */}
                        <div className="hidden lg:block absolute h-[1px] w-full line-dashed-x"></div>
                    </div>

                    <div className='md:grid md:grid-cols-2 gap-[60px] md:space-y-0 space-y-8'>
                        {benefits.map((benefit, index) => (   
                            <>
                                <div key={index} className='p-10 space-y-5 inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,37,35),transparent_40%)] border border-gray-800 rounded-t-4xl rounded-b-xl md:rounded-tl-4xl md:rounded-tr-xl md:rounded-br-4xl md:rounded-bl-xl' data-aos="fade-up">
                                    <div className='flex items-center gap-3'>
                                        <img src={benefit.image} alt="Value-Image" />
                                        <h1 className='text-[18px] font-[400] text-white'>{benefit.topic}</h1>
                                    </div>

                                    <p className='text-[14px] text-[#B3B3B3]'>{benefit.text}</p>
                                </div>

                                {index < benefits.length - 1 && (
                                    <>
                                        {/* Mobile horizontal line */}
                                        <div className="lg:hidden h-[1px] w-full line-dashed-x"></div>
                                    </>
                                )}
                                
                            </>
                        ))}
                        
                    </div>
                </div>
            </div>

            <div className='my-10 space-y-10 text-white'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[38px] font-[500] text-[#CBFE33]'>Job Openings</h1>
                    <p className='text-[#B3B3B3] text-[16px] font-[300]'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
                </div>
                
                
            </div>

        </div>

        <Faqs />
        <OpenAccount />
        <Footer />
    </div>
  )
}

export default Career