import React from 'react'
import laptop from '../assets/laptop.png'
import styles from '../styles'
import { motion } from 'framer-motion'
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';


const Newslett = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`overflow-hidden`}
    >
      <div className='bg-[#000300] w-full py-16 px-4 text-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
          >
              <p className='text-[#78bdf1] font-bold'>Lorem ipsum, dolor sit amet</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ASHS.NUTN_CSIRC 南大附中 資訊社</h1>
              <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, magni at adipisci qui, voluptate nam unde dignissimos perspiciatis nulla aut quia quis eligendi? Accusamus aut quidem soluta, iure maiores sed.</p>
          </motion.div>
          <motion.div
              variants={planetVariants('right')}
              className={`flex-1 ${styles.flexCenter}`}
          >
            <img className='mx-auto my-4 w-[80%] h-[80%] sm:w-[80%] sm:h-[80%]' src={laptop} alt="/" />
          </motion.div> 
        </div>
      </div>
    </motion.div>
  )
}

export default Newslett