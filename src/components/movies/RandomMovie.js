import classes from './RandomMovie.module.css';
import { useEffect, useState } from 'react';
import { fetchingMovie, fetchingMovies } from '../../utils/fetching';
import Spinner from '../layout/Spinner';
import { useNavigate } from 'react-router';
import { usePreferences } from "../../context/PreferencesContext";
import {useTranslation} from "react-i18next";

function RandomMovie() {
  const [randomMovie, setRandomMovie] = useState(null);
  // const [didRandomize, setDidRandomize] = useState(false);
  const [error, setError] = useState();
  const { preferences } = usePreferences();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const randomizeMovie = async (page, index) => {
      try {
        const fetchedMovies = await fetchingMovies(
          [],
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          5500,
          page
        );

        const movies = fetchedMovies.results;
        const randomMovieId = movies[index].id;

        console.log('randomId: ', randomMovieId);
        console.log(preferences)

        const fetchedMovie = await fetchingMovie(
          randomMovieId,
          preferences.language,
          preferences.locale,
          preferences.country
        );

        setRandomMovie(fetchedMovie);

        const randomizeDate = new Date().toDateString();
        localStorage.setItem("lastCheckedAt", randomizeDate)
        localStorage.setItem("randomMovieId", randomMovieId);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch movies, please try again later',
        });
      }
    };

    const lastRandomizeDate = localStorage.getItem("lastCheckedAt");
    const today = new Date().toDateString();

    if (lastRandomizeDate !== today) {
      // page from 1 to 10 (of all movies in the db sorted by rating)
      const page = Math.floor(Math.random() * 10 + 1);
      // index from 0 to 19 (each page has 20 movies)
      const index = Math.floor(Math.random() * 19);

      // random movie of 200 best movies
      randomizeMovie(page, index);
    } else {
      const movieId = localStorage.getItem("randomMovieId");
      fetchingMovie(
        movieId,
        preferences.language,
        preferences.locale,
        preferences.country
      )
        .then((movie) => setRandomMovie(movie))
        .catch((error) => console.log(error));
    }
  }, [t, preferences]);

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
            <h1>{t('heroTitle')}</h1>
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
