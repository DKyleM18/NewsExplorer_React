import "./SavedNews.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

export default function SavedNews() {
  const currentUser = useContext(CurrentUserContext);
  const savedNewsArticles = useContext(SavedNewsArticlesContext);
  return (
    <section className="saved-news">
      <div className="saved-news__header_container">
        <p className="saved-news__preheader">Saved articles</p>
        <h2 className="saved-news__title">
          {currentUser.name}, you have {/*savedNewsArticles.length*/}0 saved
          articles
        </h2>
        <p className="saved-news__keywords">By keywords: (Future feature)</p>
      </div>
      {/* <SavedNewsCardList /> */}
    </section>
  );
}
