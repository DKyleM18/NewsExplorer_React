import "./NewsCard.css";
import { useContext, useMemo, useState } from "react";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";
import { addSavedCard /*, removeSavedCard */ } from "../../utils/api";
export default function NewsCard({
  imageUrl,
  title,
  date,
  description,

  source,
  isLoggedIn,
  url,
  keyword,
}) {
  const handleCardClick = (event) => {
    if (!event.target.classList.contains("news-card__save-button")) {
      window.open(url, "_blank");
    }
  };

  return (
    <li className="news-card" onClick={handleCardClick}>
      <button
        type="button"
        className={`news-card__save-button ${isLoggedIn ? "isLoggedIn" : ""}`}
      ></button>
      <div className="news-card__save-confirm">Sign in to save articles</div>
      <div className="news-card__image-container">
        <img className="news-card__image" src={imageUrl} alt={title} />
      </div>
      <div className="news-card__info">
        <p className="news-card__date">{date}</p>
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </li>
  );
}
