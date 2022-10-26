import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/Api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovie(movieId) {
      try {
        const data = await Api.getReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie(movieId);
  }, [movieId]);
  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.author}>
              <h2>Aouthor: {review.author}.</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
