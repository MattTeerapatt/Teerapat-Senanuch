import React from "react";
import Tooltips from "./Tooltips";

const languages = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Tailwind", icon: "tailwind" },
];

const WebFrame = () => {
  return (
    <div className="flex justify-center gap-4 md:justify-start items-center py-3 md:ml-0">
      {languages.map((lang) => (
        <Tooltips key={lang.name} position="top" content={`${lang.name}`}>
          <a className="hover:opacity-50" target="_blank" rel="noreferrer">
            <img
              className="w-16 h-16 mx-auto  hover:scale-110 hover:transform hover:rotate-45 transition duration-500 "
              alt={`${lang.name}-icon`}
              src={`/src/assets/icons/${lang.icon}.png`}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default WebFrame;
