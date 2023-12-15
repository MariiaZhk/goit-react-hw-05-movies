import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCastList = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCastList();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w200${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
                }
                alt={name}
                width="150"
              />
              <div>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
