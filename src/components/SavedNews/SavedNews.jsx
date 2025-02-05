import "./SavedNews.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

export default function SavedNews({ savedKeywords }) {
  const currentUser = useContext(CurrentUserContext);
  const savedNewsArticles = useContext(SavedNewsArticlesContext);
  return (
    <section className="saved-news">
      <div className="saved-news__header_container">
        <p className="saved-news__preheader">Saved articles</p>
        <h2 className="saved-news__title">
          {currentUser.name || "User"}, you have {savedNewsArticles.length}{" "}
          saved articles
        </h2>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span style={{ fontWeight: "bold" }}>
            {savedKeywords.join(", ") || "None"}
          </span>
        </p>
      </div>
      {/* <SavedNewsCardList /> */}
    </section>
  );
}
