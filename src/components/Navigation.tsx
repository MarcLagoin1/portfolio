import "../styles/Navigation.css";

export const Navigation = () => {
  return (
    <header>
      <div className="nav-container">
        <nav className="navigation-menu">
          <ul>
            <li>
              <a href="/Hero">Home</a>
            </li>
            <li>
              <a href="/Expertise">Expertise</a>
            </li>
            <li>
              <a href="/Timeline">Timeline</a>
            </li>
            <li>
              <a href="/Projects">Projects</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
