import { useEffect, useState } from "react";
import useMediaQuery from "./components/UseMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Intro from "./components/Intro-page";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitVertical from "./components/GitVertical";
import AboutMe from "./components/AboutMe.jsx";
import LeftGradient from "./components/LeftGradient.jsx"

function App() {
  const [selectedPage, setselectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add an empty dependency array to run the effect only once on mount

  return (
    <div className="app">
      <GitVertical />
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setselectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        <Intro setselectedPage={setselectedPage} />
      </div>

      <div className="w-5/6 mx-auto">
        <AboutMe />
      </div>

      {/* <LeftGradient /> */}

      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      {/* <LeftGradient /> */}
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LeftGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;