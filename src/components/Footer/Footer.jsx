import "./Footer.css";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/github-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__links-text">
          <Link to="/" className="footer__link">
            <p className="footer__link_home">Home</p>
          </Link>
          <a href="https://tripleten.com/" className="footer__link">
            TripleTen
          </a>
        </div>
        <div className="footer__links-symbol">
          <a href="https://github.com" className="footer__link">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.facebook.com" className="footer__link">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
