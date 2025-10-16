import react from 'react'
import career from '../assets/career-Image.png'
import Value1 from '../assets/value1.png'
import Value2 from '../assets/value2.png'
import Value3 from '../assets/value3.png'
import Value4 from '../assets/value4.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import OpenAccount from '../components/OpenAccount.jsx'
import Faqs from '../components/Faqs.jsx'
import { AiFillBank } from "react-icons/ai";


const Career = () => {

    
    const jobs = [
        {
            title: "Relationship Manager",
            location: "India",
            department: "Retail Banking",
            about: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
            requirements: [
                { item: "Bachelor's degree in Business, Finance, or a related field" },
                { item: "Minimum of 3 years of experience in sales or relationship management in the banking industry" },
                { item: "Proven track record of meeting and exceeding sales targets" },
                { item: "Excellent interpersonal and negotiation skills" },
                { item: "Strong knowledge of banking products and services" }
            ]
        },
        {
            title: "IT Security Specialist",
            location: "India",
            department: "Information Technology",
            about: "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
            requirements: [
                { item: "Bachelor's degree in Computer Science, Information Security, or a related field" },
                { item: "Minimum of 5 years of experience in IT security or a similar role" },
                { item: "In-depth knowledge of network security protocols and technologies" },
                { item: "Familiarity with regulatory frameworks such as PCI DSS and GDPR" },
                { item: "Professional certifications such as CISSP or CISM are preferred" }
            ]
        },
        {
            title: "Risk Analyst",
            location: "India",
            department: "Risk Management",
            about: "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.",
            requirements: [
                { item: "Bachelor's degree in Finance, Economics, or a related field" },
                { item: "Minimum of 2 years of experience in risk management or a similar role" },
                { item: "Proficiency in risk analysis tools and techniques" },
                { item: "Strong analytical and problem-solving skills" },
                { item: "Knowledge of regulatory requirements and industry best practices" }
            ]
        }
    ];


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

    const heroText = "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."

  return (
    <div className='flex flex-col items-center'>

        <div className='xl:w-[1280px] lg:mx-8 lg:px-8 mx-5 flex flex-col justify-center relative pt-25'>

            <Hero start='Welcome to' next='YourBanK' last='Careers' text={heroText} image={career} />

            <div className='my-10 space-y-10 text-white'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[38px] font-[500]'><b className='text-[#CBFE33]'>Our</b> Values</h1>
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
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
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
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
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
                </div>
                
                <div className='md:grid grid-cols-2 gap-4 lg:space-y-0 space-y-5'>
                  {jobs.map((job, idx) => (
                    <div key={idx} className='p-5 lg:p-[40px] rounded-2xl bg-[#1C1C1C] border border-[#262626] space-y-5'>
                        
                      <div className='space-y-3' data-aos="fade-up">
                        <h1 className='text-[24px] font-semibold'>{job.title}</h1>
                        <div className='sm:flex space-y-3 md:space-y-0 sm:space-x-3'>
                          <div className='bg-[#1A1A1A] rounded-full w-fit px-2 h-fit border border-[#262626] md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Location: {job.location}</div>
                          <div className='bg-[#1A1A1A] rounded-full w-fit px-2 h-fit border border-[#262626] md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Department: {job.department}</div>
                        </div>
                      </div>

                      <div className='space-y-3' data-aos="fade-up">
                        <h2 className='text-[20px] font-semibold'>About This Job</h2>
                        <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>{job.about}</p>
                      </div>
                      
                      <div className='space-y-3'> 
                        <h1 className='text-[20px] font-semibold'>Requirements & Qualifications</h1>
                        <ul className='md:text-[16px] text-[#B3B3B3] text-[14px] font-[300] space-y-3'>
                          {job.requirements.map((req, i) => (
                            <li key={i} className='flex space-x-4 items-center' data-aos="fade-up">
                              <AiFillBank size={25} className='h-full' />
                              <span className='flex flex-wrap'>{req.item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className='cursor-pointer md:text-[16px] text-[14px] rounded-full py-2 px-4 mx-auto transition-all duration-300 transform hover:scale-105 bg-[#CBFE33] text-black' data-aos="fade-up">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
            </div>
        </div>

        <Faqs />
        <OpenAccount />

    </div>
  )
}

export default Career