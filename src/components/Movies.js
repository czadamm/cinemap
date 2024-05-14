import { useEffect, useState } from "react";
import classes from "./Movies.module.css";
import { fetchingMovies } from "../utils/fetching";
import Movie from "./MovieCard";

function Movies({ categories, lang, provider, region, cinema, horizontal }) {
  const [isFetching, setIsFetching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMovies() {
      setIsFetching(true);

      try {
        const fetchedResult = await fetchingMovies(
          categories,
          lang,
          provider,
          region,
          cinema
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
  }, [categories, cinema, lang, provider, region]);

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
      {isFetching && <p>Fetching...</p>}
      <ul className={customClass}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
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
