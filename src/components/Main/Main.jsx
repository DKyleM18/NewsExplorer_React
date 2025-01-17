import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";

export default function Main({ isLoading, isLoggedIn }) {
  return (
    <main className="main">
      {isLoading ? (
        <div className="main__preloader">
          <div className="main__preloader_circle">
            <Preloader />
          </div>
          <p className="main__preloader_text">Searching for news...</p>
        </div>
      ) : (
        <div className="main__content">
          <h2 className="main__title">Search results</h2>
          <NewsCardList isLoggedIn={isLoggedIn} />
        </div>
      )}
    </main>
  );
}
