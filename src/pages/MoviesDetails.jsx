import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { Loader } from 'components/Loader/Loader';
import {
  AddInfoList,
  MovieAddInfoWrap,
  MovieDetailsPoster,
  MovieDetailsTitle,
  MovieDetailsWrapper,
  MovieInfoWrap,
  Section,
  Text,
} from './Pages.styled';
import { NavLinkStyled } from 'components/Layout/Layout.styled';

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
    <Section>
      {loading && <Loader />}
      {film && (
        <>
          <MovieDetailsWrapper>
            <MovieDetailsPoster
              src={`http://image.tmdb.org/t/p/w400${poster_path}`}
              alt={title}
              width="400px"
            />
            <MovieInfoWrap>
              <MovieDetailsTitle>{original_title}</MovieDetailsTitle>
              <Text>
                <b>Release date: </b> {release_date}
              </Text>
              <Text>
                <b>Genres: </b>
                {genres.map(({ name }) => `${name.toLowerCase()} `)}
              </Text>
              <Text>
                <b>Ranking: </b> {vote_average}
              </Text>
              <Text>
                <b>Overview: </b>
                {overview}
              </Text>
            </MovieInfoWrap>
          </MovieDetailsWrapper>
          <MovieAddInfoWrap>
            <h3>Additional information:</h3>
            <AddInfoList>
              <li>
                <NavLinkStyled to="cast">Cast</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
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
