import { Link } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, original_title, poster_path }) => {
        return (
          <Link to={`/movies/${id}`} key={id}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w200${poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
              }
              alt={title}
            />
            <h3>{original_title}</h3>
          </Link>
        );
      })}
    </ul>
  );
};
