import "../styles/Navigation.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navigation = () => {
  const [menuclick, setMenuclick] = useState<boolean>(false);

  const handleMenuClick = () => setMenuclick(!menuclick);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="menu-bars" onClick={handleMenuClick}>
          {menuclick ? (
            <FaTimes size={30} style={{ display: "block", color: "white" }} />
          ) : (
            <FaBars size={30} style={{ display: "block", color: "white" }} />
          )}
        </div>
        <ul className={menuclick ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="expertise"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Expertise
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Timeline
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
