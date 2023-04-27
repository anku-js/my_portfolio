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
        <a>
          <AiFillLinkedin className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a>
          <AiOutlineTwitter className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a>
          <AiFillGithub className="socialmedia-icons" />
        </a>
      </div>
      <div>
        <a>
          <AiOutlineMail className="socialmedia-icons" />
        </a>
      </div>
    </div>
  );
}
