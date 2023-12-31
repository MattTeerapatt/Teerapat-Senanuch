import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles =
    "relative bg-yellow-500 before:absolute before:w-6 before:h-6 " +
    "before:rounded-full before:border-2 before:border-yellow-500 before:left-[-50%] before:top-[-50%]";

  const handleDotClick = (page) => {
    console.log("Selected Page:", page);
    setSelectedPage(page);
  };

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-800"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => handleDotClick("home")}
      />

      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-800"
        } w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => handleDotClick("about")}
      />

      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-800"
        } w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => handleDotClick("skills")}
      />

      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-800"
        } w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => handleDotClick("projects")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-gray-800"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => handleDotClick("contact")}
      />
    </div>
  );
};

export default DotGroup;
