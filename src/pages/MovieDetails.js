import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchingMovie } from "../utils/fetching";
import Spinner from "../components/Spinner";

import classes from "./MovieDetails.module.css";

function MovieDetails() {
  const params = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMovie() {
      setIsFetching(true);

      try {
        const fetchedResult = await fetchingMovie(params.id, "pl-PL");
        const movie = fetchedResult;

        setMovie(movie);
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

  return (
    <>
      <article className={classes.movie_details}>
        {isFetching && <Spinner />}
        <img
          className={classes.background}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className={classes.left_info}>
          <img
            className={classes.movie_image}
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={classes.right_info}></div>
      </article>
    </>
  );
}

export default MovieDetails;
