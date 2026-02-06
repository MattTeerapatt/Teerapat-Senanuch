import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import { projectsData } from "../data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ data, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-1000
    bg-cream-light/90 backdrop-blur-sm z-30 flex flex-col justify-center items-center text-center p-4 text-text-primary rounded-md shadow-elegant`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-lg font-playfair">{data.title}</p>
        <p className="mt-2 text-sm">{subtitle}</p>
      </div>
      <img
        src={data.image}
        alt={`${data.name} Image`}
        className="w-full h-40 md:h-96 rounded-md " // consider md:object-cover that use or not
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-8 md:py-16 lg:py-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="p-4">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-text-primary">PROJECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <div className="py-4">
          <p className="mt-5 text-text-secondary ">
            View more details on my{" "}
            <a
              href="https://github.com/MattTeerapatt"
              className="text-sm md:text-base text-accent-gold hover:scale-110 transition duration-1000 bold hover:text-gold-accent"
            >
              Github
            </a>
          </p>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center transition duration-1000 pt-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center items-center p-4 rounded-md
            text-3xl font-playfair font-semibold text-text-primary transition duration-1000
            bg-gradient-gold shadow-elegant
              "
          >
            React
          </div>
          <Project data={projectsData[0]} subtitle="#React" />
          <Project data={projectsData[1]} subtitle="#React" />

          {/* ROW 2 */}

            <Project
            data={projectsData[3]}
            subtitle="#React"
          />


          <div
            className="flex justify-center text-center items-center p-4
            text-3xl font-playfair font-semibold text-text-primary
            rounded-md bg-gradient-warm shadow-elegant
            "
          >
            User
          </div>
          <Project data={projectsData[4]} subtitle="#Python #Javascript #HTML #CSS" />


        

        

          {/* ROW 3 */}
          <div
            className="flex justify-center text-center items-center p-4 
            text-3xl font-playfair font-semibold text-text-primary
            rounded-md bg-gradient-elegant shadow-elegant
            "
          >
            Game
          </div>
          <Project data={projectsData[5]} subtitle="#Assembly #C++ #C #SFML" />

          <Project
            data={projectsData[2]}
            subtitle="#Python "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
