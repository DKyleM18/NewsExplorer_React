import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";
import NewsCardList from "../NewsCardList/NewsCardList";

export default function Main({ isLoading, isLoggedIn, newsCards, noResults }) {
  let content = null;

  if (isLoading) {
    content = (
      <div className="main__preloader">
        <div className="main__preloader_circle">
          <Preloader />
        </div>
        <p className="main__preloader_text">Searching for news...</p>
      </div>
    );
  } else if (noResults) {
    content = (
      <div className="main__no-result">
        <NoResult />
      </div>
    );
  } else if (newsCards.length > 0) {
    content = (
      <div className="main__content">
        <NewsCardList isLoggedIn={isLoggedIn} newsCards={newsCards} />
      </div>
    );
  }
  return (
    <>{content}</>
    // <main className="main">
    //   {isLoading ? (
    //     <div className="main__preloader">
    //       <div className="main__preloader_circle">
    //         <Preloader />
    //       </div>
    //       <p className="main__preloader_text">Searching for news...</p>
    //     </div>
    //   ) : noResults ? (
    //     <div className="main__no-result">
    //       <NoResult />
    //     </div>
    //   ) : !noResults ? (
    //     <div className="main__content">
    //       <NewsCardList isLoggedIn={isLoggedIn} newsCards={newsCards} />
    //     </div>
    //   ) : null}
    // </main>
  );
}
