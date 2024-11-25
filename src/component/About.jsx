import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useRef } from "react";
const About = () => {
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
      id="about"
      className="max-w-contentConatiner mx-auto py-10 lgl:py-28 flex flex-col gap-4 lgl:gap-8  xl:px-4 mdl:px-24 md:px-20 "
    
    
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div 
       

        className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hello! My name is Alka Pawara and I am a Front-End Developer with over 3 years of experience in website design, <span className="text-textGreen">specializing in HTML, CSS, JavaScript, and WordPress.</span>  I have successfully converted complex PSD designs into high-quality HTML code, ensuring cross-browser compatibility and building fully responsive websites that enhance user experience across devices.
          </p>
          <p>
          <span className="text-textGreen">Having completed a React course,</span>  I am now seeking an entry-level React.js Developer position to further develop my skills in modern frameworks. 
              I am passionate about crafting high-quality, visually appealing web solutions and eager to tackle more complex challenges to grow professionally.
            
           
          </p>
        
          
        </div>
        <div
          
        className="w-full lgl:w-1/3 h-80 relative group ">
          <img
            src="./src/assets/alka-photo.jpg"
            className=" h-[100%] object-fill w-full border-textGreen bg-slate-300 p-1 z-40 absolute  "
          />
          <div className=" absolute top-12 left-12 -translate-x-50 -translate-y-50 hidden lgl:inline-flex w-[95%] h-[98%] border-4 border-slate-800 bg-slate-900/20"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
