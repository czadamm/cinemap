import classes from "./MovieCard.module.css";

function Movie({ image, title, rate }) {
  return (
    <article className={classes.movie}>
      <img src={image} alt={title} />
      <div className={classes.favourite}>
        <i class="fa-regular fa-star"></i>
      </div>
      <div className={classes.rating}>{rate}</div>
    </article>
  );
}

export default Movie;
