import React from 'react'
import { motion } from 'framer-motion'
import { IoIosShareAlt } from "react-icons/io";
const RathInfotech = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Web Designer <span className='text-textGreen tracking-wide'>
        @Rath Infotech
                </span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Mumbai: January 2020 - December 2020</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Successfully transformed static HTML templates into dynamic, responsive designs.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                 Worked on tablet-based doctor campaigns, improving performance and usability on mobile devices.
            </li>
            
        </ul>
    </motion.div>
  )
}

export default RathInfotech