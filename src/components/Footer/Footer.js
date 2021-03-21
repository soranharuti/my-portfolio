import React from "react";
import { Link } from "react-scroll";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Toronto, Ontario</p>
            </div>
            <div className="d-flex">
              <p>+1(587)500-5999</p>
            </div>
            <div className="d-flex">
              <p>haruti.soran@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link smooth={true} to="about" className="footer-nav">
                  About Me
                </Link>
                <br />
                <Link smooth={true} to="experience" className="footer-nav">
                  Experience
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="projects" className="footer-nav">
                  Projects
                </Link>
                <br />
                <Link smooth={true} to="contacts" className="footer-nav">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/soranharuti"}
                quote={"Soran Haruti | Frontend Developer"}
                // hashtag="#TestHash1 #TestHash1"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://github.com/soranharuti"}
                quote={"Soran Haruti | Frontend Developer"}
                // hashtag="#TestHash1 #TestHash1"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <LinkedinShareButton
                url={"https://github.com/soranharuti"}
                quote={"Soran Haruti | Frontend Developer"}
                // hashtag="#TestHash1 #TestHash1"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Soran Haruti | All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
