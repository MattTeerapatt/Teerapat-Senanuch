import React from "react";
import Tooltips from "./Tooltips";

const FirstIcons = () => {
  const iconStyle = "hover:scale-110 transition duration-500";

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <Tooltips position="top" content={"Github"}>
        <a
          className={`transition ${iconStyle}`}
          href="https://github.com/MattTeerapatt"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="github-icon"
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            className={`dark-theme ${iconStyle}`}
          />
        </a>
      </Tooltips>

      <Tooltips position="top" content={"LinkedIn"}>
        <a
          className={`transition ${iconStyle}`}
          href="https://www.linkedin.com/in/teerapat-sananuch/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="linkedin-icon"
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            className={`dark-theme ${iconStyle}`}
          />
        </a>
      </Tooltips>

      <Tooltips position="top" content={"mmatt.trp@gmail.com"}>
        <a
          className={`transition ${iconStyle}`}
          href={`mailto:mmatt.trp@gmail.com`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="gmail-icon"
            src="https://img.icons8.com/ios-filled/50/000000/gmail.png"
            className={`dark-theme ${iconStyle}`}
          />
        </a>
      </Tooltips>

      <Tooltips position="top" content={"Website"}>
        <a
          className={`transition ${iconStyle}`}
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="web-icon"
            src="https://img.icons8.com/ios-filled/50/000000/domain.png"
            className={`dark-theme ${iconStyle}`}
          />
        </a>
      </Tooltips>
    </div>
  );
};

export default FirstIcons;
