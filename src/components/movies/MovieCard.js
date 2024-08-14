import { Link } from "react-router-dom";
import classes from "./MovieCard.module.css";

function Movie({ id, image, title, year, rate, upcoming }) {
  return (
    <li className={classes.movie_card}>
      <Link to={"/movie/" + id + "/details"} className={classes.movie}>
        <img src={image} alt={title} />
        <div className={classes.movie_info}>
          {!upcoming && (
            <p className={classes.rating}>
              <span className={`${classes.icon} fa-solid fa-star`}></span>
              {rate > 0 ? rate.toFixed(1) : "No votes yet"}
            </p>
          )}
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </Link>
      {!upcoming && (
        <div className={classes.card_top}>
          <button id="fav-btn" className={classes.favourite}>
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      )}
    </li>
  );
}

export default Movie;
