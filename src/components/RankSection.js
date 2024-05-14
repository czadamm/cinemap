import Movies from "./Movies";
import classes from "./RankSection.module.css";

function RankSection(props) {
  return (
    <section className={classes.section}>
      <h2>{props.title}</h2>
      <Movies
        categories={[]}
        lang={props.lang}
        provider={props.provider}
        region={props.region}
        cinema={props.cinema}
        horizontal
      />
    </section>
  );
}

export default RankSection;
