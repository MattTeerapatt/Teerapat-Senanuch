import React from "react";
import Tooltips from "./Tooltips";
import sql from "/src/assets/icons/smyql.png";

const languages = [{ name: "MySQL", icon: "mysql-icon.png" }];

const ProlangIcons = () => {
  return (
    <div className="flex justify-center md:justify-start items-center py-3 md:ml-0">
      {languages.map((lang, index) => (
        <Tooltips position="top" content={`${lang.name}`} key={index}>
          <a className="hover:opacity-50" target="_blank" rel="noreferrer">
            <img
              className="w-16 h-16 hover:scale-125 hover:transform hover:-rotate-45 transition duration-500 "
              alt={`${lang.name}-icon`}
              src={sql}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default ProlangIcons;
