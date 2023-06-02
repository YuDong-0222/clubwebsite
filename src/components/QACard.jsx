'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const QACard =({index, active, handleClick }) => {
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    // className={`relative ${
    //   active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    // } flex items-center justify-center min-w-[700px] h-[200px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    // onClick={() => handleClick(id)}
  >
  </motion.div>

}

export default QACard