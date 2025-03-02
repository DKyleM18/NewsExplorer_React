import "./Footer.css";
import githubIcon from "../../assets/github-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Kyle Messersmith, Powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__links-text">
          <a href="https://d.kyle.blinklab.com" className="footer__link">
            Portfolio
          </a>
        </div>
        <div className="footer__links-symbol">
          <a href="https://github.com/DKyleM18" className="footer__link">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
