/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
       
        container:"1440px",
        contentConatiner:"1140px",
        containerSmall:"1024px",
        containerxs:"768px"
      },

      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280",
     
    },
      fontFamily:{
        bodyFont:["Montserrat", "sans-serif"],
        tittleFont:["Inter", "sans-serif"]
      },
      colors:{
        bodyColor:"#0A192F",
        textGreen:"#64ffda",
        textBlue:"#00afeb",
        textLight:"#ccd6f6",
        textDark :"#8892b0",
        paraLight:"#8892b0",
        paraDark:"#082f49",
        hoverColor:"rgba(100,255,218,0.1)",
      },
      boxShadow:{
        navShadow:"0 10px 30px -10px rgba(2, 12, 27, .7)"
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

