import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";

const LeftSide = ({toggle}) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-end gap-4 ${toggle?"text-sky-100":"text-textLight"} `}>  
    <div>
        <a href="https://github.com/alkapawara" target='_blank'>
            <span className={`w-10 h-10 text-xl ${toggle?"bg-sky-950":"bg-hoverColor"} rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300`}> <TbBrandGithub /></span>
        </a>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/alka-pawara-82b70b194/" target='_blank'>
            <span className={`w-10 h-10 text-xl ${toggle?"bg-sky-950":"bg-hoverColor"} rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300`}><LiaLinkedinIn /></span>
        </a>
    </div>
    <div>
        <a href="" target='_blank'>
            <span className={`w-10 h-10 text-xl ${toggle?"bg-sky-950":"bg-hoverColor"} rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300`}><BiLogoWhatsapp /></span>
        </a>
    </div>
    <div className='w-[2px] h-32 bg-textDark'>

    </div>
    
    </div>
  )
}

export default LeftSide