import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../../services/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviewsList = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReview(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getReviewsList();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content, created_at }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>Review: {content}</p>
              <p>Date: {created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
