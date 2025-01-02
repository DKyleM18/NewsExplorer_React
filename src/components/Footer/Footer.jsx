import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <p className="footer__link">Home</p>
        <p className="footer__link">TripleTen</p>
        <p className="footer__link">FB</p>
        <p className="footer__link">GH</p>
      </div>
    </footer>
  );
}
