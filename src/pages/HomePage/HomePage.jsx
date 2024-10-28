import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../services/api";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending Movies</h1>
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
    </div>
  );
}

export default HomePage;
