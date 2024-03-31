// images
import githubImg from "../../img/github-white.png";
import linkedinImg from "../../img/linkedin-white.png";
import myLogo from "../../img/durpinlogo.webp";

import "./style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="copyright">
        <img id="myLogo-footer" src={myLogo} alt="durpin thapa magar logo " />
        <p>&copy; {new Date().getFullYear()} Durpin Thapa Magar</p>
      </div>
      <div className="footer-social">
        <a
          href="https://github.com/durpintm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="durpin thapa magar github" />
        </a>
        <a
          href="https://www.linkedin.com/in/durpin-thapa-magar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImg} alt="durpin thapa magar linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
