import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import {
  AddInfoList,
  GoBackBtn,
  LinkStyled,
  MovieAddInfoWrap,
  MovieDetailsPoster,
  MovieDetailsTitle,
  MovieDetailsWrapper,
  MovieInfoWrap,
  Section,
} from './Pages.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = useRef(location.state ?? '/');

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

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

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
    <Section>
      {loading && <Loader />}
      {film && (
        <>
          <GoBackBtn onClick={handleGoBack}>Go back</GoBackBtn>
          <MovieDetailsWrapper>
            <MovieDetailsPoster
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w400${poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
              }
              alt={title}
              width="400px"
            />

            <MovieInfoWrap>
              <MovieDetailsTitle>{original_title}</MovieDetailsTitle>
              <p>
                <b>Release date: </b> {release_date}
              </p>
              <p>
                <b>Genres: </b>
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Ranking: </b> {vote_average}
              </p>
              <p>
                <b>Overview: </b>
                {overview}
              </p>
            </MovieInfoWrap>
          </MovieDetailsWrapper>
          <MovieAddInfoWrap>
            <h3>Additional information:</h3>
            <AddInfoList>
              <li>
                <LinkStyled to="cast">Cast</LinkStyled>
              </li>
              <li>
                <LinkStyled to="reviews">Reviews</LinkStyled>
              </li>
            </AddInfoList>
          </MovieAddInfoWrap>
        </>
      )}
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
