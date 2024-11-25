import React, { useState,useRef } from "react";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import ProjectBox from "./ProjectBox";
const Project = ({projectRef}) => {
  const[showmore,setShowmore]=useState(false)
  const parentScrollElement = useRef(null);
  return (
    <motion.section
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
    id="project"
    ref={projectRef}
      className="max-w-contentConatiner mx-auto py-10 lgl:py-28 flex flex-col gap-4 lgl:gap-8  xl:px-4 mdl:px-24 md:px-20"
    >
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-center lg:gap-28 gap-12 lg:mt-10">
        {/* ------------------project 1  -------------------*/}
        <ProjectBox rowDir="lg:flex-row" colRvr={"flex-col"} num={1} />
        {/* -----------------project 2---------- */}
        <ProjectBox rowDir="lg:flex-row-reverse" colRvr={"flex-col-reverse"} num={2} />
        
        {
          showmore && (
            <>
             {/* ------------------project 3  -------------------*/}
             <ProjectBox rowDir="lg:flex-row" colRvr={"flex-col"} 
              num={3} 
              title=""
              desc=""
              img=""
              
            
             
             />
             <ProjectBox rowDir="lg:flex-row-reverse" colRvr={"flex-col-reverse"} num={4} />
            </>
          )
        }
        <div className="mt-12 flex items-center justify-center">
        {showmore ? (
          <button 
          onClick={()=>setShowmore(false
            
          )}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show  Less</button>
        ): 
        (<button 
          onClick={()=>setShowmore(true)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show More</button>)
        }
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
