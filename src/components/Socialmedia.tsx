import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

export default function Projects() {
  return (
    <div className="social-media">
      <div>
        <a href="https://www.linkedin.com/in/anku-kumari/" target="_blank" >
          <AiFillLinkedin className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ankukumari03" target="_blank">
          <AiOutlineTwitter className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a href="https://github.com/anku-js" target="_blank">
          <AiFillGithub className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a  href="mailto:ankuhere96@gmail.com" target="_blank">
          <AiOutlineMail className="socialmedia-icons" />
        </a>
      </div>
    </div>
  );
}
