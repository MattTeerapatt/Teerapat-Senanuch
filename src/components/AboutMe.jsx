import React from "react";
import LineGradient from "./LineGradient";
import useMediaQuery from "./UseMediaQuery";
import { motion } from "framer-motion";
import { projectsData } from "../data";
import photo from "../assets/img/matt2.png";




const VerticalText = ({ text }) => (
  <div className="vertical-text text-xl z-50  font-playfair p-auto m-auto absolute h-full flex flex-col justify-center">
    {text.split("").map((char, index) => (
      <div key={index}>{char}</div>
    ))}
  </div>
);

const AboutMe = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-20 pb-72">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-16">
        {/* Photo Section */}
        <motion.div
          className={isAboveMediumScreens ? "md:w-1/2" : "w-full"}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <div className="relative border-4 md:top-56 overflow-hidden w-90 h-full mb-6 md:mb-0">
            {/*photo */}

            <img
              src= {photo}

              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div
          className={
            isAboveMediumScreens
              ? "w-1/2 mt-6 md:mt-0 top-2 "
              : "w-full mt-6 md:mt-0 top-2"
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: 50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <p className="font-playfair font-semibold md:top-0 top-16 text-4xl mb-4 text-black">
            ABOUT
          </p>

          <LineGradient className="w-1/2 mb-6 px-2 md:mb-0" />
          <p className="text-xl md:text-3xl leading-relaxed p-auto font-playfair text-start py-8 px-2 text-whity mt-4 rounded-md">
            Hi, I’m Matt, a software engineer currently in my third year of
            studying software engineering at King Mongkut's Institute of
            Technology Ladkrabang. I am passionate about coding and building
            user-friendly, sturdy web applications. My interest in Frontend
            technologies such as Next.js and React.js. Along the way, I've
            delved into and explored Backend development. I'm continually
            working towards becoming a versatile Full Stack Developer, blending
            my skills in both Frontend and Backend to create well-rounded
            solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
