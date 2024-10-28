import { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation(); 
  const navigate = useNavigate(); 

 
  const backLinkHref = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { title, poster_path, overview, genres, vote_average } = movie;

  return (
    <div>
      <div className={styles.container}>
        <button
          onClick={() => navigate(backLinkHref)}
          className={styles.goBackBtn}
        >
          Go back
        </button>

        <div className={styles.movieDetails}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className={styles.poster}
          />
          <div className={styles.text}>
            <h1>{title}</h1>
            <p>User score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>

        <nav className={styles.additionalInfo}>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;


