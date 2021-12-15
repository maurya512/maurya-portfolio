import React, { useState } from "react";
// import style files
import "./header.css";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";

const Header = () => {
  // state to check whether the sidebar is open or close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      {/* left side of the header */}
      <div className="logo">Maurya</div>
      {/* right side of the header */}
      <div className="menu">
        {/* menu for web screens */}
        <div className="web-menu">
          <Web />
        </div>
        {/* menu for mobile screens */}
        <div className="mobile-menu">
          {/* implement an on click to toggle the sidebar menu */}
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icons"></i>
          </div>
          {/* sidebar for the hamburger menu */}
          {/* if isOpen is true then display the  */}
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
