import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import styles from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(setReviews)
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!reviews.length) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={styles.reviewList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
