import React, { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import ProjectBox from "./ProjectBox";
const Project = ({ projectRef }) => {
  const [showmore, setShowmore] = useState(false);
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
        <ProjectBox
          rowDir="lg:flex-row"
          colRvr={"flex-col"}
          num={1}
          projTitle="Docintosh"
          projImg="src/assets/web.png"
          projLink="https://docintosh.com/HomeController/index2"
          projDes="Docintosh is a web application designed for medical students and doctors to engage in various interactive activities, such as surveys, polls, and quizzes. Utilizing HTML, CSS, Bootstrap, and JavaScript, this project delivers a visually appealing and user-friendly experience on a wide range of devices."
          proLan={["html", "css", "js", "Bootstrap", " JavaScript", " JQuery"]}
        />
        {/* -----------------project 2---------- */}
        <ProjectBox
          rowDir="lg:flex-row-reverse"
          colRvr={"flex-col-reverse"}
          num={2}
          projTitle="Ecommerce"
          projImg="../src/assets/ecommerce.png"
          gitCodeurl="https://github.com/alkapawara/shoppingCart"
          projLink="https://shopping-cart-kappa-plum.vercel.app/"
          projDes="The e-commerce website allows users to browse products, view detailed information, add items to their shopping cart, and save products to a wishlist. It provides a seamless shopping experience with features like product previews, quantity selection, and easy checkout. The website also enables users to manage their wishlist, making it easier."
          proLan={["React", "CSS", "Tailwind", ]}
        />

        {showmore && (
          <>
            {/* ------------------project 3  -------------------*/}
            <ProjectBox
              rowDir="lg:flex-row"
              colRvr={"flex-col"}
              num={3}
              projTitle="BrandCare"
              projImg="../src/assets/brandcare.png"
              projLink="https://www.brandcare.net/"
              projDes="Brandcare specializes in simplifying science for pharma, health, and wellness brands. They craft impactful campaigns, creative strategies, and engaging health communications to connect brands with their audience effectively."
              proLan={[
                "html",
                "css",
                "js",
                "Bootstrap",
                " JavaScript",
                " JQuery",
              ]}
            />

            <ProjectBox
              rowDir="lg:flex-row-reverse"
              colRvr={"flex-col-reverse"}
              num={4}
              projTitle="Prasadam"
              projImg="../src/assets/prasadam.png"
              projLink="https://www.pingalegroup.com/Prasadam"
              projDes="The Prasadam Bhojnalay project is a subscription-based food service website. Users can select meals, including a limited thali meal or specialty thalis, add them to their cart, and complete the checkout process."
              proLan={[
                "html",
                "css",
                "js",
                "Bootstrap",
                " JavaScript",
                " JQuery",
              ]}
            />

        <ProjectBox
              rowDir="lg:flex-row"
              colRvr={"flex-col"}
              num={5}
              projTitle="Todo List"
              gitCodeurl="https://github.com/alkapawara/todo-grocery-list"
              projImg="../src/assets/todo-list.png"
              projLink="https://todo-grocery-list-nu.vercel.app/"
              projDes="A Dodo List is a task management application built using React.js, designed to help users organize, track, and prioritize their daily tasks seamlessly. Leveraging React's component-based architecture, the application provides a dynamic and interactive user experience"
              proLan={[
                "React",
                "css",
                "Tailwind",
               
              ]}
            />
        <ProjectBox
              rowDir="lg:flex-row-reverse"
              colRvr={"flex-col-reverse"}
              num={6}
              projTitle="Keshawshusthi"
              projImg="../src/assets/keshawshrusthi.png"
              projLink="https://gramswasthyayojna.com/"
              projDes="focuses on gathering data about the health conditions of villages and families based on predefined health criteria. It is part of a larger initiative to assess and improve the overall health and wellbeing of rural communities, promoting self-reliance and better health management systems"
              proLan={[
                "html",
                "css",
                "js",
                "Bootstrap",
                " JavaScript",
                " JQuery",
              ]}
            />
          </>
        )}
        <div className="mt-12 flex items-center justify-center">
          {showmore ? (
            <button
              onClick={() => setShowmore(false)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowmore(true)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
