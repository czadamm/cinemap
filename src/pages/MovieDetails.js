import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchingMovie } from "../utils/fetching";
import Spinner from "../components/layout/Spinner";
import defaultImage from "../assets/person-default.png";

import classes from "./MovieDetails.module.css";
import CreditsCard from "../components/movies/CreditsCard";
import BgWrapper from "../components/layout/BgWrapper";

function MovieDetails() {
  const params = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMovie() {
      setIsFetching(true);

      try {
        const fetchedMovie = await fetchingMovie(params.id);

        setMovie(fetchedMovie);
        setIsFetching(false);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch movies, please try again later",
        });
        setIsFetching(false);
      }
    }

    fetchMovie();
  }, [params.id]);

  if (error) {
    // return <Error title="An error occured!" message={error.message} />;
  }

  const genres = [];
  movie?.data.genres.map((genre) => genres.push(genre.name));

  return (
    <>
      {isFetching && (
        <>
          <BgWrapper />
          <Spinner />
        </>
      )}
      {movie && (
        <article className={classes.movie_details}>
          <div className={classes.backdrop}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.data.backdrop_path}`}
              alt=""
            />
          </div>
          <div className={classes.container}>
            <div className={classes.left_info}>
              <div className={classes.poster}>
                <img
                  className={classes.movie_image}
                  src={`https://image.tmdb.org/t/p/original${movie.data.poster_path}`}
                  alt={movie.data.title}
                />
              </div>
              <div className={classes.info_row}>
                <h3>Release date</h3>
                <p>{movie.data.release_date}</p>
              </div>
              <div className={classes.info_row}>
                <h3>Budget</h3>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(movie.data.budget)}
                </p>
              </div>
              <div className={classes.info_row}>
                <h3>Revenue</h3>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(movie.data.revenue)}
                </p>
              </div>
              <div className={classes.info_row}>
                <h3>Production</h3>
                <ul>
                  {movie.data.production_countries.map((country) => (
                    <li key={country.name}>{country.name}</li>
                  ))}
                </ul>
              </div>
              <div className={classes.info_row}>
                <h3>Studios</h3>
                <ul>
                  {movie.data.production_companies.map((country) => (
                    <li key={country.name}>{country.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.right_info}>
              <div className={classes.top_info_row}>
                <div className={classes.title}>
                  {/* ====== MOVIE TITLE IMAGE ====== */}
                  {/* {movie.images.logos.length ? (
                    <div className={classes.title_image}>
                      <img
                        src={`https:/image.tmdb.org/t/p/original${movie.images.logos[0].file_path}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    <h2 className={classes.movie_title}>
                      {movie.data.title}
                      <span>({movie.data.release_date.slice(0, 4)})</span>
                    </h2>
                  )} */}
                  <h2 className={classes.movie_title}>
                    {movie.data.title}
                    <span>({movie.data.release_date.slice(0, 4)})</span>
                  </h2>
                  <div className={classes.movie_rating_row}>
                    <p className={classes.rating}>
                      <span
                        className={`${classes.icon} fa-solid fa-star`}
                      ></span>
                      {movie.data.vote_average > 0
                        ? movie.data.vote_average.toFixed(1)
                        : "NA"}
                    </p>
                    <p className={classes.genres}>{genres.join(", ")}</p>
                    <span>&#8226;</span>
                    <p className={classes.time}>{`${Math.floor(
                      movie.data.runtime / 60
                    )}h ${movie.data.runtime % 60}m`}</p>
                    <span>&#8226;</span>
                    <p className={classes.certification}>
                      {movie.certification}
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.info_row}>
                <h3>Overview</h3>
                <p>{movie.data.overview}</p>
              </div>
              <div className={classes.info_row}>
                <h3>Cast</h3>
                <ul className={classes.credits_list}>
                  {movie.credits.cast.map((person) => (
                    <CreditsCard
                      key={person.cast_id}
                      image={
                        !person.profile_path
                          ? defaultImage
                          : `https://media.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`
                      }
                      name={person.name}
                      character={person.character}
                    />
                  ))}
                </ul>
              </div>
              <div className={classes.info_row}>
                <h3>Crew</h3>
                <ul className={classes.credits_list}>
                  {movie.credits.crew.map((person) => (
                    <CreditsCard
                      key={person.credit_id}
                      image={
                        !person.profile_path
                          ? defaultImage
                          : `https://media.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`
                      }
                      name={person.name}
                      position={person.job}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default MovieDetails;
