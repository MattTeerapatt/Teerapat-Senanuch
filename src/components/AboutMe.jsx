import React from "react";
import LineGradient from "./LineGradient";
import useMediaQuery from "./UseMediaQuery";
import { motion } from "framer-motion";
import { projectsData } from "../data";
import photo from "../assets/img/matt2.jpg";




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
    <section id="about" className="pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-6 text-text-primary">
            ABOUT
          </p>

          <LineGradient className="w-1/4 mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl leading-relaxed font-playfair text-center text-text-secondary px-4 md:px-8">
            Hi, I'm Matt, a software engineer student from King Mongkut's Institute of Technology Ladkrabang. I am passionate about coding and building
            user-friendly, sturdy web applications. My interest in Frontend
            technologies such as Next.js and React.js. Along the way, I've
            delved into and explored Backend development. I'm continually
            working towards becoming a versatile Full Stack Developer, blending
            my skills in both Frontend and Backend to create well-rounded
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
