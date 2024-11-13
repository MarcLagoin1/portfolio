import "../styles/Expertise.css";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython, FaSwift, FaReact } from "react-icons/fa";
import {
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiCsharp,
  SiCplusplus,
  SiOpengl,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

export const Expertise = () => {
  return (
    <div id="expertise">
      <div className="card-container">
        <h1>My Expertise</h1>
        <div className="skill-grid">
          <div className="skill">
            <h3>Full Stack Web Development</h3>
            <p>Tech Stack:</p>
            <div className="techstack">
              <div className="tech-icon">
                <BiLogoTypescript
                  size={30}
                  style={{ verticalAlign: "middle", color: "white" }}
                />
                <p>Typescript</p>
              </div>
              <div className="tech-icon">
                <FaReact size={30} style={{ color: "white" }} />
                <p>React</p>
              </div>
              <div className="tech-icon">
                <RiNextjsLine size={30} style={{ color: "white" }} />
                <p>NextJS</p>
              </div>
            </div>
          </div>
          <div className="skill">
            <h3>Data Engineering / Computer Vision</h3>
            <p>Tech Stack:</p>
            <div className="techstack">
              <div className="tech-icon">
                <FaPython size={30} style={{ color: "white" }} />
                <p>Python</p>
              </div>
              <div className="tech-icon">
                <SiCsharp size={30} style={{ color: "white" }} />
                <p>C#</p>
              </div>
              <div className="tech-icon">
                <SiTensorflow size={30} style={{ color: "white" }} />
                <p>TensorFlow</p>
              </div>
              <div className="tech-icon">
                <SiKeras size={30} style={{ color: "white" }} />
                <p>Keras</p>
              </div>
              <div className="tech-icon">
                <SiOpencv size={30} style={{ color: "white" }} />
                <p>OpenCV</p>
              </div>
            </div>
          </div>
          <div className="skill">
            <h3>Computer Graphics</h3>
            <p>Tech Stack:</p>
            <div className="techstack">
              <div className="tech-icon">
                <SiCplusplus size={30} style={{ color: "white" }} />
                <p>C++</p>
              </div>
              <div className="tech-icon">
                <FaSwift size={30} style={{ color: "white" }} />
                <p>Swift</p>
              </div>
              <div className="tech-icon">
                <SiOpengl size={30} style={{ color: "white" }} />
                <p>OpenGL</p>
              </div>
              <div className="tech-icon">
                <TbBrandThreejs size={30} style={{ color: "white" }} />
                <p>ThreeJS</p>
              </div>
              <div className="tech-icon">
                <p>Apple Metal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
