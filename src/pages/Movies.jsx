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
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getSearchFilm() {
      try {
        setLoading(true);
        const data = await fetchSearchMovies(query);
        setFilms(data.results);

        if (data.results.length === 0) {
          return Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.',
            paramsNotify
          );
        }
      } catch (error) {
        Notify.failure(
          'Oops, something went wrong.Try to refresh this page or make another search.',
          paramsNotify
        );
      } finally {
        setLoading(false);
      }
    }
    getSearchFilm();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.search.value.trim();

    if (searchValue === '') {
      Notify.failure('Enter your search query, please!', paramsNotify);
      return;
    }

    if (searchValue === query) {
      Notify.failure('Enter a new search query, please!', paramsNotify);
      event.currentTarget.reset();
      return;
    }

    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} value={query}></SearchBar>
      {loading && <Loader />}
      <MoviesList films={films} />
    </>
  );
};

export default Movies;
