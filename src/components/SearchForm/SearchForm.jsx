import "./SearchForm.css";

export default function SearchForm({ handleSearchSubmit }) {
  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Enter topic"
          aria-label="Search topics"
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
