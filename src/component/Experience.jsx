import React, { useState,useRef } from 'react'
import SectionTitle from './SectionTitle'
import Docintosh from './works/Docintosh'
import RathInfotech from './works/RathInfotech';
import ShoppersAdda from './works/ShoppersAdda'
import { motion } from 'framer-motion';
const Experience = () => {
const[docintosh,setDocintosh]=useState(true);
const[rath,setRath]=useState(false);
const[shoppersadd,setShoppersadd]=useState(false);
const parentScrollElement = useRef(null);

 const handelDocintosh=()=>{
    setDocintosh(true)
    setRath(false)
    setShoppersadd(false)
 }
 const handelRath=()=>{
    setDocintosh(false)
    setRath(true)
    setShoppersadd(false)
 }
 const handelShoppers=()=>{
    setDocintosh(false)
    setRath(false)
    setShoppersadd(true)
 }
  return (
    <motion.section
     id="workExperience"
     className='max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-32'
     whileInView={{ opacity: 1 }}
     initial={{ opacity: 0 }}
     viewport={{
       root: parentScrollElement.current,
       amount: 0.2, // Trigger animation when 20% of the element is in view
     }}
     transition={{
       ease: "easeIn",
       opacity: { duration: 0.5 },
       delay: 0.1,
     }}
    
    >

        <SectionTitle title="My Work Experience" />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-60 flex flex-col'>
                <li 
                onClick={handelDocintosh}
                className={`${docintosh 
                ? "border-l-textGreen text-textGreen "
                : 'border-l-hoverColor text-textDark' }  
                 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>Docintosh</li>
                <li 
                 onClick={handelRath}
                 className={`${rath
                ? "border-l-textGreen text-textGreen "
                : 'border-l-hoverColor text-textDark' }  
                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>Rath Infotech</li>
                <li 
                 onClick={handelShoppers}
                 className={`${shoppersadd
                ? "border-l-textGreen text-textGreen "
                : 'border-l-hoverColor text-textDark' } 
                 border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>ShoppersAdda</li>
            </ul>
            
            {docintosh && <Docintosh />}
            {rath && <RathInfotech />}
            {shoppersadd && <ShoppersAdda />}
        </div>
    </motion.section>
  )
}

export default Experience