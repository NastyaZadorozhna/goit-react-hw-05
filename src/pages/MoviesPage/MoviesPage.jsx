import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "../../services/api"; 
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then(setMovies)
        .catch((error) => console.error("Error fetching movies:", error));
    }
  }, [query]);

  const handleSearchSubmit = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />

      {movies.length > 0 ? (
        <ul className={styles.movieList}>
          {movies.map(({ id, title }) => (
            <li key={id} className={styles.movieItem}>
              <Link to={`/movies/${id}`} className={styles.movieLink}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        query && <p>No results found for {query}.</p>
      )}
    </div>
  );
}

export default MoviesPage;
