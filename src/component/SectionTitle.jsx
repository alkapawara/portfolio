import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className=" text-3xl font-tittleFont font-semibold flex items-center">
      {title}
      <span className="hidden md:inline-flex md:w-52 lgl:w-64 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
