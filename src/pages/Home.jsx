import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MainTitle, Section } from './Pages.styled';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTrendFilms() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTrendFilms();
  }, []);

  return (
    <Section>
      <MainTitle>Trending Movies</MainTitle>
      {loading && <Loader />}
      <MoviesList films={films} />
    </Section>
  );
};

export default Home;
