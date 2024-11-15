import "../styles/Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMalt } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <div id="hero">
      <div className="content">
        <div className="social-icons">
          <a href="https://github.com/MarcLagoin1">
            <FaGithub
              className="icon"
              size={40}
              style={{ color: "white", display: "block" }}
            />
          </a>
          <a href="">
            <FaLinkedin
              className="icon"
              size={40}
              style={{ color: "white", display: "block" }}
            />
          </a>
          <a href="">
            <SiMalt className="icon" size={70} color="white" />
          </a>
        </div>
        <h1>Marc Lagoin</h1>
        <p>Data Engineer / Fullstack Developer</p>
      </div>
      <div className="arrow-icon">
        <FaArrowDown size={40} />
      </div>
    </div>
  );
};
