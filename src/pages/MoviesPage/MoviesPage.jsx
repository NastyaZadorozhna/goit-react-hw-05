import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api"; 
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';

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
      <MovieList movies={movies}/>

    </div>
  );
}
 
export default MoviesPage;