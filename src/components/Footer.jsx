import React, { Component } from "react";

import { IconContext } from "react-icons/lib";
import {
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-content-container">
          <div className="footer-up">
            <ul className="links-pages">
              <li data-aos="fade-right">
                <Link to="home" spy={true} smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="about" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="work" spy={true} smooth={true} duration={500}>
                  Work
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="portfolio" spy={true} smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  Contact me
                </Link>
              </li>
            </ul>

            <div className="contact-links-wrapper">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/karanja.a.k/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiInstagram />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AndrewKaranja" target="blank">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiGithub />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/karanjah_1" target="blank">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiTwitter />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/andrew-karanja-388316170/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiLinkedin />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/andrew-karanja-388316170/"
                className="name"
              >
                Andrew Karanja
              </a>
              , All right reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
