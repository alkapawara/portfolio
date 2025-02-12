import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { TbBrandGithub } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
const Navbar = ({
  homeRef,
  aboutRef,
  experienceRef,
  projectRef,
  contactRef,
  toggle,
  setToggle,
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const [showmenu, setShowmenu] = useState(false);

  const handleScroll = (ref, section) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <div
      className={`w-full  top-0 sticky z-50 px-4 h-20 lg:h-[12vh] ${
        toggle ? "  bg-slate-50 shadow" : "bg-bodyColor shadow-navShadow"
      }`}
    >
      <div className="flex justify-between items-center max-w-container h-full py-1 font-tittleFont mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#home"
            className={`font-black ${
              toggle ? "text-sky-900" : "text-textGreen"
            } text-xl`}
          >
            Alka
            <span className={toggle ? "text-teal-500" : "text-white"}>
              Pawara
            </span>
          </a>
        </motion.div>
        <div className="hidden mdl:inline-flex gap-7 items-center">
          <ul className="flex text-[15px] gap-7">
            <a
              href="#home"
              className={`flex items-center gap-1 font-bold 
                ${
                  toggle
                    ? "text-sky-900"
                    : activeSection === "home"
                    ? "text-textGreen"
                    : "text-textDark"
                }
              } hover:text-textGreen cursor-pointer duration-300 `}
              onClick={() => handleScroll(homeRef, "home")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </a>
            <a
              href="#about"
              className={`flex items-center gap-1 font-bold ${
                toggle
                  ? "text-sky-900"
                  : activeSection === "about"
                  ? "text-textGreen"
                  : "text-textDark"
              } hover:text-textGreen cursor-pointer duration-300`}
              onClick={() => handleScroll(aboutRef, "about")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </a>
            <a
              href="#workExperience"
              className={`flex items-center gap-1 font-bold 
                ${
                  toggle
                    ? "text-sky-900"
                    : activeSection === "workExperience"
                    ? "text-textGreen"
                    : "text-textDark"
                } hover:text-textGreen cursor-pointer duration-300`}
              onClick={() => handleScroll(experienceRef, "workExperience")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </a>
            <a
              href="#project"
              className={`flex items-center gap-1 font-bold 
                ${
                  toggle
                    ? "text-sky-900"
                    : activeSection === "project"
                    ? "text-textGreen"
                    : "text-textDark"
                }
                 hover:text-textGreen cursor-pointer duration-300`}
              onClick={() => handleScroll(projectRef, "project")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Project
              </motion.li>
            </a>
            <a
              href="#contact"
              className={`flex items-center gap-1 font-bold ${
                toggle
                  ? "text-sky-900"
                  : activeSection === "contact"
                  ? "text-textGreen"
                  : "text-textDark"
              } hover:text-textGreen cursor-pointer duration-300`}
              onClick={() => handleScroll(contactRef, "contact")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
              >
                Contact
              </motion.li>
            </a>
          </ul>
          <a
            href="src/assets/alka-pawara-frontend-devloper-resume-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.7 }}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-linl border py-1 px-4 border-textGreen hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
          {/* <p onClick={()=>setToggle(!toggle)}>dark</p> */}
        </div>
        {/* mobile screen */}
        <div
          onClick={() => setShowmenu(true)}
          className=" w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="h-[2px] w-full bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="h-[2px] w-full bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="h-[2px] w-full bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300 translate-x-1"></span>
        </div>

        {/* Mobile menu */}
        {showmenu && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <div className="w-[80%] h-full bg-[#112240] flex flex-col items-center px-4 py-10 relative">
              <p
                onClick={() => setShowmenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              >
                +
              </p>
              <ul className="flex flex-col text-base gap-7">
                <a
                  href="#home"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                  onClick={() => {
                    handleScroll(homeRef, "home");
                    setShowmenu(false);
                  }}
                >
                  <li>Home</li>
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                  onClick={() => {
                    handleScroll(aboutRef, "about");
                    setShowmenu(false);
                  }}
                >
                  <li>About</li>
                </a>
                <a
                  href="#workExperience"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                  onClick={() => {
                    handleScroll(experienceRef, "experience");
                    setShowmenu(false);
                  }}
                >
                  <li>Experience</li>
                </a>
                <a
                  href="#project"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                  onClick={() => {
                    handleScroll(projectRef, "project");
                    setShowmenu(false);
                  }}
                >
                  <li>Project</li>
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                  onClick={() => {
                    handleScroll(contactRef, "contact");
                    setShowmenu(false);
                  }}
                >
                  <li>Contact</li>
                </a>

                <a
                  href="src/assets/alka-pawara-frontend-devloper-resume-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    transition={{ duration: 0.1, delay: 0.5 }}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-linl border py-1 px-4 border-textGreen hover:bg-hoverColor"
                  >
                    Resume
                  </button>
                </a>
              </ul>

              <div className="w-full flex flex-row items-center justify-center gap-4 text-textLight mt-4">
                <div>
                  <a href="https://github.com/alkapawara" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                      {" "}
                      <TbBrandGithub />
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/alka-pawara-82b70b194/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                      <LiaLinkedinIn />
                    </span>
                  </a>
                </div>
                <div>
                  <a href="" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                      <BiLogoWhatsapp />
                    </span>
                  </a>
                </div>
              </div>
              <div className=" w-full flex flex-col items-center justify-end gap-16 text-textLight">
                <a href="mailto:alkapawara749@gmail.com" target="_blank">
                  <p className="text-sm mt-4 tracking-wide text-textGreen">
                    {" "}
                    alkapawara749@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
