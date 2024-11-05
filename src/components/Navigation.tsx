import "../styles/Navigation.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <a href="/">Expertise</a>
          </li>
          <li className="nav-item">
            <a href="/">Timeline</a>
          </li>
          <li className="nav-item">
            <a href="/">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
