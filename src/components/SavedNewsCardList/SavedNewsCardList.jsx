import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";

export default function SavedNewsCardList({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const savedNewsArticles = useContext(SavedNewsArticlesContext);
  return (
    <section className="saved-news-cards">
      <ul className="saved-news-cards__list">
        {savedNewsArticles.map((card) => (
          <NewsCard
            isLoggedIn={isLoggedIn}
            imageUrl={card.imageUrl}
            title={card.title}
            date={card.date}
            description={card.description}
            source={card.source}
          />
        ))}
      </ul>
    </section>
  );
}
