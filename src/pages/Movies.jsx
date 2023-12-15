import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchSearchMovies } from '../services/api';

const paramsNotify = {
  width: '600px',
  position: 'center-center',
  fontSize: '36px',
};

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  // const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (query === '') {
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
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.search.value;

    if (searchValue === '') {
      Notify.warning('Enter your search query, please!', paramsNotify);
      setSearchParams({});
      setFilms([]);
      return;
    }

    // if (searchValue === searchQuery) {
    //   Notify.warning('Enter a new search query, please!', paramsNotify);
    //   event.currentTarget.reset();
    //   return;
    // }

    setSearchParams({ searchValue });
    setLoading(true);
    // event.currentTarget.reset();
  };

  // const handleChange = ({ target: { value } }) => {
  //   setSearch(value);
  // };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit}></SearchBar>
    </>
  );
};

export default Movies;
