import React from 'react'
import Logo from '../assets/logopng.png'
import { motion } from 'framer-motion'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';
import styles from '../styles';

const Feature = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden`}
    >
      <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          {/* ADD FRAMER MOTION :D */}
          <motion.div
            variants={planetVariants('left')}
            className={`flex-1 ${styles.flexCenter}`}
          >
              <img className='rounded-xl w-[80%] h-[80%] mx-auto my-4' src={Logo} alt="/" />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <div className='flex flex-col justify-center'>
              <p className='text-[#78bdf1] font-bold'>Lorem ipsum, dolor sit amet</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ASHS.NUTN_CSIRC 南大附中 資訊社</h1>
              <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, magni at adipisci qui, voluptate nam unde dignissimos perspiciatis nulla aut quia quis eligendi? Accusamus aut quidem soluta, iure maiores sed.</p>
              <motion.div
                whileTap={{ scale: 0.9 }}
              >
                <button className='bg-[#0E76BC] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 md:mx-0 sm:mt-[4%] md:mt-[3%] lg:mt-[2%] hover:bg-[#148ad8] active:bg-[#3aa0e4] focus:outline-none focus:ring focus:ring-[#022d4e] text-white'>A Button</button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Feature