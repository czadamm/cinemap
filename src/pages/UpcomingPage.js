import Title from "../components/layout/Title";
import Movies from "../components/movies/Movies";
import classes from "./UpcomingPage.module.css";

function UpcomingPage() {
  return (
    <div className={classes.content_wrapper}>
      <div className={classes.section_title}>
        <Title>Soon in theaters</Title>
      </div>
      <Movies upcoming={true} />
    </div>
  );
}

export default UpcomingPage;
