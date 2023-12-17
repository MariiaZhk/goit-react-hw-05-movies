import { Link } from 'react-router-dom';
import {
  MovieItemStyled,
  MoviePosterStyled,
  MovieTitle,
  MoviesListStyled,
} from './MoviesList.styled';

export const MoviesList = ({ films }) => {
  return (
    <MoviesListStyled>
      {films.map(({ id, title, original_title, poster_path }) => {
        return (
          <MovieItemStyled>
            <Link to={`/movies/${id}`} key={id}>
              <MoviePosterStyled
                src={
                  poster_path
                    ? `http://image.tmdb.org/t/p/w200${poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
                }
                alt={title}
                // width="300"
              />
              <MovieTitle>{original_title}</MovieTitle>
            </Link>
          </MovieItemStyled>
        );
      })}
    </MoviesListStyled>
  );
};
