// import { useSearchParams } from 'react-router-dom';

const SearchBar = (value, handleSubmit) => {
  //   const [, setSearchParams] = useSearchParams;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
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
