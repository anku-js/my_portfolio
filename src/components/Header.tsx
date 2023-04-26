import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-wrapper">
      <nav className="header">
        <div className="name">
          <div>
            <FaReact className="react-logo"/>
          </div>
          <div>
            <h1>Anku Kumari</h1>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
