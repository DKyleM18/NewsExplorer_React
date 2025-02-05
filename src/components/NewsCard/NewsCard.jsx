import "./NewsCard.css";

export default function NewsCard({
  imageUrl,
  title,
  date,
  description,
  source,
  isLoggedIn,
}) {
  return (
    <li className="news-card">
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
