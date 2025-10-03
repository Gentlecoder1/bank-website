import React, { useState, useEffect } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Faqs = () => {

    const frequentlys = [
        {
            question: "How do I open an account with YourBank?",
            answer: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
        },
        {
            question: "How can I access my accounts online?",
            answer: "Accessing your accounts online is simple and secure. Visit our website and click on the LOGIN button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the ENROLL NOW button and follow the registration process. If you need assistance, our customer support team is available to guide you."
        },
        {
            question: "Are my transactions and personal information secure?",
            answer: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."
        },
        {
            question: "What documents do I need to provide to apply for a loan?",
            answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
        },
        {
            question: "What are your interest rates for savings accounts?",
            answer: "Our savings account interest rates are competitive and vary based on the account type and balance. We offer tiered interest rates, meaning higher balances earn better rates. Current rates are updated regularly on our website. For specific rate information and to find the best savings option for your needs, please visit our rates page or contact one of our banking specialists."
        },
        {
            question: "How can I contact customer support?",
            answer: "We offer multiple ways to reach our customer support team. You can call our 24/7 helpline, chat with us through our website or mobile app, visit any of our branch locations, or email us at support@yourbank.com. Our dedicated support team is always ready to assist you with any banking questions or concerns you may have."
        },
        {
            question: "Are there any fees associated with my account?",
            answer: "Account fees vary depending on the type of account you have and how you use it. We offer several fee-free account options and transparent fee structures. Common fees may include ATM usage at non-network locations, overdraft protection, and wire transfers. You can find a complete fee schedule on our website or request one from any branch representative."
        },
    ]

    const [questions, setQuestions] = useState()
    const [visible, setVisible] = useState(4)
    const [less, setLess] = useState(3)
    
    const show = () => {
        setVisible((prev) => (less ? prev + 3 : prev - 3))
        setLess(prev => !prev);
    }

    return (
        <div className='w-full flex mx-auto justify-center relative my-20'>
            <div className='text-white xl:w-[1280px] lg:w-full md:w-full w-full lg:mx-16 mx-5'>
                <div className='space-y-5 md:space-y-0 md:space-x-10 md:flex justify-between md:text-left text-center mb-8'>
                    <div className='xl:max-w-[700px] md:max-w-[500px] space-y-3'>
                    <h1 className='text-3xl font-bold'><b className='text-[#CBFE33]'>Frequently</b> Asked Questions</h1>
                    <p className='text-gray-300 text-sm'>Still you have any questions? Contact our Team via <a className='text-[#CBFE33]' href="@">support@yourbank.com</a></p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 transition-all duration-500'>
                    {frequentlys.slice(0, visible).map((frequently, index) => (
                        <div 
                            key={index}
                            className='space-y-4 border border-gray-600 rounded-lg p-6 transform transition-all duration-700 ease-out'
                            style={{
                                animation: `fadeInUp 0.9s ease-out ${index * 0.5}s forwards`
                            }}
                        >
                            <h1 className='font-bold text-center flex justify-center '>{frequently.question}</h1>
                            <hr className='w-full h-[0.1px] bg-gray-600 border-0' />
                            <p className='text-sm text-gray-300 leading-relaxed flex-grow flex items-center justify-center text-center px-2'>{frequently.answer}</p>
                        </div>
                    ))}
                    
                </div>

                <button className='text-sm flex items-center gap-2 font-bold border border-gray-600 rounded-full py-2 px-4 mt-6 mx-auto hover:bg-[#CBFE33] hover:text-black transition-all duration-300 transform hover:scale-105 ' onClick={show}>{less ? "Load All" :" Load less"} 
                    <div className={`transition-transform duration-300 ${less ? 'rotate-180' : 'rotate-0'}`}>
                        <GoChevronDown size={20} />
                    </div>
                    
                </button>

            </div>
        </div>
        
    )
}

export default Faqs