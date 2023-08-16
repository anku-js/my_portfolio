import { GrHtml5, GrCss3, GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

export default function Introduction() {
  return (
    <div className="introduction-container" id="introduction">
      <div className="introduction">
        <img className="avatar" src="avatar.png" alt="animated avatar of a girl" />
        <div className="description-container">
          <p className="intro-name">Hey, I am Anku Kumari</p>
          <p className="intro-paragraph">
            . . . A Frontend Developer (React)
          </p>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li>
                <GrHtml5 className="skills-icons" />
                <p>HTML</p>
              </li>
              <li>
                <TbBrandNextjs className="skills-icons" />
                <p>Next</p>
              </li>
              <li>
                <GrCss3 className="skills-icons" />
                <p>CSS</p>
              </li>
              <li>
                <IoLogoJavascript className="skills-icons" />
                <p>JavaScript</p>
              </li>
              <li>
                <GrReactjs className="skills-icons" />
                <p>React.js</p>
              </li>
              <li>
                <SiTypescript className="skills-icons" />
                <p>TypeScript</p>
              </li>
              <li>
                <IoLogoSass className="skills-icons" />
                <p>SASS</p>
              </li>
              <li>
                <BsGit className="skills-icons" />
                <p>GIT</p>
              </li>
              <li>
                <BsGithub className="skills-icons" />
                <p>GitHub</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
