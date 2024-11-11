import { useEffect, useState } from 'react';
import classes from './Movies.module.css';
import { fetchingByTitle, fetchingMovies } from '../../utils/fetching';
import Movie from './MovieCard';
import Spinner from '../layout/Spinner';

function Movies({
  titleQuery,
  activeCategories,
  lang,
  provider,
  region,
  cinema,
  upcoming,
  adult,
  min_votes,
  horizontal,
  page,
}) {
  const [isFetching, setIsFetching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMovies(page) {
      setError('');
      setIsFetching(true);

      let fetchedResult = null;

      if (titleQuery) {
        try {
          fetchedResult = await fetchingByTitle(titleQuery);
          const movies = fetchedResult.results;

          setMovies(movies);
          setIsFetching(false);
        } catch (error) {
          setError({
            message:
              error.message || 'Could not fetch movies, please try again later',
          });
          setIsFetching(false);
        }
      } else {
        try {
          fetchedResult = await fetchingMovies(
            activeCategories,
            lang,
            provider,
            region,
            cinema,
            upcoming,
            adult,
            min_votes,
            page
          );
          const fetchedMovies = fetchedResult.results;

          if (page > 1) {
            const currentMovies = [...movies];
            const updatedMovies = [...currentMovies, ...fetchedMovies];
            setMovies(updatedMovies);
          } else {
            setMovies(fetchedMovies);
          }
          setIsFetching(false);
        } catch (error) {
          setError({
            message:
              error.message || 'Could not fetch movies, please try again later',
          });
          setIsFetching(false);
        }
      }
    }

    fetchMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activeCategories,
    adult,
    cinema,
    lang,
    min_votes,
    page,
    provider,
    region,
    titleQuery,
    upcoming,
  ]);

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
      <ul className={`${customClass} ${isFetching && classes.fetching}`}>
        {movies.map((movie) => (
          <Movie
            upcoming={upcoming}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={
              movie.release_date
                ? upcoming
                  ? movie.release_date
                  : movie.release_date.slice(0, 4)
                : ''
            }
            rate={movie.vote_average}
            image={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          />
        ))}
      </ul>
      {!isFetching && movies.length <= 0 && (
        <p className={classes.no_movies}>
          Sorry, we couldn't find movies with selected criteria.
        </p>
      )}
      {error && <p className={classes.error}>{error?.message}</p>}
    </section>
  );
}

export default Movies;
