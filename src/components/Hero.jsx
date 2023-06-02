import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css' //??? what is this IDK, but keep it here pls

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='mex-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#78bdf1] font-bold p-2 sm:text-xl md:text-2xl'>ASHS.NUTN CSIRC</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 py-4'>南大附中資訊社</h1>
        <div>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold text-[#1ac37f]'
          strings=
          {[
            'Hello, World!',
            '你好世界!',
            'Zero to Hero',
            'Since 2023',
            'Everything Is Code',
            'Programming == Data Structures + Algorithm',
            'Nothing is impossible',
            "Let's Programming together! ",
          ]}
            typeSpeed={120}
            backSpeed={140}
            startDelay={1000}
            backDelay={1500}
            showCursor={true}            
            loop />
        </div>
        {/* <button className='bg-[#25AAE1] w-[200px] rounded-lg font-medium my-y mx-auto py-3 sm:mt-[4%] md:mt-[3%] lg:mt-[2%] hover:bg-[#528bb6] active:bg-[#1963a8] focus:outline-none focus:ring focus:ring-[#022d4e]'>Instagram</button> */}
      </div>
    </div>
  )
}

export default Hero