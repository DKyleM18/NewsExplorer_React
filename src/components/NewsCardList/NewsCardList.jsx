import { useState } from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList({ newsCards, isLoggedIn }) {
  const [shownCards, setShownCards] = useState(3);
  const showMoreCards = () => setShownCards(shownCards + 3);
  return (
    <section className="news-cards">
      <h2 className="news-cards__title">Search results</h2>
      <ul className="news-cards__list">
        {newsCards.slice(0, shownCards).map((card) => (
          <NewsCard
            isLoggedIn={isLoggedIn}
            imageUrl={card.urlToImage}
            title={card.title}
            date={new Date(card.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            description={card.description}
            source={card.source.name}
          />
        ))}
      </ul>
      {shownCards < newsCards.length && (
        <button
          type="button"
          className="news-cards__show-more"
          onClick={showMoreCards}
        >
          Show more
        </button>
      )}
    </section>
  );
}
