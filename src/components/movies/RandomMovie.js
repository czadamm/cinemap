import classes from './RandomMovie.module.css';
import { useEffect, useState } from 'react';
import { fetchingMovie, fetchingMovies } from '../../utils/fetching';
import Spinner from '../layout/Spinner';
import { useNavigate } from 'react-router';

function RandomMovie() {
  const [randomMovie, setRandomMovie] = useState(null);
  // const [didRandomize, setDidRandomize] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const randomizeMovie = async (page, index) => {
      try {
        const fetchedMovies = await fetchingMovies(
          [],
          'pl-PL',
          '',
          'pl',
          false,
          false,
          false,
          5500,
          page
        );

        const movies = fetchedMovies.results;
        const randomMovieId = movies[index].id;

        console.log('randomId: ', randomMovieId);

        const fetchedMovie = await fetchingMovie(randomMovieId);

        setRandomMovie(fetchedMovie);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch movies, please try again later',
        });
      }
    };

    // page from 1 to 10 (of all movies in the db sorted by rating)
    const page = Math.floor(Math.random() * 10 + 1);
    // index from 0 to 19 (each page has 20 movies)
    const index = Math.floor(Math.random() * 19);

    // random movie of 200 best movies
    randomizeMovie(page, index);
  }, []);

  const genres = [];
  randomMovie?.data.genres.map((genre) => genres.push(genre.name));

  return (
    <>
      <div className={classes.random_movie}>
        {!randomMovie && <Spinner />}
        {randomMovie && !error && (
          <>
            <img
              className={classes.background_image}
              src={`https://image.tmdb.org/t/p/original${randomMovie.data.backdrop_path}`}
              alt={randomMovie.data.title}
            />
            <h1>Movie of the moment</h1>
            <div className={classes.section_title}>
              <div className={classes.movie_title_container}>
                <h2>{randomMovie.data.title}</h2>
                <p className={classes.rating}>
                  <span className={`${classes.icon} fa-solid fa-star`}></span>
                  {randomMovie.data.vote_average > 0
                    ? randomMovie.data.vote_average.toFixed(1)
                    : 'NA'}
                </p>
                <div className={classes.buttons_container}>
                  <button
                    id="fav-btn"
                    className={`${classes.button} ${classes.fav}`}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button
                    id="more-btn"
                    onClick={() =>
                      navigate('/movie/' + randomMovie.data.id + '/details')
                    }
                    className={`${classes.button} ${classes.more}`}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <p>
                {randomMovie.data.release_date.slice(0, 4)} •{' '}
                {genres.join(', ')} • {randomMovie.certification}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RandomMovie;
