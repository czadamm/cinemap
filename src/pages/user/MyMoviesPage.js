import BgWrapper from "../../components/layout/BgWrapper";
import Title from "../../components/layout/Title";
import classes from "./MyMoviesPage.module.css";

const MyMoviesPage = () => {
  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>My favourite movies</Title>
        </div>
        <div className={classes.list_of_movies}>
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default MyMoviesPage;
