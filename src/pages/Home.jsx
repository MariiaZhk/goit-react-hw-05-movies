import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTrendFilms() {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setFilms(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTrendFilms();
  }, []);

  return (
    <section>
      <h2>Trending Movies</h2>
      {loading && <Loader />}
      <MoviesList films={films} />
    </section>
  );
};

export default Home;
