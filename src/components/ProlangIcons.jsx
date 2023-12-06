import React from "react";
import Tooltips from "./Tooltips";
import { programmingLanguagesData } from "../data";

const ProlangIcons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap md:justify-start py-3 md:ml-0">
      {programmingLanguagesData.map((lang) => (
        <Tooltips position="top" content={lang.name} key={lang.name}>
          <a
            className="hover:animate-rotate-y"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 h-16 hover:scale-125 transition duration-500"
              alt={`${lang.name}-icon`}
              src={lang.icon}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default ProlangIcons;
