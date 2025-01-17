import "./NewsCard.css";

export default function NewsCard() {
  return (
    <div className="news-card">
      <h3 className="news-card__title">Title</h3>
      <p className="news-card__description">Description</p>
      <p className="news-card__date">Date</p>
      <p className="news-card__source">Source</p>
      <img className="news-card__image" src="image" alt="image" />
    </div>
  );
}
