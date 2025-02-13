import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import "./Header.css";

export default function Header({
  handleLoginClick,
  handleLogoutClick,
  handleSearchSubmit,
  isLoggedIn,
  currentUser,
  keyword,
  setKeyword,
  isMobile,
}) {
  return (
    <header className="header">
      {isMobile ? (
        <MobileNavigation
          handleLoginClick={handleLoginClick}
          handleLogoutClick={handleLogoutClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />
      ) : (
        <Navigation
          handleLoginClick={handleLoginClick}
          handleLogoutClick={handleLogoutClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />
      )}
      <div className="header__content">
        <div className="header__wrapper">
          <h1 className="header__title">What&apos;s going on in the world?</h1>
          <p className="header__caption">
            Find the latest news on any topic and save them on your personal
            account.
          </p>
        </div>
        <div className="header__search-form">
          <SearchForm
            handleSearchSubmit={handleSearchSubmit}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </div>
      </div>
    </header>
  );
}
