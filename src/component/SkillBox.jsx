import React from 'react'

const SkillBox = ({Tag,title, iconcolor}) => {
  return (
    <div className='hover:bg-hoverColor rounded text-sm md:text-base font-bold text-textDark flex justify-start gap-2 i border w-full p-2  border-textDark items-center hover:-translate-y-2 transition-all duration-300 hover:[box-shadow:0_0_10px_#01FFF4]'>
    <div className='bg-hoverColor p-2 rounded'>
        <Tag className={`${iconcolor} text-2xl cursor-pointer hover:translate-y-2 transition-all duration-300`} />
    </div>
  {title}
 </div>
  )
}

export default SkillBox