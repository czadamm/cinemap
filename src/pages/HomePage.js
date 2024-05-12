import classes from "./HomePage.module.css";
import RankSection from "../components/RankSection";

function HomePage() {
  return (
    <main>
      <section className={classes.random_movie}>
        <h1>Movie of the day</h1>
      </section>
      <RankSection title="Popular in cinemas" rank="cinema" />
      <RankSection title="Best on Netflix" rank="netflix" />
      <RankSection title="Best on Disney+" rank="disney" />
    </main>
  );
}

export default HomePage;
