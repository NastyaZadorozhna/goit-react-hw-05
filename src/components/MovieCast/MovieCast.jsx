import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api'; 
import styles from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.error('Error fetching cast:', error));
  }, [movieId]);

  if (!cast.length) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castItem}>
          <img
            src={profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : 'https://via.placeholder.com/200x300'}
            alt={name}
            className={styles.castImage}
          />
          <p>{name} as {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
