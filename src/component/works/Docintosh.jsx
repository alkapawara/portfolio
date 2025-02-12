import React from 'react'
import { motion } from 'framer-motion'
import { IoIosShareAlt } from "react-icons/io";
const Docintosh = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>UI Developer <span className='text-textGreen tracking-wide'>
        @Docintosh
                </span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Thane: October 2021 - August 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Converted complex PSD designs into high-quality HTML code, ensuring cross-browser compatibility.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Worked on tablet-based doctor campaigns, improving performance and usability on mobile devices.
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Designed and developed HTML email templates using Mailchimp for
                campaigns, including special events
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                <IoIosShareAlt />
                </span>
                Collaborated with cross-functional teams to deliver innovative front-end solutions
            </li>
        </ul>
    </motion.div>
  )
}

export default Docintosh