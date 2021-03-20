import React from "react";
import Project1 from "../../assets/project-1.PNG";
import Project2 from "../../assets/project-2.PNG";
import Project3 from "../../assets/project-3.PNG";
import Project4 from "../../assets/project-4.PNG";
import Project5 from "../../assets/project-5.PNG";

//Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  //Project1
  const openPopuoboxProject1 = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Project1}
          alt="Project1..."
        />
        <p>
          Fully Responsive Website, built with React.js and styled with
          components-style and SASS
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://soranharuti.github.io/mywebsite-project/",
              "_blacnk"
            )
          }
        >
          https://soranharuti.github.io/mywebsite-project/
        </a>{" "}
        <br />
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/soranharuti/mywebsite-project",
              "_blacnk"
            )
          }
        >
          https://github.com/soranharuti/mywebsite-project
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject1 = {
    titleBar: {
      enable: true,
      text: "My Website Project",
    },
    fadeIn: true,
    fadeIn: 500,
  };

  //Project2
  const openPopuoboxProject2 = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Project2}
          alt="Project2..."
        />
        <p>
          React API Project - Currency Finance Price Tracker App Using Hooks and
          Axios
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://www.loom.com/share/c71c15ab61fc419086d6079b46388696",
              "_blacnk"
            )
          }
        >
          https://www.loom.com/share/c71c15ab61fc419086d6079b46388696
        </a>
        <br />
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/soranharuti/currency-tracker",
              "_blacnk"
            )
          }
        >
          https://github.com/soranharuti/currency-tracker
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject2 = {
    titleBar: {
      enable: true,
      text: "Currency Tracker Project",
    },
    fadeIn: true,
    fadeIn: 500,
  };

  //Project3
  const openPopuoboxProject3 = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Project3}
          alt="Project3..."
        />
        <p>
          My final project as a web developer at brainstation, it's called
          budget - expense tracker front end was developed using react js and
          css3 and the back end was developed using node js, mongo db and api
          auth with jwt
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://www.loom.com/share/f0235cd6b40f4d6192467898b1615298",
              "_blacnk"
            )
          }
        >
          https://www.loom.com/share/f0235cd6b40f4d6192467898b1615298
        </a>
        <br />
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/soranharuti/capstone-projet",
              "_blacnk"
            )
          }
        >
          https://github.com/soranharuti/capstone-projet
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject3 = {
    titleBar: {
      enable: true,
      text: "Currency Tracker Project",
    },
    fadeIn: true,
    fadeIn: 500,
  };

  //Project4
  const openPopuoboxProject4 = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Project4}
          alt="Project4..."
        />
        <p>
          My first portfolio built as resposive Website, using HTML5, CSS 3, and
          Vanilla JavaScript.
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://soranharuti.github.io/soranharuti/", "_blacnk")
          }
        >
          https://soranharuti.github.io/soranharuti/
        </a>
        <br />
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/soranharuti/soranharuti", "_blacnk")
          }
        >
          https://github.com/soranharuti/soranharuti
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject4 = {
    titleBar: {
      enable: true,
      text: "Portfolio Project",
    },
    fadeIn: true,
    fadeIn: 500,
  };

  //Project5
  const openPopuoboxProject5 = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Project5}
          alt="Project5..."
        />
        <p>
          Student List API project built with React JS, where you can filter and
          search for specific student, and check, add and edit their grades.
        </p>
        <b>Demo:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://www.loom.com/share/f6573f5ef3fb4b5eb72af54311a63640",
              "_blacnk"
            )
          }
        >
          https://www.loom.com/share/f6573f5ef3fb4b5eb72af54311a63640
        </a>
        <br />
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/soranharuti/Students-Api",
              "_blacnk"
            )
          }
        >
          https://github.com/soranharuti/Students-Api
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject5 = {
    titleBar: {
      enable: true,
      text: "Student List API project",
    },
    fadeIn: true,
    fadeIn: 500,
  };

  return (
    <div className="projects-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>
        <div className="img-box-wrapper row justify-content-center">
          <div className="projects-image-box" onClick={openPopuoboxProject1}>
            <img
              className="projects-image"
              src={Project1}
              alt="Project1 Image..."
            />
            <div className="projects-overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="projects-image-box" onClick={openPopuoboxProject2}>
            <img
              className="projects-image"
              src={Project2}
              alt="Project2 Image..."
            />
            <div className="projects-overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="projects-image-box" onClick={openPopuoboxProject3}>
            <img
              className="projects-image"
              src={Project3}
              alt="Project3 Image..."
            />
            <div className="projects-overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="projects-image-box" onClick={openPopuoboxProject4}>
            >
            <img
              className="projects-image"
              src={Project4}
              alt="Project4 Image..."
            />
            <div className="projects-overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="projects-image-box" onClick={openPopuoboxProject5}>
            <img
              className="projects-image"
              src={Project5}
              alt="Project5 Image..."
            />
            <div className="projects-overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigProject1} />
      <PopupboxContainer {...popupboxConfigProject2} />
      <PopupboxContainer {...popupboxConfigProject3} />
      <PopupboxContainer {...popupboxConfigProject4} />
      <PopupboxContainer {...popupboxConfigProject5} />
    </div>
  );
};

export default Projects;
