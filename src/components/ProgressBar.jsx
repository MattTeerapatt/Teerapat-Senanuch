import React, { useState, useEffect } from "react";
import "../index.css"; // Import your stylesheet

const ProgressBar = ({ type }) => {
  const [animate, setAnimate] = useState(true);
  const [key, setKey] = useState(0);

  let progressClass;
  let barClass;

  switch (type) {
    
    case "moved":
      progressClass = "progress2 progress-moved";
      barClass = "progress-bar2";
      break;
    
    default:
      progressClass = "progress";
      barClass = "progress-bar";
  }

  useEffect(() => {
    // Reset the animation when the component mounts or key changes
    setAnimate(true);
  }, [key]);

  const handleAnimationEnd = () => {
    setAnimate(false);
    // Increment the key to force a re-render
    setKey((prevKey) => prevKey);
  };

  return (
    <div className="container">
      <div className={progressClass} onAnimationEnd={handleAnimationEnd} key={key}>
        <div className={`${barClass} ${animate ? "animate" : ""}`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
