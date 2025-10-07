import React from 'react'
import about from '../assets/about-hero-img.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'

const About = () => {

    const heroText = "At YourBank, webelieve that banking should be more than just transacions. It should be on experience that empowers individuals and businesses to sthrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalize solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."

  return (
    <div className='flex flex-col items-center'>
        <Nav />

        <div className='xl:w-[1280px] lg:mx-8 lg:px-8 mx-5 relative pt-25'>

            <Hero greet='Welcome to YourBank' start='Where Banking Meets' next='Excellence!' text={heroText} image={about} />

            <div className='my-10 space-y-10 text-white'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[28px] font-[500] text-[#CBFE33]'>Mission & Vision</h1>
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>We envision being a leadinf force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and business while maintaining a strong commitment to customer satisfaction and community development</p>
                </div>

                <div className='space-y-8'>
                    <div>
                        <div className='border border-[#B3B3B3] border-b-2'></div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default About