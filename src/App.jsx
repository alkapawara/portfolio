import React, { useRef,useState } from "react";
import About from "./component/About";
import Banner from "./component/Banner";
import LeftSide from "./component/LeftSide";
import Navbar from "./component/Navbar";
import RightSide from "./component/RightSide";
import { motion } from "framer-motion";
import Experience from "./component/Experience";
import Project from "./component/Project";
import KeySkills from "./component/KeySkills";
import Contact from "./component/Contact";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [toggle, setToggle] = useState(false)
  return (
    // <div className={`w-full h-screen font-bodyFont ${toggle?"bg-slate-50 text-sky-950" : "bg-slate-950 text-textLight"}  overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60`}>
    <div className={`w-full h-screen font-bodyFont ${toggle?"bg-sky-50 text-sky-950" : "bg-slate-950 text-textLight"}  overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60`}>
      {/* Pass refs to Navbar */}
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectRef={projectRef}
        contactRef={contactRef}
        toggle={toggle}
        setToggle={setToggle}
      />

      <div className="h-[88vh] w-full xl:flex items-center gap-20 justify-between">
        {/* Left Side */}
        <motion.div
          className=" hidden lg:inline-flex w-32 h-full fixed bottom-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <LeftSide  toggle={toggle} />
        </motion.div>

        {/* Center Section with connected refs */}
        <div className="h-[88vh] mx-auto p-4 w-full ">
          <div ref={homeRef}>
            <Banner   
            toggle={toggle}
            setToggle={setToggle}/>
          </div>
            <KeySkills />
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={projectRef}>
            <Project />
          </div>
          {/* Contact Section */}
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className=" hidden lg:inline-flex w-32 h-full fixed bottom-0 right-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
