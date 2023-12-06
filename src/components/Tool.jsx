import React from "react";
import Tooltips from "./Tooltips";
import { toolsData } from "../data";


const ProlangIcons = () => {
  return (
    <div className="flex justify-center md:justify-start items-center py-3 md:ml-0">
      {toolsData.map((tool, index) => (
        <Tooltips position="top" content={`${tool.name}`}>
          <a
            key={index}
            className="hover:opacity-50"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 h-16 hover:scale-125  transition duration-500"
              alt={`${tool.name}-icon`}
              src={tool.icon}
            />
          </a>
        </Tooltips>
      ))}
    </div>
  );
};

export default ProlangIcons;
