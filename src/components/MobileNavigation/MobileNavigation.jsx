import "./MobileNavigation.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logout.png";

export default function MobileNavigation({
  handleLoginClick,
  handleLogoutClick,
  isLoggedIn,
  currentUser,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const savedNews = useLocation().pathname === "/saved-news";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`mobile-navigation ${
        isDropdownOpen ? "mobile-navigation__dropdown-open" : ""
      }`}
    >
      <NavLink to="/" className="mobile-navigation__link">
        <div
          className={
            isDropdownOpen
              ? "mobile-navigation__icon"
              : savedNews
              ? "sn-mobile-navigation__icon"
              : "mobile-navigation__icon"
          }
        >
          NewsExplorer
        </div>
      </NavLink>
      <button
        type="button"
        className={
          isDropdownOpen
            ? "mobile-navigation__menu-close-button"
            : savedNews
            ? "sn-mobile-navigation__menu-button"
            : "mobile-navigation__menu-button"
        }
        onClick={toggleDropdown}
      ></button>
      {isDropdownOpen && (
        <div className="mobile-navigation__dropdown-menu">
          <NavLink to="/" className="mobile-navigation__link">
            <button className="mobile-navigation__button_home">Home</button>
          </NavLink>
          {isLoggedIn ? (
            <div className="mobile-navigation__buttons">
              <NavLink to="/saved-news" className="mobile-navigation__link">
                <button className="mobile-navigation__button_saved-news">
                  Saved articles
                </button>
              </NavLink>
              <button
                onClick={handleLogoutClick}
                type="button"
                className="mobile-navigation__user-button"
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
            <button
              onClick={handleLoginClick}
              type="button"
              className="mobile-navigation__login-button"
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </div>
  );
}
