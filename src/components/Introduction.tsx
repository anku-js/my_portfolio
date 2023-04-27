import { GrHtml5, GrCss3, GrReactjs } from "react-icons/gr"
import { IoLogoJavascript, IoLogoSass } from "react-icons/io"
import { SiTypescript } from "react-icons/si"
import { BsGit, BsGithub } from "react-icons/bs"

export default function Introduction() {
  return (
    <div className="introduction-container" id="introduction-container">
      <div className="introduction">
        <img className="avatar" src="avatar.png" />
        <div className="description-container">
          <p className="intro-name">Hey, I am Anku Kumari</p>
          <p className="intro-paragraph">
            . . . an aspirant Frontend Developer
          </p>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li><GrHtml5 className="skills-icons"/><p>HTLM</p></li>
              <li><GrCss3 className="skills-icons"/><p>CSS</p></li>
              <li><IoLogoJavascript className="skills-icons"/><p>JavaScript</p></li>
              <li><GrReactjs className="skills-icons"/><p>React.js</p></li>
              <li><SiTypescript className="skills-icons"/><p>TypeScrit</p></li>
              <li><IoLogoSass className="skills-icons"/><p>SASS</p></li>
              <li><BsGit className="skills-icons"/><p>GIT</p></li>
              <li><BsGithub className="skills-icons"/><p>GitHub</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
