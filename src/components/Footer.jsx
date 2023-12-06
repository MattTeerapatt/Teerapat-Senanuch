// Footer.js
import React from "react";
import SocialMediaIcons from "./FirstIcons";

const Footer = () => {
  return (
    <footer className="h-68 bg-navbar-main">
      <div className="font-playfair font-semibold text-2xl px-10 mx-auto">
        <p className="border-b-2 border-white-500 inline-block pt-0 pb-1">
          Contact Detail
        </p>
        <div className="text-left gap-1">
          <p className="font-playfair font-semibold text-xl text-yellow">
            mmatt.trp@gmail.com
          </p>
          <p className="font-playfair font-semibold text-xl text-yellow">
            <span>+66 64 595 2491</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
