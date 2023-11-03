import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <ul className="menu">
        <Link onClick={scrollToTop} className="menuLink" to="/">
          <li className="menuItem">Home</li>
        </Link>
      </ul>
      <div className="socialMediaFooter">
        <a
          href="https://github.com/BenjaminRasoli"
          target="_blank"
          rel="noreferrer"
        >
          <span className="instagram">
            <AiOutlineInstagram size={30} />
          </span>
        </a>
        <a
          href="https://github.com/BenjaminRasoli"
          target="_blank"
          rel="noreferrer"
        >
          <span className="facebook">
            <AiFillFacebook size={30} />
          </span>
        </a>
        <a
          href="https://github.com/BenjaminRasoli"
          target="_blank"
          rel="noreferrer"
        >
          <span className="github">
            <AiOutlineGithub size={30} />
          </span>
        </a>
        <a
          href="https://github.com/BenjaminRasoli"
          target="_blank"
          rel="noreferrer"
        >
          <span className="linkedin">
            <AiFillLinkedin size={30} />
          </span>
        </a>
      </div>
      <p>&copy;2023 Free Games Tracker | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
