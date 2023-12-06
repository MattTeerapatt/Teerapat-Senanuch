import React from "react";

const GitVertical = () => {
  return (
    <div className="fixed left-0 top-0 h-full hidden md:flex flex-col items-center justify-center">
      <div className="border-r-2 border-black h-full transition-transform duration-300 transform hover:scale-110"></div>
      <div className="p-4">
        <a
          href="https://github.com/MattTeerapatt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="github-icon"
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            className="transition-transform duration-100 transform hover:animate-bounce"
          />
        </a>
      </div>
      <div className="border-r-2 border-black h-full"></div>
    </div>
  );
};

export default GitVertical;
