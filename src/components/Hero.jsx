import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css' //??? what is this IDK, but keep it here pls

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='mex-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#78bdf1] font-bold p-2 sm:text-xl md:text-2xl'>Accusantium nam natus quod distinctio </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 py-4'>Accusantium ub saqs</h1>
        <div>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold'
          strings={[
            '你好帥喔',
            '',
            'After Blank',
            '',
            'Before you enjoy, Please 繳社費',
          ]}
            typeSpeed={120}
            backSpeed={140}
            loop />
        </div>
        <button className='bg-[#25AAE1] w-[200px] rounded-lg font-medium my-y mx-auto py-3 sm:mt-[4%] md:mt-[3%] lg:mt-[2%] hover:bg-[#528bb6] active:bg-[#1963a8] focus:outline-none focus:ring focus:ring-[#022d4e]'>A Button</button>
      </div>
    </div>
  )
}

export default Hero