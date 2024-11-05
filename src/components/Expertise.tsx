import "../styles/Expertise.css";

export const Expertise = () => {
  return (
    <div className="expertise">
      <div className="card-container"></div>
      <h1>Expertise</h1>
      <div className="skill-grid">
        <div className="skill">
          <h3>Full Stack Web Development</h3>
          <p>I have built ...</p>
          <div className="techstack"></div>
        </div>
        <div className="skill">
          <h3>Computer Vision</h3>
          <p>I developed...</p>
          <div className="techstack"></div>
        </div>
        <div className="skill">
          <h3>Computer Graphics</h3>
          <p>I used graphics...</p>
          <div className="techstack"></div>
        </div>
      </div>
    </div>
  );
};
