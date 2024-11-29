import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
const ProjectBox = ({ rowDir, num, colRvr,projDes,projTitle, projImg ,projLink,proLan=[],gitCodeurl}) => {

  console.log("lang prop:", proLan);
  return (
    <>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex ${colRvr}-reverse gap-12 ${rowDir}`}
      >
        <a
          href={projLink}
          target="_blank"
          className="w-full xl:w-3/5 h-auto relative group"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={projImg}
              className="w-full h-full object-contain"
              alt="docintosh img"
            />
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-3 items-start xl:-ml-16 z-10">
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            {num.toString().padStart(2, "0")}
          </p>
          <h2 className="text-2xl font-bold">{projTitle}</h2>
          <p className="text-textDark text-[15px]">
            {projDes}
          </p>
          <ul className="text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
                  {proLan.map((lang, id) => (
            <li key={id}>{lang}</li> 
          ))}
          </ul>
          <div className="flex gap-4 text-textDark font-bold">
            <a 
            href={gitCodeurl}
            target="_target"
            className="flex gap-2 hover:text-textGreen duration-300 cursor-pointer">
              Code
              <span className="text-2xl">
                <FaGithub />
              </span>
            </a>

            <a
              href={projLink}
              target="_blank"
              className="flex gap-2 hover:text-textGreen duration-300 cursor-pointer"
            >
              Live Demo
              <span className="text-2xl">
                <RiShareForward2Fill />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectBox;
