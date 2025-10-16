import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpbg from '../assets/SignUp-bg.png'
import SignAbstract from '../assets/signAbstract.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import Apple from '../assets/apple.png'
import Testimonials from '../components/Testimonials.jsx'

const SignUp = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            // TODO: Replace with real sign-up API call
            await new Promise(res => setTimeout(res, 700))
            // After successful sign-up, navigate to Login (or Home if you prefer)
            navigate('/Login')
        } catch (err) {
            console.error('Sign up failed', err)
            // TODO: Show error to user
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className='mx-auto'>
        <div className='pt-40 pb-10 lg:pt-30 px-5 '>
            <div data-aos="fade-up" className='mx-auto relative rounded-xl lg:w-[1000px] bg-[#1C1C1C]' style={{ backgroundImage: `url(${SignUpbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent'}}>
                <div className='flex justify-center items-center px-[2rem] md:px-[5rem] py-[3rem]' style={{ backgroundImage: `url(${SignAbstract})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top'}}>
                    <div className='w-full'>
                        <div className='text-center space-y-3' data-aos="fade-up">
                            <h1 className='text-4xl font-bold text-[#CAFE33]'>Sign Up </h1>
                            <p className='text-center md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Join our community today! Create an account to unlock exclusive features and personalized experiences</p>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className='lg:grid grid-cols-2 gap-6 space-y-3 lg:space-y-0 my-8' data-aos="fade-up">
                                <div className='rounded-full border border-[#262626] bg-[#1A1A1A]'>
                                    <input type="text" className='bg-transparent outline-0 w-full rounded-xl p-4 cursor-pointer md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' required placeholder='Enter First Name' />
                                </div>
                                <div className='rounded-full border border-[#262626] bg-[#1A1A1A]'>
                                    <input type="text" className='bg-transparent outline-0 w-full rounded-xl p-4 cursor-pointer md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' required placeholder='Enter Last Name' />
                                </div>
                                <div className='rounded-full border border-[#262626] bg-[#1A1A1A]'>
                                    <input type="email" className='bg-transparent outline-0 w-full rounded-xl p-4 cursor-pointer md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' required placeholder='Enter your Email' />
                                </div>
                                <div className='rounded-full border border-[#262626] bg-[#1A1A1A]'>
                                    <input type="password" className='bg-transparent outline-0 w-full rounded-xl p-4 cursor-pointer md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' required placeholder='Enter your Password' />
                                </div>
                                
                            </div>

                            <div className='mx-auto max-w-[500px] flex flex-col items-center space-y-6'>
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className='w-full rounded-full border border-[#333333] text-center md:text-[16px] text-[14px] font-[700] text-[#B3B3B3] bg-[#262626] p-4 hover:bg-[#CAFE33] hover:text-black disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-102'
                                        data-aos="fade-up"
                                    >
                                        {loading ? 'Signing up…' : 'Sign Up'}
                                    </button>
                            </div>
                        </form>

                        <div className='mx-auto mt-6 max-w-[500px] flex flex-col items-center space-y-6'>
                            <Link
                                to='/Login'
                                className='w-full rounded-full border border-[#333333] text-center md:text-[16px] text-[14px] font-[700] text-[#B3B3B3] bg-[#262626] p-4 hover:bg-[#CAFE33] hover:text-black transition-all duration-300 transform hover:scale-102'
                                data-aos="fade-up"
                            >
                                Login
                            </Link>
                            <div className='flex space-x-5 w-full mx-auto items-center mb-4' data-aos="fade-up">
                                <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                                <p className='w-full md:text-[16px] text-[14px] font-[700] text-[#B3B3B3] flex-nowrap'>Or Continue with </p>
                                <hr className='w-full h-[0.1px] bg-gray-400 border-0' />
                            </div>

                            <div className='flex space-x-4'>
                                <div className='transition-all duration-300 transform hover:scale-115'>
                                    <a href="#" data-aos="fade-up">
                                        <img src={Google} alt="" />
                                    </a>
                                </div>
                                <div className='transition-all duration-300 transform hover:scale-115'>
                                    <a href="#" data-aos="fade-up">
                                        <img src={Facebook} alt="" />
                                    </a>
                                </div>
                                <div className='transition-all duration-300 transform hover:scale-115'>
                                    <a href="#" data-aos="fade-up">
                                        <img src={Apple} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Testimonials />
    </div>

  )
}

export default SignUp