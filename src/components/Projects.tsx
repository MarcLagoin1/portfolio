import "../styles/Projects.css";
import deepl from "../assets/projects-pictures/screen-deepl.png";

export const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a href="https://github.com/MarcLagoin1/DeepL_Ships">
              <img
                src={deepl}
                alt="thumbnail"
                width="50%"
                className="img-project"
              />
            </a>
            <a href="https://github.com/MarcLagoin1/DeepL_Ships">
              <h2>Deep Learning Image Classification: "Ships"</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
