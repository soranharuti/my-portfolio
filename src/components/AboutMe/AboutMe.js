import React from "react";
import MyPic from "../../assets/MyPic.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={MyPic} alt="My Picture..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Passionate, committed and, innovative Frontend Developer with
            intensive experience building and maintaining responsive web
            applications.
          </p>
          <h4 className="about-skills">Areas of Expertie</h4>
          <p>
            HTML, CSS, JAVASCRIPT, TYPESCRIPT, SASS, REACT JS, REACT NATIVE,
            GIT, VERSION CONTROL, GITHUB, NODE.JS, WEB SERVICES API, DOM,
            EXPRESS.JS, MONGODB, MYSQL, EXPO, HEROKU, AGILE METHODOLOGIES
          </p>
          <h4 className="about-skills">Education</h4>
          <p>Diploma in Web Development - 2020 | BrainStation - Canada</p>
          <p>BSc in Engineering - 2014 | University of Kurdistan - Hawler</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
