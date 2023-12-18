import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import {
  ReviewItem,
  ReviewTitle,
  ReviewWrapper,
  ReviewsList,
} from './Reviews.styled';

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
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ReviewWrapper>
          <ReviewsList>
            {reviews.map(({ id, author, content, created_at }) => {
              return (
                <ReviewItem key={id}>
                  <ReviewTitle>
                    <b>Author: </b>
                    {author}
                  </ReviewTitle>
                  <p>
                    <b>Review: </b>
                    {content}
                  </p>
                </ReviewItem>
              );
            })}
          </ReviewsList>
        </ReviewWrapper>
      ) : (
        <p>We don't have any reviews for this movie...</p>
      )}
    </>
  );
};

export default Reviews;
