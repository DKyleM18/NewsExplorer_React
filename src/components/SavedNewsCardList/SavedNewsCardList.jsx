import "./SavedNewsCardList.css";
import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import { useContext } from "react";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";

export default function SavedNewsCardList() {
  const { savedNewsArticles } = useContext(SavedNewsArticlesContext);
  return (
    <section className="saved-news-cards">
      <ul className="saved-news-cards__list">
        {savedNewsArticles.map((card) => (
          <SavedNewsCard
            key={card._id}
            imageUrl={card.imageUrl}
            title={card.title}
            date={card.date}
            description={card.description}
            source={card.source}
            keyword={card.keyword}
          />
        ))}
      </ul>
    </section>
  );
}
