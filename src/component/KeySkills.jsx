import React from 'react'
import SectionTitle from './SectionTitle'
import { FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoBootstrap } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";
import { animate, delay, motion } from "framer-motion";
// import SkillBox from './SkillBox';
import { useRef } from 'react';
const KeySkills = () => {
  const parentScrollElement = useRef(null);
    // const skillsData = [
    //     {   
    //         Tag: FaHtml5,
    //         title: "HTML", 
    //         iconcolor: "text-orange-400"
    //     },
    //     {   
    //         Tag: FaHtml5,
    //         title: "CSS", 
    //         iconcolor: "text-blue-500"
    //     },
        
    //     {   
    //         Tag: TbBrandJavascript,
    //         title: "JavaScript", 
    //         iconcolor: "text-yellow-500"
    //     },
    //     {   
    //         Tag: FaReact,
    //         title: "React", 
    //         iconcolor: "text-blue-500"
    //     },
    //     {   
    //         Tag: BiLogoTailwindCss,
    //         title: "Tailwind CSS", 
    //         iconcolor: "text-teal-500"
    //     },
    //     {   
    //         Tag: BiLogoBootstrap,
    //         title: "Bootstrap", 
    //         iconcolor: "text-purple-600"
    //     },
    //     {   
    //         Tag: FaGithub,
    //         title: "GitHub", 
    //         iconcolor: "text-textDark"
    //     },
    //     {   
    //         Tag: DiPhotoshop,
    //         title: "Photoshop", 
    //         iconcolor: "text-blue-700"
    //     }
    // ];
  return (
    <div  className='max-w-containerxs mx-auto lg:px-3 md:px-20 md:py-12 py-6 '>
         <SectionTitle title="Technologies I Work With" className="mb-14" />
         <motion.div
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
         className=' h-[50vh] lg:h-[80vh]  relative'>
          {/* this is key skill other design
          
          <img  src="../src/assets/img/footer-grid.svg"  className='opacity-70 w-full h-full z-40 '  />  */}
         {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start gap-4 ">
                {
                    skillsData.map((itm,id)=>(
                        <SkillBox 
                        key={id}
                        Tag={itm.Tag}
                        title={itm.title} 
                        iconcolor={itm.iconcolor}
                    />
                    ))
                }

          </div> */}

         <div
       
         className='keyskillBox  absolute flex items-center inset-0'>
        <p className='absolute z-40 top-[47%] left-50 -translate-y-26 -translate-x-50 text-xl'> Skills</p>
          <div className="parent">

       
  <div className="items "><FaHtml5 className='text-3xl text-orange-600 hover:before:content-["hi"] ' alt="k" /> </div>
  <div className="items"> <FaHtml5 className='text-3xl text-blue-500' /> </div>
  <div className="items"> <TbBrandJavascript className='text-3xl text-yellow-500' /> </div>
  <div className="items"><FaReact className='text-3xl text-blue-500' /></div>
  <div className="items"><BiLogoTailwindCss className='text-3xl text-teal-500' /></div>
  <div className="items"><BiLogoBootstrap className='text-3xl text-purple-600' /></div>
  <div className="items"><FaGithub className='text-3xl text-textDark' /></div>
  <div className="items"><DiPhotoshop className='text-3xl text-blue-700' /></div>

</div>
         </div>
         </motion.div>
    </div>
  )
}

export default KeySkills