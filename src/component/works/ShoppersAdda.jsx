import React from 'react'
import { motion } from 'framer-motion'
import { IoIosShareAlt } from "react-icons/io";
const ShoppersAdda = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Web Designer <span className='text-textGreen tracking-wide'>
        @ShoppersAdda
                </span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Pune: June 2018 - August 2019</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Created responsive websites using WordPress theme, plugins.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Implemented SEO best practices, including on-page optimization,
                meta tags, and keyword strategies to increase search engine visibility.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Developed visually appealing web pages that improved customer engagement.
            </li>
            
        </ul>
    </motion.div>
  )
}

export default ShoppersAdda