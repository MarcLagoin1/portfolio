import "../styles/Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiMalt } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="contact-items">
            <a href="https://github.com/MarcLagoin1" className="contact-icons">
              <FaGithub
                size={40}
                className="icon"
                style={{ color: "white", display: "block" }}
              />
            </a>
            <a href="" className="contact-icons">
              <FaLinkedin
                className="icon"
                size={40}
                style={{ color: "white", display: "block" }}
              />
            </a>
            <a href="" className="contact-icons">
              <SiMalt
                className="icon"
                size={70}
                style={{ color: "white", display: "block" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
