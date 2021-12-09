import React from "react";

// import the css files
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      {/* left side of the component */}
      {/* 50% of the screen is on the left side */}
      <div className="intro-left">left</div>
      {/* right side of the component */}
      {/* 50% of the screen is on the right side */}
      <div className="intro-right">right</div>
    </div>
  );
};

export default Intro;
