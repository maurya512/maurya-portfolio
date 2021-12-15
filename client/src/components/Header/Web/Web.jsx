import React from "react";

// import the style files for web
import "./web.css";

const Web = () => {
  return (
    <div className="web">
      {/* a tags to navigate to each page */}
      {/* projects */}
      <div className="web-options">
        <a href="#projects">
          {/* icons for projects */}
          <i class="fi-rr-edit-alt option-icon"></i> Projects
        </a>
      </div>
      {/* skills */}
      <div className="web-options">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      {/* contact */}
      <div className="web-options">
        <a href="#contact">
          {/* icons for contact form */}
          <i class="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
