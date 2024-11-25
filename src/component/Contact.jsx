import React from "react";
import SectionTitle from "./SectionTitle";
SectionTitle;
const Contact = () => {
  return (
    <section id="contact" className="max-w-containerxs mx-auto py-10 lg:p-28">
      <h2 className="font-titleFont text-5xl font-semibold text-center pb-4">
        Contact me
      </h2>
      <p className="max-w-[600px] text-center text-textDark mx-auto">
        I'm actively seeking a React.js Developer role as a fresher,
        transitioning from over 3 years of expertise in website design. If
        you're looking for someone with a strong foundation in front-end
        development and a passion for React, feel free to contact me. I'd love
        to discuss opportunities and how I can contribute to your team!
      </p>
      <a
        href="mailto:alkapawara749@gmail.com"
        className="text-center flex items-center justify-center"
      >
        <button className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 mt-6">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
