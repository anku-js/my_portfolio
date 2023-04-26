import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub, AiOutlineMail } from "react-icons/ai"

export default function Projects() {
    return (
        <div className="social-media">
<div>
    <a><AiFillLinkedin className="linked-in"/></a>
</div>
<div>
    <a><AiOutlineTwitter className="twitter"/></a>
</div>
<div>
    <a><AiFillGithub  className="github"/></a>
</div>
<div>
    <a><AiOutlineMail className="mail"/></a>
</div>
        </div>
    )
}