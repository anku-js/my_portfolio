import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-wrapper">
      <nav className="header">
        <div className="name">
          <div>
            <FaReact className="react-logo" />
          </div>
          <div>
            <h1>Anku Kumari</h1>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#introduction-container">About</a>
          </li>
          <li>
            <a href="#projectlist-container">Projects</a>
          </li>
          <li>
            <a href="#footer-container">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
