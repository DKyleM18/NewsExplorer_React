import "./NoResult.css";
import noResultImg from "../../assets/no-result.svg";

export default function NoResult() {
  return (
    <div className="no-result">
      <img className="no-result__image" src={noResultImg} alt="No result" />
      <h2 className="no-result__title">Nothing found</h2>
      <p className="no-result__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
