import classes from "./MovieCard.module.css";

function Movie({ image, title, year, rate }) {
  return (
    <li className={classes.movie}>
      <img src={image} alt={title} />
      <div className={classes.favourite}>
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className={classes.rating}>{rate.toFixed(1)}</div>
      <div className={classes.movie_info}>
        <h3>{title}</h3>
        <p>{year.slice(0, 4)}</p>
      </div>
    </li>
  );
}

export default Movie;
