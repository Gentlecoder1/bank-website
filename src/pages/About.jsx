import React from 'react'
import about from '../assets/about-hero-img.png'
import Mission1 from '../assets/mission1.png'
import Mission2 from '../assets/mission2.png'
import Press1 from '../assets/press1.png'
import Press2 from '../assets/press2.png'
import Press3 from '../assets/press3.png'
import Press4 from '../assets/press4.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'

const About = () => {

    const heroText = "At YourBank, webelieve that banking should be more than just transacions. It should be on experience that empowers individuals and businesses to sthrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalize solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."

    const releases = [
        {
            image: Press1,
            title: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
            location: "India",
            date: "06/11/2025",
            about: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
            
        },
        {
            image: Press2,
            title: "YourBank Expands Branch Network with Opening of New Location in Chennai",
            location: "India",
            date: "12/11/2025",
            about: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
            
        },
        {
            image: Press3,
            title: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
            location: "India",
            date: "24/12/2025",
            about: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
            
        },
        {
            image: Press4,
            title: "YourBank Lauches Sustainable Banking Initiative to Promote Environmental Responsibility",
            location: "India",
            date: "28/12/2025",
            about: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
            
        }
    ];

  return (
    <div className='flex flex-col items-center'>
        <Nav />

        <div className='xl:w-[1280px] lg:mx-8 lg:px-8 mx-5 relative pt-25'>

            <Hero greet='Welcome to YourBank' start='Where Banking Meets' next='Excellence!' text={heroText} image={about} />

            <div className='my-10 space-y-10 text-white mt-[5rem]'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[28px] font-[500] text-[#CBFE33]'>Mission & Vision</h1>
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>We envision being a leadinf force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and business while maintaining a strong commitment to customer satisfaction and community development</p>
                </div>

                <div className='space-y-8'>

                    <div className='space-y-5 lg:flex items-center'>
                        <div className='mx-auto border border-[#262626] border-b-4 border-b-[#CBFE33] lg:border-b lg:border-b-[#262626] px-8 pt-8 rounded-t-[70px] lg:rounded-b-2xl w-fit' data-aos="fade-up">
                            <img src={Mission1} className='rounded-t-[60px]' alt="" />
                        </div>

                        <div className='space-y-3 lg:pl-8 lg:border-l-2 border-[#CBFE33] lg:w-[60%] text-center lg:text-left' data-aos="fade-up">
                            <h1 className='text-[26px] font-[500]'>Mission</h1>
                            <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>At YourBank, our mission is to empower our customers to achieve financial success, We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, exper guidance, and cutting edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their tursted partner, helping them navigate their financial journey and relaize their dreams.</p>
                        </div>
                    </div>

                    <div className='space-y-5 lg:flex items-center flex-row-reverse lg:relative -top-30'>
                        <div className='mx-auto border border-[#262626] border-b-4 border-b-[#CBFE33] lg:border-b lg:border-b-[#262626] px-8 pt-8 rounded-t-[70px] lg:rounded-b-2xl w-fit' data-aos="fade-up">
                            <img src={Mission2} className='rounded-t-[60px]' alt="" />
                        </div>

                        <div className='space-y-3 lg:pr-8 lg:border-r-2 border-[#CBFE33]  lg:w-[60%] text-center lg:text-left' data-aos="fade-up">
                            <h1 className='text-[26px] font-[500]'>Vision</h1>
                            <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[300]'>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div  className='my-10 mt-[5rem] space-y-10 text-white lg:-mt-[5rem]'>
                <div className='text-center lg:text-left space-y-3 xl:max-w-[1000px] lg:max-w-[700px]' data-aos="fade-up">
                    <h1 className='text-[28px] font-[500] text-[#CBFE33]'>Press Releases</h1>
                    <p className='text-[#B3B3B3] md:text-[16px] text-[14px] font-[400]'>Stay updated with the latest happenings and exciting developments at YourBank through our pre releases.</p>
                </div>

                <div className='md:grid grid-cols-2 gap-4 lg:space-y-0 space-y-5'>
                    {releases.map((press, idx) => (
                    <div key={idx} className='p-5 lg:p-[30px] rounded-3xl bg-[#1C1C1C] border border-[#262626] space-y-5' data-aos="fade-up">
                        <img src={press.image} className='rounded-t-3xl rounded-b-xl' alt="" data-aos="fade-up" />
                        <div className='space-y-3' data-aos="fade-up">
                            <h1 className='text-[20px] font-semibold'>{press.title}</h1>
                            <div className='flex space-x-3'>
                                <div className='bg-[#1A1A1A] rounded-full w-fit px-2 h-fit border border-[#262626] md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Location: {press.location}</div>
                                <div className='bg-[#1A1A1A] rounded-full w-fit px-2 h-fit border border-[#262626] md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]'>Date: {press.date}</div>
                            </div>
                        </div>

                        <p className='md:text-[16px] text-[14px] font-[300] text-[#B3B3B3]' data-aos="fade-up">{press.about}</p>
                        
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default About