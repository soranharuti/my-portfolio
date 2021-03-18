import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Soran Haruti</h1>
        <Typed
          className="typed-text"
          strings={[
            "Frontend Development",
            "React JS",
            "React Native",
            "CSS 3",
            "HTML 5",
            "JavaScript",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact</a>
      </div>
    </div>
  );
};

export default Header;
