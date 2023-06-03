import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineFileText,AiOutlinePlus } from 'react-icons/ai'; 
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
    {/* <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}> */}
    {/* </div> */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="w-full text-3xl font-bold text-[#52a5e5]">
            CSIRC
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            ASHS.NUTN CSIRC Since-2023
          </p>

          <div className="flex gap-4 ">
            <a href='https://www.instagram.com/ashs.nutn_csirc/' target='_blank' rel='noopener noreferrer'>                
              <FaInstagram className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#DA2E69]"/>
            </a>
            <a href='https://hackmd.io/@YuDong/tntcsh_csirc#FAQ---%E7%A4%BE%E5%9C%98%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C%E9%9B%86' target='_blank' rel='noopener noreferrer'>                
              <AiOutlineFileText className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#a6a6a6]"/>
            </a>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfZPJO97Ft946LkNe0Qv1wI_GOFr46RZ4tT5ZVg897O45S4XQ/viewform' target='_blank' rel='noopener noreferrer'>                
              <AiOutlinePlus className="w-[24px] h-[24px] object-contain cursor-pointer rounded-md bg-[#ffffff]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer