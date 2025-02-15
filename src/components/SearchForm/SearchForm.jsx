import "./SearchForm.css";

export default function SearchForm({
  handleSearchSubmit,
  keyword,
  setKeyword,
}) {
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleSearchSubmit(keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSearchClick}>
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search"
          value={keyword}
          onChange={handleKeywordChange}
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
