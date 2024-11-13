import "../styles/Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiMalt } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="items-contact">
          <h3>Contact me through: </h3>
          <a href="https://github.com/MarcLagoin1" className="contact-icons">
            <FaGithub
              size={40}
              className="icon"
              style={{ color: "white", display: "block" }}
            />
            <p>Github</p>
          </a>
          <a href="" className="contact-icons">
            <FaLinkedin
              className="icon"
              size={40}
              style={{ color: "white", display: "block" }}
            />
            <p>LinkedIn</p>
          </a>
          <a href="" className="contact-icons">
            <SiMalt
              className="icon"
              size={70}
              style={{ color: "white", display: "block" }}
            />
            <p>Malt</p>
          </a>
        </div>
      </div>
    </div>
  );
};
