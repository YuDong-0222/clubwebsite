import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <a href="/">
        <h1 className='min-w-[81px] w-full text-3xl font-bold text-[#52a5e5]'>CSIRC</h1>
      </a>
      <ul className='hidden : md:flex'>
        <a href="/">
          <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>HOME</li>
        </a>
        <a href="/link">
          <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>LINK</li>
        </a>
        <a href="/founder">
          <li className='p-4 rounded-full hover:border-y-2 border-[#25AAE1]'>FOUNDER</li>
        </a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%] top-0 ease-in duration-500 block'}>
        <h1 className='w-full text-3xl font-bold text-[#52a5e5] m-4 '>CSIRC</h1>
        <ul className='uppercase p-4'>
          <a href="/">
            <li className='p-4 border-b border-gray-600'>HOME</li>
          </a>
          <a href="/link">
            <li className='p-4 border-b border-gray-600'>Link</li>
          </a>
          <a href="/founder">
            <li className='p-4 '>Founder</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar