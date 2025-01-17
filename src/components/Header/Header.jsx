import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import headerBackground from "../../assets/header-background.png";
import "./Header.css";

export default function Header({
  handleLoginClick,
  handleLogoutClick,
  handleSearchSubmit,
  isLoggedIn,
  currentUser,
}) {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <Navigation
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <div className="header__content">
        <div className="header__wrapper">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__caption">
            Find the latest news on any topic and save them on your personal
            account.
          </p>
        </div>
        <div className="header__search-form">
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </header>
  );
}
