import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineFileText } from 'react-icons/ai'; 
import styles from '../styles'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion'

const Footer = () => {
  return (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="w-full text-3xl font-bold text-[#52a5e5]">
            CLUB
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            ASHS.NUTN CSIRC Since-2023
          </p>

          <div className="flex gap-4 ">
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>                
              <FaInstagram className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#DA2E69]"/>
            </a>
            <a href='https://hackmd.io/@YuDong/tntcsh_csirc#FAQ---%E7%A4%BE%E5%9C%98%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C%E9%9B%86' target='_blank' rel='noopener noreferrer'>                
              <AiOutlineFileText className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#a6a6a6]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer