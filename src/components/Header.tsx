import { useState } from "react"
import { FaReact } from "react-icons/fa";

export default function Header() {
const [ hamburgerActive, setHamburgerActive] = useState(false)

  function handleClick() {
    setHamburgerActive(hamburgerActive => !hamburgerActive)
  }

  return (
    <div className="header-wrapper">
      <nav className="header">
        <div className="name">
          <div>
            <a href="#introduction"><FaReact className="react-logo" /></a>
          </div>
          <div>
            <a href="#introduction">Anku Kumari</a>
          </div>
        </div>
        <ul className={`nav-list ${hamburgerActive? "active" : ""}`}>
          {/* <li>
            <a onClick={handleClick} href="#introduction-container">About</a>
          </li> */}
          <li>
            <a onClick={handleClick}  href="#projectlist">Projects</a>
          </li>
          <li>
            <a onClick={handleClick}  href="#footer">Contact</a>
          </li>
        </ul>
        <div className={`hamburger ${hamburgerActive? "active" : ""}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>        
      </nav>
    </div>
  );
}
