import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState('');
  //   const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setFilm(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    movieId && getDetails();
  }, [movieId]);

  const {
    poster_path,
    original_title,
    title,
    release_date,
    genres,
    vote_average,
    overview,
  } = film;

  return (
    <div>
      {loading && <Loader />}
      {film && (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w400${poster_path}`}
              alt={title}
            />
            <div>
              <h3>{original_title}</h3>
              <p>Release date: {release_date}</p>
              <p>
                Genres: {genres.map(({ name }) => `${name.toLowerCase()} `)}
              </p>
              <p>Ranking: {vote_average}</p>
              <p>Overview: {overview}</p>
            </div>
          </div>
          <div>
            <h3>Additional information:</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
