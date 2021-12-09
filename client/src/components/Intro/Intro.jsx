import React from "react";

// import the css files
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      {/* left side of the component */}
      {/* 50% of the screen is on the left side */}
      <div className="intro-left">
        <div className="intro-wrapper">
          <h2 className="intro-header">Hello, My name is</h2>
          <h1 className="intro-name">Maurya</h1>
          <div className="intro-title">
            {/* animated title for intro */}
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Front End Developer</div>
              <div className="intro-title-item">Full Stack Developer</div>
              <div className="intro-title-item">Backend Developer</div>
              <div className="intro-title-item">MERN Stack</div>
            </div>
          </div>
        </div>
      </div>
      {/* right side of the component */}
      {/* 50% of the screen is on the right side */}
      <div className="intro-right">right</div>
    </div>
  );
};

export default Intro;
