import classes from "./HomePage.module.css";
import RankSection from "../components/RankSection";

function HomePage() {
  return (
    <main>
      <section className={classes.random_movie}>
        <div className={classes.section_title}>
          <h1>Movie of the day</h1>
          <h2>Title</h2>
          <p>2020 • Sci-Fi | Action • PG-18</p>
          <p>NETFLIX Disney+</p>
        </div>
      </section>
      <RankSection title="Popular in cinemas" rank="cinema" />
      <RankSection title="Best on Netflix" rank="netflix" />
      <RankSection title="Best on Disney+" rank="disney" />
    </main>
  );
}

export default HomePage;
