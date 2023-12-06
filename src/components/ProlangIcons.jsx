import React from "react";
import Tooltips from "./Tooltips";

const languages = [
  { name: "JavaScript", icon: "javascript.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "Java", icon: "java.png" },
  { name: "Python", icon: "python.png" },
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "C++", icon: "cpp.png" },
  { name: "C", icon: "c.png" },
  { name: "Rust", icon: "rust.png" },
];

const ProlangIcons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap md:justify-start py-3 md:ml-0">

      {languages.map((lang) => (
        <Tooltips position="top" content={lang.name} key={lang.name}>
          <a className="hover:animate-rotate-y" target="_blank" rel="noreferrer">
            <img
              className="w-16 h-16 hover:scale-125 transition duration-500"
              alt={`${lang.name}-icon`}
              src={`/src/assets/icons/${lang.icon}`}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default ProlangIcons;
