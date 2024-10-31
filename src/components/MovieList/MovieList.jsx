import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title }) => (
        <li key={id} className={styles.movieItem}>
          <Link 
            to={`/movies/${id}`} 
            state={{ from: location }}
            className={styles.movieLink}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
  
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;