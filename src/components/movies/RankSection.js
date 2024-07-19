import Movies from "./Movies";
import classes from "./RankSection.module.css";

function RankSection(props) {
  return (
    <section className={classes.section}>
      <h2>{props.title}</h2>
      <div className={classes.rank}>
        <Movies
          categories={props.categories}
          lang={props.lang}
          provider={props.provider}
          region={props.region}
          cinema={props.cinema}
          min_votes={props.min_votes}
          horizontal
        />
      </div>
    </section>
  );
}

export default RankSection;
