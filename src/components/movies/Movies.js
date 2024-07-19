import { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import { fetchingMovies } from "../../utils/fetching";
import Movie from "./MovieCard";
import Spinner from "../Spinner";

function Movies({
  activeCategories,
  lang,
  provider,
  region,
  cinema,
  min_votes,
  horizontal,
}) {
  const [isFetching, setIsFetching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMovies() {
      setIsFetching(true);

      try {
        const fetchedResult = await fetchingMovies(
          activeCategories,
          lang,
          provider,
          region,
          cinema,
          min_votes
        );
        const movies = fetchedResult.results;

        setMovies(movies);
        setIsFetching(false);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch movies, please try again later",
        });
        setIsFetching(false);
      }
    }

    fetchMovies();
  }, [activeCategories, cinema, lang, min_votes, provider, region]);

  if (error) {
    // return <Error title="An error occured!" message={error.message} />;
  }

  let customClass;

  if (horizontal) {
    customClass = classes.horizontal;
  } else {
    customClass = classes.standard;
  }

  return (
    <section className={classes.movies}>
      {isFetching && <Spinner />}
      {movies.length <= 0 && (
        <p className={classes.no_movies}>
          Sorry, we couldn't find movies with selected criteria.
        </p>
      )}
      <ul className={`${customClass} ${isFetching && classes.fetching}`}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date}
            rate={movie.vote_average}
            image={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          />
        ))}
      </ul>
    </section>
  );
}

export default Movies;
