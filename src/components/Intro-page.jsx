import useMediaQuery from "./UseMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./FirstIcons";

const Landing = ({ setselectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* image */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="transition duration-500">
            {/* <img
              alt="profile"
              src="https://avatars.githubusercontent.com/u/77468756?v=4"
              className="hover:filter hover:saturate-200 transition  animate-fade-down
              duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            /> */}
          </div>
        ) : (
          <img
            // alt="profile"
            // src="https://avatars.githubusercontent.com/u/77468756?v=4"
            src=""
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
                max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      {/* main */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 h-2/4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
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
          <p className="text-1/2-xl font-Roboto z-10 text-start md:text-start md:text-xl text-black pb-5">
            3rd Year Student in Software Engineering
          </p>

          <p className="text-6xl md:text-9xl  font-poppins font-bold  z-10 md:text-start text-black md:pb-4 mb-2">
            Teerapat <br className="md:hidden" />
            <span className="relative md:justify-start pl-0 text-black font-poppins font-bold  z-20 before:content-brush before:absolute before:-left-[25px] before:-top-70px before:z-[-1]">
              Senanuch
            </span>
          </p>

          {/* <p className="mt-10 mb-7 text-center md:text-start text-whity justify-center text-lg font-playfair">
            Hi, I’m Matt, a software engineer currently in my third year of
            studying software engineering at King Mongkut's Institute of
            Technology Ladkrabang. I am passionate about coding and building
            user-friendly, sturdy web applications. My expertise lies in
            Front-End technologies such as Next.js and React.js. Along the way,
            I've delved into and explored Back-End development. I'm continually
            working towards becoming a versatile Full Stack Developer, blending
            my skills in both Front End and Back End to create well-rounded
            solutions
          </p> */}

          <p className="text-1/2-xl font-playfair z-10 py-auto md:text-start text-light-black pb-5">
            A Software Engineering student at King Mongkut's Institute of
            Technology Ladkrabang, which hope to become a 
            <span className="font-bold text-1/3-xl"> full-stack developer</span> 
          </p>
        </motion.div>

        {/* action */}
        <motion.div
          className="flex justify-end py md:justify-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
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
          {/* button */}

          {/* <AnchorLink
            className=" text-white rounded-md py-4 px-9 font-semibold hover:text-black
            transition duration-1000 ease-in-out border-grey-800 
            bg-button
            font-playfair 
            
            "
            onClick={() => setselectedPage("contact")}
            href="#contact"
          >
            Contact ME
          </AnchorLink> */}

          {/* button */}

          {/* <AnchorLink
            className="transition duration-500 ease-in-out"
            onClick={() => setselectedPage("projects")}
            href="#projects"
          >
            <div
              className="text-black hover:text-green-600 trasition duration-500 w-full h-full 
                items-center justify-center font-playfair px-7 py-3 rounded-md
                bg-gradient-to-l from-yellow-200 to-orange-400 hover:from-orange-400 hover:to-pink-300
                border-2  hover:border-slate-600"
            >
              My Work
            </div>
          </AnchorLink> */}
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
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
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
