import React from "react";
import Tooltips from "./Tooltips";




const languages = [
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "Postman", icon: "postman" },
];

const ProlangIcons = () => {
  return (
    <div className="flex justify-center md:justify-start items-center py-3 md:ml-0">
      {languages.map((lang, index) => (
        <Tooltips position="top" content={`${lang.name}`}>
          <a
            key={index}
            className="hover:opacity-50"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 h-16 hover:scale-125  transition duration-500"
              alt={`${lang.name}-icon`}
              src={`/src/assets/icons/${lang.icon}.png`}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default ProlangIcons;
