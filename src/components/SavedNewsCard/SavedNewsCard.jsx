import "./SavedNewsCard.css";

export default function SavedNewsCard({
  imageUrl,
  title,
  date,
  description,
  source,
  keyword,
}) {
  return (
    <li className="saved-news-card">
      <div className="saved-news-card__keyword">{keyword}</div>
      <button type="button" className="saved-news-card__delete-button"></button>
      <div className="saved-news-card__delete-confirm">Remove from saved</div>
      <div className="saved-news-card__image-container">
        <img className="saved-news-card__image" src={imageUrl} alt={title} />
      </div>
      <div className="saved-news-card__info">
        <p className="saved-news-card__date">{date}</p>
        <h2 className="saved-news-card__title">{title}</h2>
        <p className="saved-news-card__description">{description}</p>
        <p className="saved-news-card__source">{source}</p>
      </div>
    </li>
  );
}
