import React, { useState } from "react";
import { Link } from "react-router-dom";
import { platForms } from "./platforms";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import logo from "../../images/FreeGamesTracker-logos_transparent.png";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mainNavbar">
        <div className="navbarTitle">
          <Link onClick={scrollToTop} to="/">
            <img className="mainLogo" src={logo} alt="FGT Logo" />
          </Link>
        </div>
        {platForms.map((platform) => {
          return (
            <div key={platform.id} className="navbarItem">
              <Link
                onClick={scrollToTop}
                className="sideBarText"
                to={platform.queryParam}
              >
                {platform.name}
              </Link>
            </div>
          );
        })}
      </div>

      <nav id="sideBar" className={toggle ? "active" : ""}>
        <div className="navbar">
          <ul onClick={() => setToggle(false)}>
            <li>
              <Link className="sideBarText" to="/">
                Home
              </Link>
            </li>
            <li>
              {platForms.map((platform) => {
                return (
                  <div key={platform.id}>
                    <Link className="sideBarText" to={platform.queryParam}>
                      {platform.name}
                    </Link>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </nav>
      <button className="navBarButton">
        <Hamburger
          color="var(--second-color)"
          toggled={toggle}
          toggle={setToggle}
        />
      </button>
    </>
  );
}

export default NavBar;
