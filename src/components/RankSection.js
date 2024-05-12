import Movie from "./MovieCard";
import classes from "./RankSection.module.css";

function RankSection(props) {
  return (
    <section className={classes.section}>
      <h2>{props.title}</h2>
      <ul>
        <li>
          <Movie id="1" image="img" title="film" rate="9.5" />
        </li>
        <li>
          <Movie id="2" image="img" title="film" rate="9.5" />
        </li>
        <li>
          <Movie id="3" image="img" title="film" rate="9.5" />
        </li>
        <li>
          <Movie id="4" image="img" title="film" rate="9.5" />
        </li>
        <li>
          <Movie id="5" image="img" title="film" rate="9.5" />
        </li>
        <li>
          <Movie id="6" image="img" title="film" rate="9.5" />
        </li>
      </ul>
    </section>
  );
}

export default RankSection;
