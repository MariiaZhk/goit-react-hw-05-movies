import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchSearchMovies } from '../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const paramsNotify = {
  width: '600px',
  position: 'center-center',
  fontSize: '36px',
};

const Movies = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  // const query = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const getSearchFilm = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchMovies(query);
        // setSearch(query);
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSearchFilm();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.search.value;

    if (searchValue === '') {
      Notify.warning('Enter your search query, please!', paramsNotify);
      setSearchParams({});
      setFilms([]);
      return;
    }

    setSearchParams({ query: searchValue });
    setLoading(true);
    setFilms([]);
    // event.currentTarget.reset();
  };

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setSearch(value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!query) return setSearchParams({});
  //   setSearchParams({ search: query });
  //   submit({ query: searchParams.get('search') });
  // };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} value={query}></SearchBar>
      {loading && <Loader />}
      <MoviesList films={films} />
    </>
  );
};

export default Movies;
