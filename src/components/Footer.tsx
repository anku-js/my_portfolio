import { AiOutlineCopyright } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { RxResume } from "react-icons/rx";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h2 className="footer-p">Hoping to work together. . .</h2>
        <div className="contact-wrapper">
          <a href="mailto:ankuhere96@gmail.com" className="contact">
            <MdAlternateEmail />
            <p>Send a mail</p>
          </a>
          <a href="tel:9066740736" className="contact">
            <IoMdPhonePortrait />
            <p>Call me</p>
          </a>
          <a target="_blank" href="https://drive.google.com/file/d/11xaq0GVMjMIu7KGtFJmhwTtF6YiPGVue/view?usp=share_link" className="contact">
            <RxResume />
            <p>My Resume</p>
          </a>
        </div>
      </div>
      <div className="end-section-container">
      <p className="made-by">
          <AiOutlineCopyright />
          <span>Made by Anku Kumari</span>
        </p>
        <p className="description">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications. Looking forward to join an organization to launch my
          career.
        </p>
      </div>
    </div>
  );
}
