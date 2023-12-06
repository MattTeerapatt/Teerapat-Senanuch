import LineGradient from "./LineGradient";
import useMediaQuery from "./UseMediaQuery";
import { motion } from "framer-motion";
import ProlangIcons from "./ProlangIcons";
import WebFrame from "./WebFrame";
import DB from "./DB";
import Tool from "./Tool";
import ProgressBar from "./ProgressBar.jsx";
import FullGradient from './FullGradient.jsx'
import RightGradient from "./LineGradient.jsx";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className={isAboveMediumScreens ? "md:w-1/3" : "w-full"}
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
          <p className="font-playfair font-semibold text-4xl mb-0 text-black">
            SKILLS
          </p>

          <LineGradient className="w-1/3" />
          <p className="text-xl font-playfair z-10 py-auto md:text-start text-black py-5">
            I aspire to become a highly skilled Full Stack Developer,
            highlighting my proficiency in the frontend. While I am in the early
            stages of gaining experience in the backend, I am actively pursuing
            new knowledge to elevate and refine my skills, aiming for continual
            improvement in both domains.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <img src="" className="z-10" />
        </div>


        
      </div>

      {/* content */}

      <div className="text-center md:flex md:text-left mt-0 gap-10 place-items-start">
        {/* 1) Language */}
        <motion.div
          className={
            isAboveMediumScreens ? "md:w-1/4 mt-10 z-10" : "w-full mt-10"
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
          <div className="relative h-52">
            <div className="z-10">
              <p className="font-playfair font-semibold py-2 text-3xl mt-3 text-black">
                Language
              </p>

              <RightGradient className="w-1/3"/>
            </div>
            {isAboveMediumScreens && (
              <div className="flex md:w-3/4 w-auto h-auto absolute right-0 top-0 z-[-1] mb-10"></div>
            )}
            <ProlangIcons />
          </div>
        </motion.div>

        {/* 2) WebFrame */}
        <motion.div
          className={isAboveMediumScreens ? "md:w-1/3 mt-10" : "w-full mt-10"}
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
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold py-2 text-3xl mt-3 text-black">
                Web Framework
              </p>
              <RightGradient className="w-1/3"/>

            </div>
            {isAboveMediumScreens && (
              <div className="w-1/2 md:w-3/4 h-32 absolute right-0 mt-6 z-[-1]"></div>
            )}
            <WebFrame />
          </div>
        </motion.div>

        {/* 3) Database */}
        <motion.div
          className={isAboveMediumScreens ? "md:w-1/3 mt-10" : "w-full mt-10"}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold py-2 text-3xl mt-3 text-black">
                Database
              </p>
              <RightGradient className="w-1/3"/>

            </div>
            {isAboveMediumScreens && (
              <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]"></div>
            )}
            <DB />
          </div>
        </motion.div>

        {/* 4) Other */}
        <motion.div
          className={
            isAboveMediumScreens ? "md:w-1/3 mt-10 z-10" : "w-full mt-10"
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold py-2 text-3xl mt-3 text-black">
                Other
              </p>
              <RightGradient className="w-1/3"/>

            </div>
            {isAboveMediumScreens && (
              <div className="w-full md:w-3/4 h-32 absolute right-0 top-0 z-[-1]"></div>
            )}
            <Tool />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
