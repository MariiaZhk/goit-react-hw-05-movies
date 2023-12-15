const SearchBar = (handleSubmit, value, setSearchParams) => {
  return (
    <div>
      <form onSubmit={e => setSearchParams}>
        <input
          //   onChange={e => handleChange}
          name="search"
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter your search query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
