import "./NewsCard.css";

export default function NewsCard({
  url,
  name,
  date,
  description,
  author,
  children,
}) {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img src={url} alt={name} className="news-card__image" />
      </div>
      {children && <div className="news-card__details">{children}</div>}
      <div className="news-card__info">
        <div className="news-card__date">{date}</div>
        <h3 className="news-card__title">{name}</h3>
        <p className="news-card__description">{description}</p>
        <footer className="news-card__footer">{author}</footer>
      </div>
    </div>
  );
}
