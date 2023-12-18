import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { CastImg, CastItem, CastList, CastTitle } from './Cast.styled';

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
    <>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <CastImg
                  src={
                    profile_path
                      ? `http://image.tmdb.org/t/p/w200${profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
                  }
                  alt={name}
                  width="150"
                />
                <CastTitle>{name}</CastTitle>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>
          Sorry... We don't have any information about the cast of this movie
        </p>
      )}
    </>
  );
};

export default Cast;
