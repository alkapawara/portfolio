import React from "react";
import { animate, delay, motion } from "framer-motion";
const Banner = ({toggle}) => {

  const textVerient={
    initial:{
      x:0,
    },
    animate:{
      x:"-220%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20,
        
      }
    }
  }
  return (
    <section
      id="home"
    
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-32 relative z-0  inset-0 h-full lg:h-[calc(100vh-12vh)] "
    >
      <motion.h3
        className={`text-lg font-tittleFont tracking-wide ${toggle? "text-sky-900": "text-textGreen"} `}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-tittleFont font-semibold flex flex-col "
      >
        <span >Alka Pawara.{" "}</span>
        <span className={`${toggle?" text-style":"text-style1 "} mt-2 lgl:mt-3 `}>
          I am Frontend Developer.
        </span>
      </motion.h1>
      <motion.p
        className={`md:max-w-[650px] font-medium ${toggle? "text-paraDark ":"text-paraLight"} text-base`}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        I am passionate about developing reliable and scalable front-end applications with exceptional user experiences.
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className={`w-48 h-12 text-sm font-titleFont border rounded-md tracking-wide ${toggle ?"border-sky-900 text-teal-950 hover:bg-sky-950 hover:text-sky-100":"hover:bg-hoverColor border-textGreen text-textGreen "} duration-300`}
      >
        Check my project
      </motion.button>
      <motion.div
         initial={{ y:-100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.10 }}  
      className="absolute -top-10 right-0 w-[50%] h-full flex items-center justify-center"
      ><img 
      className="text-9xl opacity-[0.04] max-w-full max-h-full object-contain " 
      src="https://media.cakeresume.com/image/upload/v1658462144/nifr3zdejcw0gqjp841a.png"
       /></motion.div>
    </section>
  );
};

export default Banner;
