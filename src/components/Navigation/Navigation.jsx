import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logout.png";

export default function Navigation({
  handleLoginClick,
  handleLogoutClick,
  isLoggedIn,
  currentUser,
}) {
  return (
    <div className="navigation">
      <NavLink to="/news" className="navigation__link">
        <div className="navigation__icon">NewsExplorer</div>
      </NavLink>
      {isLoggedIn ? (
        <div className="navigation__buttons">
          <NavLink to="/news" className="navigation__link">
            <button className="navigation__button_home">Home</button>
          </NavLink>
          <NavLink to="/news/saved-news" className="navigation__link">
            <button className="navigation__button_saved-news">
              Saved articles
            </button>
          </NavLink>
          <button
            onClick={handleLogoutClick}
            type="button"
            className="navigation__user-button"
          >
            {currentUser.name || "User"}
            <img
              className="navigation__logout-icon"
              src={logoutIcon}
              alt="logout"
            />
          </button>
        </div>
      ) : (
        <div className="navigation__buttons">
          <NavLink to="/news" className="navigation__link">
            <button className="navigation__button_home">Home</button>
          </NavLink>
          <button
            onClick={handleLoginClick}
            type="button"
            className="navigation__login-button"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
