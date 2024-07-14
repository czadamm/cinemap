import classes from "./MovieCard.module.css";

function Movie({ image, title, rate }) {
  return (
    <li className={classes.movie}>
      <img src={image} alt={title} />
      <div className={classes.favourite}>
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className={classes.rating}>{rate.toFixed(1)}</div>
    </li>
  );
}

export default Movie;
