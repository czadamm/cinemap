import { Link } from "react-router-dom";
import classes from "./MovieCard.module.css";

function Movie({ id, image, title, year, rate }) {
  return (
    <li className={classes.movie_card}>
      <Link to={"/movie/" + id + "/details"} className={classes.movie}>
        <img src={image} alt={title} />
        <div className={classes.movie_info}>
          <h3>{title}</h3>
          <p>{year.slice(0, 4)}</p>
        </div>
      </Link>
      <div className={classes.card_top}>
        <div className={classes.rating}>{rate.toFixed(1)}</div>
        <button id="fav-btn" className={classes.favourite}>
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </li>
  );
}

export default Movie;
