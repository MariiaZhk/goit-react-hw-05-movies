import {
  SearchBarWrap,
  SearchBtn,
  SearchForm,
  SearchInput,
} from './SearchBar.styled';

const SearchBar = ({ handleSubmit, value }) => {
  return (
    <SearchBarWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          name="search"
          defaultValue={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter your search query"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </SearchBarWrap>
  );
};

export default SearchBar;
