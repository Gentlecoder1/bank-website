import React, {useState} from 'react'

const Testimonials = () => {

  const [toggle, setToggle] = useState(0)
  
  const toggleLeft = () => {
      setToggle(0)
  }

  const toggleRight = () => {
      setToggle(1)
  }

  return (
    <div  className='w-full flex mx-auto justify-center relative my-7'>
        <div className='p-8 text-white xl:w-[1280px] lg:w-full md:w-full lg:mx-16 mx-5'>
          <div className='space-y-5 md:space-y-0 md:space-x-10 md:flex justify-between md:text-left text-center'>
            <div className='xl:max-w-[700px] md:max-w-[500px] md:space-y-3'>
              <h1 className='text-3xl font-bold'>Our <b className='text-[#CBFE33]'>Testimonials</b></h1>
              <p className='text-gray-300'>Discoverhow YourBanK has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
            </div>

            <div className={`rounded-full m-auto border-[1px] border-gray-500 display flex px-3 py-2 w-fit h-fit space-x-8 md:space-x-2`}>
              <div
                onClick={(toggleLeft)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 0 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                For Individuals
              </div>

              <div
                onClick={(toggleRight)}
                className={`relative w-fit h-fit text-center py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${toggle === 1 ? 'bg-[#CBFE33] text-black' : 'bg-none'}`}
              >
                For Business
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials