import classes from "./RandomMovie.module.css";
import netflix from "../assets/netflix.svg";
import disney from "../assets/disney.svg";

function RandomMovie() {
  return (
    <div className={classes.random_movie}>
      <img
        className={classes.background_image}
        src="https://image.tmdb.org/t/p/original/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
        alt=""
      />
      <h1>Movie of the day</h1>
      <div className={classes.section_title}>
        <h2>Title</h2>
        <p>2020 • Sci-Fi | Action • PG-13</p>
        <p className={classes.streamings}>
          <span>
            <img src={netflix} alt="" />
          </span>
          <span>
            <img src={disney} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default RandomMovie;
