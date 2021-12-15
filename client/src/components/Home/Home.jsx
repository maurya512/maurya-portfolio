import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import the style files
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* placing each components inside of a div to make it easier to break things down */}
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
