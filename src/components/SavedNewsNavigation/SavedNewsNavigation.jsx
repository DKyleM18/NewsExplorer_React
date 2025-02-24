import "./SavedNewsNavigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/sn_logout.png";

export default function Navigation({
  handleLoginClick,
  handleLogoutClick,
  isLoggedIn,
  currentUser,
}) {
  return (
    <div className="sn_navigation">
      <NavLink to="/news" className="sn_navigation__link">
        <div className="sn_navigation__icon">NewsExplorer</div>
      </NavLink>
      {isLoggedIn ? (
        <div className="sn_navigation__buttons">
          <NavLink to="/news" className="sn_navigation__link">
            <button className="sn_navigation__button_home">Home</button>
          </NavLink>
          <NavLink to="/news/saved-news" className="sn_navigation__link">
            <button className="sn_navigation__button_saved-news">
              Saved articles
            </button>
          </NavLink>
          <button
            onClick={handleLogoutClick}
            type="button"
            className="sn_navigation__user-button"
          >
            {currentUser.name || "User"}
            <img
              className="sn_navigation__logout-icon"
              src={logoutIcon}
              alt="logout"
            />
          </button>
        </div>
      ) : (
        <div className="sn_navigation__buttons">
          <NavLink to="/news" className="sn_navigation__link">
            <button className="sn_navigation__button_home">Home</button>
          </NavLink>
          <button
            onClick={handleLoginClick}
            type="button"
            className="sn_navigation__login-button"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
