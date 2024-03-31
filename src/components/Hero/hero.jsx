import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SmoothScroll from "smooth-scroll";
import "particles.js/particles";

import githubImg from "../../img/github.png";
import linkedinImg from "../../img/linkedin.svg";
// css
import "./hero.css";

const particlesJS = window.particlesJS;

const Hero = () => {
  const { t } = useTranslation("global");

  const handleScroll = () => {
    const scroll = new SmoothScroll(),
      elmt = document.getElementById("about");
    scroll.animateScroll(elmt);
  };

  useEffect(() => {
    const jsonPath =
      window.innerWidth <= 800
        ? "../../../public/particlesjs-mobile-config.json"
        : "../../../public/particlesjs-config.json";

    particlesJS.load("hero-container", jsonPath);
  }, []);

  return (
    <div id="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Durpin Thapa Magar</h1>
        <div className="hero-description">{t("hero.description")}</div>
        <div className="social-container">
          <div className="social-item">
            <a
              href="https://github.com/durpintm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="durpin thapa magar github" />
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/durpin-thapa-magar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinImg} alt="durpin thapa magar linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-button-container">
        <button onClick={handleScroll} className="learn-more-button">
          {t("hero.learn-more")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
